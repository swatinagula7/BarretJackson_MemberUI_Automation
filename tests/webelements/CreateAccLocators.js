export class CreateAccLocators {
    constructor() {
        this.accept = "//button[contains(.,'Accept')]"
        this.creatAcc = "//span[@class='truncate'][normalize-space()='Create account']"
        this.firstName = "//input[@name='firstName']"
        this.lastName = "//input[@name='lastName']"
        this.email = "//input[@type='email'][1]"
        
        this.password = "//label[contains(text(),'Password')]/parent::div//input[@type='password']"
        this.confirmPass = "//label[contains(text(),'Confirm password')]/parent::div//input[@type='password']"
        
        this.checkbox = "//span[contains(text(),'I have read and agree to Barrett-Jackson')]"
        this.creatAccButton = "//button[contains(.,'Create account')]"

    }
}