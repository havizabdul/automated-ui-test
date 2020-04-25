$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/NDS/include/features/SearchCustomer/SearchByName.feature");
formatter.feature({
  "name": "Search By Nama Dan Tanggal Lahir",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Search By Name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SearchByName"
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
  "name": "user input nama \u003cnama\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user input tgl_lahir \u003ctgl_lahir\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user klik button search",
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
        "tgl_lahir"
      ]
    },
    {
      "cells": [
        "RUDI WINARTO",
        "1983-05-04"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Search By Name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SearchByName"
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
  "name": "user input nama \u003cnama\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "SearchCustomer.user_input_nama(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input tgl_lahir 1983-05-04",
  "keyword": "And "
});
formatter.match({
  "location": "SearchCustomer.user_input_tgl_lahir(String)"
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