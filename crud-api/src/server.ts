import Fastify from 'fastify'
import { contactsRoutes } from "./routes/contact.routes.js";
import {userRoutes} from './routes/user.routes.js';

const app = Fastify();

app.register(userRoutes, {
    prefix: '/users',    
})

app.register(contactsRoutes, {
    prefix: '/contacts',    
})

app.listen({ port: 3100 }, () => {
    console.log('Server is running on port 3100')
})