import { test, expect } from '@playwright/test'

test('valid login test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/')
    await page.getByPlaceholder("Username").fill("standard_user")
    await page.locator("[data-test='password']").fill("secret_sauce")
    await page.getByRole('button', { name: "LOGIN" }).click()
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")
})

test('invalid user test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/')
    await page.getByPlaceholder("Username").fill("standard_use")
    await page.locator("[data-test='password']").fill("secret_sauce")
    await page.getByRole('button', { name: "LOGIN" }).click()
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service')

})

test('empty fields', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/')
    await page.getByPlaceholder("Username").fill("")
    await page.locator("[data-test='password']").fill("")
    await page.getByRole('button', { name: "LOGIN" }).click()
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username is required')

})