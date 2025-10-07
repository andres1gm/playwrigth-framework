import { test, expect } from '@playwright/test'

test('validate eliminate inventory item', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/');
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.locator("[data-test='password']").fill("secret_sauce");
    await page.getByRole('button', { name: "LOGIN" }).click();
    await page.getByRole('link', { name: "Sauce Labs Bike Light" }).click();
    await page.getByRole('button', { name: 'ADD TO CART' }).click();
    await page.goto('https://www.saucedemo.com/v1/inventory.html');
    await page.getByRole('link', { name: "Sauce Labs Onesie" }).click();
    await page.getByRole('button', { name: 'ADD TO CART' }).click();
    await expect(page.locator(".shopping_cart_badge")).toHaveText('2')
    await page.goto('https://www.saucedemo.com/v1/cart.html');
    await expect(page.getByText("Sauce Labs Bike Light")).toBeVisible();
    await expect(page.getByText("Sauce Labs Onesie")).toBeVisible();
    await page.getByRole('button', { name: 'REMOVE' }).first().click();
    await expect(page.locator(".shopping_cart_badge")).toHaveText('1')



})

