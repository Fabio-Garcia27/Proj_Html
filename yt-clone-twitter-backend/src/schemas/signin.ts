import { z } from "zod";

// validar os dados recebidos
export const signinSchema = z.object({
    email: z.string({message: 'E-mail é obrigatório'}).email('E-mail inválido'),
    password: z.string({ message: 'Senha é obrigatório' }).min(4, 'Senha precisa ter 4 ou mais caracteres')
    .regex(/^(?=.*[!@#$%^&*()_+=[\]{};':"\\|,.<>?]).*$/, {message: 'Senha deve conter pelo menos um caractere especial',}),
})
