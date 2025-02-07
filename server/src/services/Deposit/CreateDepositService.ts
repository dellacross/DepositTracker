import prismaClient from "../../prisma";

interface DepositRequest {
    amount: number;
}

class CreateDepositService {
    async execute({ amount }: DepositRequest) {
        const deposit = await prismaClient.deposit.create({
            data: {
                amount: amount
            }
        });
    
        return deposit;
    }
}

export { CreateDepositService }