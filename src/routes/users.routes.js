import { Router } from "express";

const router = Router();

import * as userCtrl from "../controllers/user.controller";
import { authJwt, verifySignup} from "../middlewares";


router.post("/", [authJwt.verifyToken,verifySignup.checkDuplicateUsernameOrEmail], userCtrl.createUser);
router.get("/", userCtrl.getUsers);

module.exports = router;
