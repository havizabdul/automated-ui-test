import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords

import internal.GlobalVariable

import MobileBuiltInKeywords as Mobile
import WSBuiltInKeywords as WS
import WebUiBuiltInKeywords as WebUI

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When


class LoginSteps {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */
	@Given("browser loaded successfully")
	def browser_loaded() {
		WebUI.openBrowser('')
		//WebUI.navigateToUrl('http://10.106.14.21:8091/#/Login')
		WebUI.navigateToUrl('http://172.18.136.38/#/Login')
		WebUI.maximizeWindow()
	}

	@Given("refresh the browser")
	def refresh_browser(){
		WebUI.refresh()
		WebUI.delay(3)
	}

	@When("input userid (.*)")
	def input_userid(String userid) {
		WebUI.setText(findTestObject('Object Repository/Page_Login/input_username'), userid)
	}

	@And("input password (.*)")
	def input_password(String password) {
		WebUI.setText(findTestObject('Object Repository/Page_Login/input_Password'), password)
	}

	@And("Click button submit")
	def click_submit(){
		WebUI.click(findTestObject('Object Repository/Page_Login/button_Login'))
		WebUI.delay(2)
	}

	@Then("Login Success")
	def verify_login(){
		WebUI.verifyTextPresent('NEW DELIVERY SYSTEM', false)
	}

	@And("wait for minutes")
	def wait_for(){
		WebUI.delay(3)
	}

	@Given("Logout")
	def logout(){
		WebUI.click(findTestObject('Object Repository/Page_Login/button_logout'))
		WebUI.delay(2)
	}

	@Then("verify (.*)")
	def verify(String result){
		WebUI.verifyTextPresent(result, false, FailureHandling.OPTIONAL)
	}
}