import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import UserService from "@src/services/UserService";
import { Handler } from "express";
import { validationResult } from "express-validator/src/validation-result";

const createUser: Handler = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(HttpStatusCodes.BAD_REQUEST)
      .json({ errors: errors.array() });
  }

  const { username } = req.body;
  try {
    await UserService.createUser(username);
  } catch (e) {
    return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ error: e });
  }
  return res.status(HttpStatusCodes.OK).json({ success: true });
};

export default {
  createUser,
};
