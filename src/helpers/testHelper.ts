import { faker } from '@faker-js/faker'

/**
 * User
 */

interface User {
  username: string
  email: string
  password: string
}

const userName = faker.internet.userName()
const userEmail = faker.internet.exampleEmail()
const userPassword = faker.internet.password()
const userId = faker.string.uuid()

const userData = (userName: string, email: string, password: string): User => ({
  username: faker.internet.userName(),
  email: faker.internet.exampleEmail(),
  password: faker.internet.password()
})

export {
  userName,
  userEmail,
  userPassword,
  userId,
  userData
}
