# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 03_Locators_Commands\vwoautomation.spec.ts >> VWO Website Automation >> VWO Website Automation
- Location: tests\03_Locators_Commands\vwoautomation.spec.ts:9:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Sign in' }) resolved to 4 elements:
    1) <button type="submit" id="js-login-btn" data-qa="sibequkica" onclick="login.login(event)" class="btn btn--primary btn--inverted W(100%) Mb(24px) Mb(0):lc">…</button> aka getByRole('button', { name: 'Sign in', exact: true })
    2) <button type="button" data-qa="mofukibufu" class="google-button" id="js-google-signin-btn" onclick="login.fetchSocialLoginUrl('google')">…</button> aka getByRole('button', { name: 'Sign in with Google' })
    3) <button type="button" data-qa="dobevozose" onclick="login.goToSSOView()" class="btn Brds(1px) Bdc(--color-gray-5) Bds(s) W(100%)">…</button> aka getByRole('button', { name: 'Sign in using SSO' })
    4) <button type="button" data-qa="misubumipe" onclick="login.loginUsingPasskey()" class="btn Brds(1px) Bdc(--color-gray-5) Bds(s) W(100%)">…</button> aka getByRole('button', { name: 'Sign in with Passkey' })

Call log:
  - waiting for getByRole('button', { name: 'Sign in' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - main "Application main content" [ref=e3]:
    - generic [ref=e7]:
      - generic [ref=e10]:
        - img "VWO" [ref=e12]
        - list [ref=e15]:
          - listitem [ref=e16]:
            - textbox "Email address" [ref=e18]:
              - /placeholder: Enter email ID
              - text: your_email@gmail.com
          - listitem [ref=e19]:
            - generic [ref=e20]:
              - textbox "Password" [active] [ref=e21]:
                - /placeholder: Enter password
                - text: your_password
              - button "Toggle password visibility" [ref=e22] [cursor=pointer]:
                - img [ref=e23]
          - listitem [ref=e25]:
            - button "Forgot Password?" [ref=e26] [cursor=pointer]
          - listitem [ref=e27]:
            - generic [ref=e29] [cursor=pointer]:
              - generic [ref=e30]: Remember me
              - img [ref=e32]
          - listitem [ref=e34]:
            - button "Sign in" [ref=e35] [cursor=pointer]:
              - generic [ref=e36]: Sign in
          - listitem [ref=e37]:
            - heading "Or" [level=6] [ref=e39]
          - listitem [ref=e41]:
            - button "Sign in with Google" [ref=e43] [cursor=pointer]:
              - generic [ref=e44]:
                - img [ref=e45]
                - generic [ref=e47]: Sign in with Google
          - listitem [ref=e49]:
            - button "Sign in using SSO" [ref=e50] [cursor=pointer]:
              - img [ref=e51]
              - generic [ref=e53]: Sign in using SSO
          - listitem [ref=e54]:
            - button "Sign in with Passkey" [ref=e55] [cursor=pointer]:
              - img [ref=e56]
              - generic [ref=e58]: Sign in with Passkey
          - listitem [ref=e59]:
            - generic [ref=e61]: New to VWO?
          - listitem [ref=e63]:
            - link "Start a FREE TRIAL" [ref=e64] [cursor=pointer]:
              - /url: https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage
              - generic [ref=e65]: Start a FREE TRIAL
          - listitem [ref=e66]:
            - text: By continuing, you agree to VWO's
            - link "Privacy policy" [ref=e67] [cursor=pointer]:
              - /url: https://vwo.com/privacy-policy/?utm_medium=app&utm_source=login-page&utm_campaign=legal_privacy_login
            - text: "&"
            - link "Terms" [ref=e68] [cursor=pointer]:
              - /url: https://vwo.com/terms/?utm_medium=website&utm_source=login-page&utm_campaign=legal_terms_login
            - text: .
      - generic [ref=e72]:
        - img "Vwo abtasty logo" [ref=e73]
        - generic [ref=e74]:
          - heading "have joined forces to redefine the future of" [level=4] [ref=e75]
          - heading "Digital Experience Optimization" [level=4] [ref=e76]
        - img "Vwo Abtasty Shakehands" [ref=e77]
        - heading "Rest assured, your day-to-day workflow, support team, and account contacts remain exactly the same. We are growing to serve you better." [level=5] [ref=e78]
  - img [ref=e79]:
    - generic: "'"
    - generic:
      - img
  - img [ref=e80]
  - img [ref=e81]
  - img [ref=e82]
  - img [ref=e83]
  - img [ref=e84]
  - img [ref=e85]
  - img [ref=e86]
  - img [ref=e87]
  - img [ref=e88]
  - img [ref=e89]
  - img [ref=e90]
  - img [ref=e91]
  - img [ref=e92]
  - img [ref=e93]
  - img [ref=e94]
  - img [ref=e95]
  - img [ref=e96]
  - generic:
    - generic:
      - iframe
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | test.describe("VWO Website Automation",()=>{
  3  | 
  4  |     test.beforeEach(async({page})=>{
  5  |         await page.goto("https://app.vwo.com/#/login",{waitUntil:"networkidle"});
  6  |         await expect(page).toHaveTitle("Login - VWO");
  7  |     })
  8  | 
  9  | test("VWO Website Automation",async({page})=>{
  10 |     const useremail = page.getByRole("textbox",{name:"Email"});
  11 |     const password = page.getByRole("textbox",{name:"Password"});
  12 |     const login = page.getByRole("button",{name:"Sign in"});
  13 |     const error = page.getByText("Your email, password, IP address or location did not match");
  14 | 
  15 |     await useremail.fill("your_email@gmail.com");
  16 |     await password.fill("your_password");
> 17 |     await login.click();
     |                 ^ Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Sign in' }) resolved to 4 elements:
  18 | 
  19 |     await expect(error).toBeVisible({timeout:5000});
  20 | })
  21 | })  
  22 | 
```