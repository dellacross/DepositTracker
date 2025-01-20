import prismaClient from "../prisma";

interface DepositRequest {
    amount: number;
    id: string;
    depositDate: Date;
}

class UpdateDepositService {
    async execute({ amount, id, depositDate }: DepositRequest) {

        const alreadyExists = await prismaClient.deposit.findFirst({
            where: {
                id: id
            },
            include: {
                amount: amount
            }
        })

        let realAmount = amount
        if(alreadyExists?.amount !== 0) realAmount = 0

        const deposit = await prismaClient.deposit.update({
            where: {
                id: id
            },
            data: {
                amount: realAmount,
                depositDate: depositDate
            }
        });

        return deposit;
    }
}

export { UpdateDepositService }