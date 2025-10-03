import { test, expect } from '@playwright/test';

test('validate inventory item', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/');
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.locator("[data-test='password']").fill("secret_sauce");
    await page.getByRole('button', { name: "LOGIN" }).click();
    await page.getByRole('link', { name: "Sauce Labs Bike Light" }).click();
    await page.getByRole('button', { name: 'ADD TO CART' }).click();
    await expect(page.locator(".shopping_cart_badge")).toHaveText('1')
    await expect(page.getByText("Sauce Labs Bike Light")).toBeVisible();

})

test('eliminate inventory item', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/');
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.locator("[data-test='password']").fill("secret_sauce");
    await page.getByRole('button', { name: "LOGIN" }).click();
    await page.getByRole('link', { name: "Sauce Labs Bolt T-Shirt" }).click();
    await page.getByRole('button', { name: 'ADD TO CART' }).click();
    await expect(page.locator(".shopping_cart_badge")).toHaveText('1')
    await page.goto('https://www.saucedemo.com/v1/cart.html');
    await expect(page.getByText("Sauce Labs Bolt T-Shirt", {exact:true})).toBeVisible();
    await page.getByRole('button', { name: 'REMOVE' }).click();
    await expect(page.locator(".cart_item")).not.toBeVisible();



})