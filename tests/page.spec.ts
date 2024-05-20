const { test, expect } = require('@playwright/test');

test('Test product page based on loading', async ({ page }) => {
  // Navigate to the page
  await page.goto('http://localhost:3000'); 
  const loadingIndicator = await page.locator('text=Loading...');
  await expect(loadingIndicator).not.toBeVisible();
});

test('Test Products available', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('navigation').getByRole('link', { name: 'Menu' }).click();
  await page.getByRole('link', { name: 'Black Burger Black Burger $' }).click();
});
