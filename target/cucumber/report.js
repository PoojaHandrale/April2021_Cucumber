$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/test1.feature");
formatter.feature({
  "line": 1,
  "name": "TF login functionality validation",
  "description": "",
  "id": "tf-login-functionality-validation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3041582901,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 2,
      "value": "#Given: \"Set SkyBlue Background\" button exists; When: I click on the button; Then: the background color will change to sky blue"
    },
    {
      "line": 3,
      "value": "#Given: \"Set SkyWhite Background\" button exists; When: I click on the button; Then: the background color will change to white"
    }
  ],
  "line": 5,
  "name": "Sky Blue Background",
  "description": "",
  "id": "tf-login-functionality-validation;sky-blue-background",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Set Sky Blue Background button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on set Sky Blue Background button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the background color will change to sky blue",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.Set_Sky_Blue_Background_button_exists()"
});
formatter.result({
  "duration": 185056700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.I_click_on_set_Sky_Blue_Background_button()"
});
formatter.result({
  "duration": 86141400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.the_background_color_will_change_to_sky_blue()"
});
formatter.result({
  "duration": 199899,
  "status": "passed"
});
formatter.after({
  "duration": 700909200,
  "status": "passed"
});
formatter.before({
  "duration": 2136917000,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "White Background Change",
  "description": "",
  "id": "tf-login-functionality-validation;white-background-change",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "Set SkyWhite Background button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on set White Background button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the background color will change to white",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.set_SkyWhite_Background_button_exists()"
});
formatter.result({
  "duration": 53100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.I_click_on_set_White_Background_button()"
});
formatter.result({
  "duration": 78182700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.the_background_color_will_change_to_white()"
});
formatter.result({
  "duration": 43100,
  "status": "passed"
});
formatter.after({
  "duration": 674288000,
  "status": "passed"
});
});