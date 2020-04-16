import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable

WebUI.openBrowser('')

WebUI.navigateToUrl('http://172.18.136.38/#/Login')

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_Non Monetary'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_Saving'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_Personal Account Opening'))

WebUI.setText(findTestObject('Page_New Delivery System/input_norekening'), '0206')

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_Search customerNo Rekening'))

WebUI.setText(findTestObject('Page_New Delivery System/input_norekening'), '020601000635500')

WebUI.setText(findTestObject('Page_New Delivery System/input_CIF'), 'cif')

WebUI.setText(findTestObject('Page_New Delivery System/input_IdKTP'), '1671')

WebUI.setText(findTestObject('Page_New Delivery System/input_name'), 'dwi ')

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/i_chevron_left'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_1997'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_February'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_Jun'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_15'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_Nama LengkapTanggal Lahire'))

WebUI.setText(findTestObject('Object Repository/Page_New Delivery System/input_Nama Lengkap_qf_aa2d1882'), '1997-06-03')

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_Search'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/button_Continue'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/button_Open New'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_Ya_q-radio__outer-circle a'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_Tidak_q-radio__outer-circl'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_Tidak_q-radio__outer-circl_1'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_Tidak_q-radio__outer-circl_2'))

WebUI.setText(findTestObject('Object Repository/Page_New Delivery System/input_Tidak_tin'), '89')

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_TIN (Tax Identification Nu'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_Tidak_q-radio__outer-circl_3'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_Tidak_q-radio__outer-circl_4'))

WebUI.sendKeys(findTestObject('Object Repository/Page_New Delivery System/input_Tidak_addTaxStatus.taxCo'), Keys.chord(Keys.ENTER))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_menuPersonal Account Openi'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_Ada nomor TIN'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_Pilih negara_q-radio__oute'))

WebUI.setText(findTestObject('Object Repository/Page_New Delivery System/input_Tidak_addTaxStatus.tinCo'), '34')

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/button_Tambah'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_Ya_q-radio__outer-circle a_1'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/button_Continue'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_Data Pekerjaan_nationality'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_WNI'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_Kewarganegaraan_nation'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_INDONESIA'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_Negara_idType'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_KTP'))

WebUI.setText(findTestObject('Object Repository/Page_New Delivery System/input_Jenis Identitas Utama_id'), '1671145506920003')

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/form_WNIKewarganegaraanarrow_d'))

WebUI.setText(findTestObject('Object Repository/Page_New Delivery System/input_No Identitas Utama_issue'), '14-03-1992')

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/i_event'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_2020'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/i_chevron_left'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_2009'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_10'))

WebUI.setText(findTestObject('Object Repository/Page_New Delivery System/input_Tanggal ID Diterbitkan_e'), '2020-12-31')

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_Jenis Identitas Pelengkap'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_KITAS'))

WebUI.setText(findTestObject('Object Repository/Page_New Delivery System/input_Jenis Identitas Pelengka'), '00')

WebUI.setText(findTestObject('Object Repository/Page_New Delivery System/input_Alamat Sesuai ID_postCod'), '30266')

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_PELAJARMAHASISWA'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_Perempuan'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_Jenis Kelamin_golNasabah'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_Penduduk'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_TAMAT SDSEDERAJAT'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_S1'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_Pendidikan Terakhir_religi'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_Islam'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_Nama Gadis Ibu Kandung_npw'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_Sudah memiliki NPWP'))

WebUI.setText(findTestObject('Object Repository/Page_New Delivery System/input_Memiliki NPWP_npwpNumber'), '994')

WebUI.setText(findTestObject('Object Repository/Page_New Delivery System/input_NPWP_phoneNumber'), '000')

WebUI.setText(findTestObject('Object Repository/Page_New Delivery System/input_Informasi Kontak Telepon'), '00')

WebUI.setText(findTestObject('Object Repository/Page_New Delivery System/input_Informasi Kontak Handpho'), '00')

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_Jenis Media Sosial'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_Facebook'))

WebUI.setText(findTestObject('Object Repository/Page_New Delivery System/input_Jenis Media Sosial_accou'), 'll')

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_Nama AkunEmail_socialMedia'))

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_Instagram'))

WebUI.setText(findTestObject('Object Repository/Page_New Delivery System/input_Jenis Media Sosial 2_acc'), '00')

WebUI.setText(findTestObject('Object Repository/Page_New Delivery System/input_Nama AkunEmail 2_current'), '00')

WebUI.setText(findTestObject('Object Repository/Page_New Delivery System/input_Alamat Domisili_currentP'), '00')

WebUI.click(findTestObject('Object Repository/Page_New Delivery System/div_Back'))

