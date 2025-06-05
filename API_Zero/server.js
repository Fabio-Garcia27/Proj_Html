// Fábio 05/06/25 - Criando API
/*
get listar
post criar
put editar vários
patch editar um
delete deletar

1 - Tipo de Rota / Método HTTP
2 - Endereço

Criar nossa API de Usuários
1 - Criar usuário
2 - Listar todos os usuários
3 - Editar um usuário
4 - Deletar um usuário

app.get('/usuarios')
app.post('/usuarios')
app.put('/usuarios')
app.patch('/usuarios')
app.delete('/usuarios')

HTTP Status
2xx Sucesso
4xx Erro Cliente
5xx Erro Servidor

MongoDB

User:- fabio
Senha:- Wizz4gPc8AFoqOmx
*/

import express from 'express'
const app = express()

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

app.use(express.json())

const users = []

app.post('/usuarios', async (req, res) => {

    await prisma.user.create({
        data:{
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    users.push(req.body) 
    //console.log(req.body)    
    res.status(201).json(req.body)
})

//request, responde = req, res
app.get('/usuarios', (req, res) => {
    res.status(200).json(users)
    //res.send('Ok, deu bom')
})

app.listen(3000)

