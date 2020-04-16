@SC_Login
Feature: Login
	
  	@login_abnormal_case
		Scenario Outline: Login
		Given refresh the browser
		When input userid <userid>
		And input password <password>
		And Click button submit
		Then verify <result>
		And wait for minutes

		Examples:
		|userid     |password |result															|
		|020607    	|00000000	| must have a length equal to '7'		|
		|020607666  |00000000	| must have a length equal to '7'		|
		|0206076    |1234567	| Username dan Password tidak cocok	|
		|    				|00000000	| invalid field Userid			|
		|0206076    |					| invalid field Password		|
		|ABCDEFG    |00000000	| must be a string 					|
		|0206076    |123			| SSO Failure								|
		|0206051		|00000000 | ID Level 0206051 not found |
	
	
	
	
	