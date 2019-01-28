import { Request, Response } from 'express'

export const onPostMessage = (req: Request, res: Response) => {
  res.send({ 
    status: 'success', 
    message: 'ok'
  })
}