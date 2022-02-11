import Home from '../../pageObjects/Home'
import Shop from '../../pageObjects/Shop'

describe('Shop default sorting functionality', () => {
  it('Should newness ratings sorting', () => {
    Home.visit().clickShopMenu()

    Shop.selectSortDropdown('Sort by newness').verifyUrlSorting('date')
  })
})
