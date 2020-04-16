$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/dwiyunitasari/Katalon Studio/NDS-UI/include/features/TC-Login_variation.feature");
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
      "name": "@login_abnormal_case"
    }
  ]
});
formatter.step({
  "name": "refresh the browser",
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
  "name": "verify \u003cresult\u003e",
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
        "password",
        "result"
      ]
    },
    {
      "cells": [
        "020607",
        "00000000",
        "must have a length equal to \u00277\u0027"
      ]
    },
    {
      "cells": [
        "020607666",
        "00000000",
        "must have a length equal to \u00277\u0027"
      ]
    },
    {
      "cells": [
        "0206076",
        "1234567",
        "Username dan Password tidak cocok"
      ]
    },
    {
      "cells": [
        "",
        "00000000",
        "invalid field Userid"
      ]
    },
    {
      "cells": [
        "0206076",
        "",
        "invalid field Password"
      ]
    },
    {
      "cells": [
        "ABCDEFG",
        "00000000",
        "must be a string"
      ]
    },
    {
      "cells": [
        "0206076",
        "123",
        "SSO Failure"
      ]
    },
    {
      "cells": [
        "0206051",
        "00000000",
        "ID Level 0206051 not found"
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
      "name": "@login_abnormal_case"
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
  "name": "input userid 020607",
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
  "name": "verify must have a length equal to \u00277\u0027",
  "keyword": "Then "
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
formatter.scenario({
  "name": "Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SC_Login"
    },
    {
      "name": "@login_abnormal_case"
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
  "name": "input userid 020607666",
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
  "name": "verify must have a length equal to \u00277\u0027",
  "keyword": "Then "
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
formatter.scenario({
  "name": "Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SC_Login"
    },
    {
      "name": "@login_abnormal_case"
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
  "name": "input password 1234567",
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
  "name": "verify Username dan Password tidak cocok",
  "keyword": "Then "
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
formatter.scenario({
  "name": "Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SC_Login"
    },
    {
      "name": "@login_abnormal_case"
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
  "name": "input userid ",
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
  "name": "verify invalid field Userid",
  "keyword": "Then "
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
formatter.scenario({
  "name": "Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SC_Login"
    },
    {
      "name": "@login_abnormal_case"
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
  "name": "input password ",
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
  "name": "verify invalid field Password",
  "keyword": "Then "
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
formatter.scenario({
  "name": "Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SC_Login"
    },
    {
      "name": "@login_abnormal_case"
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
  "name": "input userid ABCDEFG",
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
  "name": "verify must be a string",
  "keyword": "Then "
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
formatter.scenario({
  "name": "Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SC_Login"
    },
    {
      "name": "@login_abnormal_case"
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
  "name": "input password 123",
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
  "name": "verify SSO Failure",
  "keyword": "Then "
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
formatter.scenario({
  "name": "Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SC_Login"
    },
    {
      "name": "@login_abnormal_case"
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
  "name": "input userid 0206051",
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
  "name": "verify ID Level 0206051 not found",
  "keyword": "Then "
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