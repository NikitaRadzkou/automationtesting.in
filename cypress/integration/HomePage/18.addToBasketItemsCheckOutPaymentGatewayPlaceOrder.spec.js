import Home from '../../pageObjects/Home'
import Shop from '../../pageObjects/Shop'
import Item from '../../pageObjects/Item'
import Basket from '../../pageObjects/Basket'
import Checkout from '../../pageObjects/Checkout'
import data from '../../fixtures/data'

describe('Arrivals Add to Basket items check out payment gateway place order', () => {
  it('Should add to Basket items check out payment gateway place order', () => {
    Home.visit().clickShopMenu()

    Shop.clickHomeMenu()

    Home.getArrivals().clickAllArrivals()

    Item.clickAddBtn().clickCartBtn()

    Basket.clickCheckout()

    Checkout.verifyUrl()
      .verifyVisibleAndRequiredAllElements()
      .addCoupon(data.coupon)
      .verifyTotalMoreSubtotal()

    // Incomplete, add logic!
  })
})
