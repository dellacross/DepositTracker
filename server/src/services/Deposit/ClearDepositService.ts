import prismaClient from "../../prisma";

interface DepositRequest {
  id: string;
}

class ClearDepositService {
  async execute({ id }: DepositRequest) {
    const deposit = await prismaClient.deposit.update({
      where: {
        id: id,
      },
      data: {
        depositDate: null
      }
    });

    if(!deposit) throw new Error('Deposit not found')

    return deposit
  }
}

export { ClearDepositService }