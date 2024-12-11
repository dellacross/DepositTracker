import { Response } from "express";
import { ListDepositsService } from "../services/ListDepositsService";

class ListDepositsController {
    async handle(res: Response) {
        const listDepositsService = new ListDepositsService()

        const deposits = await listDepositsService.execute()

        return res.json(deposits)
    }
}

export { ListDepositsController }