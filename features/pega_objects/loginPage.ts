import { WebDriver, By } from 'selenium-webdriver';
import { AbstractPageObject } from './AbstractPageObject';
import { driver } from '../support/hook';

export class loginPage
{
 private userName=By.name("userName");
 public Password = By.name("password");
 public submitBtn = By.name("submit");
 public signoffBtn = By.xpath("//a[@href='index.php']");
 public flight = By.xpath("//a[normalize-space()='Flights']");
//
//  constructor() {
//          super(driver);
//      }

email=async(input1:string)=>
{
    return driver.findElement(this.userName).sendKeys(input1);

}

pwd=async(pwdinput:string)=>
{
    return driver.findElement(this.Password).sendKeys(pwdinput);

}

button=async()=>
{
    return driver.findElement(this.submitBtn).click();

}
 open = async () => {
        const pageUrl: string = "http://demo.guru99.com/test/newtours/";
        await driver.get(pageUrl);
}
// signoff = ()=>
// {
//  this.driver.findElement(this.signoffBtn).click();
// }

flights =()=>
{
    driver.findElement(this.flight).click();
}

}

