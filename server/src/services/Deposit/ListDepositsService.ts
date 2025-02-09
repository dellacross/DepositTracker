import prismaClient from "../../prisma";

class ListDepositsService {
  async execute() {
    const deposits = await prismaClient.deposit.findMany({
      orderBy:{
        amount: 'asc'
      }
    });

    return deposits;
  }
}

export { ListDepositsService }