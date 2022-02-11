import Home from '../../pageObjects/Home'
import Shop from '../../pageObjects/Shop'

describe('Shop default sorting functionality', () => {
  it('Should low to high sorting', () => {
    Home.visit().clickShopMenu()

    Shop.selectSortDropdown('Sort by price: low to high').verifyUrlSorting(
      'price'
    )
  })
})
