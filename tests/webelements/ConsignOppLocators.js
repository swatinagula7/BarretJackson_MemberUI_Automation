export class ConsignOppLocators {
    constructor() {
        this.vin = "//input[@aria-label='Enter VIN']"
        //vehicle Info
        this.nextButton = "//button[@type='submit' and .//span[text()='Next']]"//"//span[text()='Next'][1]"
        this.year = "//input[@aria-roledescription='Number field']"
        this.make = "//span[text()='Make']/following::button[1]"//"//span[text()='Make']/parent::div/following-sibling::button"//"//button[@id='react-aria6884806113-_r_b2_' and contains(@class,'outline-brand-blue-600')]"
        this.search = "//input[@placeholder='Search…']"
        this.option = "//div[@role='option']"
        this.model = "//span[text()='Model']/parent::div/following-sibling::button"
        this.style = "//input[@placeholder='EX: COUPE']"
        this.powerSource = "//span[text()='Power source']/parent::div/following-sibling::button"

        this.battery = "//label[contains(text(),'Original battery capacity?')]/parent::div//input[@type='text']"
        this.pluginDropdown = "//span[contains(text(),'Plugin or Standard Hybrid?')]/parent::div/following-sibling::button[@type='button']"
        this.charginTypeDropdown = "//span[contains(text(),'Supported charging types')]/parent::div/following-sibling::button[@type='button']"
        this.noOfMoters = "//label[contains(text(),'Number of motors')]/parent::div//input[@type='text']"
        this.engine = "//input[@placeholder='EX: 400 CID']"
        this.cylinders = "//span[text()='Cylinders']/parent::div/following-sibling::button"
        this.transmissionType = "//span[text()='Transmission type']/parent::div/following-sibling::button"
        this.capacity = "//input[@id='react-aria6884806113-_r_4rd_']"
        this.charging = "//button[@id='react-aria6884806113-_r_4rn_']"
        this.transmissionSpeed = "//span[text()='Transmission speeds']/parent::div/following-sibling::button"
        this.exteriorColor = "//input[@placeholder='EX: CAROUSEL RED']"
        this.interiorColor = "//input[@placeholder='EX: BLACK']"
        this.checkbox2 = "//span[contains(@class,'flex h-10 items-center pb-0 text-xs font-medium')]"

        //Vehicle Details

        this.condition = "//span[text()='What is the condition of your vehicle?']/parent::div/following-sibling::button"
        this.yes = "(//div[contains(text(),'Yes')])[1]"
        this.no = "(//div[contains(text(),'No')])[2]"

        //short and long description
       // this.odometer = "//label[text()='Odometer']/parent::div/following-sibling::input"
        this.odometer = "//input[@aria-roledescription='Number field']"
        this.sd = "//label[text()='Short description']/parent::div/following-sibling::div/textarea"
        this.ld = "//label[text()='Long description']/parent::div/following-sibling::div/textarea"

        //add photos
        this.uploadButton = "input[type='file']"//"//p[text()='Upload photos of your vehicle']/following::button[text()='Upload from file']"
        this.uploadAll = "//button[normalize-space()='Upload all']"

        //add vehicle document

        this.titleDropdown = "//span[text()='How is the vehicle titled?']/parent::div/following-sibling::button"
        this.titleOption = "//div[@role='option']//span[contains(text(),'{OPTION}')]";
        this.titledTo = "//label[text()='Who is the vehicle titled to?']/following-sibling::div//input"
        this.ein = "//label[text()='Employer Identification Number (EIN)']/parent::div/following-sibling::div//input"
        this.dealerNo = "//label[text()='Dealer number']/parent::div/following-sibling::div//input[@name='dealerNumber']"
        this.front = "//label[text()='Front of title']/following::input[@type='file'][1]"//"//label[text()='Front of title']/following::button[text()='Upload from file'][1]"
        this.back = "//*[contains(text(),'Back of title')]/following::input[@type='file'][1]"//"//label[text()='Front of title']/following::button[text()='Upload from file'][2]"
        this.trust = "//label[text()='Trust document']/following::input[@type='file'][1]"//"//label[text()='Trust document']/following::button[text()='Upload from file'][1]"

        //Enter Dealer Information

        this.dealerLicenseNo = "//label[text()='Dealer license number']/parent::div//input[@type='text']"
        this.dealerExpCalendar = "//span[text()='Dealer license expiration date'] /ancestor::div[contains(@class,'group')] //button"
        this.yearDroopdown = "//button[@aria-label='Year']"
        this.selectYear ="//div[@role='option']//span[text()='2035']"// "//select/option[text()='2035']"
        this.monthDropdown = "//button[@aria-label='Month']"
        this.selectMonth = "//div[@role='option']//span[text()='January']"
        this.selectDate = "//div[@aria-label='Friday, January 26, 2035']"
        this.taxExpCalendar = "//span[text()='Tax ID expiration date'] /ancestor::div[contains(@class,'group')] //button"
        this.taxIDNo = "//label[text()='Tax ID number']/parent::div/following::input[@type='text'][1]"
        this.dealerState = "//select[@name='dealerState']/ancestor::div[@data-rac and @data-required='true']//button"
        this.taxState = "//select[@name='taxIdState']/ancestor::div[@data-rac and @data-required='true']//button"

        //enter personal info

        this.contactNo = "//label[text()='Contact number']/ancestor::div[contains(@class,'group')]//input[@type='tel']"
        this.address = "//label[text()='Address search']/parent::div//input[@type='text']"
        this.personalAddress="//input[@aria-label='Address search']"
        this.searchState = "//input[@placeholder='Search states...']"
        this.searchCountry = "//input[@placeholder='Search countries...']"
        this.searchCounty = "//input[@placeholder='Search counties...']"

        this.city = "//label[contains(text(),'City')]/parent::div/following::input[@name='addresses.0.city']"
        this.state = "//span[contains(text(),'State')]/parent::div/following-sibling::button[@aria-haspopup='listbox'][1]"
        this.postalCode = "//label[contains(text(),'Postal Code')]/parent::div/following::input[@type='text']"
        this.county = "//span[contains(text(),'County')]/parent::div//following-sibling::button[@type='button']"
        this.country = "//span[contains(text(),'Country')]/parent::div/following-sibling::button"

        // Enter Business Information
        this.retrySearch = "//button[text()='Retry search']"
        this.businessPhNo = "//label[text()='Business phone number']/parent::div//input[@type='tel']"
        this.businessAddress = "//label[text()='Address search']/parent::div//input[@type='text']"
        this.uploadopratingAgreeDocument = "//label[text()='Operating Agreement']/following::input[@type='file'][1]"//"//label[text()='Operating Agreement']/following::button[text()='Upload from file'][1]"
        this.uploadDealerLicence ="//label[text()='Dealer License']/following::input[@type='file'][1]"// "//label[text()='Dealer License']/following::button[text()='Upload from file'][1]"
        this.uploadResaleLicence = "//label[text()='Resale License']/following::input[@type='file'][1]"//"//label[text()='Resale License']/following::button[text()='Upload from file'][1]"

        this.namedOnOpAgreementYes = "//span[text()='Are you named on the Operating Agreement?']/ancestor::div[@role='radiogroup']//label[.//input[@value='true']]"
        this.namedOnOpAgreementNo = "//span[text()='Are you named on the Operating Agreement?']/ancestor::div[@role='radiogroup']//label[.//input[@value='false']]"

        //finish form
        this.estimate = "//label[text()='What do you estimate this vehicle to be worth?']/ancestor::div[contains(@class,'group')] //input"
        this.reserveDropdown = "//span[text()='Reserve type']/parent::div/following-sibling::button";

        this.consignSpecialist = "//span[text()='Are you currently working with a consignment specialist?']/parent::div/following-sibling::button"
        this.consigSpecialOption = "//div[@role='option']//span[contains(text(),'{OPTION}')]";
        this.consignAnotherDropdown = "//span[text()='Would you consider consigning at another one of our auctions?']/parent::div/following-sibling::button";
        this.consignAnotherOption = "//div[@role='option']//span[contains(text(),'{OPTION}')]";
        //review Your Application
        this.esignature = "//label[text()='Type your name, which will act as your e-signature'] /parent::div /following-sibling::div //input[@name='name']"

        // Calendar open button
        this.calendarButton = "//span[text()='Type today’s date'] /ancestor::div[contains(@class,'group')] //button";

        // Today's date (enabled)
        this.todayDate = "//div[@data-today='true' and not(@aria-disabled='true')]";////section[@role='dialog']//div[@data-today='true']
        this.submit = "//span[@class='w-full text-center']"
        this.viewApplication = "//span[normalize-space()='View my submission']"

    }
}