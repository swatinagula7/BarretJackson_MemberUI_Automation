import { test, expect } from '@playwright/test';
import { CreateAccLocators } from '../webelements/CreateAccLocators'
import testdata from '../datasource/testdata.json'

export class CreateAccountPage {
    constructor(page) {
        this.page = page;
        this.CreateAccWebEle = new CreateAccLocators();
        // LOCATORS
        this.acceptButton = page.locator(this.CreateAccWebEle.accept);
        this.createAccountTab = page.locator(this.CreateAccWebEle.creatAcc);
        this.firstname = page.locator(this.CreateAccWebEle.firstName);
        this.lastname = page.locator(this.CreateAccWebEle.lastName);
        this.emailField = page.locator(this.CreateAccWebEle.email).first();
        this.passwordField = page.locator(this.CreateAccWebEle.password).first();
        this.confirmPassField = page.locator(this.CreateAccWebEle.confirmPass).first();
        this.checkbox = page.locator(this.CreateAccWebEle.checkbox);
        this.createButton = page.locator(this.CreateAccWebEle.creatAccButton);
    }

    // Helper function to generate random strings
    randomString(length = 5) {
        const chars = 'abcdefghijklmnopqrstuvwxyz';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    async navigateToUrl() {
        await this.page.goto(testdata.PB_url);
    }

    async createAccount() {
        const firstName = 'user' + this.randomString(5);
        const lastName = 'test' + this.randomString(5);
        const email = 'user' + this.randomString(5) + '@yopmail.com';

        //await this.page.pause();
        await this.acceptButton.click();
        await this.createAccountTab.click();
        await this.firstname.fill(firstName);
        await this.lastname.fill(lastName);
        await this.emailField.fill(email);
        await this.passwordField.type(testdata.password, { delay: 80 });
        await this.confirmPassField.type(testdata.password, { delay: 80 });
        //await this.passwordField.fill(testdata.password);
        // await this.confirmPassField.fill(testdata.password);
        await this.checkbox.click();
        await this.page.screenshot({
            path: 'screenshots/SignUp.png',
            fullPage: true
        });
        //   await this.createButton.click();
        await this.createButton.click();
        await this.page.waitForTimeout(5000);

    }
}