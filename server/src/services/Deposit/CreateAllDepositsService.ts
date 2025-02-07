import prismaClient from "../../prisma";

class CreateAllDepositService {
    async execute() {
        for(let i = 1; i < 201; i++) {
            const alreadyExists = await prismaClient.deposit.findFirst({
                where: {
                    amount: i
                }
            })

            if(!alreadyExists) {
                await prismaClient.deposit.create({
                    data: {
                        amount: i
                    }
                });
            }
        };
    }
}

export { CreateAllDepositService }