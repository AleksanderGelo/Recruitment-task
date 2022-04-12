Feature: Searching a car for rent

As a user 
I want to search a car for rent

Scenario: Valid search
    Given I enter the car search application

    When I select a country
    And I select a city
    And I type a model
    And I type a pick-up date
    And I type a drop-off date
    And I click the Search button

    Then the search results table is displayed
    And the search results table contains the ordinal number column
    And the search results table contains the company name column
    And the search results table contains the model column
    And the search results table contains the license plate column
    And the search results table contains the price column
    And the search results table contains the price per day column
    And the search results table contains the action column
    And the search results table is not empty
