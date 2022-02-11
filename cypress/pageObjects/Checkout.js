import Home from './Home'
import Item from './Item'

class Checkout {
  get productTitle() {
    return cy.get('td[class=product-name]')
  }

  get firstPrice() {
    return cy.get('td[class=product-total]')
  }

  get subtotalPrice() {
    return cy.get(
      '#order_review > table > tbody > tr > td.product-total > span'
    )
  }

  get taxPrice() {
    return cy.get(
      '#order_review > table > tfoot > tr.tax-rate.tax-rate-roaming-tax-1 > td > span'
    )
  }

  get totalPrice() {
    return cy.get('strong > .woocommerce-Price-amount')
  }

  get firstName() {
    return cy.get('#billing_first_name_field')
  }

  get lastName() {
    return cy.get('#billing_last_name_field')
  }

  get companyName() {
    return cy.get('#billing_company_field')
  }

  get emailAddress() {
    return cy.get('#billing_email_field')
  }

  get phone() {
    return cy.get('#billing_phone_field')
  }

  get countryField() {
    return cy.get('#billing_country_field')
  }

  get streetAddress() {
    return cy.get('#billing_address_1_field')
  }

  get apartmentAddress() {
    return cy.get('#billing_address_2')
  }

  get city() {
    return cy.get('#billing_city_field')
  }

  get state() {
    return cy.get('#billing_state_field')
  }

  get specialState() {
    return cy.get('.select2-results-dept-0')
  }

  get postcode() {
    return cy.get('#billing_postcode_field')
  }

  get country() {
    return cy.get('.select2-input')
  }

  get textSpecialCountry() {
    return cy.get('#select2-result-label-459')
  }

  get checkboxCreateAnAccount() {
    return cy.get('#createaccount')
  }

  get orderNotes() {
    return cy.get('#order_comments')
  }

  get coupon() {
    return cy.get('.showcoupon')
  }

  get placeOrder() {
    return cy.get('#place_order')
  }

  visit() {
    cy.visit('/checkout')
    return this
  }

  verifyUrl() {
    cy.url().should('include', '/checkout')
    return this
  }

  clickPlaceOrder() {
    this.placeOrder.click()
    return this
  }

  typeFirstName(name) {
    this.firstName.type(name)
    return this
  }

  typeLastName(lastName) {
    this.lastName.type(lastName)
    return this
  }

  typeEmail(email) {
    this.emailAddress.type(email)
    return this
  }

  typePhone(phone) {
    this.phone.type(phone)
    return this
  }

  typeAddress(address) {
    this.streetAddress.type(address)
    return this
  }

  typeCity(city) {
    this.city.type(city)
    return this
  }

  typeState(state) {
    this.state.type(state)
    return this
  }

  selectSpecialState() {
    this.state.click()
    this.specialState.first().click()
    return this
  }

  typePostcode(zip) {
    this.postcode.type(zip)
    return this
  }

  typeCountry(value) {
    this.countryField.click()
    this.country.type(value).then(el => {
      this.textSpecialCountry.invoke('text').should('equal', value)
      this.textSpecialCountry.click()
    })
    return this
  }

  addCoupon(value) {
    this.coupon.click()
    cy.get('[name=coupon_code]').type(value)
    return this
  }

  verifyVisibleAndRequiredAllElements() {
    this.firstName.should('be.visible').and('have.class', 'validate-required')
    this.lastName.should('be.visible').and('have.class', 'validate-required')
    this.companyName.should('be.visible')
    this.emailAddress
      .should('be.visible')
      .and('have.class', 'validate-required')
    this.phone.should('be.visible').and('have.class', 'validate-required')
    this.countryField
      .should('be.visible')
      .and('have.class', 'validate-required')
    this.streetAddress
      .should('be.visible')
      .and('have.class', 'validate-required')
    this.apartmentAddress.should('be.visible')
    this.city.should('be.visible').and('have.class', 'validate-required')
    this.state.should('be.visible').and('have.class', 'validate-required')
    this.postcode.should('be.visible').and('have.class', 'validate-required')
    this.checkboxCreateAnAccount.should('be.visible')
    this.orderNotes.should('be.visible')

    return this
  }

  verifyTotalMoreSubtotal() {
    this.totalPrice.then($span => {
      const totalPrice = Number($span.text().replace(/[^0-9,.]/g, ''))
      this.subtotalPrice.should($span => {
        const subtotalPrice = Number($span.text().replace(/[^0-9,.]/g, ''))
        if (totalPrice <= subtotalPrice) {
          throw new Error(
            'Subtotal price cannot be more than or equal to Total price'
          )
        }
      })
    })
    return this
  }

  verifyTotalPrice() {
    this.totalPrice.then($span => {
      const totalPrice = $span.text().replace(/[^0-9,.]/g, '')
      this.taxPrice.then($span => {
        const taxPrice = Number($span.text().replace(/[^0-9,.]/g, ''))
        this.subtotalPrice.should($span => {
          const subtotalPrice = Number($span.text().replace(/[^0-9,.]/g, ''))
          expect(totalPrice).to.contain(String(subtotalPrice + taxPrice))
        })
      })
    })
    return this
  }

  verifyTitle(url) {
    cy.visit(url)
    Item.productTitle.then($h1 => {
      const txt1 = $h1
        .text()
        .replace(/[^a-zа-яё]/gi, '')
        .toLowerCase()
      cy.visit('/checkout')
      this.productTitle.should($a => {
        const txt2 = $a
          .text()
          .replace(/[^a-zа-яё]/gi, '')
          .toLowerCase()
        expect(txt2).to.eq(txt1)
      })
    })
    return this
  }

  verifyPrice() {
    Home.price.then($price => {
      const price1 = $price.text().replace(/[^0-9,.]/g, '')

      cy.visit('/checkout')
      this.firstPrice.should($td => {
        const price2 = $td.text().replace(/[^0-9,.]/g, '')
        expect(price2).to.eq(price1)
        $td.text()
      })
    })
    return this
  }

  verifyPriceCoupon() {
    Home.price.then($price => {
      const price1 = Number($price.text().replace(/[^0-9,.]/g, ''))

      cy.visit('/checkout')
      this.firstPrice.should($td => {
        const price2 = Number($td.text().replace(/[^0-9,.]/g, ''))
        expect(price2 - 50).to.eq(price1)
        $td.text()
      })
    })
    return this
  }
}

export default new Checkout()
