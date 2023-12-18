/// <reference types='Cypress' />
import { LoginPage } from "../../pages/login_page"
import { HomeClientsPage } from "../../pages/home_clients_page"

var login = new LoginPage();
var homeClients = new HomeClientsPage();

describe("test", ()=> {
    beforeEach("before", ()=> {
        cy.visit("/");
        login.getLoginField().type(Cypress.env("login"));
        login.getPasswordField().type(Cypress.env("password"));
        login.getSubmitButton().click();
    })

    it("test", ()=> {
        cy.contains("1").should("be.visible");
    })
})
