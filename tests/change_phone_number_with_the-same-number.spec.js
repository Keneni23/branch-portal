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
  await page.getByPlaceholder('Search Customer by name,').fill('haji');
  await page.getByRole('row', { name: '10048980006642 I48479211 haji' }).getByRole('button').click();
  await page.getByText('Update the user\'s mobile app').click();
  await page.locator('div').filter({ hasText: /^Continue Without OTP$/ }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('spinbutton', { name: 'New Phone Number +' }).click();
  await page.getByRole('spinbutton', { name: 'New Phone Number +' }).fill('913233239');
  await page.getByRole('textbox', { name: 'Reason' }).click();
  await page.getByRole('textbox', { name: 'Reason' }).fill('test');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByLabel('Notifications alt+T').getByRole('listitem')).toContainText('You cannot change your Phone number to your current phone number. Please enter a different one.');
});