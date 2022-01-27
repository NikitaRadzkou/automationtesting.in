import Home from '../../pageObjects/Home'
import Shop from '../../pageObjects/Shop'
import Item from '../../pageObjects/Item'
import Basket from '../../pageObjects/Basket'
import Checkout from '../../pageObjects/Checkout'

describe('Arrivals Add to Basket books and use coupon', () => {
  it('Should add to Basket books and use coupon', () => {
    Home.visit().clickShopMenu()

    Shop.clickHomeMenu()

    Home.getArrivals().clickAllArrivals()

    Item.addMultipleBooks('2').clickAddBtn().clickCartBtn()

    Basket.addCoupon('krishnasakinala').clickApplyCoupon().clickCheckout()

    Checkout.verifyPriceCoupon().verifyTitle('/product/mastering-javascript/')
  })
})
