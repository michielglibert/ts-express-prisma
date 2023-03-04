import UserService from "@src/services/UserService";
import { Handler } from "express";

const getAll: Handler = async (_, res) => {
  const users = await UserService.getAll();
  return res.json({ users });
};

export default {
  getAll,
};
