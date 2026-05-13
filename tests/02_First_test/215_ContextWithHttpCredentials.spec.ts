import {test, expect} from '@playwright/test';
import {chromium, Browser,BrowserContext,Page} from 'playwright';

test('context with HTTP credentials', async ({ }) => {

    const browser:Browser = await chromium.launch({headless: false});
    const context:BrowserContext = await browser.newContext({
        httpCredentials: {
            username: 'admin',
            password: 'admin'
        }       
    });
    const page:Page = await context.newPage();
    await page.goto('https://the-internet.herokuapp.com/basic_auth');
    
    await expect(page.locator('p')).toHaveText('Congratulations! You must have the proper credentials.');
    
});
