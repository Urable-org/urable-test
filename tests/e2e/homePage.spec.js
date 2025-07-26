const { test, expect } = require('@playwright/test');

test('Home page loads correctly', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle(/NeuroChain AI/);
  await expect(page.locator('text=Welcome to NeuroChain AI')).toBeVisible();
});

test('Navigation to features page works', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.click('text=Features');
  await expect(page).toHaveURL(/.*features/);
  await expect(page.locator('text=Real-time Analysis')).toBeVisible();
});
