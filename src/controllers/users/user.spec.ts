import { createUser, authUser, deleteUser } from './user'
import * as helper from '../../helpers/testHelpers' 

describe('User', () => {
  describe('Create new account', () => {

    test('return  400 if no password or invalid is provided', () => {
      const data = helper.userData(helper.userName, helper.userEmail, '')
      const response = createUser(data)
      expect(response.code).toBe(400)

    })

    test('return 400 if an invalid or no email is provided', () => {
      const data = helper.userData(helper.userName, 'name@invalid', helper.userPassword)
      const response = createUser(data)
      expect(response.code).toBe(400)

    })

    test('return 400 if password is invalid or not provided', () => {
      const data = helper.userData('123', helper.userEmail, helper.userPassword)
      const response = createUser(data)
      expect(response.code).toBe(400)
    })

    describe('Authenticate user', () => {
      beforeEach(() => {});
    
      it('return 401 if token is not valid', () => {
        const invalidToken = '123456$'
        const response = authUser(helper.userId, invalidToken)
        expect(response.code).toBe(401)
      })
    })

    describe('Delete account', () => {
      it('return 200 if user successful delete account', () => {
        const validToken = helper.generateJTWFakeToken()
        const response = authUser(helper.userId, validToken)
        expect(response.code).toBe(200)
      })
    })
  })
})


