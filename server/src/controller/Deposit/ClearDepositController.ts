import { Request, Response } from "express";
import { ClearDepositService } from "../../services/Deposit/ClearDepositService";
import { UpdateTrackerAmount } from "../../utils/UpdateTrackerAmount";

class ClearDepositController {
    async handle(req: Request, res: Response) {
        const { id } = req.body

        const clearDepositService = new ClearDepositService()

        const deposit = await clearDepositService.execute({ id })

        const tracker = UpdateTrackerAmount({ amount: deposit.amount*-1 })

        return res.json({
            message: "Deposit cleared successfully",
            tracker: tracker,
            deposit: deposit
        })
    }
}

export { ClearDepositController }