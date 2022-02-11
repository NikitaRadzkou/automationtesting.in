import Account from '../../pageObjects/Account'
import Home from '../../pageObjects/Home'
import data from '../../fixtures/data'

describe('My accounts orders', () => {
  it('Should open account orders', () => {
    Home.visit().clickAccountMenu()

    Account.typeLoginEmail(data.email)
      .typeLoginPassword(data.password)
      .clickLoginBtn()
      .verifySuccessfullMessage()
      .clickOrders()
      .verifyOrdersLink(data.ordersHref)
  })
})
