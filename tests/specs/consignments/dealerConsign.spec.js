import { test,expect } from '@playwright/test';
import { CreateAccountPage } from '../../pageobjects/CreateAccountPage';
import { ConsignPage } from '../../pageobjects/ConsignPage';

test('Create Dealer consignment', async ({ page }) => {

    const createAccount = new CreateAccountPage(page);
    const dealerConsign = new ConsignPage(page);

    await createAccount.navigateToUrl();
    await createAccount.createAccount();
    await dealerConsign.addVin(); 
    await dealerConsign.addVehicleinfo();
    await dealerConsign.addVehicleDetails();
    await dealerConsign.addShortLongDes();
    await dealerConsign.addVehiclePhotos();
    await dealerConsign.addDealerTitleDocument();
    await dealerConsign.enterDealerInfo();
    await dealerConsign.enterpersonalInfo();
    await dealerConsign.finishForm();
});