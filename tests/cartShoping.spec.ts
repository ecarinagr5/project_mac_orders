import { test, expect } from '@playwright/test';

test('Validate Cart Shopping view', async ({ page }) => {
  await page.goto('http://localhost:3000/cart');
    await page.getByRole('heading', { name: 'Shopping Cart' })
});

test('Validate Cart Empty Shopping view', async ({ page }) => {
    await page.goto('http://localhost:3000/cart');
    await page.getByRole('heading', { name: 'Total Payment: $' }).click();
  });


  test('Validate Cart with one Products Shopping view', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.getByRole('link', { name: 'Burger A Burger A $499 A' }).click();
    await page.getByText('Burger A').click();
    await page.getByRole('button', { name: 'Add Cart' }).click();
    await page.getByText('Burger A (1)').click();
    await page.getByText('$499', { exact: true }).click();
    await page.getByRole('heading', { name: 'Total Payment: $' }).click();
    expect(page.getByText('Burger A (1)')).toBeTruthy();
  });


  
  