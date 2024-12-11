import prismaClient from "../prisma";

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
        depositBy: null,
        depositDate: null
      }
    });

    return deposit
  }
}

export { ClearDepositService }