import { Request, Response } from 'express';
import { CreateAllDepositService } from '../../services/Deposit/CreateAllDepositsService';

class CreateAllDepositController {
    async handle(req: Request, res: Response) {
        const createAllDepositsService = new CreateAllDepositService()

        await createAllDepositsService.execute();
    
        return res.json({
            message: 'All deposits created successfully'
        });
    }
}

export { CreateAllDepositController }