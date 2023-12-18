/// <reference types='Cypress' />

class HomeClientsPage {
    constructor() {
        // Table related locators
        this.tableAgeHeader = "";
        this.tableAgeValues = "";

        // Pagination related locators
        this.pagingationLeftArrow = "";
        this.paginationRightArrow = "";
        this.paginationPageNumbers = "";
        this.paginationPageNumberCurrent = "";
        this.paginationRowNumber10 = "";
        this.paginationRowNumber20 = "";
        this.paginationRowNumber50 = "";
    }

    getPaginationLeftArrow() {
        return cy.get(this.paginationLeftArrow);
    }

    getPaginationRightArrow() {
        return cy.get(this.paginationRightArrow);
    }

    getPaginationPageNumbers() {
        return cy.get(this.paginationPageNumbers);
    }

    getPaginationPageNumberCurrent() {
        return cy.get(this.paginationPageNumberCurrent);
    }

    getPaginationRowNumber10() {
        return cy.get(this.paginationRowNumber10);
    }

    getPaginationRowNumber20() {
        return cy.get(this.paginationRowNumber20);
    }

    getPaginationRowNumber50() {
        return cy.get(this.paginationRowNumber50);
    }
}