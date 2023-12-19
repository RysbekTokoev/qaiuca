import { LoginPage } from "../pages/login_page";

var loginPage = new LoginPage();

export function login() {
    cy.visit('http://167.114.201.175:5000');
    loginPage.getLoginField().type(Cypress.env("login"));
    loginPage.getPasswordField().type(Cypress.env("password"));
    loginPage.getSubmitButton().click();
}
