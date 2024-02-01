import { Router, type Request, type Response } from 'express'

import {
  authUser,
  createNewLive,
  createNewUser,
  deleteLive,
  allLives,
  listLives,
  listProducts,
  editLive
} from './controllers'

import { protect } from './middlwares'
import { body, validationResult } from 'express-validator'
const router = Router()

/**
 * User
 */
router.post('/user/signup', (req: Request, res: Response) => {
  void createNewUser(req, res)
})

router.get('/user/signin', body('username').isString(), protect, (req: Request, res: Response) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() })
  }

  void authUser(req, res)
})

/**
 * Live
 */
router.post('/lives/', (req: Request, res: Response) => {
  void createNewLive(req, res)
})
router.get('/lives/:page?', (req: Request, res: Response) => {
  void allLives(req, res)
})

router.delete('/lives/', protect, (req: Request, res: Response) => {
  void deleteLive(req, res)
})

router.put('/lives/', protect, (req: Request, res: Response) => {
  void editLive(req, res)
})

router.get('/user/lives', (req: Request, res: Response) => {
  void listLives(req, res)
})

/**
 * Product
 */

router.get('/live/producs', (req: Request, res: Response) => {
  void listProducts(req, res)
})

export default router
