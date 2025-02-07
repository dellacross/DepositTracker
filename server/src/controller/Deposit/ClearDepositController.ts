import { Request, Response } from "express";
import { ClearDepositService } from "../../services/Deposit/ClearDepositService";

class ClearDepositController {
    async handle(req: Request, res: Response) {
        const { id } = req.body

        const clearDepositService = new ClearDepositService()

        const deposit = await clearDepositService.execute({ id })

        return res.json({
            deposit: deposit,
            message: "Deposit cleared successfully"
        })
    }
}

export { ClearDepositController }