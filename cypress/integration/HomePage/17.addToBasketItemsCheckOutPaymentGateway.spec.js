import Home from '../../pageObjects/Home'
import Shop from '../../pageObjects/Shop'
import Item from '../../pageObjects/Item'
import Basket from '../../pageObjects/Basket'
import Checkout from '../../pageObjects/Checkout'

describe('Arrivals Add to Basket items check out payment gateway', () => {
  it('Should add to Basket items check out payment gateway', () => {
    Home.visit().clickShopMenu()

    Shop.clickHomeMenu()

    Home.getArrivals().clickAllArrivals()

    Item.clickAddBtn().clickCartBtn()

    Basket.clickCheckout()

    Checkout.verifyUrl()
      .verifyVisibleAndRequiredAllElements()
      .verifyTotalMoreSubtotal()
  })
})
