/// <reference types='Cypress' />


class LoginPage {
    constructor() {
        this.loginField = "";
        this.passwordField = "";
        this.submitButton = "";
    }
    
    getLoginField() {
        return cy.get(this.loginField);
    }

    getPasswordField() {
        return cy.get(this.passwordField);
    }

    getSubmitButton() {
        return cy.get(this.submitButton);
    }
}