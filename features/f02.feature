Feature: Login test

  Scenario Outline: Login with credentials
    Given User is on the page
    And User enters email as "<email>" and password as "<password>"
    Then Click on Login button
    Then Click on Flights link




    Examples:
      | email   | password |
      | mercury | mercury  |