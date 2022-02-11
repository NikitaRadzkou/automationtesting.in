import Home from '../../pageObjects/Home'
import Account from '../../pageObjects/Account'
import data from '../../fixtures/data'

describe('My accounts address functionality', () => {
  it('Should edit address and ship address', () => {
    Home.visit().clickAccountMenu()

    Account.typeLoginEmail(data.email)
      .typeLoginPassword(data.password)
      .clickLoginBtn()
      .verifySuccessfullMessage()
      .clickAddresses()
      .verifyDetailsAddress()
      .clickEditBtn()
      .typeEditFirstName(data.firstName)
      .typeEditLastName(data.lastName)
      .typeEditCompany(data.company)
      .typeEditAddress(data.address)
      .typeEditApartament(data.apartament)
      .typeEditCity(data.city)
      .typeEditPostcode(data.zip)
      .clickSaveAddressBtn()
      .verifyChangedMessage()
  })
})
