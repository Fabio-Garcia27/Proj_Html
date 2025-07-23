import Fastify from "fastify";
import { routes } from "./router"
import cors from '@fastify/cors'

const app = Fastify({ logger: true })

const star = async () => {
    
    await app.register(cors);
    await app.register(routes);
    
    try{
        await app.listen({ port:3333 })
    }catch(err){
     process.exit(1)   
    }
}

star();
