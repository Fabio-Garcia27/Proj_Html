import { z } from "zod";

// validar os dados recebidos
export const signupSchema = z.object({
    name: z.string({message: 'Nome é obrigatório'}).min(2, 'Nome precisa ter 2 ou mais caracteres'),
    email: z.string({message: 'E-mail é obrigatório'}).email('E-mail inválido'),
    //password: z.string({message: 'Senha é obrigatório'}).min(4, 'Precisa ter quatro ou mais caracteres')
    //.regex caracter especial 
    password: z.string({ message: 'Senha é obrigatório' }).min(4, 'Senha precisa ter 4 ou mais caracteres')
    .regex(/^(?=.*[!@#$%^&*()_+=[\]{};':"\\|,.<>?]).*$/, {message: 'Senha deve conter pelo menos um caractere especial',}),
})

