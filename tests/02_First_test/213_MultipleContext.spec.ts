import {chromium, Browser, Page, BrowserContext} from 'playwright';

async function multiuserTest()
{
    const browser: Browser = await chromium.launch({headless: false});


//ADMIN
let adminContext: BrowserContext = await browser.newContext();
let adminPage: Page = await adminContext.newPage();
await adminPage.goto('https://app.vwo.com');
console.log("Admin launched");

//USER
let userContext: BrowserContext = await browser.newContext();
let userPage: Page = await userContext.newPage();
await userPage.goto('https://app.vwo.com');
console.log("User launched");

//Closing the contexts and browser
await adminContext.close();
await userContext.close();
await browser.close();
}
multiuserTest();