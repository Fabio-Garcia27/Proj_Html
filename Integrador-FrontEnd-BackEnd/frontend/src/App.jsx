import React, { useEffect, useState } from 'react';
// Importação do Axios para requisições HTTP
import axios from 'axios';

// Componente principal da aplicação
function App() {
  // Estado para armazenar a lista de usuários
  const [users, setUsers] = useState([]);
  // Estados para os campos de entrada de novo usuário
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  // Estado para controlar o carregamento da API
  const [loading, setLoading] = useState(true);
  // Estado para mensagens de erro ou sucesso
  const [message, setMessage] = useState('');

  // Configuração da instância Axios para o backend real
  // Mantenha esta linha comentada se estiver usando o mock API
  // const api = axios.create({
  //   baseURL: 'http://localhost:3001'
  // });

  // --- Mock API para demonstração (substitua pelo seu backend real) ---
  // Este mock simula as respostas do seu backend para fins de teste do frontend.
  // Em um ambiente de produção, você usaria a instância 'api' comentada acima.
  const mockUsers = [
    { _id: 'mock-1', name: 'Alice', age: 28 },
    { _id: 'mock-2', name: 'Bob', age: 35 },
    { _id: 'mock-3', name: 'Charlie', age: 22 },
  ];
  let currentMockUsers = [...mockUsers]; // Cópia mutável para simular operações

  const mockApi = {
    get: (url) => {
      return new Promise(resolve => {
        setTimeout(() => {
          if (url === '/usuarios') {
            resolve({ data: currentMockUsers });
          } else {
            resolve({ data: [] }); // Retorna vazio para outras URLs
          }
        }, 500); // Simula um atraso de rede
      });
    },
    post: (url, data) => {
      return new Promise(resolve => {
        setTimeout(() => {
          if (url === '/usuarios') {
            const newId = `mock-${Date.now()}`; // Gera um ID único para o mock
            const newUser = { _id: newId, ...data };
            currentMockUsers.push(newUser);
            resolve({ data: newUser, status: 201 }); // Simula sucesso na criação
          } else {
            resolve({ data: null, status: 400 }); // Erro para outras URLs
          }
        }, 500);
      });
    },
    delete: (url) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const parts = url.split('/');
          const idToDelete = parts[parts.length - 1]; // Pega o ID da URL

          const initialLength = currentMockUsers.length;
          currentMockUsers = currentMockUsers.filter(user => user._id !== idToDelete);

          if (currentMockUsers.length < initialLength) {
            resolve({ status: 204 }); // Simula sucesso na exclusão (No Content)
          } else {
            // Simula um erro 404 se o usuário não for encontrado no mock
            reject({ response: { status: 404, data: { message: 'Usuário mock não encontrado' } } });
          }
        }, 500);
      });
    }
  };
  // --- Fim do Mock API ---


  // useEffect - Chama a função só quando o componente for montado
  useEffect(() => {
    setLoading(true);
    // Use 'api' para o backend real, ou 'mockApi' para o mock
    mockApi.get('/usuarios')
      .then((response) => {
        console.log('Dados recebidos:', response.data);
        setUsers(response.data);
        setMessage('');
      })
      .catch(error => {
        console.error('Erro ao carregar usuários:', error);
        setMessage('Erro ao carregar usuários. Verifique o console do servidor.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []); // Array de dependências vazio para rodar apenas uma vez

  // Função para adicionar um novo usuário
  function newUser() {
    if (!name || !age) {
      setMessage('Nome e idade são obrigatórios.');
      return;
    }
    // Use 'api' para o backend real, ou 'mockApi' para o mock
    mockApi.post('/usuarios', { name, age: Number(age) }) // Converte idade para número
      .then((response) => {
        setUsers([...users, response.data]); // Adiciona o novo usuário à lista
        setName(''); // Limpa o campo de nome
        setAge(''); // Limpa o campo de idade
        setMessage('Usuário adicionado com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao adicionar usuário:', error);
        setMessage('Erro ao adicionar usuário. Verifique o console do servidor.');
      });
  }

  // Função para deletar um usuário
  const handleDelete = async (userId) => {
    if (!userId) {
      console.error('ID do usuário não definido.');
      setMessage('Erro: ID do usuário não definido para exclusão.');
      return;
    }
    try {
      // Use 'api' para o backend real, ou 'mockApi' para o mock
      await mockApi.delete(`http://localhost:3001/usuarios/${userId}`);
      console.log(`Usuário ${userId} deletado com sucesso!`);
      // Atualiza a UI removendo o usuário deletado da lista
      setUsers(users.filter(user => user._id !== userId));
      setMessage(`Usuário ${userId} deletado com sucesso!`);
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
      // Exibe uma mensagem de erro mais amigável
      const errorMessage = error.response?.data?.message || 'Erro desconhecido ao deletar usuário.';
      setMessage(`Erro ao deletar usuário: ${errorMessage}`);
    }
  };

  // Renderização do componente
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 font-sans">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Gerenciamento de Usuários</h1>

        {/* Exibe mensagens de status */}
        {message && (
          <div className={`p-3 mb-4 rounded-md text-sm ${message.includes('Erro') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
            {message}
          </div>
        )}

        {/* Seção de lista de usuários */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Lista de Usuários</h2>
        {loading ? (
          <p className="text-gray-600 text-center">Carregando usuários...</p>
        ) : users.length === 0 ? (
          <p className="text-gray-600 text-center">Nenhum usuário cadastrado.</p>
        ) : (
          <ul className="space-y-3">
            {users.map((user) => (
              // Usando user._id como chave única, conforme discutido
              <li key={user._id} className="flex items-center justify-between p-3 bg-gray-50 rounded-md shadow-sm">
                <span className="text-gray-800">
                  Nome: <span className="font-medium">{user.name}</span> - Idade: <span className="font-medium">{user.age}</span>
                </span>
                <button
                  onClick={() => handleDelete(user._id)} // Passando user._id para a função de exclusão
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                >
                  Deletar
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Seção para adicionar novo usuário */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">Adicionar Novo Usuário</h2>
        <div className="flex flex-col space-y-3">
          <input
            placeholder="Nome"
            value={name}
            onChange={event => setName(event.target.value)}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            placeholder="Idade"
            type="number" // Garante que a entrada seja numérica
            value={age}
            onChange={event => setAge(event.target.value)}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={newUser}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Adicionar Usuário
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
