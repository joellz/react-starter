import { Request, Response, Router } from 'express'

export const ApiRouter = () => {
  const router = Router()
  
  router.post('/message', (req: Request, res: Response): void => {

    res.send({ 
      status: 'success', 
      message: 'ok' 
    })
  })
  return router
}