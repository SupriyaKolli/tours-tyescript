"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginPage = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
const hook_1 = require("../support/hook");
class loginPage {
    userName = selenium_webdriver_1.By.name("userName");
    Password = selenium_webdriver_1.By.name("password");
    submitBtn = selenium_webdriver_1.By.name("submit");
    signoffBtn = selenium_webdriver_1.By.xpath("//a[@href='index.php']");
    flight = selenium_webdriver_1.By.xpath("//a[normalize-space()='Flights']");
    //
    //  constructor() {
    //          super(driver);
    //      }
    email = async (input1) => {
        return hook_1.driver.findElement(this.userName).sendKeys(input1);
    };
    pwd = async (pwdinput) => {
        return hook_1.driver.findElement(this.Password).sendKeys(pwdinput);
    };
    button = async () => {
        return hook_1.driver.findElement(this.submitBtn).click();
    };
    open = async () => {
        const pageUrl = "http://demo.guru99.com/test/newtours/";
        await hook_1.driver.get(pageUrl);
    };
    // signoff = ()=>
    // {
    //  this.driver.findElement(this.signoffBtn).click();
    // }
    flights = () => {
        hook_1.driver.findElement(this.flight).click();
    };
}
exports.loginPage = loginPage;
