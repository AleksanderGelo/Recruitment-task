Feature: Submitting rental summary

As a user 
I want to submit the car rental summary

Scenario: Submitting valid rental summary form
    Given I enter the car search application
    And I selected a car
    And I proceeded to the summary

    When I type name
    And I type last name
    And I type card number
    And I type email
    And I click Rent Button

    Then I am navigated to the success page without errors
