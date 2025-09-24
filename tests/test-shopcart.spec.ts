import { test, expect } from '@playwright/test';

test('add item desde Inventory', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'ADD TO CART' }).first().click();
  await page.locator("#shopping_cart_container").click();
  await expect(page.locator(".shopping_cart_badge")).toHaveText('1')
  await expect(page).toHaveURL(/cart/);
  await expect(page.getByText("Sauce Labs Backpack")).toBeVisible();
  await expect(page.getByRole('button', { name: /remove/i })).toBeVisible();
});