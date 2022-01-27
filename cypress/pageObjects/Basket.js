class Basket {
  get removeBtns() {
    return cy.get('.remove')
  }

  get firstPrice() {
    return cy.xpath(
      "//*[@id='page-34']/div/div[1]/form/table/tbody/tr[1]/td[4]/span"
    )
  }

  get productTitle() {
    return cy.get("[data-title='Product']")
  }

  get checkout() {
    return cy.get('.checkout-button')
  }

  get coupon() {
    return cy.get('#coupon_code')
  }

  get addCouponBtn() {
    return cy.get('[name=apply_coupon]')
  }

  get couponMessage() {
    return cy.get('.woocommerce-error')
  }

  get removeMessage() {
    return cy.get('.woocommerce-message')
  }

  get updatedMessage() {
    return cy.get('.woocommerce-message')
  }

  get updateBtn() {
    return cy.get('[name=update_cart]')
  }

  get quantity() {
    return cy.get('.quantity > input')
  }

  visit() {
    cy.visit('/basket')
    return this
  }

  clickCheckout() {
    this.checkout.click()
    return this
  }

  addCoupon(val) {
    this.coupon.type(val)
    return this
  }

  clickApplyCoupon() {
    this.addCouponBtn.click()
    return this
  }

  getErrorMessage() {
    this.couponMessage.should(
      'contain.text',
      'The minimum spend for this coupon is'
    )
    return this
  }

  getRemoveMessage() {
    this.removeMessage.should('contain.text', 'removed')
    return this
  }

  getUpdatedMessage() {
    this.updatedMessage.should('contain.text', 'Basket updated')
    return this
  }

  verifyUpdateDisbled() {
    this.updateBtn.should('be.disabled')
    return this
  }

  clickUpdate() {
    this.updateBtn.click()
    return this
  }

  changeQuantity(val) {
    this.quantity.clear().type(val)
    return this
  }

  remove() {
    this.removeBtns.then(elems => {
      for (let i = 0; i < elems.length; i++) {
        elems[i].click()
      }
    })
    return this
  }
}

export default new Basket()
