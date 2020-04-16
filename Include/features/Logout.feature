@SC_Logout
Feature: Logout

  	@logout_normal_case
		Scenario Outline: Logout
    Given Logout
    Then verify <result>
    
    Examples:
    |result|
    |NEW DELIVERY SYSTEM|