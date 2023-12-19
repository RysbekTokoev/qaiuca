/// <reference types='Cypress' />

export class HomeClientsPage {
    constructor() {
        // Table related locators
        this.tableAgeHeader = "[mattooltip*='Возраст']";
        this.tableAgeValues = "//tr/td[2]//span[@class='crm-navigator-table__date']";

        // Pagination related locators
        this.paginationLeftArrow = ".prev";
        this.paginationRightArrow = ".next";
        this.paginationElements = ".btn";
        this.paginationPageNumberCurrent = ".current";
        this.paginationRowNumber10 = ".btn10";
        this.paginationRowNumber20 = ".btn20";
        this.paginationRowNumber50 = ".btn50";
    }

    getTableAgeHeader() {
        return cy.get(this.tableAgeHeader);
    }

    getTableAgeValues() {
        return cy.xpath(this.tableAgeValues);
    }

    getPaginationLeftArrow() {
        return cy.get(this.paginationLeftArrow);
    }

    getPaginationRightArrow() {
        return cy.get(this.paginationRightArrow);
    }

    getPaginationPageElements() {
        return cy.get(this.paginationElements);
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