import { useState } from "react"
import ListaMensagens from '../components/ListaMensagens'
import ChatBox from '../components/ChatBox'
import api from '../services/api'

const ChatDas = () => {

    const [loading, setLoading] = useState(false)
    const [mensagens, setMensagens] = useState([
        {
            id: 1,
            texto: "Olá! Sou assistente de software. Como posso ajudar você ?",
            remetente: 'bot'
        }
    ])  
    
    const onEnviarMensagem = async (mensagem) => {
        const novaMensagemUsuario = {
            id: Date.now(),
            texto: mensagem,
            remetente: "usuario"   
        }
        setMensagens( prev => [...prev, novaMensagemUsuario])
        setLoading(true)

        try{
            const resposta = await api(mensagem) 
            
            const novaMensagemBot = {
                id: Date.now() + 1,
                texto: resposta,
                remetente: "bot"                   
            }
            setMensagens( prev => [...prev, novaMensagemBot])
            
        } catch (err) {
            console.error(err)
            const novaMensagem = {
                id: Date.now(),
                texto: "Falha ao enviar, tente novamente",
                remetente: "bot"   
            }
            setMensagens( prev => [...prev, novaMensagem])

        } finally {
            setLoading(false)    
        }  
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-200 via-gray-50 to-emerald-50 p-4">
            <div className="container mx-auto max-w-4xl">
                <header className="text-center mb-8">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-emerald-600 text-transparent bg-clip-text mb-2">🥘Chat Chefe🥘</h1> 
                    <p className=" text-gray-600 text-lg">Seu assistente pessoal para receitas deliciosas</p>       
                </header>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-y-scroll shadow-xl h-[600px] border border-gray-100 flex-col">
                        <ListaMensagens mensagens={mensagens} loading={loading}/>   
                        <ChatBox onEnviarMensagem={onEnviarMensagem} desabilitado={loading} />    
                </div>
            </div>
        </div> 
    )
}

export default ChatDas


