import { PrismaClient } from "@prisma/client";
import { User, Prisma } from ".prisma/client";
import { IRead } from "@src/interfaces/IRead";
import { IWrite } from "@src/interfaces/IWrite";

const userPayload = Prisma.validator<Prisma.UserDefaultArgs>()({
  select: { name: true },
});

export type UserPayload = Prisma.UserGetPayload<typeof userPayload>;

class UserRepository implements IRead<User>, IWrite<UserPayload, User> {
  private readonly prisma;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async getOne(id: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  }

  async create(item: UserPayload): Promise<User> {
    const user = await this.prisma.user.create({
      data: item,
    });
    return user;
  }

  async update(id: string, item: UserPayload): Promise<User> {
    const user = await this.prisma.user.update({
      where: {
        id,
      },
      data: item,
    });
    return user;
  }

  async remove(id: string): Promise<User> {
    const user = await this.prisma.user.delete({
      where: {
        id,
      },
    });
    return user;
  }
}

export default UserRepository;
