# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 05_Allure reports\TASK_TTABank_Customreport.spec.ts >> TTA bank
- Location: tests\05_Allure reports\TASK_TTABank_Customreport.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
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
        - heading "Transfer Funds" [level=1] [ref=e51]
        - button [ref=e53] [cursor=pointer]:
          - img [ref=e54]
      - generic [ref=e59]:
        - generic [ref=e60]:
          - button "Transfer Money" [ref=e61] [cursor=pointer]
          - button "Manage Beneficiaries" [ref=e62] [cursor=pointer]
        - generic [ref=e64]:
          - img [ref=e67]
          - heading "Review Transfer" [level=3] [ref=e70]
          - paragraph [ref=e71]: Please verify the details before confirming.
          - generic [ref=e72]:
            - generic [ref=e73]:
              - generic [ref=e74]: From
              - generic [ref=e75]: Savings Account
            - generic [ref=e76]:
              - generic [ref=e77]: To
              - generic [ref=e78]: Sarah Smith
            - generic [ref=e79]:
              - generic [ref=e80]: Amount
              - generic [ref=e81]: $5000.00
            - generic [ref=e82]:
              - generic [ref=e83]: Note
              - generic [ref=e84]: Test transfer
          - generic [ref=e85]:
            - button "Back" [ref=e86] [cursor=pointer]
            - button "Confirm Transfer" [ref=e87] [cursor=pointer]
  - generic [ref=e88]: $0k
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | 
  3  | test("TTA bank",async({page})=>{
  4  | 
  5  |     page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
  6  |     await expect(page).toHaveTitle("TTA Bank - Digital Banking");
  7  |     //SignUp button
  8  |     const signUp = page.getByText("Sign Up");
  9  |     await signUp.click();
  10 |     //SignUp Page
  11 |     const signUpPage = page.getByText("Create your digital account");
  12 |     await expect(signUpPage).toBeVisible();
  13 | 
  14 |     const fullName = page.getByPlaceholder("John Doe");
  15 |     const emailAdd = page.getByPlaceholder("you@example.com");
  16 |     const password = page.getByPlaceholder("••••••••");
  17 |     const createAcc = page.getByRole("button",{name:"Create Account",exact:true});
  18 |     
  19 |     await fullName.fill("John Doe");
  20 |     await emailAdd.fill("john.doe@example.com");
  21 |     await password.fill("SecurePass123!");
  22 |     await createAcc.click();
  23 |     await page.waitForTimeout(5000);
  24 | 
  25 |     //DASHBOARD PAGE
  26 |     const dashboardPage = page.locator('//h1[text()="Dashboard"]');
  27 |     const transferFund = page.getByRole("button",{name:"Transfer Funds",exact:true});
  28 |     const totalBalance = page.locator('h3[class*="text-3xl"]').first();
  29 |      await page.waitForTimeout(5000);
  30 | 
  31 |     await expect(dashboardPage).toBeVisible({timeout:5000});
  32 |     const balanceText = await totalBalance.textContent();
  33 |     console.log("Current Balance:", balanceText);
  34 |     await transferFund.click();
  35 | 
  36 |     await page.waitForTimeout(5000);
  37 | 
  38 |     //TransferMoney page
  39 |     const transferMoneyPage = page.locator('//h1[text()="Transfer Funds"]');
  40 |     const transferMoneyAmount = page.locator("input[class*='rounded-lg']").first();
  41 |     const Notes = page.locator("input[class*='rounded-lg']").last();
  42 |     const continueButton = page.getByRole("button",{name:"Continue",exact:true});
  43 |     const amttransfer = 5000;
  44 | 
  45 |     await expect(transferMoneyPage).toBeVisible({timeout:5000});
  46 |     await transferMoneyAmount.fill(amttransfer.toString());
  47 |     await Notes.fill("Test transfer");
  48 |     await continueButton.click();
  49 |     
> 50 |     await page.waitForTimeout(5000);
     |                ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  51 | 
  52 |     //ReviewTransfer page
  53 |     const reviewTransferPage = page.locator('//h3[text()="Review Transfer"]');
  54 |     const confirmButton = page.getByRole("button",{name:"Confirm Transfer",exact:true});
  55 | 
  56 |     await expect(reviewTransferPage).toBeVisible({timeout:5000});
  57 |     await confirmButton.click();
  58 | 
  59 |     await page.waitForTimeout(5000);
  60 |     
  61 |     //Balance deduction verification
  62 |     const dashboardpanel = page.getByText('Dashboard');
  63 |     await dashboardpanel.click();
  64 |    
  65 |     const updatedBalanceText = await totalBalance.textContent();
  66 |     console.log("Updated Balance:", updatedBalanceText);
  67 | 
  68 |     if(balanceText && updatedBalanceText){
  69 |         const initialBalance = parseFloat(balanceText.replace(/[^0-9.-]/g, ''));
  70 |         const finalBalance = parseFloat(updatedBalanceText.replace(/[^0-9.-]/g, ''));
  71 |         if((initialBalance - amttransfer) === finalBalance){
  72 |             console.log("Balance deduction verified successfully ✅");
  73 |         } 
  74 |         else{
  75 |             console.log("Balance deduction verification failed ❌");
  76 |         }
  77 |     }
  78 | 
  79 | 
  80 | }); 
```