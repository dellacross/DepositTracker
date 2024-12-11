import prismaClient from "../prisma";

class ListDepositsService {
  async execute() {
    const deposits = await prismaClient.deposit.findMany();

    return deposits;
  }
}

export { ListDepositsService }