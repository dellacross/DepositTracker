import { Request, Response } from "express";
import { UpdateDepositService } from "../../services/Deposit/UpdateDepositService";
import { UpdateTrackerAmount } from "../../utils/UpdateTrackerAmount";

class UpdateDepositController {
    async handle(req: Request, res: Response) {
        const { id } = req.body;

        const updateDepositService = new UpdateDepositService()

        const deposit = await updateDepositService.execute({ id });

        const tracker = UpdateTrackerAmount({ amount: deposit.amount });

        return res.json({
            message: 'Deposit updated successfully',
            tracker: tracker,
            deposit: deposit
        });
    }
}

export { UpdateDepositController }