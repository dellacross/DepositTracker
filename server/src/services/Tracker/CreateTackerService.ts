import prismaClient from "../../prisma";

interface TrackerRequest {
    amount: number;
}

class CreateTrackerService {
    async execute({ amount }: TrackerRequest) {
        const tracker = await prismaClient.tracker.create({
            data: {
                amount: amount
            }
        });
    
        return tracker;
    }
}

export { CreateTrackerService }