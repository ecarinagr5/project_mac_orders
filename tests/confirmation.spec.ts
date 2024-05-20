import { test,expect} from '@playwright/test';

test('test Confirmation View', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Black Burger Black Burger $' }).click();
  await page.getByRole('button', { name: 'Add Cart' }).click();
  await page.getByRole('heading', { name: 'Total Payment: $' }).click();
  await page.getByRole('button', { name: 'Pay Order' }).click();
  expect(page.getByText('Black Burger')).toBeTruthy();
});


test('test Confirmation New Order Button', async ({ page }) => {
    await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Fries with Ketchup Fries with' }).click();
  await page.getByRole('button', { name: 'Add Cart' }).click();
  await page.getByRole('button', { name: 'Pay Order' }).click();
  await page.getByRole('button', { name: 'New Order' }).click();
  expect(page.getByRole('navigation').getByRole('link', { name: 'Menu' })).toBeTruthy();
  });