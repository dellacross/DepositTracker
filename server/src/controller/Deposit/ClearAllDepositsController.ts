import { Request, Response } from "express";
import { ClearAllDepositsService } from "../../services/Deposit/ClearAllDepositsService";

class ClearAllDepositsController {
    async handle(req: Request, res: Response) {

        const clearAllDepositsService = new ClearAllDepositsService()
        await clearAllDepositsService.execute()

        return res.json({
            message: "All deposits cleared successfully"
        })
    }
}

export { ClearAllDepositsController }