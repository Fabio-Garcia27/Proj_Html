const express = require("express")
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const users = [
    {
       name: 'Fábio Garcia',
       age: 53,
    }
]

app.get('/usuarios', async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users); 
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.post('/usuarios', function (request, response) {
  const { name, age } = request.body;
  if (!name || !age) {
    response.status(400).json({ error: 'Nome e idade são obrigatórios' });
    return;
  }
  const newUser = { id: users.length + 1, name, age };
  users.push(newUser);
  response.status(201).json(newUser);
})

app.delete('/usuarios/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    let idToDelete;
    idToDelete = parseInt(userId);

    const result = await User.findByIdAndDelete(idToDelete); 
    if (!result || result.deletedCount === 0) { 
        return res.status(404).json({ message: 'User not found' });
    }
    res.status(204).send(); 
  } catch (error) {
    console.error('Erro no deletar /usuarios/:id:',error);

    if (err.name === 'CastError') {
        return res.status(400).json({ message: 'Inválido Usuário do ID formato' });
    }
    res.status(500).json({ message: 'Server Error' });
  }
});


app.listen(3001, () => console.log("Servidor rodando"))
