class Home {
  get accountMenu() {
    return cy.get('#menu-item-50')
  }

  get shopMenu() {
    return cy.get('#menu-item-40 a')
  }

  get homeSlider() {
    return cy.get('div[data-slide-duration]')
  }

  get arrivals() {
    return cy.get('ul.products')
  }

  get allArrivals() {
    return cy.get('.woocommerce-LoopProduct-link img')
  }

  get price() {
    return cy.xpath("//*[@id='wpmenucartli']/a/span[2]")
  }

  visit() {
    cy.visit('/')
    return this
  }

  clickAccountMenu() {
    this.accountMenu.click()
    return this
  }

  clickShopMenu() {
    this.shopMenu.click()
    return this
  }

  getHomeSlider() {
    this.homeSlider.should($div => {
      expect($div).to.have.length(3)
    })
    return this
  }

  getArrivals() {
    this.arrivals.should($ul => {
      expect($ul).to.have.length(3)
    })
    return this
  }

  clickAllArrivals() {
    this.allArrivals.then(elems => {
      for (let i = 0; i < elems.length; i++) {
        elems[i].click()
      }
    })
    return this
  }

  verifyUrl() {
    cy.url().should('include', '/')
  }
}

export default new Home()
