$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/dwiyunitasari/Katalon Studio/NDS-UI/include/features/SearchCustwithAcc.feature");
formatter.feature({
  "name": "Search Customer with account number",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@TC_Seacrh_Cust"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Search Customer",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@search_acc_normal_case"
    }
  ]
});
formatter.step({
  "name": "refresh the browser",
  "keyword": "Given "
});
formatter.step({
  "name": "click menu non monetary",
  "keyword": "And "
});
formatter.step({
  "name": "click menu saving",
  "keyword": "And "
});
formatter.step({
  "name": "click personal account opening menu",
  "keyword": "And "
});
formatter.step({
  "name": "write \u003cnorekening\u003e to nomor rekening field",
  "keyword": "When "
});
formatter.step({
  "name": "click search",
  "keyword": "And "
});
formatter.step({
  "name": "scroll to button open",
  "keyword": "And "
});
formatter.step({
  "name": "verify \u003cnorekening\u003e",
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
        "norekening",
        "result"
      ]
    },
    {
      "cells": [
        "020601000017508",
        "020601000017508"
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
      "name": "@TC_Seacrh_Cust"
    },
    {
      "name": "@search_acc_normal_case"
    }
  ]
});
formatter.step({
  "name": "refresh the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.refresh_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click menu non monetary",
  "keyword": "And "
});
formatter.match({
  "location": "SearchCust.click_non_monetary_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click menu saving",
  "keyword": "And "
});
formatter.match({
  "location": "SearchCust.click_saving_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click personal account opening menu",
  "keyword": "And "
});
formatter.match({
  "location": "SearchCust.click_personal_opening_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "write 020601000017508 to nomor rekening field",
  "keyword": "When "
});
formatter.match({
  "location": "SearchCust.write_no_rekening(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click search",
  "keyword": "And "
});
formatter.match({
  "location": "SearchCust.click_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "scroll to button open",
  "keyword": "And "
});
formatter.match({
  "location": "SearchCust.scroll_element_button_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify 020601000017508",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.verify(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for minutes",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.wait_for()"
});
formatter.result({
  "status": "passed"
});
});