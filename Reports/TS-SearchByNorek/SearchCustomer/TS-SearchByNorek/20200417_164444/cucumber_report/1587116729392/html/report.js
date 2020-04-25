$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/NDS/include/features/SearchCustomer/SearchByNoRek.feature");
formatter.feature({
  "name": "Search Customer",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "SearchByNoRek",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SearchByNorek"
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
        "020601000002561",
        "020601000002561"
      ]
    }
  ]
});
formatter.scenario({
  "name": "SearchByNoRek",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SearchByNorek"
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
  "name": "user input account 020601000002561",
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
});