import {test,expect} from '@playwright/test';

test('Verify our first TC', async({page})=>{

    await page.goto('https://app.vwo.com');
    await expect(page).toHaveTitle('Login - VWO');

    const img_vwopage = page.locator('img').first();
    await expect(img_vwopage).toBeVisible();

    page.pause();
});
