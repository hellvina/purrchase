import express from 'express'
import router from './router'

const api = express()

api.listen(3000, () => {
  console.log('hello localhost')
})

api.use('/api', router)


module.exports = api
