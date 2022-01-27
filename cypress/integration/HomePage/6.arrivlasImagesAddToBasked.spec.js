import Home from '../../pageObjects/Home'
import Shop from '../../pageObjects/Shop'
import Item from '../../pageObjects/Item'
import Basket from '../../pageObjects/Basket'

describe('Arrivals Add to Basket books', () => {
  it('Should add to Basket books', () => {
    Home.visit().clickShopMenu()

    Shop.clickHomeMenu()

    Home.getArrivals().clickAllArrivals()

    Item.clickAddBtn()
      .verifyPrice()
      .verifyTitle('/product/mastering-javascript/')
  })

  after(() => {
    Cart.remove()
  })
})
