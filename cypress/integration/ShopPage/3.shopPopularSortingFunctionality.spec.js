import Home from '../../pageObjects/Home'
import Shop from '../../pageObjects/Shop'

describe('Shop default sorting functionality', () => {
  it('Should popular ratings sorting', () => {
    Home.visit().clickShopMenu()

    Shop.selectSortDropdown('Sort by popularity').verifyUrlSorting('popularity')
  })
})
