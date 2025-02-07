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

    if(deposit) {
      const tracker = await prismaClient.tracker.findFirst()
      const newAmount = tracker?.amount - deposit.amount

      await prismaClient.tracker.update({
        where: {
          id: tracker?.id
        },
        data: {
          amount: newAmount
        }
      })
    }

    return deposit
  }
}

export { ClearDepositService }