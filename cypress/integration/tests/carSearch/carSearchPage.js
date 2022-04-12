import { URL } from "../../../settings"

const COUNTRY_VALUE = '3'
const CITY_VALUE = '3'
const CAR_MODEL = 'Mazda 6'

const today = new Date()
const todayDate = today.toISOString().slice(0, 10);
let tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1)
const tomorrowDate = tomorrow.toISOString().slice(0, 10);

class CarSearchPage {

    static visitCarSearchPage() {
        cy.visit(URL)
    }

    static selectCountry() {
        cy.get('#country').select(COUNTRY_VALUE)
    }

    static selectCity() {
        cy.get('#city').select(CITY_VALUE)
    }

    static typeModel() {
        cy.get('#model').type(CAR_MODEL)
    }

    static typeCurrentPickUpDate() {
        cy.get('#pickup').type(todayDate)
    }

    static typeTomorrowDropOffDate() {
        cy.get('#dropoff').type(tomorrowDate)
    }

    static clickSearchButton() {
        cy.get('button[type="submit"]').click()
    }

    static checkIfSearchResultsTableIsVisible() {
        cy.get('#search-results').should('be.visible')
    }

    static checkIfResultsTableContainsOrdinalNumberColumn() {
        cy.get('#search-results > thead > tr > th:nth-child(1)').should('contain.text','#')
    }

    static checkIfResultsTableContainsCompanyNameColumn() {
        cy.get('#search-results > thead > tr > th:nth-child(2)').should('contain.text','Company')
    }

    static checkIfResultsTableContainsModelColumn() {
        cy.get('#search-results > thead > tr > th:nth-child(3)').should('contain.text','Model')
    }

    static checkIfResultsTableContainsLicensePlateColumn() {
        cy.get('#search-results > thead > tr > th:nth-child(4)').should('contain.text','License plate')
    }

    static checkIfResultsTableContainsPriceColumn() {
        cy.get('#search-results > thead > tr > th:nth-child(5)').should('contain.text','Price')
    }

    static checkIfResultsTableContainsPricePerDayColumn() {
        cy.get('#search-results > thead > tr > th:nth-child(6)').should('contain.text','Price per day')
    }

    static checkIfResultsTableContainsActionColumn() {
        cy.get('#search-results > thead > tr > th:nth-child(7)').should('contain.text','Action')
    }

    static checkIfResultsTableContainsResults() {
        cy.get('#search-results > tbody > tr').should('be.visible')
    }
}

export default CarSearchPage
