import Home from '../../pageObjects/Home'
import Account from '../../pageObjects/Account'
import data from '../../fixtures/data'

describe('Login with valid username and password', () => {
  it('Should login with valid username and password', () => {
    Home.visit().clickAccountMenu()

    Account.typeLoginEmail(data.email)
      .typeLoginPassword(data.password)
      .clickLoginBtn()
      .verifySuccessfullMessage()
  })
})
