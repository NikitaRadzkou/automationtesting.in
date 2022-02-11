import Home from '../../pageObjects/Home'
import Account from '../../pageObjects/Account'
import data from '../../fixtures/data'

describe('My accounts account details', () => {
  it('Should visible account details where he can change his pasword also', () => {
    Home.visit().clickAccountMenu()

    Account.typeLoginEmail(data.email)
      .typeLoginPassword(data.password)
      .clickLoginBtn()
      .verifySuccessfullMessage()
      .clickAccountDetails()
      .typeAccountFirstName(data.firstName)
      .typeAccountLastName(data.lastName)
      .typeAccountEmail(data.email)
      .typeAccountCurrentPassword(data.password)
      .typeAccountNewPassword(data.incorrectPassword)
      .typeAccountConfirmPassword(data.incorrectPassword)
      .clickSaveChangesBtn()
      .verifyChangedDetailMessage()
  })

  afterEach(() => {
    Home.visit().clickAccountMenu()

    Account.clickAccountDetails()
      .typeAccountCurrentPassword(data.incorrectPassword)
      .typeAccountNewPassword(data.password)
      .typeAccountConfirmPassword(data.password)
      .clickSaveChangesBtn()
  })
})
