import { Response } from "express";
import { ExtendedRequest } from "../types/extended-request";
import { addTweetWSchema } from "../schemas/add-tweet";
import { createTweet, findTweet } from "../services/tweet";
import { error } from "console";
import { create } from "domain";

export const addTweet = async (req: ExtendedRequest, res: Response) => {
    // validar dados criados
    const safeData = addTweetWSchema.safeParse(req.body);
    if (!safeData.success) {
        return res.json({ error: safeData.error.flatten().fieldErrors });
    }
    // tweet se é resposta
    if (safeData.data.answer) {
        const hasAnswerTweet = await findTweet(parseInt(safeData.data.answer));
        if (!hasAnswerTweet) {
            return res.json({ error: 'Tweet original inexistente'})
        }
    }
    // criar tweet
    const newTweet = await createTweet(
        req.userSlug as string,
        safeData.data.body,
        safeData.data.answer ? parseInt(safeData.data.answer) : 0
    )
    // adicionar a hashtag ao trend
    
    res.json({ tweet: newTweet});
}

