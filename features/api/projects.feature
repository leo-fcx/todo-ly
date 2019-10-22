Feature: Projects

  Scenario: Home is one of the default projects
    Given I have an authentication Token
    Then I can get all projects that I have created
    And I can see Home project as part of default projects

  Scenario: Create new project
    Given I have an authentication Token
    Then I can create a new project
