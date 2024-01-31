import { Router, type Request, type Response } from 'express'
import { authUser, createNewUser } from './controllers/userController'
import { protect } from './middlwares'

const router = Router()

/**
 * User
 */
router.get('/user/signup', async (req: Request, res: Response) => {
  try {
    await createNewUser(req, res)
  } catch (error) {
    res.status(500).send('Internal Server Error')
  }
})

router.get('/user/signin', protect, async (req: Request, res: Response) => {
  try {
    await authUser(req, res)
  } catch (error) {
    res.status(500).send('Internal Server Error')
  }
})


/**
 * Live
 */

/**
 * Product
 */


export default router
