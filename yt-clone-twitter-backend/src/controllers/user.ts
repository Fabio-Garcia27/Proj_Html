import { Response } from "express-serve-static-core";
import { ExtendedRequest } from "../types/extended-request";
import { findUserBySlug, getUserFollowersCount, getUserFollowingCount, getUserTweetCount } from "../services/user";
import { error } from "console";

export const getUser = async (req: ExtendedRequest, res: Response) => {
    const { slug } = req.params; 
    
    const user = await findUserBySlug(slug);
    if (!user) return res.json({ error: 'Usuário inexistente'});

    const FollowingCount = await getUserFollowingCount(user.slug);
    const FollowersCount = await getUserFollowersCount(user.slug);
    const TweetCount = await getUserTweetCount(user.slug);

    res.json({ user, FollowingCount, FollowersCount, TweetCount });
}
