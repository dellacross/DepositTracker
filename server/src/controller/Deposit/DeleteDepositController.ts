import { Request, Response } from 'express';
import { DeleteDepositService } from '../../services/Deposit/DeleteDepositService';

class DeleteDepositController {
  async handle(req: Request, res: Response) {
    const { id } = req.body

    const deleteDepositService = new DeleteDepositService()

    const deposit = await deleteDepositService.execute({ id })

    return res.json({
        deposit: deposit,
        message: "Deposit deleted successfully"
    })
  }
}

export { DeleteDepositController }