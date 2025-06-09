import './style.css'
import Trash from '../../assets/trash.svg'

function Home() {

  const users = [{
    id: '2342asdasds',
    name: 'Rodolfo',
    age: 33,
    email: 'rod@email.com',
    ender: 'rua a',
    num: 40,
    cid: 'Umuarama',
    est: 'PR',
    cel: '44 99722-0216'
  },
  {
    id: '2342as456456ds',
    name: 'Aline',
    age: 28,
    email: 'aline@email.com',
    ender: 'rua b',
    num: 41,
    cid: 'Umuarama',
    est: 'PR',
    cel: '44 99722-0216'
  }
  ]

  return (
    <div className='container'>
      <form>
        <h1>Cadastro de Usuário</h1>
        <input type="text" name='nome' placeholder="Nome" />
        <input type="number" name='idade' placeholder="Idade" />
        <input type="email" name='email' placeholder="Email" />
        <input type="text" name='endereço' placeholder="Endereço" />
        <input type="number" name='número' placeholder="Número" />
        <input type="text" name='cidade' placeholder="Cidade" />
        <input type="text" name='estado' placeholder="Estado" />
        <input type="tel" name='celular' placeholder="Celular (99) 99999-9999" />
        <button type="button">Cadastrar</button>
      </form>
      {users.map(user => (
        <div key={user.id} className='card'>
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
          <button>
            <img src={Trash}/>
          </button>
        </div>

      ))}
    </div>
  )
}

export default Home
