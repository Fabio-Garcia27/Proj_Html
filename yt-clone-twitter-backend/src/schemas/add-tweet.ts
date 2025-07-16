import z, { string } from "zod";

export const addTweetWSchema =z.object({
    body: z.string({message: 'Precisa enviar um tweet'}),
    answer: z.string().optional()
})
