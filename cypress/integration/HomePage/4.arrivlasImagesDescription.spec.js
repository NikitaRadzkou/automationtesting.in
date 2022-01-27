import Home from '../../pageObjects/Home'
import Shop from '../../pageObjects/Shop'
import Item from '../../pageObjects/Item'

describe('Arrivals Images Description', () => {
  it('Should have Arrivals Images Description', () => {
    Home.visit()
      .clickShopMenu()

    Shop.clickHomeMenu()

    Home.getArrivals()
      .clickAllArrival()

    Item.clickDiscriptionBtn()

  })
})