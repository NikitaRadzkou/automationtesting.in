import Home from '../../pageObjects/Home'
import Account from '../../pageObjects/Account'
import data from '../../fixtures/data'

describe('Registration with empty email', () => {
  it('Should registration with empty email and get error message', () => {
    Home.visit().clickAccountMenu()

    Account.typeRegisterPassword(data.password)
      .clickRegisterBtn()
      .verifyRegisterErrorMessage()
  })
})
