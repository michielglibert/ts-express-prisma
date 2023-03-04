import { Router } from "express";
import Paths from "@src/routes/constants/Paths";
import get from "./get";
import post from "./post";
import { body } from "express-validator";

const userRouter = Router();

userRouter.get(Paths.User.Get, get.getAll);
userRouter.post(Paths.User.Add, body("username").notEmpty(), post.createUser);

export default userRouter;
