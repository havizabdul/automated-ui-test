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


class SearchCust {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */

	@Given("click menu non monetary")
	def click_non_monetary_menu() {
		//WebUI.scrollToElement(findTestObject('Object Repository/Page_Non Monetary/Menu_General'), 30)
		WebUI.scrollToPosition(50, 60)
		WebUI.delay(1)
		WebUI.click(findTestObject('Object Repository/Page_Non Monetary/Menu_Non Monetary'))
		WebUI.delay(1)
	}

	@And("click menu saving")
	def click_saving_menu() {
		WebUI.click(findTestObject('Object Repository/Page_Non Monetary/Menu_Saving'))
		WebUI.delay(1)
	}

	@And("click personal account opening menu")
	def click_personal_opening_menu() {
		WebUI.click(findTestObject('Object Repository/Page_Non Monetary/Menu_Personal Account Opening'))
		WebUI.delay(1)
	}

	@When("write (.*) to nomor rekening field")
	def write_no_rekening(String norek) {
		WebUI.setText(findTestObject('Page_New Delivery System/input_norekening'), norek)
	}

	@When("write (.*) to cif field")
	def write_cif(String cifnum) {
		WebUI.setText(findTestObject('Page_New Delivery System/input_CIF'), cifnum)
	}

	@When("write (.*) to id field")
	def write_id(String id) {
		WebUI.setText(findTestObject('Page_New Delivery System/input_IdKTP'), id)
	}

	@When("write (.*) to name field")
	def write_name(String name) {
		WebUI.setText(findTestObject('Page_New Delivery System/input_name'), name)
	}

	@And("write (.*) to birthdate field")
	def write_birthdate(String birthdate){
		WebUI.setText(findTestObject('Page_New Delivery System/input_birthdate'), birthdate)
	}

	@And("click search")
	def click_search() {
		WebUI.click(findTestObject('Object Repository/Page_New Delivery System/button_Search'))
		WebUI.delay(2)
	}
	@And("scroll to button open")
	def scroll_element_button_open(){
		WebUI.scrollToElement(findTestObject('Page_New Delivery System/button_Open New'), 30)
		WebUI.delay(2)
	}

	//	@And("verify (.*) result")
	//	def see_the_result(String result) {
	//		WebUI.verifyTextPresent(result, false, FailureHandling.OPTIONAL)
	//	}
}