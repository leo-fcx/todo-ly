Feature: Login

  Scenario: Invalid login
    Given I load Todo.ly page
    And I click on Login button
    And I introduce non-valid credentials in the login form
    And I submit the login form
    Then I should see an invalid credentials notification message
    Then I close the browser

  Scenario: Success login
    Given I load Todo.ly page
    And I click on Login button
    And I introduce valid credentials in the login form
    And I submit the login form
    Then I should see lading page
    Then I close the browser
