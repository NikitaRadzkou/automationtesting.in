class Order {
  get subtotalPrice() {
    return cy.get('tfoot :nth-child(1) td .amount')
  }

  get roamingPrice() {
    return cy.get(':nth-child(2) > td > .woocommerce-Price-amount')
  }

  calcTaxPriceCommon() {
    this.subtotalPrice.then(el => {
      const subTaxPrice = Number(el.text().replace(/[^0-9.]/g, '')) * 0.05
      this.roamingPrice.then(el => {
        const taxPrice = Number(el.text().replace(/[^0-9.]/g, ''))
        expect(taxPrice).to.eq(subTaxPrice)
      })
    })
    return this
  }

  calcTaxPriceSpecial() {
    this.subtotalPrice.then(el => {
      const subTaxPrice = Number(el.text().replace(/[^0-9.]/g, '')) * 0.02
      this.roamingPrice.then(el => {
        const taxPrice = Number(el.text().replace(/[^0-9.]/g, ''))
        expect(taxPrice).to.eq(subTaxPrice)
      })
    })
    return this
  }

  verifyUrl() {
    cy.location('pathname').should('include', '/order-received/')
    return this
  }
}

export default new Order()
