import { Request, Response } from 'express';
import { CreateTrackerService } from '../../services/Tracker/CreateTackerService';

class CreateTrackerController {
    async handle(req: Request, res: Response) {
        const { amount } = req.body;

        const createTrackerService = new CreateTrackerService()

        const tracker = await createTrackerService.execute({ amount });
    
        return res.json({
            tracker: tracker,
            message: 'Tracker created successfully'
        });
    }
}

export { CreateTrackerController }