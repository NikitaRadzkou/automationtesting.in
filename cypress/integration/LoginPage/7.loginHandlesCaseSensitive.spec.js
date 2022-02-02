import Home from '../../pageObjects/Home'
import Account from '../../pageObjects/Account'
import data from '../../fixtures/data'

describe('Login handles case sensitive', () => {
  it('Should login handles case sensitive and get error', () => {
    Home.visit().clickAccountMenu()

    Account.typeLoginEmail(data.incorrectLogin)
      .typeLoginPassword(data.incorrectPassword)
      .clickLoginBtn()
      .verifyErrorMessagePass()
  })
})
