import { Router } from "express";
import Paths from "./constants/Paths";
import UserRouter from "./user/UserRoutes";

const apiRouter = Router();

apiRouter.use(Paths.User.Base, UserRouter);

export default apiRouter;
