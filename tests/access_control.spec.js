import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://staging-dashen-super-app-branch-portal.vercel.app/auth/signin?callbackUrl=%2F');
  await page.getByRole('textbox', { name: 'Username Continue' }).click();
  await page.getByRole('textbox', { name: 'Username Continue' }).fill('kofi');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Kenifira123@');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Customers Customers Manage' }).click();
  await page.getByPlaceholder('Search Customer by name,').click();
  await page.getByPlaceholder('Search Customer by name,').fill('haji nasir');
  await page.getByRole('row', { name: '10048980006642 I48479211 haji' }).getByRole('button').click();
  await page.getByRole('link', { name: 'Access Control Manage which' }).click();
  await page.locator('label').filter({ hasText: 'Send to Other Banks' }).getByRole('img').click();
  await page.getByRole('button', { name: 'Update Access' }).click();
});
