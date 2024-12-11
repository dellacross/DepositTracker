import { Router } from 'express'
import { CreateDepositController } from './controller/CreateDepositController'
import { ListDepositsController } from './controller/ListDepositsController'
import { DeleteDepositController } from './controller/DeleteDepositController'
import { ClearDepositController } from './controller/ClearDepositController'

const router = Router()

router.get('/deposits', new ListDepositsController().handle)
router.post('/createDeposit', new CreateDepositController().handle)
router.put('/deleteDeposit', new DeleteDepositController().handle)
router.put('/clearDeposit', new ClearDepositController().handle)

export { router }