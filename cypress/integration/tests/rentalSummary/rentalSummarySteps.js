import { Given, When, Then, } from 'cypress-cucumber-preprocessor/steps'
import RentalSummaryPage from './rentalSummaryPage'
import CarSearchPage from '../carSearch/carSearchPage'
import CarDetailsPage from '../carDetails/carDetailsPage'

Given('I enter the car search application', () => {
    CarSearchPage.visitCarSearchPage()
})

Given('I selected a car', () => {
    CarDetailsPage.searchCars()
    CarDetailsPage.selectCar()
})

Given('I proceeded to the summary', () => {
    CarDetailsPage.clickRentButton()
})

When('I type name', () => {
    RentalSummaryPage.typeName()
})

When('I type last name', () => {
    RentalSummaryPage.typeLastName()
})

When('I type card number', () => {
    RentalSummaryPage.typeCardNumber()
})

When('I type email', () => {
    RentalSummaryPage.typeEmail()
})

When('I click Rent Button', () => {
    RentalSummaryPage.clickRentButton()
})

Then('I am navigated to the success page without errors', () => {
    RentalSummaryPage.checkIfSuccessfullyRedirected()
})
