import Home from '../../pageObjects/Home'
import Shop from '../../pageObjects/Shop'
import Item from '../../pageObjects/Item'

describe('Shop product Categories Functionality', () => {
  it('Should filter By Price Functionality', () => {
    Home.visit().clickShopMenu()

    Shop.clickProductCategory().verifyUrlProductCategory().clickProductItem()

    Item.verifyProductUrl()
  })
})
