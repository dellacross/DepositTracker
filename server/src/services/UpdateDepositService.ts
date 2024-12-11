import prismaClient from "../prisma";

interface DepositRequest {
    amount: number;
    id: string;
    depositDate: Date;
    depositBy: string;
}

class UpdateDepositService {
    async execute({ amount, id, depositDate, depositBy }: DepositRequest) {
        const deposit = await prismaClient.deposit.update({
            where: {
                id: id
            },
            data: {
                amount: amount,
                depositDate: depositDate,
                depositBy: depositBy
            }
        });

        return deposit;
    }
}

export { UpdateDepositService }