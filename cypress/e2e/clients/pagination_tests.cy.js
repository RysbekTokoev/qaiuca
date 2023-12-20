/// <reference types='Cypress' />
import { HomeClientsPage } from "../../pages/home_clients_page"
import { login } from "../../support/login";

var homeClientsPage = new HomeClientsPage();

// 1. Смена пагинации по стрелкам
// 2. Смена пагинации по нажатию на номер
// 3. Появляются ли три точки
// 4. Работа количества записей 
describe("Pagination tests", ()=> {
    beforeEach("Login and set filter on age column", ()=> {
        login()
        homeClientsPage.getTableAgeHeader().click();
        cy.wait(500);
    })

    it("Pagination layout", ()=> {
        // Check if pagination elements are present and visible
        homeClientsPage.getPaginationLeftArrow().should("be.visible");
        homeClientsPage.getPaginationPageElements().should("be.visible");
        homeClientsPage.getPaginationRightArrow().should("be.visible");
        homeClientsPage.getPaginationPageNumberCurrent().should("be.visible");
        homeClientsPage.getPaginationRowNumber10().should("be.visible");
        homeClientsPage.getPaginationRowNumber20().should("be.visible");
        homeClientsPage.getPaginationRowNumber50().should("be.visible");
    })

    it("Pagination by using arrows", ()=> {
        // Remember age values before changing pagination
        homeClientsPage.getTableAgeValues().invoke("text").then((ageBefore) => {
            // Click on arrow right
            homeClientsPage.getPaginationRightArrow().click();
            cy.wait(1000);
            
            // Check if table values changed
            homeClientsPage.getTableAgeValues().invoke("text").should('not.equal', ageBefore);

            // Click on arrow left
            homeClientsPage.getPaginationLeftArrow().click();
            cy.wait(1000);
            
            // Check if table values returned to the page 1s
            homeClientsPage.getTableAgeValues().invoke("text").should('equal', ageBefore);
        });
    })

    it("Pagination by using page numbers", ()=> {
        // click on last element
        homeClientsPage.getPaginationPageElements().get('.last').click();

        // verify that it is not 1
        homeClientsPage.getPaginationPageNumberCurrent().should("not.eq", '1')
    })

    it("Empty elements exists when page is 4 or more", ()=> {
        // select 4th page
        homeClientsPage.getPaginationRightArrow().click();
        homeClientsPage.getPaginationRightArrow().click();
        homeClientsPage.getPaginationRightArrow().click();

        // check if there two empty elements
        homeClientsPage.getPaginationPageElements().get(".empty").should("have.length", 2);
    })
    
    it("Row numbers test", ()=> {
        // click on 20 rows
        homeClientsPage.getPaginationRowNumber20().click();
        
        // check if number of rows changed
        homeClientsPage.getTableAgeValues().should("have.length.above", 10).and("have.length.at.most", 20);

        // click on 20 rows
        homeClientsPage.getPaginationRowNumber50().click();
        
        // check if number of rows changed
        homeClientsPage.getTableAgeValues().should("have.length.above", 20).and("have.length.at.most", 50);
    })
})
