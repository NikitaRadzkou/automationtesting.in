/// <reference types="cypress" />
import Home from '../../pageObjects/Home'
import Shop from '../../pageObjects/Shop'

describe('Home Page with three Sliders only', () => {
  it('Should open Home Page with three Sliders only', () => {
     Home.visit()
       .clickShopMenu()

     Shop.clickHomeMenu()

     Home.getHomeSlider()
  })
}) 