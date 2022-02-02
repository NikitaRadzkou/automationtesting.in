import Home from '../../pageObjects/Home'
import Account from '../../pageObjects/Account'
import data from '../../fixtures/data'

describe('Registration Sing-in', () => {
  it('Should sing-in', () => {
    Home.visit().clickAccountMenu()

    Account.typeRegisterEmail('test54312@mail.com')
      .typeRegisterPassword(data.password)
      .clickRegisterBtn()
      .verifySuccessfullMessage()
  })
})
