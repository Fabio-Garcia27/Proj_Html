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
import cors from 'cors'
const app = express()

const port = 3000;

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

app.use(express.json())

app.use(express.urlencoded({ extended: true }));

app.use(cors())

const cadastro  = []

// Fábio 06/06/25 Criar Cadastro
app.post('/cadastro', async (req, res) => {
    await prisma.cad.create({
        data:{
            email: req.body.email,
            name: req.body.name,
            age: req.body.age,
            ender: req.body.ender,
            num: req.body.num,
            cid: req.body.cid,
            est: req.body.est,
            cel:req.body.cel 
        }
    })
    cadastro.push(req.body) 
    //console.log(req.body)    
    res.status(201).json(req.body)
})

//request, responde = req, res
// Listar cadastro
app.get('/cadastro', async (req, res) => {
    let cadastro = []

    if (req.query){
        cadastro = await prisma.cad.findMany({
            where: {
                email: req.query.email,
                name: req.query.name, 
                age: req.query.age, 
                ender: req.query.ender,
                num: req.query.num,
                cid: req.query.cid,
                est: req.query.est,
                cel:req.query.cel 
            }
        })

    }else{
        const cadastro = await prisma.cad.findMany()
    }
    res.status(200).json(cadastro)
})

//Editar cadastro
app.put('/cadastro/:id', async (req, res) => {
    //console.log(req)
    await prisma.cad.update({
        where:{
            id: req.params.id
        },
        data:{
            email: req.body.email,
            name: req.body.name,
            age: req.body.age,
            ender: req.body.ender,
            num: req.body.num,
            cid: req.body.cid,
            est: req.body.est,
            cel:req.body.cel 
        }
    })
    res.status(201).json(req.body)
})  

//deletar cadastro
app.delete('/cadastro/:id', async (req, res) => {
    //console.log(req)
    await prisma.cad.delete({
        where:{
            id: req.params.id
        }
    })
    res.status(200).json({Mensagem: "Usuário deletado com sucesso!"})
})   

app.listen(3000)

