import Home from '../../pageObjects/Home'
import Account from '../../pageObjects/Account'
import data from '../../fixtures/data'

describe('Login with masked password', () => {
  it('Should login with masked password', () => {
    Home.visit().clickAccountMenu()

    Account.clickLoginBtn()
      .typeLoginPassword(data.password)
      .verifyDotsOnPassword()
  })
})
