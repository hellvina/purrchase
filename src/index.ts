import { api } from './server'

const PORT = process.env.PORT

api.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
