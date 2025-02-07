import prismaClient from "../../prisma";

class ClearAllDepositsService {
  async execute() {
    for(let i = 1; i < 201; i++) {
        const deposit = await prismaClient.deposit.findFirst({
            where: {
                amount: i
            }
        })

        await prismaClient.deposit.update({
            where: {
                id: deposit?.id
            },
            data: {
                depositDate: null
            }
        });
    }

    const tracker = await prismaClient.tracker.findFirst()

    await prismaClient.tracker.update({
        where: {
            id: tracker?.id
        },
        data: {
            amount: 0
        }
    })
  }
}

export { ClearAllDepositsService }