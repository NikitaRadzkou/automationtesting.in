import Home from '../../pageObjects/Home'
import Shop from '../../pageObjects/Shop'
import Basket from '../../pageObjects/Basket'
import Checkout from '../../pageObjects/Checkout'
import Order from '../../pageObjects/Order'
import Item from '../../pageObjects/Item'
import data from '../../fixtures/data'

describe('Shop add to basket view basket through item link', () => {
  it('Should add to basket view basket through item link', () => {
    Home.visit().clickShopMenu()

    Shop.clickAddToBasket().clickProductItem()

    Item.clickCartBtn()

    Basket.clickCheckout()

    Checkout.verifyUrl()
      .verifyVisibleAndRequiredAllElements()
      .verifyTotalMoreSubtotal()
      .typeFirstName(data.firstName)
      .typeLastName(data.lastName)
      .typeEmail(data.email)
      .typePhone(data.phone)
      .typeAddress(data.address)
      .typeCity(data.city)
      .typeState(data.state)
      .typePostcode(data.zip)
      .clickPlaceOrder()

    Order.verifyUrl()
  })
})
