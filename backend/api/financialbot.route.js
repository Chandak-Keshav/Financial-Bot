import express from "express"
import UserCtrl from "./users.controller.js"

const router = express.Router();
router
    .route("/User")
    .post(UserCtrl.UserPutAPI)
    .get(UserCtrl.UserGetAPI)

export default router