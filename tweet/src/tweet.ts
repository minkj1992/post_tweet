import { TwitterApi } from "twitter-api-v2";
import dotenv from "dotenv";
dotenv.config();

const appKey = process.env.TWITTER_CONSUMER_KEY || "";
const appSecret = process.env.TWITTER_CONSUMER_SECRET || "";
const accessToken = process.env.TWITTER_ACCESS_TOKEN || "";
const accessSecret = process.env.TWITTER_ACCESS_TOKEN_SECRET || "";

const client = new TwitterApi({
  appKey,
  appSecret,
  accessToken,
  accessSecret,
});

// https://developer.twitter.com/en/docs/twitter-api/tweets/manage-tweets/api-reference/post-tweets
export async function postTweet(text: string) {
  try {
    const tweet = await client.v2.tweet({
      text,
      poll: {
        options: ["🐮(Bull)", "🐻(Bear)"],
        duration_minutes: 120,
      },
    });
    console.dir(tweet, {
      depth: null,
    });
    return tweet;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
