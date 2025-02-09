import prismaClient from "../../prisma";

interface DepositRequest {
    amount: number;
}

class CreateDepositService {
    async execute({ amount }: DepositRequest) {

        const alreadyExists = await prismaClient.deposit.findFirst({
            where: {
                amount: amount
            }
        })

        if(alreadyExists) throw new Error('Deposit already exists')

        const deposit = await prismaClient.deposit.create({
            data: {
                amount: amount
            }
        });
    
        return deposit;
    }
}

export { CreateDepositService }