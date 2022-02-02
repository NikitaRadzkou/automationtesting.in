class Account {
  get registerEmail() {
    return cy.get('#reg_email')
  }

  get registerPassword() {
    return cy.get('#reg_password')
  }

  get loginEmail() {
    return cy.get('#username')
  }

  get loginPassword() {
    return cy.get('#password')
  }

  get registerBtn() {
    return cy.get('[name=register]')
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

  typeRegisterEmail(value) {
    this.registerEmail.type(value)
    return this
  }

  typeRegisterPassword(value) {
    this.registerPassword.type(value)
    return this
  }

  typeLoginEmail(value) {
    this.loginEmail.type(value)
    return this
  }

  typeLoginPassword(value) {
    this.loginPassword.type(value)
    return this
  }

  clickRegisterBtn() {
    this.registerBtn.click()
    return this
  }

  clickLoginBtn() {
    this.loginBtn.click()
    return this
  }

  verifySuccessfullMessage() {
    this.successfullMessage.should('be.visible').and('contain.text', `Hello`)
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

  verifyRegisterMessage() {
    this.registerEmail
      .invoke('prop', 'validationMessage')
      .should('contain', "Please include an '@' in the email address.")
  }

  verifyRegisterErrorMessage() {
    this.errorMessage
      .should('be.visible')
      .and('contain.text', 'Please provide a valid email address')
    return this
  }

  verifyRegisterErrorMessagePassword() {
    this.errorMessage
      .should('be.visible')
      .and('contain.text', 'Please enter an account password')
    return this
  }

  back() {
    cy.go('back')
    return this
  }
}

export default new Account()
