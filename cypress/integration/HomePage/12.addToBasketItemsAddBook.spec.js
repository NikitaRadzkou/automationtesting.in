import Home from '../../pageObjects/Home'
import Shop from '../../pageObjects/Shop'
import Item from '../../pageObjects/Item'
import Basket from '../../pageObjects/Basket'

describe('Arrivals Add to Basket items and see total price in checkout', () => {
  it('Should add to Basket items and see total price in checkout', () => {
    Home.visit().clickShopMenu()

    Shop.clickHomeMenu()

    Home.getArrivals().clickAllArrivals()

    Item.clickAddBtn().clickCartBtn()

    Basket.verifyUpdateDisbled()
      .changeQuantity('2')
      .clickUpdate()
      .getUpdatedMessage()
  })
})
