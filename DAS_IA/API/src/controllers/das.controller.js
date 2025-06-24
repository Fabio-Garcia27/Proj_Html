import obterRespostaDas from '../services/openai.service.js'

export const perguntarDas = async (req, res) => {
    try {

        const {pergunta} = req.body;

        if (!pergunta) {
            return res.status(400).json({erro: "É obrigatório enviar a pergunta"});
        }

        const resposta = await obterRespostaDas(pergunta);

        res.json({ resposta });
    } catch (err) {
        res.status(500).json({erro: "Erro ao processa sua pergunta. Tente novamente."})
    }
}