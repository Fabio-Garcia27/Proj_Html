import axios from 'axios'
import { useEffect, useState } from 'react'

import './App.css'

// Local do servidor
const api = axios.create({
  baseURL: 'http://localhost:3001'
})

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    api.get('/usuarios')
      .then((response) => {
        setUsers(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

return (
  <div>
    <h1>Usuários</h1>
    <ul>
      {users.map((user, index) => (
        <li key={index}>Nome: {user.name} - Idade: {user.age}</li>
      ))}
    </ul>
  </div>
)
}

export default App
