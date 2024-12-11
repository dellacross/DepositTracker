import prismaClient from "../prisma";

interface DepositRequest {
    id: string;
}

class DeleteDepositService {
  async execute({ id }: DepositRequest) {
    const deposit = await prismaClient.deposit.delete({
      where: {
        id: id,
      }
    });

    return deposit
  }
}

export { DeleteDepositService }