import { Router } from "express";

const router = Router();

import * as tweetCtrl from "../controllers/tweet.controller";
import { authJwt, verifySignup } from "../middlewares";

router.post("/", [authJwt.verifyToken], tweetCtrl.createTweet);
router.get("/getTweets/:id_user", [authJwt.verifyToken], tweetCtrl.getTweetByUser);

module.exports = router;
