"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loginPage_1 = require("../pega_objects/loginPage");
const cucumber_1 = require("@cucumber/cucumber");
let lp = new loginPage_1.loginPage();
(0, cucumber_1.Given)('User is on the page', async function () {
    lp = new loginPage_1.loginPage();
    lp.open();
});
(0, cucumber_1.Given)('User enters email as {string} and password as {string}', async function (value, value1) {
    await lp.email(value);
    await lp.pwd(value1);
});
(0, cucumber_1.Then)('Click on Login button', async function () {
    await lp.button();
});
// Then('Click on Signoff Button', async function ()
//          {
//            await lp.signoff();
//          });
(0, cucumber_1.Then)('Click on Flights link', async function () {
    await lp.flights();
});
