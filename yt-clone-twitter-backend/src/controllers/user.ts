import { Response } from "express-serve-static-core";
import { ExtendedRequest } from "../types/extended-request";
import { findUserBySlug, getUserFollowersCount, getUserFollowingCount, getUserTweetCount } from "../services/user";
import { error } from "console";
import { userTweetsSchema } from "../schemas/user-tweets";
import { findTweetsByUser } from "../services/tweet";

export const getUser = async (req: ExtendedRequest, res: Response) => {
    const { slug } = req.params; 
    
    const user = await findUserBySlug(slug);
    if (!user) return res.json({ error: 'Usuário inexistente'});

    const FollowingCount = await getUserFollowingCount(user.slug);
    const FollowersCount = await getUserFollowersCount(user.slug);
    const TweetCount = await getUserTweetCount(user.slug);

    res.json({ user, FollowingCount, FollowersCount, TweetCount });
}

export const getUserTweets = async (req: ExtendedRequest, res: Response) => {
    const { slug } = req.params;

    const safeData = userTweetsSchema.safeParse(req.query);
    if (!safeData.success) {
            return res.json({ error: safeData.error.flatten().fieldErrors });
    }

    //Paginação
    let perPage = 10;
    let currentPage = safeData.data.page ?? 0;

    const tweets = await findTweetsByUser(
        slug,
        currentPage,
        perPage   
    );

    res.json({ tweets, page: currentPage });
}    
