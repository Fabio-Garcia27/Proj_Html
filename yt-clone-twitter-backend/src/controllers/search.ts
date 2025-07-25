import { Response } from "express-serve-static-core";
import { ExtendedRequest } from "../types/extended-request";
import { searchSchema } from "../schemas/search";
import { findTweetsByBody } from "../services/tweet";

export const searchTweets = async (req: ExtendedRequest, res:Response) => {
    const safeData = searchSchema.safeParse(req.query);
        if (!safeData.success) {
            return res.json({ error: safeData.error.flatten().fieldErrors });
    } 
        
    let perPage = 10;
    let currentPage = safeData.data.page ?? 0; 

    const tweets = await findTweetsByBody(
        safeData.data.q,
        currentPage,
        perPage
    )

    return res.json({ tweets, page: currentPage });

}