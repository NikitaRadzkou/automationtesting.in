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

  get changedMessage() {
    return cy.get('.woocommerce-message')
  }

  get dashboardLink() {
    return cy.get('.woocommerce-MyAccount-navigation-link--dashboard a')
  }

  get ordersLink() {
    return cy.get('.woocommerce-MyAccount-navigation-link--orders a')
  }

  get addressesLink() {
    return cy.get('.woocommerce-MyAccount-navigation-link--edit-address a')
  }

  get accountDetailsLink() {
    return cy.get('.woocommerce-MyAccount-navigation-link--edit-account a')
  }

  get logoutLink() {
    return cy.get('.woocommerce-MyAccount-navigation-link--customer-logout a')
  }

  get orders() {
    return cy.get('.order')
  }

  get viewBtn() {
    return cy.get('.view')
  }

  get orderDetails() {
    return cy.get('.order_details')
  }

  get customerDetails() {
    return cy.get('.customer_details')
  }

  get dateDetails() {
    return cy.get('.woocommerce-MyAccount-content p')
  }

  get addressesDetails() {
    return cy.get('.woocommerce-Address')
  }

  get addressesEditBtn() {
    return cy.get('.edit')
  }

  get firstNameEdit() {
    return cy.get('#shipping_first_name')
  }

  get lastNameEdit() {
    return cy.get('#shipping_last_name')
  }

  get companyEdit() {
    return cy.get('#shipping_company')
  }

  get addressEdit() {
    return cy.get('#shipping_address_1')
  }

  get apartamentEdit() {
    return cy.get('#shipping_address_2')
  }

  get cityEdit() {
    return cy.get('#shipping_city')
  }

  get postcodeEdit() {
    return cy.get('#shipping_postcode')
  }

  get saveAddressBtn() {
    return cy.get('.button')
  }

  get firstNameAccount() {
    return cy.get('#account_first_name')
  }

  get lastNameAccount() {
    return cy.get('#account_last_name')
  }

  get emailAccount() {
    return cy.get('#account_email')
  }

  get currentPasswordAccount() {
    return cy.get('#password_current')
  }

  get newPasswordAccount() {
    return cy.get('#password_1')
  }

  get confirmPasswordAccount() {
    return cy.get('#password_2')
  }

  get saveChangesBtn() {
    return cy.get('.button')
  }

  get loginForm() {
    return cy.get('.login')
  }

  get registerForm() {
    return cy.get('.register')
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

  typeEditFirstName(value) {
    this.firstNameEdit.clear().type(value)
    return this
  }

  typeEditLastName(value) {
    this.lastNameEdit.clear().type(value)
    return this
  }

  typeEditCompany(value) {
    this.companyEdit.clear().type(value)
    return this
  }

  typeEditAddress(value) {
    this.addressEdit.clear().type(value)
    return this
  }

  typeEditApartament(value) {
    this.apartamentEdit.clear().type(value)
    return this
  }

  typeEditCity(value) {
    this.cityEdit.clear().type(value)
    return this
  }

  typeEditPostcode(value) {
    this.postcodeEdit.clear().type(value)
    return this
  }

  clickSaveAddressBtn() {
    this.saveAddressBtn.click()
    return this
  }

  typeAccountFirstName(value) {
    this.firstNameAccount.clear().type(value)
    return this
  }

  typeAccountLastName(value) {
    this.lastNameAccount.clear().type(value)
    return this
  }

  typeAccountEmail(value) {
    this.emailAccount.clear().type(value)
    return this
  }

  typeAccountCurrentPassword(value) {
    this.currentPasswordAccount.clear().type(value)
    return this
  }

  typeAccountNewPassword(value) {
    this.newPasswordAccount.clear().type(value)
    return this
  }

  typeAccountConfirmPassword(value) {
    this.confirmPasswordAccount.clear().type(value)
    return this
  }

  clickSaveChangesBtn() {
    this.saveChangesBtn.click()
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

  clickLogout() {
    this.logoutLink.click()
    return this
  }

  clickAccountDetails() {
    this.accountDetailsLink.click()
    return this
  }

  clickDashboard() {
    this.dashboardLink.click()
    return this
  }

  clickOrders() {
    this.ordersLink.click()
    return this
  }

  clickAddresses() {
    this.addressesLink.click()
    return this
  }

  clickViewBtn() {
    this.viewBtn.click()
    return this
  }

  clickEditBtn() {
    this.addressesEditBtn.last().click()
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

  verifyChangedMessage() {
    this.changedMessage
      .should('be.visible')
      .and('contain.text', 'Address changed successfully.')
    return this
  }

  verifyChangedDetailMessage() {
    this.changedMessage
      .should('be.visible')
      .and('contain.text', 'Account details changed successfully.')
    return this
  }

  verifyDashboradLink(href) {
    cy.location('href').should('eq', href)
    return this
  }

  verifyOrdersLink(href) {
    cy.location('href').should('eq', href)
    return this
  }

  verifyOrders() {
    this.orders.should('be.visible')
    return this
  }

  verifyOrderDetails() {
    this.orderDetails.should('be.visible')
    this.customerDetails.should('be.visible')
    return this
  }

  verifyOrderDateDetails() {
    this.dateDetails.should('be.visible')
    return this
  }

  verifyDetailsAddress() {
    this.addressesDetails.should('be.visible')
    return this
  }

  verfiyLoginForm() {
    this.loginForm.should('be.visible')
    return this
  }

  verifyRegisterForm() {
    this.registerForm.should('be.visible')
    return this
  }

  back() {
    cy.go('back')
    return this
  }
}

export default new Account()
