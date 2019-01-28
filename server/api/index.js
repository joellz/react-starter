
module.exports = express => {
  const Router = express.Router()
  
  Router.post('/message', (req, res) => {

    res.send({ 
      status: 'success', 
      message: 'ok' 
    })
  })
  return Router
}