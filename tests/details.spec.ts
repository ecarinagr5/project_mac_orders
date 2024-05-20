import { test, expect } from '@playwright/test';

test('test Burger A', async ({ page }) => {
  await page.goto('http://localhost:3000/details/burger-a');
  await page.getByRole('img', { name: 'Burger A' }).click();
  await page.getByText('Burger A').click();
  await page.getByRole('button', { name: 'Add Cart' }).click();
});

test('test Button Add Cart Functionality', async ({ page }) => {
  await page.goto('http://localhost:3000/details/burger-a');
  await page.getByRole('button', { name: 'Add Cart' }).click();
  await page.getByText('Burger A (1)').click();

});