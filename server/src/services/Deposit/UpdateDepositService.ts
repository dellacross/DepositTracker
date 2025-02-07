import prismaClient from "../../prisma";

interface DepositRequest {
    id: string;
    depositDate: Date;
}

class UpdateDepositService {
    async execute({ id, depositDate }: DepositRequest) {
        const deposit = await prismaClient.deposit.update({
            where: {
                id: id
            },
            data: {
                depositDate: depositDate
            }
        });

        let tracker = await prismaClient.tracker.findFirst()
        const newAmount = tracker?.amount + deposit.amount

        tracker = await prismaClient.tracker.update({
            where: {
                id: tracker?.id
            },
            data: {
                amount: newAmount
            }
        })

        return tracker;
    }
}

export { UpdateDepositService }