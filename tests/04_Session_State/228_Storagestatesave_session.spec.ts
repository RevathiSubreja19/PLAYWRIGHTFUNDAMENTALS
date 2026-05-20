import {chromium} from 'playwright';

async function sesionSave()
{
    let browser = await chromium.launch({headless:false});
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://app.vwo.com/#/login",{waitUntil:"networkidle"});
    await page.waitForTimeout(5000);

    await page.locator("#login-username").fill("opg73@singleuseemail.site");
    await page.locator("#login-password").fill("Wingify@4321");
    await page.locator("#js-login-btn").click();

    await page.waitForURL((/dashboard/i),{timeout:10000});

    await context.storageState({path:"usercookies.json"});
    console.log("Session saved to user-session.json ✅");

    await page.waitForTimeout(2000);
    await browser.close();

}
sesionSave();