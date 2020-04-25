$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/NDS/include/features/SearchCustomer/SearchByIDVariation.feature");
formatter.feature({
  "name": "Searc By No.Id Variation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Search BY ID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SearchByNoIDVariation"
    }
  ]
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
  "name": "user input idnum \u003cidnum\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user klik button search",
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
        "idnum",
        "result"
      ]
    },
    {
      "cells": [
        "2737377732377372",
        "data not found"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Search BY ID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SearchByNoIDVariation"
    }
  ]
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
  "name": "user input idnum 2737377732377372",
  "keyword": "And "
});
formatter.match({
  "location": "SearchCustomer.user_input_idnum(String)"
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
  "name": "verify result data not found",
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