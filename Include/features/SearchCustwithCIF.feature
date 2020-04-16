@TC_Seacrh_Cust
Feature: Search Customer with CIF

  @search_cif_normal_case
  Scenario Outline: Search Customer
    Given refresh the browser
    And click menu non monetary
    And click menu saving
    And click personal account opening menu
    When write <cifnum> to cif field
    And click search 
    And scroll to button open
    And verify <cifnum>
    And wait for minutes

    Examples: 
      |cifnum |
      |DP10157 |