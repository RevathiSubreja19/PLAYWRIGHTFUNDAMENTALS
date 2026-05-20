import {test, expect} from '@playwright/test';

test.use({storageState:"./usercookies.json"});

test("Storage State Use",async({page})=>{
    await page.goto("https://app.vwo.com/#/dashboard",{waitUntil:"networkidle"});
    await expect(page).toHaveTitle("Dashboard");
    console.log("Session loaded from usercookies.json ✅");
})