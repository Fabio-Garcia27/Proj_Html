import { Response } from "express-serve-static-core";
import { ExtendedRequest } from "../types/extended-request";
import { getTrending } from "../services/trend";

export const getTrends = async (req: ExtendedRequest, res:Response) => {
    const trends = await getTrending();

    res.json({ trends });

}