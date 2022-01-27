import Home from '../../pageObjects/Home'
import Shop from '../../pageObjects/Shop'
import Item from '../../pageObjects/Item'
import Basket from '../../pageObjects/Basket'

describe('Arrivals Add to Basket with more books', () => {
  it('Should add to Basket with more books', () => {
    Home.visit().clickShopMenu()

    Shop.clickHomeMenu()

    Home.getArrivals().clickAllArrivals()

    Item.typeMaxValueInput().clickAddBtn().verifyTypeMaxValueInput()
  })
})
