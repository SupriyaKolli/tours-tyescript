import {loginPage} from '../pega_objects/loginPage';
import { Given, Then, When } from '@cucumber/cucumber';

let lp = new loginPage();
Given('User is on the page', async function ()
           {
            lp = new loginPage();
            lp.open();
            });
Given('User enters email as {string} and password as {string}', async function (value:string, value1:string)
         {
            await lp.email(value);
            await lp.pwd(value1);
         });

Then('Click on Login button', async function ()
         {
           await lp.button();
         });

// Then('Click on Signoff Button', async function ()
//          {
//            await lp.signoff();
//          });

Then('Click on Flights link', async function ()
         {
           await lp.flights();
         });

