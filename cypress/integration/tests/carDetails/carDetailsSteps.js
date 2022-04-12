import { Given, When, Then, } from 'cypress-cucumber-preprocessor/steps'
import CarDetailsPage from './carDetailsPage'
import CarSearchPage from '../carSearch/carSearchPage'

Given('I entered the application', () => {
    CarSearchPage.visitCarSearchPage()
})

Given('I searched cars for rent', () => {
    CarDetailsPage.searchCars()
})

When('I select a car from the table', () => {
    CarDetailsPage.selectCar()
})

Then('I am navigated to the car details screen', () => {
    CarDetailsPage.checkIfNavigatedToDetails()
})

Then('the car details screen contains the information about the car model', () => {
    CarDetailsPage.checkIfCarModelIsVisible()
})

Then('the car details screen contains the information about the car rental company', () => {
    CarDetailsPage.checkIfCarCompanyIsVisible()
})

Then('the car details screen contains the information about the price', () => {
    CarDetailsPage.checkIfPriceIsVisible()
})

Then('the car details screen contains the information about the location', () => {
    CarDetailsPage.checkIfLocationIsVisible()
})

Then('the car details screen contains the information about the license plate', () => {
    CarDetailsPage.checkIfLicencePlateIsVisible()
})

Then('the car details screen contains the information about the pick-up date', () => {
    CarDetailsPage.checkIfPickUpDateIsVisible()
})

Then('the car details screen contains the information about the drop-off date', () => {
    CarDetailsPage.checkIfDropOffDateIsVisible()
})

Then('the Rent button is visible', () => {
    CarDetailsPage.checkIfRentButtonIsVisible()
})
