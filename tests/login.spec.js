import { test, expect } from '@playwright/test';
const { allure }= require ('allure-playwright');

test('test', async ({ page }) => {
  await page.goto('https://staging-dashen-super-app-branch-portal.vercel.app/auth/signin?callbackUrl=%2F');
  await page.getByRole('textbox', { name: 'Username Continue' }).click();
  await page.getByRole('textbox', { name: 'Username Continue' }).fill('kofi');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Kenifira123@');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('K', { exact: true }).click();
  await page.getByRole('button', { name: 'Sign Out' }).click();
});
