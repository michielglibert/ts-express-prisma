import UserRepo from "@src/repository/UserRepo";
import { User } from ".prisma/client";

const getAll = (): Promise<User[]> => {
  return UserRepo.getAll();
};

const createUser = (username: string): Promise<User> => {
  return UserRepo.createUser(username);
};

export default { getAll, createUser };
