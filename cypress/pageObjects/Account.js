class Account {
  get loginEmail() {
    return cy.get('#username')
  }

  get loginPassword() {
    return cy.get('#password')
  }

  get loginBtn() {
    return cy.get('[name=login]')
  }

  get successfullMessage() {
    return cy.get('.woocommerce-MyAccount-content')
  }

  get errorMessage() {
    return cy.get('.woocommerce-error')
  }

  typeLoginEmail(value) {
    this.loginEmail.type(value)
    return this
  }

  typeLoginPassword(value) {
    this.loginPassword.type(value)
    return this
  }

  clickLoginBtn() {
    this.loginBtn.click()
    return this
  }

  verifySuccessfullMessage(value) {
    this.successfullMessage
      .should('be.visible')
      .and('contain.text', `Hello ${value}`)
    return this
  }

  verifyErrorMessageIncorrectData() {
    this.errorMessage
      .should('be.visible')
      .and('contain.text', 'Invalid username')
    return this
  }

  verifyErrorMessageMissPassword() {
    this.errorMessage
      .should('be.visible')
      .and('contain.text', 'Password is required')
    return this
  }

  verifyErrorMessageMissUsername() {
    this.errorMessage
      .should('be.visible')
      .and('contain.text', 'Username is required')
    return this
  }

  verifyDotsOnPassword() {
    this.loginPassword.should('be.visible').and('have.attr', 'type', 'password')
    return this
  }

  verifyErrorMessagePass() {
    this.errorMessage
      .should('be.visible')
      .and('contain.text', 'The password you entered for the username')
    return this
  }

  back() {
    cy.go('back')
    return this
  }
}

export default new Account()
