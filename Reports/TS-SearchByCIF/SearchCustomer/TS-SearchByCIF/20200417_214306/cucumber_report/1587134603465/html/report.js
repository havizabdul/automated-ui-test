$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/NDS/include/features/SearchCustomer/SearchByCIF.feature");
formatter.feature({
  "name": "Search Customer by CIF",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "SearchByCIF",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SearchByCIF"
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
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "cifnum",
        "result"
      ]
    },
    {
      "cells": [
        "RP39804",
        "sukses"
      ]
    }
  ]
});
formatter.scenario({
  "name": "SearchByCIF",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SearchByCIF"
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
  "name": "user input cifnum RP39804",
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
});