import { useEffect, useState, useRef } from 'react'
import './style.css'
import Trash from '../../assets/trash.svg'
import api from '../../services/api'

function Home() {

  //const users = []
  //const cadastro = []

  //const [users, setUsers] = useState([])
  const [cadastro, setCadastro] = useState([])

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()
  const inputEnder = useRef()
  const inputNum = useRef() 
  const inputCid = useRef() 
  const inputEst = useRef()
  const inputCel = useRef() 

  async function getCadastro() {
    const cadastroFromApi = await api.get('/cadastro')
    setCadastro(cadastroFromApi.data)
  }

  // Criar Usuários
  async function createCadastro() {
      await api.post('/cadastro',{
      email: inputEmail.current.value,        
      name: inputName.current.value,
      age: inputAge.current.value,
      ender: inputEnder.current.value,
      num: inputNum.current.value,
      cid: inputCid.current.value,
      est: inputEst.current.value,
      cel: inputCel.current.value
    })

    getCadastro()
  }

  useEffect(() => {
    getCadastro()
  }, [])


  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuário</h1>
	      <input type="text" name="nome" placeholder="Nome" ref={inputName}/>
        <input type="number" name="idade" placeholder="Idade" ref={inputAge}/>
        <input type="email" name="email" placeholder="Email" ref={inputEmail}/>
        <input type="text" name='endereço' placeholder="Endereço" ref={inputEnder}/>
        <input type="number" name='número' placeholder="Número" ref={inputNum}/>
        <input type="text" name='cidade' placeholder="Cidade" ref={inputCid}/>
        <input type="text" name='estado' placeholder="Estado" ref={inputEst}/>
        <input type="tel" name='celular' placeholder="Celular (99) 99999-9999" ref={inputCel}/>
        <button type="button" onClick={createCadastro}>Cadastrar</button>
      </form>
      {cadastro.map((cad => (  
        <div key={cad.id} className="card">
          <div>
            <p>Nome: <span>{cad.name}</span></p>
            <p>Idade: <span>{cad.age}</span></p>
            <p>E-mail: <span>{cad.email}</span></p>
            <p>Endereço: <span>{cad.ender}</span></p>
            <p>Número: <span>{cad.num}</span></p>
            <p>Cidade: <span>{cad.cid}</span></p>
            <p>Estado: <span>{cad.est}</span></p>
            <p>Celular: <span>{cad.cel}</span></p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>
      )))}
    </div>
  )
}

export default Home
