import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    let otp = null;

    // Listen for network responses
    page.on('response', async (response) => {
      const url = response.url(); // Get the URL of the response
  
      // Check if the response URL matches the specific endpoint
      if (url.includes('https://sau.eaglelionsystems.com/v1.0/chatbirrapi/ldap/sendLinkOTP')) {
        console.log(`Response URL: ${url}`);
  
        
        try {
          const responseBody = await response.json(); 
          console.log('Response Body:', responseBody);
  
        
          if (responseBody.finalResponse.otp.otpcode) {
            otp = responseBody.finalResponse.otp.otpcode;
            console.log(`OTP: ${otp}`);
          } else {
            console.error('OTP not found in the response body.');
          }
        } catch (error) {
          console.error('Failed to parse response body as JSON:', error);
        }
      }
    });

  await page.goto('https://staging-dashen-super-app-branch-portal.vercel.app/auth/signin?callbackUrl=%2F');
  await page.getByRole('textbox', { name: 'Username Continue' }).click();
  await page.getByRole('textbox', { name: 'Username Continue' }).fill('kofi');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Kenif');
  await page.getByRole('button').filter({ hasText: /^$/ }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Kenifira123@');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Customers Customers Manage' }).click();
  await page.getByPlaceholder('Search Customer by name,').click();
  await page.getByPlaceholder('Search Customer by name,').fill('GETNET TADEGE ANGASH');
  await page.getByRole('row', { name: '76944143914084 GETNET TADEGE' }).getByRole('button').click();

  await page.getByRole('heading', { name: 'Link Account' }).click();
  await page.locator('form').getByRole('img').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('button', { name: 'Send Link OTP' }).click();

   // Wait for the OTP to be captured (adjust timeout as needed)
   await page.waitForTimeout(5000); // Wait for 5 seconds

   // Check if the OTP was captured
   if (!otp) {
     throw new Error('OTP was not captured from the network response.');
   }
 
   // Split the OTP into individual digits
   const otpDigits = otp.split('');
   if (otpDigits.length !== 6) {
     throw new Error('OTP must be 6 digits long.');
   }
 
   // Fill the OTP into the input boxes
   for (let i = 0; i < 6; i++) {
     const inputSelector = `.eagle-ui-pin-code-field:nth-child(${i + 1})`;
     await page.locator(inputSelector).fill(otpDigits[i]);
   }
 
  /*
  await page.locator('.eagle-ui-pin-code-field').first().click();
  await page.locator('.eagle-ui-pin-code-field').first().fill('9');
  await page.locator('input:nth-child(2)').fill('0');
  await page.locator('input:nth-child(3)').fill('3');
  await page.locator('input:nth-child(4)').fill('8');
  await page.locator('input:nth-child(5)').fill('8');
  await page.locator('input:nth-child(6)').fill('3');
  */
  await page.getByRole('button', { name: 'Verify OTP' }).click();
});