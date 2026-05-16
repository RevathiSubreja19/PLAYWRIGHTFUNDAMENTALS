# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 03_Locators_Commands\vwoautomation.spec.ts >> VWO Website Automation >> VWO Website Automation
- Location: tests\03_Locators_Commands\vwoautomation.spec.ts:9:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "VWO - Login"
Received: "Login - VWO"
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    13 × unexpected value "Login - VWO"

```

```yaml
- main "Application main content":
  - img "VWO"
  - list:
    - listitem:
      - textbox "Email address":
        - /placeholder: Enter email ID
    - listitem:
      - textbox "Password":
        - /placeholder: Enter password
      - button "Toggle password visibility":
        - img
    - listitem:
      - button "Forgot Password?"
    - listitem:
      - text: Remember me
      - img
    - listitem:
      - button "Sign in"
    - listitem:
      - heading "Or" [level=6]
    - listitem:
      - button "Sign in with Google":
        - img
        - text: Sign in with Google
    - listitem:
      - button "Sign in using SSO":
        - img
        - text: Sign in using SSO
    - listitem:
      - button "Sign in with Passkey":
        - img
        - text: Sign in with Passkey
    - listitem: New to VWO?
    - listitem:
      - link "Start a FREE TRIAL":
        - /url: https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage
    - listitem:
      - text: By continuing, you agree to VWO's
      - link "Privacy policy":
        - /url: https://vwo.com/privacy-policy/?utm_medium=app&utm_source=login-page&utm_campaign=legal_privacy_login
      - text: "&"
      - link "Terms":
        - /url: https://vwo.com/terms/?utm_medium=website&utm_source=login-page&utm_campaign=legal_terms_login
      - text: .
  - img "Vwo abtasty logo"
  - heading "have joined forces to redefine the future of" [level=4]
  - heading "Digital Experience Optimization" [level=4]
  - img "Vwo Abtasty Shakehands"
  - heading "Rest assured, your day-to-day workflow, support team, and account contacts remain exactly the same. We are growing to serve you better." [level=5]
- img:
  - text: "'"
  - img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | test.describe("VWO Website Automation",()=>{
  3  | 
  4  |     test.beforeEach(async({page})=>{
  5  |         await page.goto("https://app.vwo.com/#/login",{waitUntil:"networkidle"});
> 6  |         await expect(page).toHaveTitle("VWO - Login");
     |                            ^ Error: expect(page).toHaveTitle(expected) failed
  7  |     })
  8  | 
  9  | test("VWO Website Automation",async({page})=>{
  10 |     const useremail = page.getByPlaceholder("Enter email ID");
  11 |     const password = page.getByPlaceholder("Enter password");
  12 |     const login = page.getByRole("button",{name:"Sign in"});
  13 |     const error = page.getByText("Your email, password, IP address or location did not match");
  14 | 
  15 |     await useremail.fill("your_email@gmail.com");
  16 |     await password.fill("your_password");
  17 |     await login.click();
  18 | 
  19 |     await expect(error).toBeVisible({timeout:5000});
  20 | })
  21 | })  
  22 | 
```