import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from '../services/CreateCustomerService'

class CreateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const {name, email, status, age, ender, num, cid, est, cel} = request.body as
          {name: string, email: string, status: boolean, age: number, ender: string, num: number, 
           cid: string, est: string, cel: string};
    
    const customerService = new CreateCustomerService()
    const customer = await customerService.execute({name, email, status, age, ender, num, cid, est, cel}); 

    reply.send(customer)
  }   
}

export { CreateCustomerController }
