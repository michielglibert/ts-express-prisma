import { Router } from "express";
import Paths from "@src/routes/constants/Paths";
import { body, validationResult } from "express-validator";
import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import UserService from "@src/services/UserService";

const userRouter = Router();
const userService = new UserService();

userRouter.get(Paths.User.GetOne, async (req, res) => {
  const { id } = req.params;
  const user = await userService.getOne(id);
  return res.json(user);
});

userRouter.get(Paths.User.GetAll, async (_, res) => {
  const users = await userService.getAll();
  return res.json({ users });
});

userRouter.post(Paths.User.Post, body("name").notEmpty(), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(HttpStatusCodes.BAD_REQUEST)
      .json({ errors: errors.array() });
  }

  const { name } = req.body;
  let user;
  try {
    user = await userService.create({ name });
  } catch (e) {
    return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ error: e });
  }
  return res.status(HttpStatusCodes.OK).json(user);
});

userRouter.put(Paths.User.Put, async (req, res) => {
  const { id } = req.params;
  let user;
  try {
    user = await userService.update(id, req.body);
  } catch (e) {
    return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ error: e });
  }
  return res.status(HttpStatusCodes.OK).json(user);
});

userRouter.delete(Paths.User.Delete, async (req, res) => {
  const { id } = req.params;
  let user;
  try {
    user = await userService.remove(id);
  } catch (e) {
    return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ error: e });
  }
  return res.status(HttpStatusCodes.OK).json(user);
});

export default userRouter;
