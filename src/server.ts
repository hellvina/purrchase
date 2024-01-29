const express = require('express')

const api = express()

api.get('/', (req, res)=> {
    console.log('hello from express')
    res.status(200)
    res.json({message: 'hello'})
})

api.listen(3000, ()=> {
    console.log('hello on localhost')
})

module.exports = api
