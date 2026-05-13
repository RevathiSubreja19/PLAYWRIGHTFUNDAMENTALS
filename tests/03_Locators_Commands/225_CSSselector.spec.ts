import {test, expect} from '@playwright/test';

test.describe("CSS Selector Practise",()=>{

    test.beforeEach(async({page})=>{
        await page.goto("https://awesomeqa.com/css/",{waitUntil:"networkidle"}); 
});

    test("CSS Selector practise",async({page})=>{

        const allSpans = page.locator("div.first span");
        const count = await allSpans.count();
        console.log(count);

        const Span1 = await allSpans.first().textContent();
        const Span2 = await allSpans.nth(1).textContent();
        const Span3 = await allSpans.nth(2).textContent();
        const Span4 = await allSpans.last().textContent();
        console.log(Span1);
        console.log(Span2);
        console.log(Span3);
        console.log(Span4);

        await page.waitForTimeout(5000);

    });

});