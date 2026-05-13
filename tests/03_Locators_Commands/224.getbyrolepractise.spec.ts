import {test, expect} from '@playwright/test';

test.describe("GetByRole Practise",()=>{

    test.beforeEach(async({page})=>{
        await page.goto("https://playwright.dev/",{waitUntil:"networkidle"}); 
});

    test("GetByRole with different options",async({page})=>{
        // Click the get started link.
        await page.getByRole('link', { name: 'Get started', disabled: false }).click();
        await page.getByRole('heading', { name: 'Get started' }).click();

    });

});

//getByRole is a powerful locator in Playwright that allows you to locate elements based on their ARIA roles and accessible names. In this test, we are using getByRole to click on a link with the name "Get started" and then clicking on a heading with the same name. This approach is more robust and accessible compared to using CSS selectors or XPath, as it relies on the semantic structure of the page.
//getByTestId is another locator that allows you to locate elements based on a custom data-testid attribute. This can be useful for testing purposes, but it is generally recommended to use getByRole for better accessibility and maintainability of your tests.
//getByText is a locator that allows you to locate elements based on their visible text content. While it can be useful in certain scenarios, it may not always be the best choice for locating elements, especially if the text content is dynamic or subject to change. Using getByRole with appropriate options can provide a more reliable and maintainable way to locate elements in your tests.
//getByLabel is a locator that allows you to locate form elements based on their associated labels. This can be particularly useful for locating input fields, checkboxes, and radio buttons, as it relies on the semantic relationship between the label and the form element. Using getByLabel can help improve the accessibility of your tests and make them more resilient to changes in the page structure.
//getByPlaceholder is a locator that allows you to locate input elements based on their placeholder text. While it can be useful in certain scenarios, it may not always be the best choice for locating elements, especially if the placeholder text is dynamic or subject to change. Using getByRole with appropriate options can provide a more reliable and maintainable way to locate elements in your tests.
//getByAltText is a locator that allows you to locate elements based on their alt text, which is typically used for images. This can be useful for verifying that images are present and have the correct alt text, which is important for accessibility. However, it may not always be the best choice for locating elements, especially if the alt text is dynamic or subject to change. Using getByRole with appropriate options can provide a more reliable and maintainable way to locate elements in your tests.
//getByTitle is a locator that allows you to locate elements based on their title attribute. This can be useful for verifying that elements have the correct title, which can provide additional context or information to users. However, it may not always be the best choice for locating elements, especially if the title attribute is dynamic or subject to change. Using getByRole with appropriate options can provide a more reliable and maintainable way to locate elements in your tests.
