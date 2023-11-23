import express, { Request, Response } from "express";
import { postTweet } from "../tweet";

const router = express.Router();

router.post("/api/tweets", async (req: Request, res: Response) => {
  const { text } = req.body;
  const tweet = await postTweet(text);
  res.status(201).send(tweet);
});

export { router as newTweetRouter };
