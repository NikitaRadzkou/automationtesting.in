import Home from '../../pageObjects/Home'
import Shop from '../../pageObjects/Shop'
import Item from '../../pageObjects/Item'
import Basket from '../../pageObjects/Basket'
import Checkout from '../../pageObjects/Checkout'

describe('Arrivals Add to Basket books', () => {
  it('Should add to Basket books', () => {
    Home.visit().clickShopMenu()

    Shop.clickHomeMenu()

    Home.getArrivals().clickAllArrivals()

    Item.clickAddBtn().clickCartBtn()

    Basket.clickCheckout()

    Checkout.verifyPrice().verifyTitle('/product/mastering-javascript/')
  })
})
