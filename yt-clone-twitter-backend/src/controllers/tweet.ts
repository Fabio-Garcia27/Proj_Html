import { Response } from "express";
import { ExtendedRequest } from "../types/extended-request";
import { addTweetWSchema } from "../schemas/add-tweet";
import { checkIfTweetIsLikedByUser, createTweet, findAnswersFromTweet, findTweet, likeTweet, unlikeTweet } from "../services/tweet";
import { error } from "console";
import { create } from "domain";
import { addHashtag } from "../services/trend";

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
    const hashtags = safeData.data.body.match(/#[a-zA-Z0-9_]+/g)
    if (hashtags) {
        for (let hashtag of hashtags) {
            if (hashtag.length >= 2) {
                await addHashtag(hashtag);
            }
        }
    }
    res.json({ tweet: newTweet});
}

export const getTweet = async (req: ExtendedRequest, res: Response) => {
    const { id } = req.params;

    const tweet = await findTweet(parseInt(id));
    if (!tweet) return res.json({ error: 'Tweet inexistente' });

    res.json({ tweet });
}

export const getAnswers = async (req: ExtendedRequest, res: Response) => {
    const { id } = req.params;

    const answer = await findAnswersFromTweet(parseInt(id));

    res.json({ answer });
}

export const likeToggle = async (req: ExtendedRequest, res: Response) => {
     const { id } = req.params;   
     
     const liked = await checkIfTweetIsLikedByUser(
        req.userSlug as string,
        parseInt(id)
     )

     if (liked) {
         unlikeTweet (
            req.userSlug as string,
            parseInt(id)
         )
     } else {
        likeTweet (
            req.userSlug as string,
            parseInt(id)
         )
     }

      res.json({});
}