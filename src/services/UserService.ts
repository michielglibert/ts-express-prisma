import { User, Prisma } from ".prisma/client";
import UserRepository, { UserPayload } from "@src/repository/UserRepo";

class UserService {
  private readonly userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  getOne = (id: string) => {
    return this.userRepository.getOne(id);
  };

  getAll = () => {
    return this.userRepository.getAll();
  };

  create = (user: UserPayload) => {
    return this.userRepository.create(user);
  };

  update = (id: string, user: UserPayload) => {
    return this.userRepository.update(id, user);
  };

  remove = (id: string) => {
    return this.userRepository.remove(id);
  };
}

export default UserService;
