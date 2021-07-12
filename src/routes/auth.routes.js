import { Router } from "express";

const router = Router();

import * as authCtrl from "../controllers/auth.controller";
import { authJwt, verifySignup } from "../middlewares";

router.post(
  "/signup",
  [verifySignup.checkDuplicateUsernameOrEmail],
  authCtrl.signup
);
router.post("/signin", authCtrl.signin);

module.exports = router;
