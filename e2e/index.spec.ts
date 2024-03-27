import { expect, test } from '@playwright/test';

test('タイトルが表示される', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await expect(page).toHaveTitle(/Letters Tube/);
});
