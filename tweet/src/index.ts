import express from "express";
import { json } from "body-parser";
import { newTweetRouter } from "./routes/new";

const app = express();
app.use(json());

app.use(newTweetRouter);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
