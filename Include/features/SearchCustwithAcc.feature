@TC_Seacrh_Cust
Feature: Search Customer with account number
      
  @search_acc_normal_case
  Scenario Outline: Search Customer
    Given refresh the browser
    And click menu non monetary
    And click menu saving
    And click personal account opening menu
    When write <norekening> to nomor rekening field 
    And click search 
    And scroll to button open
    And verify <norekening>
    And wait for minutes

    Examples: 
      | norekening |result|
      | 020601000017508 |020601000017508|
      
      