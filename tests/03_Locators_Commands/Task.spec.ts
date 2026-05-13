import {test,expect} from '@playwright/test';

test("Project#2-Cura Website Automation",async({page})=>{
    await page.goto("https://katalon-demo-cura.herokuapp.com/",{waitUntil:"networkidle"});
    page.locator('#btn-make-appointment').click();

    let username = page.locator('#txt-username');
    let password = page.locator('#txt-password');
    let login = page.locator('#btn-login');
    await username.fill("John Doe");
    await password.fill("ThisIsNotAPassword");
    await login.click();

    await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment");

    await expect(page.locator("//h2[text()='Make Appointment']")).toBeVisible();

});

