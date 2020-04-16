@TC_Seacrh_Cust
Feature: Search Customer with Name

   @search_name_normal_case
  Scenario Outline: Search Customer
    Given refresh the browser
    And click menu non monetary
    And click menu saving
    And click personal account opening menu
    When write <name> to name field
    And write <birthdate> to birthdate field
    And click search 
    And scroll to button open
    And wait for minutes
    And wait for minutes
    And wait for minutes
    And verify <birthdate>
    And wait for minutes

    Examples: 
      | name  | birthdate |
      | DANUTA PUTRI DEM | 1984-06-20 |