$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/NDS/include/features/SearchCustomer/SearchByNamaVariation.feature");
formatter.feature({
  "name": "Search Nama Variation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Search Nama Variation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SearchByNamaVariation"
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
        "nama",
        "tgl_lahir",
        "result",
        "username",
        "password",
        "status"
      ]
    },
    {
      "cells": [
        "\"\"",
        "1983-05-04",
        "nama nasabah harus diisi!",
        "0206105",
        "00000000",
        "success"
      ]
    },
    {
      "cells": [
        "Rudi Wiranto",
        "\"\"",
        "Tanggal Lahir harus diisi!",
        "0206198",
        "00000000",
        "success"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Search Nama Variation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SearchByNamaVariation"
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
  "name": "user input nama \"\"",
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
  "name": "Search Nama Variation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SearchByNamaVariation"
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
  "name": "user input nama Rudi Wiranto",
  "keyword": "And "
});
formatter.match({
  "location": "SearchCustomer.user_input_nama(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input tgl_lahir \"\"",
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