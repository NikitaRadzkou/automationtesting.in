import Home from '../../pageObjects/Home'
import Account from '../../pageObjects/Account'
import data from '../../fixtures/data'

describe('Login with valid password without username', () => {
  it('Should login with valid password without username', () => {
    Home.visit().clickAccountMenu()

    Account.typeLoginPassword(data.password)
      .clickLoginBtn()
      .verifyErrorMessageMissUsername()
  })
})
