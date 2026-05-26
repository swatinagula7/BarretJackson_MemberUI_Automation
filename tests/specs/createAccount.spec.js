import { test } from '@playwright/test';
import { CreateAccountPage } from '../pageobjects/CreateAccountPage';

test('Create account', async ({ page }) => {


    // Create instance of your page object
    const createAccount = new CreateAccountPage(page);
    await createAccount.navigateToUrl();
    // Fill the form and create account
   // await page.pause();
    await createAccount.createAccount();
});



    