import { Given, When, Then, } from 'cypress-cucumber-preprocessor/steps'
import CarSearchPage from './carSearchPage'

Given('I enter the car search application', () => {
    CarSearchPage.visitCarSearchPage()
})

When('I select a country', () => {
    CarSearchPage.selectCountry()
})

When('I select a city', () => {
   CarSearchPage.selectCity()
})

When('I type a model', () => {
    CarSearchPage.typeModel()
})

When('I type a pick-up date', () => {
    CarSearchPage.typeCurrentPickUpDate()
})

When('I type a drop-off date', () => {
    CarSearchPage.typeTomorrowDropOffDate()
})

When('I click the Search button', () => {
   CarSearchPage.clickSearchButton()
})

Then('the search results table is displayed', () => {
    CarSearchPage.checkIfSearchResultsTableIsVisible()
})

Then('the search results table contains the ordinal number column', () => {
    CarSearchPage.checkIfResultsTableContainsOrdinalNumberColumn()
    
})

Then('the search results table contains the company name column', () => {
    CarSearchPage.checkIfResultsTableContainsCompanyNameColumn()
})

Then('the search results table contains the model column', () => {
    CarSearchPage.checkIfResultsTableContainsModelColumn()
})

Then('the search results table contains the license plate column', () => {
    CarSearchPage.checkIfResultsTableContainsLicensePlateColumn()
})

Then('the search results table contains the price column', () => {
    CarSearchPage.checkIfResultsTableContainsPriceColumn()
})

Then('the search results table contains the price per day column', () => {
    CarSearchPage.checkIfResultsTableContainsPricePerDayColumn()
})

Then('the search results table contains the action column', () => {
    CarSearchPage.checkIfResultsTableContainsActionColumn()
})

Then('the search results table is not empty', () => {
    CarSearchPage.checkIfResultsTableContainsResults()
})
