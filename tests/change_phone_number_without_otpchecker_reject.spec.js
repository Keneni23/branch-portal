import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://staging-dashen-super-app-branch-portal.vercel.app/auth/signin?callbackUrl=%2F');
  await page.getByRole('textbox', { name: 'Username Continue' }).click();
  await page.getByRole('textbox', { name: 'Username Continue' }).fill('kofi1');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Kenifira123@');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Pending Actions' }).click();
  await page.getByPlaceholder('Search Customer by name,').click();
  await page.getByPlaceholder('Search Customer by name,').fill('haji nasir');
  await page.locator("(//*[@type='button'])[5]").click();
  await page.getByRole('button', { name: 'Reject' }).click();
  await page.getByRole('textbox', { name: 'Reason' }).click();
  await page.getByRole('textbox', { name: 'Reason' }).fill('test ');
  await page.locator("//form//button[text()='Reject']").click();
});