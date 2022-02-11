class Shop {
  get logo() {
    return cy.get('#site-logo')
  }

  get priceSlider() {
    return cy.get('.price_slider > span').last()
  }

  get filterBtn() {
    return cy.get('.price_slider_amount > button')
  }

  get allSalePrices() {
    return cy.get('ins > .woocommerce-Price-amount')
  }

  get allPrices() {
    return cy.get('.price > span')
  }

  get productCategory() {
    return cy.get('.cat-item > a').first()
  }

  get productItem() {
    return cy.get('.product').first()
  }

  get sortDropdown() {
    return cy.get('.orderby')
  }

  get readMoreLink() {
    return cy.get('a').contains('Read more').first()
  }

  get saleLink() {
    return cy.get('.onsale').first().parent()
  }

  get addToBasketBtns() {
    return cy.get('.add_to_cart_button')
  }

  get basketLink() {
    return cy.get('#wpmenucartli a')
  }

  changeFilter() {
    this.priceSlider.click({ multiple: true, force: true })
    for (let i = 0; i < 50; i++) {
      this.priceSlider.type('{leftarrow}')
    }
    return this
  }

  clickBasketLink() {
    cy.wait(2000)
    this.basketLink.click()
    return this
  }

  clickAddToBasket() {
    this.addToBasketBtns.first().click()
    return this
  }

  clickSaleItem() {
    this.saleLink.click()
    return this
  }

  clickReadMore() {
    this.readMoreLink.click()
    return this
  }

  clickFilterBtn() {
    this.filterBtn.click()
    return this
  }

  clickHomeMenu() {
    this.logo.click()
    return this
  }

  clickProductCategory() {
    this.productCategory.click()
    return this
  }

  clickProductItem() {
    this.productItem.click()
    return this
  }

  selectSortDropdown(value) {
    this.sortDropdown.select(value)
    return this
  }

  verifyUrlSorting(value) {
    cy.url().should('include', value)
    return this
  }

  verifyUrlProductCategory() {
    this.productCategory.then(el => {
      const category = el.text().charAt(0).toLowerCase() + el.text().slice(1)
      cy.url().should('include', `/product-category/${category}/`)
    })
    return this
  }

  verifyFiltePrices() {
    this.allPrices.then(el => {
      const pricesWithoutSale = Array.from(el)
      this.allSalePrices.then(el => {
        const pricesWithSale = Array.from(el)
        const allPrices = pricesWithoutSale
          .concat(pricesWithSale)
          .map(el => el.textContent)
          .map(elText => elText.replace(/[^0-9.]/g, ''))
          .map(elPrice => Number(elPrice))

        allPrices.forEach(item => {
          if (item > 450) {
            throw new Error('Filter not working')
          }
        })
      })
    })
    return this
  }
}

export default new Shop()
