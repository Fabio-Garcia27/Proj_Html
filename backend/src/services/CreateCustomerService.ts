import prismaClient from "../prisma";

interface CreateCustomerProps{
    name: string;
    email: string;
    status: boolean;
    age: number;
    ender: string; 
    num: number; 
    cid: string; 
    est: string;
    cel: string;
}

class CreateCustomerService {
    async execute({name, email, status, age, ender, num, cid, est, cel}:CreateCustomerProps) {
        
        if (!name || !email) {
            throw new Error("Preencha todos os campos")    
        }

        const customer = await prismaClient.customer.create({
            data: {
                name,
                email,
                status: true,
                age,
                ender,
                num,
                cid,
                est,
                cel    
            }
        })
        return customer
    }
}

export { CreateCustomerService }