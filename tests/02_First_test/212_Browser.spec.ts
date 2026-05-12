import{chromium,Browser,BrowserContext,Page} from 'playwright';

async function run()
{
    const browser: Browser = await chromium.launch({headless: false});
    const context: BrowserContext = await browser.newContext(); 
    const page: Page = await context.newPage();
    await page.goto('https://app.vwo.com');
    await page.screenshot({path: 'screenshot.png'});
    
    await page.close();
    await context.close();
    await browser.close();
}

run();