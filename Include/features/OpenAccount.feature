@Fatca
Feature: Open Account Form
	#melakukan Input form fatca 

	
	@NDSGO-327
	Scenario Outline: Open Personal Account 
		    Given browser loaded successfully
				When input userid <userid>
				And input password <password>
				And Click button submit
				And Login Success
				Then wait for minutes
				
	Examples:
				|userid     |password |
		    |0206051    |00000000	|
		    |0206001    |00000000	|