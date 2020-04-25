$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/NDS/include/features/login/login.feature");
formatter.feature({
  "name": "login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
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
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "status"
      ]
    },
    {
      "cells": [
        "0206196",
        "00000000",
        "success"
      ]
    }
  ]
});
formatter.scenario({
  "name": "login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
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
  "name": "user input username 0206196",
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
});