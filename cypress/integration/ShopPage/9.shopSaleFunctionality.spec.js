import Home from '../../pageObjects/Home'
import Shop from '../../pageObjects/Shop'
import Item from '../../pageObjects/Item'

describe('Shop sale functionality', () => {
  it('Should sale functionality', () => {
    Home.visit().clickShopMenu()

    Shop.clickSaleItem()

    Item.verifySalePrices()
  })
})
