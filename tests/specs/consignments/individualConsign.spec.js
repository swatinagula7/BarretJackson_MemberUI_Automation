import { test, expect } from '@playwright/test';
import { CreateAccountPage } from '../../pageobjects/CreateAccountPage';
import { ConsignPage } from '../../pageobjects/ConsignPage';

test('Create individual consignment', async ({ page }) => {

    const createAccount = new CreateAccountPage(page);
    const indiviConsign = new ConsignPage(page);

    await createAccount.navigateToUrl();
    await createAccount.createAccount();

    await indiviConsign.addVin();
    await indiviConsign.addVehicleinfo();
    await indiviConsign.addVehicleDetails();
    await indiviConsign.addShortLongDes();
    await indiviConsign.addVehiclePhotos();
    await indiviConsign.addIndiviTitleDocument();
   //await indiviConsign.addTrustTitleDocument();
    await indiviConsign.enterpersonalInfo();
    await indiviConsign.finishForm();
});