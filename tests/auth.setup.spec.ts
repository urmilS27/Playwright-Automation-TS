import { test as setup, expect } from '@playwright/test';

setup('authenticate', async ({ page }) => {
  await page.goto('https://www.ycombinator.com/');
  await expect(page).not.toHaveURL(/login/);
  await page.context().storageState({
    path: '.auth/auth.json',
  });
});