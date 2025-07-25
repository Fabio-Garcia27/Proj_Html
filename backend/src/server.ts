import Fastify from "fastify";
import { routes } from "./router"
import cors from '@fastify/cors'

const app = Fastify({ logger: true })

// Registre os plugins necessários, como CORS
app.register(cors, { 
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'] 
})

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message })    
})

const star = async () => {
    await app.register(routes);
    
    try{
        await app.listen({ port:3333 })
    }catch(err){
     process.exit(1)   
    }
}

star();
