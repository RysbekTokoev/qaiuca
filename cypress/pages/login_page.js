/// <reference types='Cypress' />


export class LoginPage {
    constructor() {
        this.loginField = '[name="userName"]';
        this.passwordField = '[name="password"]';
        this.submitButton = "[type='submit']";
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