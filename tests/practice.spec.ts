import { test, expect } from '@playwright/test';

test('hover', async ({ page }) => {
    await page.goto('https://qaplayground.vercel.app/');
    await page.locator('.hover-trigger').hover();
})