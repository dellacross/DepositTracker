import { Router } from 'express'
import { CreateDepositController } from './controller/Deposit/CreateDepositController'
import { ListDepositsController } from './controller/Deposit/ListDepositsController'
import { DeleteDepositController } from './controller/Deposit/DeleteDepositController'
import { ClearDepositController } from './controller/Deposit/ClearDepositController'
import { UpdateDepositController } from './controller/Deposit/UpdateDepositController'
import { CreateAllDepositController } from './controller/Deposit/CreateAllDepositsController'

import { CreateTrackerController } from './controller/Tracker/CreateTackerController'
import { ListTrackersController } from './controller/Tracker/ListTrackersController'

const router = Router()

router.get('/deposits', new ListDepositsController().handle)
router.post('/createalldeposits', new CreateAllDepositController().handle)
router.post('/createdeposit', new CreateDepositController().handle)
router.delete('/deletedeposit', new DeleteDepositController().handle)
router.put('/cleardeposit', new ClearDepositController().handle)
router.put('/updatedeposit', new UpdateDepositController().handle)

router.post('/createtracker', new CreateTrackerController().handle)
router.get('/trackers', new ListTrackersController().handle)

export { router }