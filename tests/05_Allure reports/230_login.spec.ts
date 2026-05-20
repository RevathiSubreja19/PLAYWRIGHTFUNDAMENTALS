import {test, expect} from '@playwright/test';
import * as allure from "allure-js-commons";


test("VWO Website Automation",async({page})=>{

    await allure.epic("Login Functionality");
    await allure.description("Verify whether the login functiona;lity is working as expected with invalid credentials");
    await allure.feature("Login with invalid credentials");
    await allure.story("User should see error message on login failure");
   
    await page.goto("https://app.vwo.com/#/login",{waitUntil:"networkidle"});
        await expect(page).toHaveTitle("Login - VWO");
    const useremail = page.getByRole("textbox",{name:"Email"});
    const password = page.getByRole("textbox",{name:"Password"});
    const login = page.getByRole("button",{name:"Sign in",exact:true});
    const error = page.getByText("Your email, password, IP address or location did not match");

    await useremail.fill("your_email@gmail.com");
    await password.fill("your_password");
    await login.click();

    await expect(error).toBeVisible({timeout:5000});
    await expect(error).toHaveText("Your email, password, IP address or location did not match");
})

