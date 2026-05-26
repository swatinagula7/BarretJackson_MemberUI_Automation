const path = require('path');
//import { test } from 'allure-playwright';
import { test, expect } from '@playwright/test';
import { ConsignOppLocators } from '../webelements/ConsignOppLocators';
import testdata from '../datasource/testdata.json';


export class ConsignPage {

    constructor(page) {

        this.page = page;
        this.ConsignOppLocators = new ConsignOppLocators();
        this.nextBtn = page.locator(this.ConsignOppLocators.nextButton);
        this.vinField = page.locator(this.ConsignOppLocators.vin);
        this.yearField = page.locator(this.ConsignOppLocators.year);
        this.makeField = page.locator(this.ConsignOppLocators.make);
        this.modelField = page.locator(this.ConsignOppLocators.model);
        this.searchField = page.locator(this.ConsignOppLocators.search);

        this.styleField = page.locator(this.ConsignOppLocators.style);

        this.powerSourceDropdown = page.locator(this.ConsignOppLocators.powerSource);

        this.batteryField = page.locator(this.ConsignOppLocators.battery);

        this.pluginDropdown = page.locator(this.ConsignOppLocators.pluginDropdown);

        this.charginTypeDropdown = page.locator(this.ConsignOppLocators.charginTypeDropdown);

        this.noOfMotersField = page.locator(this.ConsignOppLocators.noOfMoters);

        this.engineField = page.locator(this.ConsignOppLocators.engine);

        this.cylindersDropdown = page.locator(this.ConsignOppLocators.cylinders);

        this.transmissionTypeDropdown = page.locator(this.ConsignOppLocators.transmissionType);

        this.transmissionSpeedDropdown = page.locator(this.ConsignOppLocators.transmissionSpeed);

        this.exteriorColorField = page.locator(this.ConsignOppLocators.exteriorColor);

        this.interiorColorField = page.locator(this.ConsignOppLocators.interiorColor);

        this.checkbox2 = page.locator(this.ConsignOppLocators.checkbox2);

        this.conditionDropdown = page.locator(this.ConsignOppLocators.condition);

        this.yesBtn = page.locator(this.ConsignOppLocators.yes);

        this.noBtn = page.locator(this.ConsignOppLocators.no);

        this.odometerField = page.locator(this.ConsignOppLocators.odometer);

        this.shortDescField = page.locator(this.ConsignOppLocators.sd);

        this.longDescField = page.locator(this.ConsignOppLocators.ld);

        this.uploadAllBtn = page.locator(this.ConsignOppLocators.uploadAll);

        this.titleDropdown = page.locator(this.ConsignOppLocators.titleDropdown);

        this.titledToField = page.locator(this.ConsignOppLocators.titledTo);

        this.frontUpload = page.locator(this.ConsignOppLocators.front);

        this.backUpload = page.locator(this.ConsignOppLocators.back);

        this.trustUpload = page.locator(this.ConsignOppLocators.trust);

        this.einField = page.locator(this.ConsignOppLocators.ein);

        this.dealerNoField = page.locator(this.ConsignOppLocators.dealerNo);

        this.countryDropdown = page.locator(this.ConsignOppLocators.country);

        this.searchCountryField = page.locator(this.ConsignOppLocators.searchCountry);

        this.stateDropdown = page.locator(this.ConsignOppLocators.state);

        this.searchStateField = page.locator(this.ConsignOppLocators.searchState);

        this.countyDropdown = page.locator(this.ConsignOppLocators.county);

        this.searchCountyField = page.locator(this.ConsignOppLocators.searchCounty);

        this.cityField = page.locator(this.ConsignOppLocators.city);

        this.postalCodeField = page.locator(this.ConsignOppLocators.postalCode);

        this.contactNoField = page.locator(this.ConsignOppLocators.contactNo);

        this.personalAddressField = page.locator(this.ConsignOppLocators.personalAddress);

        this.businessPhNoField = page.locator(this.ConsignOppLocators.businessPhNo);

        this.addressField = page.locator(this.ConsignOppLocators.address);

        this.retrySearchBtn = page.locator(this.ConsignOppLocators.retrySearch);

        this.uploadOperatingDocBtn = page.locator(this.ConsignOppLocators.uploadopratingAgreeDocument);

        this.namedOnOpAgreementYes = page.locator(this.ConsignOppLocators.namedOnOpAgreementYes);

        this.namedOnOpAgreementNo = page.locator(this.ConsignOppLocators.namedOnOpAgreementNo);

        this.uploadDealerLicenceBtn = page.locator(this.ConsignOppLocators.uploadDealerLicence);

        this.uploadResaleLicenceBtn = page.locator(this.ConsignOppLocators.uploadResaleLicence);

        this.dealerExpCalendar = page.locator(this.ConsignOppLocators.dealerExpCalendar);

        this.yearDropdown = page.locator(this.ConsignOppLocators.yearDroopdown);

        this.selectYear = page.locator(this.ConsignOppLocators.selectYear);

        this.monthDropdown = page.locator(this.ConsignOppLocators.monthDropdown);

        this.selectMonth = page.locator(this.ConsignOppLocators.selectMonth);

        this.selectDate = page.locator(this.ConsignOppLocators.selectDate);

        this.dealerStateDropdown = page.locator(this.ConsignOppLocators.dealerState);

        this.taxIDNoField = page.locator(this.ConsignOppLocators.taxIDNo);

        this.taxExpCalendar = page.locator(this.ConsignOppLocators.taxExpCalendar);

        this.taxStateDropdown = page.locator(this.ConsignOppLocators.taxState);

        this.estimateField = page.locator(this.ConsignOppLocators.estimate);

        this.reserveDropdown = page.locator(this.ConsignOppLocators.reserveDropdown);

        this.consignSpecialistDropdown = page.locator(this.ConsignOppLocators.consignSpecialist);

        this.consignAnotherDropdown = page.locator(this.ConsignOppLocators.consignAnotherDropdown);

        this.esignatureField = page.locator(this.ConsignOppLocators.esignature);

        this.calendarButton = page.locator(this.ConsignOppLocators.calendarButton);

        this.todayDate = page.locator(this.ConsignOppLocators.todayDate);

        this.submitBtn = page.locator(this.ConsignOppLocators.submit);

        this.viewApplicationBtn = page.locator(this.ConsignOppLocators.viewApplication);
    }
    async takeScreenshot(name) {
        await this.page.screenshot({
            path: `screenshots/${name}.png`,
            fullPage: true
        });
    }

