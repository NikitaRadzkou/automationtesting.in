class Shop {
  get logo() {
    return cy.get('#site-logo')
  }

  clickHomeMenu() {
    this.logo.click()
    return this
  }
}

export default new Shop()
