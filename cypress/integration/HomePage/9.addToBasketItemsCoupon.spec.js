import Home from '../../pageObjects/Home'
import Shop from '../../pageObjects/Shop'
import Item from '../../pageObjects/Item'
import Basket from '../../pageObjects/Basket'
import Checkout from '../../pageObjects/Checkout'
import data from '../../fixtures/data'

describe('Arrivals Add to Basket books and use coupon', () => {
  it('Should add to Basket books and use coupon', () => {
    Home.visit().clickShopMenu()

    Shop.clickHomeMenu()

    Home.getArrivals().clickAllArrivals()

    Item.addMultipleBooks(data.countBooks).clickAddBtn().clickCartBtn()

    Basket.addCoupon(data.coupon).clickApplyCoupon().clickCheckout()

    Checkout.verifyPriceCoupon().verifyTitle(data.title)
  })
})
