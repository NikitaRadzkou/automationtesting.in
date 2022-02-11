import Home from '../../pageObjects/Home'
import Shop from '../../pageObjects/Shop'
import Item from '../../pageObjects/Item'

describe('Shop read more functionality', () => {
  it('Should read more functionality', () => {
    Home.visit().clickShopMenu()

    Shop.clickReadMore()

    Item.verfiyOutOfStock()
  })
})
