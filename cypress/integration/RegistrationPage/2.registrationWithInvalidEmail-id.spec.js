import Home from '../../pageObjects/Home'
import Account from '../../pageObjects/Account'
import data from '../../fixtures/data'

describe('Registration with invalid email', () => {
  it('Should registration with invalid email and get error message', () => {
    Home.visit().clickAccountMenu()

    Account.typeRegisterEmail('test54312')
      .typeRegisterPassword(data.password)
      .clickRegisterBtn()
      .verifyRegisterMessage()
  })
})
