import Home from '../../pageObjects/Home'
import Account from '../../pageObjects/Account'

describe('Log-in with invalid username and password', () => {
  it('Should log-in with invalid username and password', () => {
    Home.visit().clickAccountMenu()

    Account.typeLoginEmail('incoorrectLogin')
      .typeLoginPassword('incoorrectPassword')
      .clickLoginBtn()
      .verifyErrorMessageIncorrectData()
  })
})
