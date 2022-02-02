import Home from '../../pageObjects/Home'
import Account from '../../pageObjects/Account'

describe('Registration with empty password', () => {
  it('Should registration with empty password and get error message', () => {
    Home.visit().clickAccountMenu()

    Account.typeRegisterEmail('test54321@mail.com')
      .clickRegisterBtn()
      .verifyRegisterErrorMessagePassword()
  })
})
