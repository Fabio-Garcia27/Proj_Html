import prismaClient from "../prisma";

interface CreateCustomerProps{
    name: string;
    email: string;
    age: number;
    ender: string; 
    num: number; 
    cid: string; 
    est: string;
    cel: string;
    status: boolean;
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
                age,
                ender,
                num,
                cid,
                est,
                cel,
                status: true,                    
            }
        })
        return customer
    }
}

export { CreateCustomerService }