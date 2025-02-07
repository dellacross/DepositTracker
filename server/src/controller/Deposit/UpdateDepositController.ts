import { Request, Response } from "express";
import { UpdateDepositService } from "../../services/Deposit/UpdateDepositService";

class UpdateDepositController {
    async handle(req: Request, res: Response) {
        const { 
            id, 
            depositDate 
        } = req.body;

        const updateDepositService = new UpdateDepositService()

        const tracker = await updateDepositService.execute({ 
            id, 
            depositDate 
        });

        return res.json({
            tracker: tracker,
            message: 'Deposit updated successfully'
        });
    }
}

export { UpdateDepositController }