import { Request, Response } from "express";
import { UpdateDepositService } from "../services/UpdateDepositService";

class UpdateDepositController {
    async handle(req: Request, res: Response) {
        const { 
            amount, 
            id, 
            depositBy, 
            depositDate 
        } = req.body;

        const updateDepositService = new UpdateDepositService()

        const deposit = await updateDepositService.execute({ 
            amount, 
            id, 
            depositBy, 
            depositDate 
        });

        return res.json({
            deposit: deposit,
            message: 'Deposit updated successfully'
        });
    }
}

export { UpdateDepositController }