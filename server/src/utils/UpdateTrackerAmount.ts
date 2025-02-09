import prismaClient from "../prisma";

interface TrackerRequest {
    amount: number;
}

export async function UpdateTrackerAmount({ amount }: TrackerRequest) {
    const tracker = await prismaClient.tracker.findFirst();

    if (!tracker) throw new Error('Tracker not found')

    const newAmount = tracker.amount + amount;

    const updatedTracker = await prismaClient.tracker.update({
        where: {
            id: tracker.id
        },
        data: {
            amount: newAmount
        }
    });

    if(!updatedTracker) throw new Error('Tracker not updated')
    return updatedTracker
}