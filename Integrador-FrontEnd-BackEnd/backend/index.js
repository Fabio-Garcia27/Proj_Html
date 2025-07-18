const express = require("express")

const app = express()

app.use(express.json())

const users = [
    {
       name: 'Fábio Garcia',
       age: 53,
    }
]

app.get('/usuarios', function (request, response) {
    response.json(users)
})

app.post('/usuarios', function (request, response) {
    console.log(request.body)

    const newUser = request.body

    users.push(newUser)

    response.status(201).json(newUser)
})


app.listen(3001, () => console.log("Servidor rodando"))
