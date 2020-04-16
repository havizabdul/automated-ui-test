@SC_Login
Feature: Login

  	@login_normal_case
		Scenario Outline: Login
    Given browser loaded successfully
		When input userid <userid>
		And input password <password>
		And Click button submit
		Then Login Success
		And wait for minutes

		Examples:
		|userid     |password |
		|0206076    |00000000	|