import Home from '../../pageObjects/Home'
import Shop from '../../pageObjects/Shop'

describe('Shop filter by price functionality', () => {
  it('Should filter by price functionality', () => {
    Home.visit().clickShopMenu()

    Shop.changeFilter().clickFilterBtn().verifyFiltePrices()
  })
})
