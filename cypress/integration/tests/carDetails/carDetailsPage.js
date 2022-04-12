import CarSearchPage from "../carSearch/carSearchPage"

class CarDetailsPage {

    static searchCars() {
        CarSearchPage.selectCountry()
        CarSearchPage.selectCity()
        CarSearchPage.typeModel()
        CarSearchPage.typeCurrentPickUpDate()
        CarSearchPage.typeTomorrowDropOffDate()
        CarSearchPage.clickSearchButton()
    }

    static selectCar() {
        cy.get('#search-results > tbody > tr:nth-child(1) > td:nth-child(7) > a').click()
    }

    static checkIfNavigatedToDetails() {
        cy.url().should('contain', 'details')
    }
    
    static checkIfCarModelIsVisible() {
        cy.get('.card-header').should('be.visible')
    }

    static checkIfCarCompanyIsVisible() {
        cy.get('.card-title').should('be.visible')
    }

    static checkIfPriceIsVisible() {
        cy.get('#content > div > div > div.card-body > p:nth-child(2)').should('contain.text', 'Price')
    }

    static checkIfLocationIsVisible() {
        cy.get('#content > div > div > div.card-body > p:nth-child(3)').should('contain.text', 'Location')
    }

    static checkIfLicencePlateIsVisible() {
        cy.get('#content > div > div > div.card-body > p:nth-child(4)').should('contain.text', 'License plate')
    }

    static checkIfPickUpDateIsVisible() {
        cy.get('#content > div > div > div.card-body > h6:nth-child(5)').should('contain.text', 'Pickup date')
    }

    static checkIfDropOffDateIsVisible() {
        cy.get('#content > div > div > div.card-body > h6:nth-child(6)').should('contain.text', 'Dropoff date')
    }

    static checkIfRentButtonIsVisible() {
        cy.get('.btn.btn-primary').should('be.visible')
    }

    static clickRentButton() {
        cy.get('.btn.btn-primary').click()
    }
}

export default CarDetailsPage
