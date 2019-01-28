import { Router } from 'express'
import { onPostMessage } from '../controllers'

export const ApiRouter = (): Router => {
  const router = Router()
  
  router.post('/message', onPostMessage)
  return router
}