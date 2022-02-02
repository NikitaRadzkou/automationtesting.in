import Home from '../../pageObjects/Home'
import Account from '../../pageObjects/Account'

describe('Registration with empty email and password', () => {
  it('Should registration with empty email and password', () => {
    Home.visit().clickAccountMenu()

    Account.clickRegisterBtn().verifyRegisterErrorMessage()
  })
})
