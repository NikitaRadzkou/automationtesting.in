import Basket from "./Basket"

class Item {

  get discriptionBtn() {
    return cy.get('.description_tab')
  }

  get reviewsBtn() {
    return cy.get('.reviews_tab')
  }

  get addBtn() {
    return cy.get('.single_add_to_cart_button')
  }

  get cartBtn() {
    return cy.get('.wpmenucart-contents')
  }

  get valueInput() {
    return cy.get('.quantity input')
  }

  get price() {
    return cy.xpath("//*[@id='product-165']/div[2]/div[1]/p/span")
  }

  get productTitle() {
    return cy.get('.product_title')
  }

  visit() {
    cy.visit('/product/mastering-javascript')
    return this
  } 

  clickDiscriptionBtn() {
    this.discriptionBtn.click().should('have.class', 'active')
    return this
  }

  clickReviewsBtn() {
    this.reviewsBtn.click().should('have.class', 'active')
    return this
  }

  clickAddBtn() {
    this.addBtn.click()
    return this
  }

  clickCartBtn() {
    this.cartBtn.click()
    return this
  }

  addMultipleBooks(count) {
    this.valueInput.clear().type(count)
    return this
  }


  verifyTitle(url) {
    cy.visit(url)
    this.productTitle.then($h1 => {
      const txt1 = $h1.text().replace(/[^a-zа-яё]/gi, '').toLowerCase()
      cy.visit('/basket')
      Basket.productTitle.should($a => {
        const txt2 = $a.text().replace(/[^a-zа-яё]/gi, '').toLowerCase()
        expect(txt2).to.eq(txt1)
      })
    })
    return this
  }

  verifyPrice() {
    this.price.then($price => {
      const price1 = $price.text()

      cy.visit('/basket/')
      Basket.firstPrice.should($span => {
        const price2 = $span.text()
        expect(price2).to.eq(price1)
        $span.text()
      })
    })
    return this
  }

  typeMaxValueInput() {
    this.valueInput.then(val => {
      const maxValue = Number(val[0].attributes[3].value)
      this.valueInput.type(maxValue + 1)
    })
    return this
  }

  verifyTypeMaxValueInput() {
    this.valueInput.invoke('prop', 'validationMessage').should('contains', 'Value must be less than or equal')
  }
}

export default new Item()