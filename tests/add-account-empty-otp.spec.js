import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://staging-dashen-super-app-branch-portal.vercel.app/auth/signin?callbackUrl=%2F');
  await page.getByRole('textbox', { name: 'Username Continue' }).click();
  await page.getByRole('textbox', { name: 'Username Continue' }).fill('kofi');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Kenifira123@');
  await page.getByRole('button').filter({ hasText: /^$/ }).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Customers Customers Manage' }).click();
  await page.getByPlaceholder('Search Customer by name,').click();
  await page.getByPlaceholder('Search Customer by name,').fill('933703329');
  await page.getByRole('row', { name: '8070448012227 019798591' }).getByRole('button').click();
  await page.locator('div').filter({ hasText: /^Link AccountLink customers' bank accounts to the mobile app\.$/ }).first().click();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.getByRole('heading', { name: 'Add Other Accounts' }).click();
  await page.getByRole('spinbutton', { name: 'Account Number Search' }).click();
  await page.getByRole('spinbutton', { name: 'Account Number Search' }).fill('5019798591151');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('button', { name: 'Send OTP' }).click();
  await page.getByRole('button', { name: 'Verify OTP' }).click();
  await expect(page.locator('form')).toContainText('OTP code is required');
});