    async uploadFile(buttonLocator, filePath) {

        const [chooser] = await Promise.all([
            this.page.waitForEvent('filechooser'),
            buttonLocator.click()
        ]);

        await chooser.setFiles(filePath);
    }


    generateRandomVIN() {

        const chars = 'ABCDEFGHJKLMNPRSTUVWXYZ0123456789';

        let vin = '';

        for (let i = 0; i < 17; i++) {
            vin += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        return vin;
    }
    async selectDropdownOption(dropdownLocator, optionText) {

        await dropdownLocator.click();

        const optionsLocator = this.page.locator('div[role="option"]');

        await optionsLocator.first().waitFor({
            state: 'visible',
            timeout: 5000
        });

        if (optionText) {

            await optionsLocator
                .filter({ hasText: optionText })
                .first()
                .click();
        }

        await this.page.locator('div[role="listbox"]').waitFor({
            state: 'detached',
            timeout: 5000
        });
    }

    async nextButton() {

        // await expect(this.nextBtn).toBeVisible({ timeout: 15000 });

        // await expect(this.nextBtn).toBeEnabled({ timeout: 15000 });

        // await this.page.waitForTimeout(5000);

        // await this.nextBtn.click();

        // Verify next button enabled
        await expect(this.nextBtn).toBeEnabled({
            timeout: 60000
        });
        // Click next
        await this.nextBtn.click();
    }

    async addVin() {

        const randomVIN = this.generateRandomVIN();
        await expect(this.vinField).toBeVisible({ timeout: 15000 });

        await expect(this.vinField).toBeEditable({
            timeout: 120000
        });

        await this.vinField.click();

        await this.vinField.fill(randomVIN);

        //  await this.page.waitForTimeout(2000);

        await this.nextButton();
    }

    async addVehicleinfo() {

        await expect(this.yearField).toBeVisible();
        await expect(this.yearField).toBeEnabled();
        await this.page.waitForTimeout(3000);

        await this.yearField.fill(testdata.year);

        await expect(this.makeField).toBeVisible();
        await expect(this.makeField).toBeEnabled();
        await this.page.waitForTimeout(3000);
        await this.makeField.click();
        await this.searchField.fill(testdata.make);
        await this.page.getByRole('option', { name: testdata.make, exact: true }).click();

        await expect(this.modelField).toBeEnabled({ timeout: 60000 });
        await this.modelField.click();
        await this.searchField.fill(testdata.model);
        await this.page.getByRole('option', { name: testdata.model, exact: true }).click();
        await this.styleField.fill(testdata.style);
        await this.selectDropdownOption(this.powerSourceDropdown, testdata.powerSource);

        if (testdata.powerSource === "Hybrid") {

            await this.batteryField.fill(testdata.battery);

            await this.selectDropdownOption(
                this.pluginDropdown,
                testdata.pluginDropdown
            );

        } else if (testdata.powerSource === "Electric") {

            await this.batteryField.fill(testdata.battery);

            await this.selectDropdownOption(
                this.charginTypeDropdown,
                testdata.charginTypeDropdown
            );

            await this.noOfMotersField.fill(testdata.noOfMoters);
        }

        await this.engineField.fill(testdata.engine);

        if (testdata.powerSource !== "Electric") {

            await this.selectDropdownOption(
                this.cylindersDropdown,
                testdata.cylinders
            );
        }

        await this.selectDropdownOption(
            this.transmissionTypeDropdown,
            testdata.transmissionType
        );

        await this.selectDropdownOption(
            this.transmissionSpeedDropdown,
            testdata.transmissionSpeed
        );

        await this.exteriorColorField.fill(testdata.exteriorColor);

        await this.interiorColorField.fill(testdata.interiorColor);

        await this.checkbox2.click();

        // await this.page.waitForTimeout(1000);
        await this.takeScreenshot('vehicle-info');
        await this.nextButton();
    }

    async addVehicleDetails() {

        await this.selectDropdownOption(
            this.conditionDropdown,
            testdata.vehicleCondition
        );

        await this.yesBtn.click();

        await this.noBtn.click();
        // await this.page.waitForTimeout(1000);
        await this.takeScreenshot('vehicle-details');

        await this.nextButton();
    }

    async addShortLongDes() {

        if (Number(testdata.year) > 2010) {

            await this.odometerField.fill(testdata.odometer);
        }

        await this.shortDescField.fill(testdata.shortDescription);

        await this.longDescField.fill(testdata.longDescription);

        //  await this.page.waitForTimeout(3000);
        await this.takeScreenshot('description');

        await this.nextButton();
    }

    // async addVehiclePhotos() {

    //     const filesToUpload = [
    //         testdata.frontImage,
    //         testdata.rearImage,
    //         testdata.sideImage,
    //         testdata.interiorImage,
    //         testdata.engineImage,
    //         testdata.vinImage,
    //         testdata.odometerPath
    //     ];

    //     const absolutePaths = filesToUpload.map(f => path.resolve(f));
    //     await this.page.locator('input[type="file"]').setInputFiles(absolutePaths);
    //     await this.uploadAllBtn.click();
    //     await this.page.waitForTimeout(35000);
    //     await this.takeScreenshot('vehicle-photos');
    //     await this.nextButton();
    // }

    async addVehiclePhotos() {

        const filesToUpload = [
            testdata.frontImage,
            testdata.rearImage,
            testdata.sideImage,
            testdata.interiorImage,
            testdata.engineImage,
            testdata.vinImage,
            testdata.odometerPath
        ];

        const absolutePaths = filesToUpload.map(f => path.resolve(f));

        // Upload files
        await this.page.locator('input[type="file"]')
            .setInputFiles(absolutePaths);

        // Click upload
        await this.uploadAllBtn.click();

        // Wait for upload API response
        await this.page.waitForResponse(resp =>
            resp.url().includes('/UploadPhotos') &&
            resp.status() === 200,
            { timeout: 60000 }
        );

        // Wait until Next button enabled
        await expect(this.nextBtn).toBeEnabled({
            timeout: 60000
        });

        await this.takeScreenshot('vehicle-photos');

        await this.nextBtn.click();
    }

    async addIndiviTitleDocument() {

        await this.selectDropdownOption(
            this.titleDropdown,
            "Individual"
        );

        await this.titleDocument();


        //await this.page.waitForTimeout(9000);
        await this.takeScreenshot('title-document');

        await this.nextButton();
    }

    async addTrustTitleDocument() {

        await this.selectDropdownOption(
            this.titleDropdown,
            "Trust"
        );

        await this.titleDocument();

        // // Upload Trust Document
        // await this.uploadFile(
        //     this.page.locator(this.consignLocators.trust),
        //     testdata.trustDocument
        // );

        // Upload Trust document
        await this.trustUpload.setInputFiles(
            path.resolve(testdata.trustDocument)
        );

        await this.page.waitForResponse(resp =>
            resp.url().includes('/UploadDocuments') &&
            resp.status() === 200,
            { timeout: 60000 }
        );

        await this.takeScreenshot('trust-title-document');

        await this.page.waitForTimeout(3000);

        await this.nextButton();
    }

    async addBusinessTitleDocument() {

        await this.selectDropdownOption(
            this.titleDropdown,
            "Business"
        );

        await this.titleDocument();

        await this.einField.fill(testdata.ein);
        await this.takeScreenshot('business-title-document');


        // await this.page.waitForTimeout(6000);

        await this.nextButton();
    }


    // async titleDocument() {

    //     await this.titledToField.fill(testdata.titledTo);

    //     await this.uploadFile(
    //         this.frontUpload,
    //         testdata.titlefront
    //     );

    //     await this.uploadFile(
    //         this.backUpload,
    //         testdata.titleback
    //     );

    // }
    async titleDocument() {

        await this.titledToField.fill(testdata.titledTo);

        // Upload front title document
        await this.frontUpload.setInputFiles(
            path.resolve(testdata.titlefront)
        );

        await this.page.waitForResponse(resp =>
            resp.url().includes('/UploadDocuments') &&
            resp.status() === 200,
            { timeout: 60000 }
        );

        // Upload back title document
        await this.backUpload.setInputFiles(
            path.resolve(testdata.titleback)
        );

        await this.page.waitForResponse(resp =>
            resp.url().includes('/UploadDocuments') &&
            resp.status() === 200,
            { timeout: 60000 }
        );
    }


    async enterAddress() {

        await this.countryDropdown.click();

        await this.searchCountryField.fill(testdata.country);

        await this.page.locator("[role='option']", {
            hasText: testdata.country
        }).click();

        await this.stateDropdown.click();

        await this.searchStateField.fill(testdata.state);

        await this.page.locator("[role='option']", {
            hasText: testdata.state
        }).click();

        await this.countyDropdown.click();

        await this.searchCountyField.fill(testdata.county);

        await this.page.locator("[role='option']", {
            hasText: testdata.county
        }).click();

        await this.cityField.fill(testdata.city);

        await this.postalCodeField.fill(testdata.postalCode);

        await this.page.waitForTimeout(2000);

        await this.nextButton();
    }

    async enterpersonalInfo() {

        await this.contactNoField.fill(testdata.contactNo);

        await this.personalAddressField.type(testdata.address, {
            delay: 80
        });
        await this.personalAddressField.press("Enter");
        await this.enterAddress();
        await this.takeScreenshot('Personal-info');
        // await this.page.waitForTimeout(3000);
        await this.nextButton();
    }

    async opDocuAndYesorNo() {
        // Upload operatingAgreement Document
        // await this.uploadFile(this.uploadOperatingDocBtn, testdata.operatingAgreement);

        // Upload front title document
        await this.uploadOperatingDocBtn.setInputFiles(
            path.resolve(testdata.operatingAgreement)
        );

        await this.page.waitForResponse(resp =>
            resp.url().includes('/Documents') &&
            resp.status() === 200,
            { timeout: 60000 }
        );








        if (testdata.namedOnOpDocu === "Yes") {

            await this.namedOnOpAgreementYes.click();

        } else {

            await this.namedOnOpAgreementNo.click();
        }
    }

    async enterBusinessInfo() {

        await this.businessPhNoField.fill(testdata.businessPhNo);

        await this.retrySearchBtn.click();

        await this.addressField.type(testdata.address, {
            delay: 80
        });

        await this.addressField.press("Enter");

        await this.enterAddress();

        await this.opDocuAndYesorNo();

        await this.takeScreenshot('Business-info');
        await this.page.waitForTimeout(8000);
        await this.nextButton();
    }
    async addDealerTitleDocument() {

        await this.selectDropdownOption(
            this.titleDropdown,
            "Dealer"
        );

        await this.titleDocument();

        await this.dealerNoField.fill(testdata.dealerNo);
        await this.takeScreenshot('dealer-title-document');
        // await this.page.waitForTimeout(9000);

        await this.nextButton();
    }

    async enterDealerInfo() {

        await this.businessPhNoField.fill(testdata.businessPhNo);

        // await this.uploadFile(
        //     this.uploadDealerLicenceBtn,
        //     testdata.dealerLicense
        // );

        // await this.uploadFile(
        //     this.uploadResaleLicenceBtn,
        //     testdata.resaleLicense
        // );

        await this.uploadDealerLicenceBtn.setInputFiles(
            path.resolve(testdata.dealerLicense)
        );

        await this.page.waitForResponse(resp =>
            resp.url().includes('/Documents') &&
            resp.status() === 200,
            { timeout: 60000 }
        );

        await this.uploadResaleLicenceBtn.setInputFiles(
            path.resolve(testdata.resaleLicense)
        );

        await this.page.waitForResponse(resp =>
            resp.url().includes('/Documents') &&
            resp.status() === 200,
            { timeout: 60000 }
        );

        await this.opDocuAndYesorNo();

        await this.dealerExpCalendar.click();

        await this.yearDropdown.click();

        await this.selectYear.click();

        await this.monthDropdown.click();

        await this.selectMonth.click();

        await this.selectDate.click({ force: true });

        await this.dealerStateDropdown.click();

        await this.searchStateField.fill(testdata.state);

        await this.page.keyboard.press('Enter');

        await this.taxIDNoField.fill(testdata.taxIdNo);

        await this.taxExpCalendar.click();

        await this.yearDropdown.click();

        await this.selectYear.click();

        await this.monthDropdown.click();

        await this.selectMonth.click();

        await this.selectDate.click();

        await this.taxStateDropdown.click();

        await this.searchStateField.fill(testdata.state);

        await this.page.keyboard.press('Enter');

        await this.takeScreenshot('Dealer-info');
        await this.page.waitForTimeout(20000);
        await this.nextButton();
    }

    async finishForm() {

        await this.estimateField.waitFor({
            state: "visible"
        });

        await this.estimateField.fill(testdata.estimate);

        await this.selectDropdownOption(
            this.reserveDropdown,
            testdata.reserveType
        );

        await this.selectDropdownOption(
            this.consignSpecialistDropdown,
            testdata.consignSpecialName
        );

        await this.selectDropdownOption(
            this.consignAnotherDropdown,
            testdata.consignAnother
        );
        await this.page.waitForTimeout(3000);
        await this.nextBtn.click();

        await this.esignatureField.fill(testdata.esignature);

        await this.calendarButton.click();

        await this.todayDate.click();

        await this.takeScreenshot('Form-info');


        await this.submitBtn.click();

        // await this.page.waitForTimeout(3000);


        await expect(this.viewApplicationBtn).toBeEnabled({
            timeout: 60000
        });
        await this.viewApplicationBtn.click();
        //await this.page.waitForTimeout(5000);
        //await this.page.waitForLoadState('networkidle');
        await this.takeScreenshot('Consignment-summary');
    }
}
