import Home from '../../pageObjects/Home'
import Account from '../../pageObjects/Account'
import data from '../../fixtures/data'

describe('My accounts log out', () => {
  it('Should log out from account', () => {
    Home.visit().clickAccountMenu()

    Account.typeLoginEmail(data.email)
      .typeLoginPassword(data.password)
      .clickLoginBtn()
      .verifySuccessfullMessage()
      .clickLogout()
      .verfiyLoginForm()
      .verifyRegisterForm()
  })
})
