$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/NDS/include/features/SearchCustomer/SearchByNorekVariation.feature");
formatter.feature({
  "name": "Search Customer By variation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Search Customer",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SearchCustomer"
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
  "name": "user input account \u003caccount\u003e",
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
        "account",
        "result"
      ]
    },
    {
      "cells": [
        "478732747332628",
        "Data tidak ditemukan"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Search Customer",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SearchCustomer"
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
  "name": "user input account 478732747332628",
  "keyword": "And "
});
formatter.match({
  "location": "SearchCustomer.user_input_account(String)"
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
  "name": "verify result Data tidak ditemukan",
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