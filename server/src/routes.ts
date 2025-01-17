import { Router } from 'express'
import { CreateDepositController } from './controller/CreateDepositController'
import { ListDepositsController } from './controller/ListDepositsController'
import { DeleteDepositController } from './controller/DeleteDepositController'
import { ClearDepositController } from './controller/ClearDepositController'
import { UpdateDepositController } from './controller/UpdateDepositController'
import { CreateAllDepositController } from './controller/CreateAllDepositsController'


const router = Router()

router.get('/deposits', new ListDepositsController().handle)
router.post('/createalldeposits', new CreateAllDepositController().handle)
router.post('/createdeposit', new CreateDepositController().handle)
router.delete('/deletedeposit', new DeleteDepositController().handle)
router.put('/cleardeposit', new ClearDepositController().handle)
router.put('/updatedeposit', new UpdateDepositController().handle)

export { router }