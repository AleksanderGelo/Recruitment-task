const NAME = 'Aleksander'
const LAST_NAME = 'Geło'
const CARD_NUMBER = '1234567'
const EMAIL = 'aleksander.gelo@test.com'

class RentalSummaryPage  {

    static typeName() {
        cy.get('#name').type(NAME)
    }

    static typeLastName() {
        cy.get('#last_name').type(LAST_NAME)
    }

    static typeCardNumber() {
        cy.get('#card_number').type(CARD_NUMBER)
    }

    static typeEmail() {
        cy.get('#email').type(EMAIL)
    }

    static clickRentButton() {
        cy.get('.btn.btn-primary').click()
    }

    static checkIfSuccessfullyRedirected() {
        cy.get('body').should('not.contain', 'Page not found')
    }
}

export default RentalSummaryPage
