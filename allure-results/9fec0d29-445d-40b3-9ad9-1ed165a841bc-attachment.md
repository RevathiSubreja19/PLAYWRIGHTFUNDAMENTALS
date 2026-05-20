# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 04_Allure reports\TASK_TTABank_Customreport.spec.ts >> TTA bank
- Location: tests\04_Allure reports\TASK_TTABank_Customreport.spec.ts:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Dashboard')
Expected: visible
Error: strict mode violation: getByText('Dashboard') resolved to 2 elements:
    1) <button class="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors bg-blue-600 text-white shadow-md">…</button> aka getByRole('button', { name: 'Dashboard' })
    2) <h1 class="text-2xl font-bold text-slate-800 capitalize">Dashboard</h1> aka getByRole('heading', { name: 'Dashboard' })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Dashboard')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - complementary [ref=e5]:
      - generic [ref=e6]:
        - img [ref=e7]
        - generic [ref=e10]: TTA Bank
      - navigation [ref=e12]:
        - button "Dashboard" [ref=e13] [cursor=pointer]:
          - img [ref=e14]
          - text: Dashboard
        - button "Transfer Funds" [ref=e19] [cursor=pointer]:
          - img [ref=e20]
          - text: Transfer Funds
        - button "Expense Tracker" [ref=e23] [cursor=pointer]:
          - img [ref=e24]
          - text: Expense Tracker
        - button "Transactions" [ref=e27] [cursor=pointer]:
          - img [ref=e28]
          - text: Transactions
        - button "AI Support" [ref=e32] [cursor=pointer]:
          - img [ref=e33]
          - text: AI Support
        - button "Settings" [ref=e35] [cursor=pointer]:
          - img [ref=e36]
          - text: Settings
      - generic [ref=e39]:
        - generic [ref=e40]:
          - img "User" [ref=e41]
          - generic [ref=e42]:
            - generic [ref=e43]: John Doe
            - generic [ref=e44]: john.doe@example.com
        - button "Sign Out" [ref=e45] [cursor=pointer]:
          - img [ref=e46]
          - text: Sign Out
    - main [ref=e49]:
      - generic [ref=e50]:
        - heading "Dashboard" [level=1] [ref=e51]
        - button [ref=e53] [cursor=pointer]:
          - img [ref=e54]
      - generic [ref=e59]:
        - generic [ref=e60]:
          - generic [ref=e61]:
            - generic [ref=e62]:
              - generic [ref=e63]:
                - paragraph [ref=e64]: Total Balance
                - heading "$50,000.00" [level=3] [ref=e65]
              - img [ref=e67]
            - generic [ref=e70]:
              - generic [ref=e71]:
                - img [ref=e72]
                - text: +2.5%
              - generic [ref=e75]: from last month
          - generic [ref=e76]:
            - generic [ref=e77]:
              - generic [ref=e78]:
                - paragraph [ref=e79]: Monthly Income
                - heading "$50,000" [level=3] [ref=e80]
              - img [ref=e82]
            - paragraph [ref=e85]: Based on recent activity
          - generic [ref=e86]:
            - generic [ref=e87]:
              - generic [ref=e88]:
                - paragraph [ref=e89]: Monthly Expenses
                - heading "$315.48" [level=3] [ref=e90]
              - img [ref=e92]
            - paragraph [ref=e95]: Total debit transactions
        - generic [ref=e96]:
          - generic [ref=e97]:
            - heading "Balance History" [level=3] [ref=e98]
            - generic [ref=e101]:
              - generic:
                - status:
                  - paragraph: Thu
                  - list:
                    - listitem: "balance : 48000"
              - application [ref=e102]:
                - generic [ref=e114]:
                  - generic [ref=e115]:
                    - generic [ref=e117]: Mon
                    - generic [ref=e119]: Tue
                    - generic [ref=e121]: Wed
                    - generic [ref=e123]: Thu
                    - generic [ref=e125]: Fri
                    - generic [ref=e127]: Sat
                    - generic [ref=e129]: Sun
                  - generic [ref=e130]:
                    - generic [ref=e132]: $0k
                    - generic [ref=e134]: $15k
                    - generic [ref=e136]: $30k
                    - generic [ref=e138]: $45k
                    - generic [ref=e140]: $60k
          - generic [ref=e141]:
            - generic [ref=e142]:
              - heading "Recent Activity" [level=3] [ref=e143]
              - button "View All" [ref=e144] [cursor=pointer]
            - generic [ref=e145]:
              - generic [ref=e146]:
                - generic [ref=e147]:
                  - img [ref=e149]
                  - generic [ref=e151]:
                    - paragraph [ref=e152]: Whole Foods Market
                    - paragraph [ref=e153]: 10/25/2023
                - generic [ref=e154]: "-$129.99"
              - generic [ref=e155]:
                - generic [ref=e156]:
                  - img [ref=e158]
                  - generic [ref=e161]:
                    - paragraph [ref=e162]: Opening Deposit
                    - paragraph [ref=e163]: 10/24/2023
                - generic [ref=e164]: +$50000.00
              - generic [ref=e165]:
                - generic [ref=e166]:
                  - img [ref=e168]
                  - generic [ref=e170]:
                    - paragraph [ref=e171]: Netflix Subscription
                    - paragraph [ref=e172]: 10/23/2023
                - generic [ref=e173]: "-$15.99"
              - generic [ref=e174]:
                - generic [ref=e175]:
                  - img [ref=e177]
                  - generic [ref=e179]:
                    - paragraph [ref=e180]: Uber Ride
                    - paragraph [ref=e181]: 10/22/2023
                - generic [ref=e182]: "-$24.50"
            - button "Quick Transfer" [ref=e183] [cursor=pointer]
  - generic [ref=e184]: $0k
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | 
  3  | test("TTA bank",async({page})=>{
  4  | 
  5  |     page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
  6  |     await expect(page).toHaveTitle("TTA Bank - Digital Banking");
  7  | 
  8  |     const signUp = page.getByText("Sign Up");
  9  |     await signUp.click();
  10 | 
  11 |     const signUpPage = page.getByText("Create your digital account");
  12 |     await expect(signUpPage).toBeVisible();
  13 | 
  14 |     const fullName = page.getByPlaceholder("John Doe");
  15 |     const emailAdd = page.getByPlaceholder("you@example.com");
  16 |     const password = page.getByPlaceholder("••••••••");
  17 |     const createAcc = page.getByRole("button",{name:"Create Account",exact:true});
  18 |     
  19 | 
  20 |     await fullName.fill("John Doe");
  21 |     await emailAdd.fill("john.doe@example.com");
  22 |     await password.fill("SecurePass123!");
  23 |     await createAcc.click();
  24 |     await page.waitForTimeout(5000);
  25 | 
  26 |     //DASHBOARD PAGE
  27 |     const dashboardPage = page.getByText("Dashboard");
  28 |     const transferFund = page.getByRole("button",{name:"Transfer Funds",exact:true});
  29 |      await page.waitForTimeout(5000);
  30 | 
> 31 |     await expect(dashboardPage).toBeVisible({timeout:5000});
     |                                 ^ Error: expect(locator).toBeVisible() failed
  32 |     await transferFund.click();
  33 | 
  34 |     await page.waitForTimeout(5000);
  35 | 
  36 |     //TransferMoney page
  37 |     const transferMoneyAmount = page.locator("input[class*='rounded-lg']").first();
  38 |     const Notes = page.locator("input[class*='rounded-lg']").last();
  39 |     const continueButton = page.getByRole("button",{name:"Continue",exact:true});
  40 | 
  41 |     await transferMoneyAmount.fill("5000");
  42 |     await Notes.fill("Test transfer");
  43 |     await continueButton.click();
  44 |     
  45 |     await page.waitForTimeout(5000);
  46 | 
  47 | }); 
```