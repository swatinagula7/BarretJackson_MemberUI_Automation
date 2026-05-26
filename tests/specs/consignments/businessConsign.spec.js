import { test,expect } from '@playwright/test';
import { CreateAccountPage } from '../../pageobjects/CreateAccountPage';
import { ConsignPage } from '../../pageobjects/ConsignPage';

test('Create Business consignment', async ({ page }) => {

    const createAccount = new CreateAccountPage(page);
    const businessConsign = new ConsignPage(page);

    await createAccount.navigateToUrl();
    await createAccount.createAccount();
    await businessConsign.addVin();
    await businessConsign.addVehicleinfo();
    await businessConsign.addVehicleDetails();
    await businessConsign.addShortLongDes();
    await businessConsign.addVehiclePhotos();
    await businessConsign.addBusinessTitleDocument();
    await businessConsign.enterBusinessInfo();
    await businessConsign.enterpersonalInfo();
    await businessConsign.finishForm();
});