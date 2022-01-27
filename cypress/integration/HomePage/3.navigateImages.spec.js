import Home from '../../pageObjects/Home'
import Shop from '../../pageObjects/Shop'

describe('Images in Arrivals should navigate', () => {
  it('Should Images in Arrivals should navigate', () => {
    Home.visit()
      .clickShopMenu()

     Shop.clickHomeMenu()

     Home.getArrivals()
      .clickAllArrival()
  })
})