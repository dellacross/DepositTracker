import { Request, Response } from 'express';
import { CreateDepositService } from '../../services/Deposit/CreateDepositService';

class CreateDepositController {
    async handle(req: Request, res: Response) {
        const { amount } = req.body;

        const createDepositService = new CreateDepositService()

        const deposit = await createDepositService.execute({ amount });
    
        return res.json({
            deposit: deposit,
            message: 'Deposit created successfully'
        });
    }
}

export { CreateDepositController }