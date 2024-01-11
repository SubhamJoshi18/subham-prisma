import { Router } from 'express'
import { Request, Response, NextFunction } from 'express'
import * as subhamController from '../controller/subhamController'
const router = Router()

router.get('/', subhamController.subhamGet)
router.get('/:id', subhamController.subhamGetbycode)
router.post('/', subhamController.postsubham)
router.put('/:id', subhamController.updateSubhamByid)
router.delete('/:id', subhamController.deletesubhambyid)

export default router
