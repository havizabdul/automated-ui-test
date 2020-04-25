$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/NDS/include/features/SearchCustomer/SearchByCIFVariation.feature");
formatter.feature({
  "name": "Search by CIF Variation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Search by CIF Variation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "user berada di halaman login",
  "keyword": "Given "
});
formatter.step({
  "name": "user input username \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "user input password \u003cpassword\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "user klik submit",
  "keyword": "And "
});
formatter.step({
  "name": "user klik non monitory",
  "keyword": "Given "
});
formatter.step({
  "name": "user klik CIF",
  "keyword": "Then "
});
formatter.step({
  "name": "user klik inquiry",
  "keyword": "And "
});
formatter.step({
  "name": "user input cifnum \u003ccifnum\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user klik button search",
  "keyword": "And "
});
formatter.step({
  "name": "wait for minutes",
  "keyword": "And "
});
formatter.step({
  "name": "verify result \u003cresult\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "wait for minutes",
  "keyword": "And "
});
formatter.step({
  "name": "user klik logout",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "cifnum",
        "result",
        "username",
        "password",
        "status"
      ]
    },
    {
      "cells": [
        "3874837",
        "No records found",
        "0206198",
        "00000000",
        "success"
      ]
    },
    {
      "cells": [
        "tyttttt",
        "No records found",
        "0206105",
        "00000000",
        "success"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Search by CIF Variation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "user berada di halaman login",
  "keyword": "Given "
});
formatter.match({
  "location": "loginSteps.user_berada_di_halaman_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input username 0206198",
  "keyword": "When "
});
formatter.match({
  "location": "loginSteps.user_input_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input password 00000000",
  "keyword": "Then "
});
formatter.match({
  "location": "loginSteps.user_input_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user klik submit",
  "keyword": "And "
});
formatter.match({
  "location": "loginSteps.user_klik_submit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user klik non monitory",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchCustomer.user_klik_non_monitory()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user klik CIF",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchCustomer.user_klik_CIF()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user klik inquiry",
  "keyword": "And "
});
formatter.match({
  "location": "SearchCustomer.user_klik_inquiry()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input cifnum 3874837",
  "keyword": "And "
});
formatter.match({
  "location": "SearchCustomer.user_input_cifnum(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user klik button search",
  "keyword": "And "
});
formatter.match({
  "location": "SearchCustomer.user_klik_button_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for minutes",
  "keyword": "And "
});
formatter.match({
  "location": "SearchCustomer.wait_for()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify result No records found",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchCustomer.verify(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for minutes",
  "keyword": "And "
});
formatter.match({
  "location": "SearchCustomer.wait_for()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user klik logout",
  "keyword": "And "
});
formatter.match({
  "location": "loginSteps.user_klik_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search by CIF Variation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "user berada di halaman login",
  "keyword": "Given "
});
formatter.match({
  "location": "loginSteps.user_berada_di_halaman_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input username 0206105",
  "keyword": "When "
});
formatter.match({
  "location": "loginSteps.user_input_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input password 00000000",
  "keyword": "Then "
});
formatter.match({
  "location": "loginSteps.user_input_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user klik submit",
  "keyword": "And "
});
formatter.match({
  "location": "loginSteps.user_klik_submit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user klik non monitory",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchCustomer.user_klik_non_monitory()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user klik CIF",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchCustomer.user_klik_CIF()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user klik inquiry",
  "keyword": "And "
});
formatter.match({
  "location": "SearchCustomer.user_klik_inquiry()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input cifnum tyttttt",
  "keyword": "And "
});
formatter.match({
  "location": "SearchCustomer.user_input_cifnum(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user klik button search",
  "keyword": "And "
});
formatter.match({
  "location": "SearchCustomer.user_klik_button_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for minutes",
  "keyword": "And "
});
formatter.match({
  "location": "SearchCustomer.wait_for()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify result No records found",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchCustomer.verify(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for minutes",
  "keyword": "And "
});
formatter.match({
  "location": "SearchCustomer.wait_for()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user klik logout",
  "keyword": "And "
});
formatter.match({
  "location": "loginSteps.user_klik_logout()"
});
formatter.result({
  "status": "passed"
});
});