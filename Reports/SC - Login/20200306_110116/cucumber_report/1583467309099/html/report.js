$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/dwiyunitasari/Katalon Studio/NDS-UI/include/features/TC-Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SC_Login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login_normal_case"
    }
  ]
});
formatter.step({
  "name": "browser loaded successfully",
  "keyword": "Given "
});
formatter.step({
  "name": "input userid \u003cuserid\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "input password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Click button submit",
  "keyword": "And "
});
formatter.step({
  "name": "Login Success",
  "keyword": "Then "
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
        "userid",
        "password"
      ]
    },
    {
      "cells": [
        "0206076",
        "00000000"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SC_Login"
    },
    {
      "name": "@login_normal_case"
    }
  ]
});
formatter.step({
  "name": "browser loaded successfully",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.browser_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "input userid 0206076",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.input_userid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "input password 00000000",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.input_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click button submit",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.click_submit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login Success",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verify_login()"
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