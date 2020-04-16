@TC_Seacrh_Cust
Feature: Search Customer with ID

  @search_id_normal_case
  Scenario Outline: Search Customer
    Given refresh the browser
    And click menu non monetary
    And click menu saving
    And click personal account opening menu
    When write <noktp> to id field 
    And click search 
    And scroll to button open
    And verify <noktp>
    And wait for minutes

    Examples: 
      | noktp  |
      | 1871016006840016 |