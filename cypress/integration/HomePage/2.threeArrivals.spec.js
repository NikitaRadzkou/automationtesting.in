import Home from '../../pageObjects/Home'
import Shop from '../../pageObjects/Shop'

describe('Home page with three Arrivals only', () => {
  it('Should Home page with three Arrivals only', () => {
    Home.visit()
      .clickShopMenu()

    Shop.clickHomeMenu()

    Home.getArrivals()
  })
})
