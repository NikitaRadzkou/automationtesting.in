import Home from '../../pageObjects/Home'
import Account from '../../pageObjects/Account'
import data from '../../fixtures/data'

describe('Login with valid username without password', () => {
  it('Should login with valid username without password', () => {
    Home.visit().clickAccountMenu()

    Account.typeLoginEmail(data.email)
      .clickLoginBtn()
      .verifyErrorMessageMissPassword()
  })
})
