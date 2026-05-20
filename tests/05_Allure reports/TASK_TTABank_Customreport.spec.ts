import {test, expect} from '@playwright/test';

test("TTA bank",async({page})=>{

    page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
    await expect(page).toHaveTitle("TTA Bank - Digital Banking");
    //SignUp button
    const signUp = page.getByText("Sign Up");
    await signUp.click();
    //SignUp Page
    const signUpPage = page.getByText("Create your digital account");
    await expect(signUpPage).toBeVisible();

    const fullName = page.getByPlaceholder("John Doe");
    const emailAdd = page.getByPlaceholder("you@example.com");
    const password = page.getByPlaceholder("••••••••");
    const createAcc = page.getByRole("button",{name:"Create Account",exact:true});
    
    await fullName.fill("John Doe");
    await emailAdd.fill("john.doe@example.com");
    await password.fill("SecurePass123!");
    await createAcc.click();
    await page.waitForTimeout(5000);

    //DASHBOARD PAGE
    const dashboardPage = page.locator('//h1[text()="Dashboard"]');
    const transferFund = page.getByRole("button",{name:"Transfer Funds",exact:true});
    const totalBalance = page.locator('h3[class*="text-3xl"]').first();
     await page.waitForTimeout(5000);

    await expect(dashboardPage).toBeVisible({timeout:5000});
    const balanceText = await totalBalance.textContent();
    console.log("Current Balance:", balanceText);
    await transferFund.click();

    await page.waitForTimeout(5000);

    //TransferMoney page
    const transferMoneyPage = page.locator('//h1[text()="Transfer Funds"]');
    const transferMoneyAmount = page.locator("input[class*='rounded-lg']").first();
    const Notes = page.locator("input[class*='rounded-lg']").last();
    const continueButton = page.getByRole("button",{name:"Continue",exact:true});
    const amttransfer = 5000;

    await expect(transferMoneyPage).toBeVisible({timeout:5000});
    await transferMoneyAmount.fill(amttransfer.toString());
    await Notes.fill("Test transfer");
    await continueButton.click();

    //ReviewTransfer page
    const reviewTransferPage = page.locator('//h3[text()="Review Transfer"]');
    const confirmButton = page.getByRole("button",{name:"Confirm Transfer",exact:true});

    await expect(reviewTransferPage).toBeVisible({timeout:5000});
    await confirmButton.click();
    
    //Balance deduction verification
    const dashboardpanel = page.getByText('Dashboard');
    await dashboardpanel.click();
   
    const updatedBalanceText = await totalBalance.textContent();
    console.log("Updated Balance:", updatedBalanceText);

    if(balanceText && updatedBalanceText){
        const initialBalance = parseFloat(balanceText.replace(/[^0-9.-]/g, ''));
        const finalBalance = parseFloat(updatedBalanceText.replace(/[^0-9.-]/g, ''));
        if((initialBalance - amttransfer) === finalBalance){
            console.log("Balance deduction verified successfully ✅");
        } 
        else{
            console.log("Balance deduction verification failed ❌");
        }
    }


}); 