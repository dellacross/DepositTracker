import { Response } from "express";
import { ListDepositsService } from "../services/ListDepositsService";

class ListDepositsController {
    async handle(req: Request, res: Response) {
        const listDepositsService = new ListDepositsService()

        const deposits = await listDepositsService.execute()

        return res.json({
            deposit: deposits
        });
    }
}

export { ListDepositsController }