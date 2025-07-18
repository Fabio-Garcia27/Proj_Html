import { useState } from "react"

const ChatBox = ({onEnviarMensagem, desabilitado}) => {
    const [mensagem, setMensagem] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();

        onEnviarMensagem(mensagem);
        setMensagem('');
    }

    return (
        <div className="border-t border-gray-200 bg-gray-50/80 p-4">
            <form className="flex spce-x-3" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    placeholder="Digite o comando ou função que deseja para software"
                    disabled={desabilitado}
                    className="flex-1 px-5 py-3 bg-white border border-gray-300 rounded-r-full shadow-sm focus:ring-2 outline-none focus: ring-purple-500"/>
                <button 
                    type="submit"
                    disabled={desabilitado}
                    className="px-8 py-3 bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-700 cursor-pointer text-white rounded-full disabled:from-gray-400 disabled:to-gray-300 disabled:cursor-not-allowed">Enviar</button>
            </form>
        </div>
    )
}

export default ChatBox