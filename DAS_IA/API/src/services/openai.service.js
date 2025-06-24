import OpenAI from "openai";
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY    
})

const obterRespostaDas = async (pergunta) => {

    try {
        const completation = await openai.chat.completions.create({
            model: "gpt-4o-mini",    
            messages: [
                {
                    role: 'system',
                    content: `Você é um assistente de desenvolvimento de software especializado em ajudar 
        usuários iniciantes com base em conteúdo informado pelo usuário.
        Responda sempre em português brasileiro, com linguagem clara, amigável e fácil de entender,  como
        se estivesse explicando para alguém que está começando a desenvolver.

        Siga estas instruções de formatação obrigatórias para facilitar a leitura no chat:

        - Use quebra de linha entre as seções (nome da linguagem, detalhes da software, sua finalidade, dicas, etc.)
        - Apresente os detalhes em lista, com um item por linha
        - Divida o modo de preparo em passos numerados, simples e objetivos
        - Insira espaçamento entre parágrafos diferentes, para tornar a leitura mais confortável
 
        O softwafe sugerido deve ser completo, fácil de interpretar e bem explicada, mesmo para quem não tem experiência em desenvolvimento.`
                },
                {
                    role: 'user',
                    content: pergunta
                }

            ], 
        })
            return completation.choices[0].message.content;
    } catch(err){
            console.error('Erro ao chamar API OpenAI', err)
            throw new Error('Erro ao chamar API OpenAI')
    }    
}

export default obterRespostaDas