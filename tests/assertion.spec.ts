import { test, expect } from '@playwright/test';

test('Ycombinator', async ({ page }) => {
    await page.goto('https://www.ycombinator.com/')
})

test('imdb', async ({ page }) => {
    await page.goto('https://www.imdb.com/')
})

