import Home from '../../pageObjects/Home'
import Account from '../../pageObjects/Account'
import data from '../../fixtures/data'

describe('My accounts address functionality', () => {
  it('Should visible address and ship address', () => {
    Home.visit().clickAccountMenu()

    Account.typeLoginEmail(data.email)
      .typeLoginPassword(data.password)
      .clickLoginBtn()
      .verifySuccessfullMessage()
      .clickAddresses()
      .verifyDetailsAddress()
  })
})
