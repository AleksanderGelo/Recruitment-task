Feature: Viewing a car details

As a user 
I want to view the searched car details

Scenario: viewing the searched car details
    Given I entered the application
    And I searched cars for rent

    When I select a car from the table

    Then I am navigated to the car details screen
    And the car details screen contains the information about the car model
    And the car details screen contains the information about the car rental company
    And the car details screen contains the information about the price
    And the car details screen contains the information about the location
    And the car details screen contains the information about the license plate
    And the car details screen contains the information about the pick-up date
    And the car details screen contains the information about the drop-off date
    And the Rent button is visible
   