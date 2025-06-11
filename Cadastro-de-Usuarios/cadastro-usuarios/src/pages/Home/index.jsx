import { useEffect, useState, useRef } from 'react'
import './style.css'
import Trash from '../../assets/trash.svg'
import api from '../../services/api'

function Home() {
  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()
  const inputEnder = useRef()
  const inputNum = useRef() 
  const inputCid = useRef() 
  const inputEst = useRef()
  const inputCel = useRef() 

  async function getUsers() {
    const usersFromApi = await api.get('/usuarios')
    setUsers(usersFromApi.data)
  }

  // Criar Usuários
  async function createUsers() {
      await api.post('/usuarios',{
      email: inputEmail.current.value,        
      name: inputName.current.value,
      age: inputAge.current.value,
      ender: inputEnder.current.value,
      num: inputNum.current.value,
      cid: inputCid.current.value,
      est: inputEst.current.value,
      cel: inputCel.current.value
    })
    getUsers()
    // Limpar formulário
    inputEmail.current.value = '';
    inputName.current.value = '';
    inputAge.current.value = '';
    inputEnder.current.value = '';
    inputNum.current.value = '';
    inputCid.current.value = '';
    inputEst.current.value = '';
    inputCel.current.value = '';
  }

  // Deletar Usuários
  async function deleteUsers(id) {  
    await api.delete(`/usuarios/${id}`) 
    alert('Usuário deletado com sucesso!')
    getUsers()
  }

  useEffect(() => {
    getUsers()
  }, [])


  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuário</h1>
	      <input type="text" name="nome" placeholder="Nome" ref={inputName} required/>
        <input type="number" name="idade" placeholder="Idade" ref={inputAge} required/>
        <input type="email" name="email" placeholder="Email" ref={inputEmail} required/>
        <input type="text" name='endereço' placeholder="Endereço" ref={inputEnder} required/>
        <input type="number" name='número' placeholder="Número" ref={inputNum} required/>
        <input type="text" name='cidade' placeholder="Cidade" ref={inputCid} required/>
        <input type="text" name='estado' placeholder="Estado" ref={inputEst} required/>
        <input type="tel" name='celular' placeholder="Celular (99) 99999-9999" ref={inputCel} required/>
        <button type="button" onClick={createUsers} className="submit-button">Cadastrar</button>
      </form>
      {users.map((user => (  
        <div key={user.id} className="card">
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>E-mail: <span>{user.email}</span></p>
            <p>Endereço: <span>{user.ender}</span></p>
            <p>Número: <span>{user.num}</span></p>
            <p>Cidade: <span>{user.cid}</span></p>
            <p>Estado: <span>{user.est}</span></p>
            <p>Celular: <span>{user.cel}</span></p>
          </div>
          <button onClick={() => deleteUsers(user.id)}>
            <img src={Trash} />
          </button>
        </div>
      )))}
    </div>
  )
}

export default Home
