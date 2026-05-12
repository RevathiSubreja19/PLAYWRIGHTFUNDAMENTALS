import {chromium, Browser, Page, BrowserContext} from 'playwright';

async function multitabTest()
{
    let browser: Browser = await chromium.launch({headless: false});
    let context: BrowserContext = await browser.newContext();
   
    //Tab1
    let page1:Page = await context.newPage();
    page1.goto('https://app.vwo.com/#login');
    console.log("Tab1 Login launched");

    //Tab2
    let page2:Page = await context.newPage();
    page2.goto('https://app.vwo.com/#dashboard');
    console.log("Tab2 Dashboard launched");
}
multitabTest();