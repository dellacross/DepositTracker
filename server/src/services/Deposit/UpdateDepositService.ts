import prismaClient from "../../prisma";

interface DepositRequest {
    id: string;
}

class UpdateDepositService {
    async execute({ id }: DepositRequest) {

        const today = new Date();

        const deposit = await prismaClient.deposit.update({
            where: {
                id: id
            },
            data: {
                depositDate: today
            }
        });

        return deposit;
    }
}

export { UpdateDepositService }