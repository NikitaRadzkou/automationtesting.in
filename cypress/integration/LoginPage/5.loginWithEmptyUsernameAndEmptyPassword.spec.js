import Home from '../../pageObjects/Home'
import Account from '../../pageObjects/Account'

describe('Login with empty inputs', () => {
  it('Should login with empty inputs', () => {
    Home.visit().clickAccountMenu()

    Account.clickLoginBtn().verifyErrorMessageMissUsername()
  })
})
