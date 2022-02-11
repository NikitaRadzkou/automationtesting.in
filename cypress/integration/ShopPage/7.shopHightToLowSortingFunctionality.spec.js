import Home from '../../pageObjects/Home'
import Shop from '../../pageObjects/Shop'

describe('Shop default sorting functionality', () => {
  it('Should high to low sorting', () => {
    Home.visit().clickShopMenu()

    Shop.selectSortDropdown('Sort by price: high to low').verifyUrlSorting(
      'price-desc'
    )
  })
})
