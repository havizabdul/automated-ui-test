$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/dwiyunitasari/Katalon Studio/NDS-UI/include/features/Logout.feature");
formatter.feature({
  "name": "Logout",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SC_Logout"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Logout",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@logout_normal_case"
    }
  ]
});
formatter.step({
  "name": "Logout",
  "keyword": "Given "
});
formatter.step({
  "name": "verify \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "result"
      ]
    },
    {
      "cells": [
        "NEW DELIVERY SYSTEM"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Logout",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SC_Logout"
    },
    {
      "name": "@logout_normal_case"
    }
  ]
});
formatter.step({
  "name": "Logout",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.logout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify NEW DELIVERY SYSTEM",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verify(String)"
});
formatter.result({
  "status": "passed"
});
});