import { test } from '@playwright/test';
import { ENV } from '../config/env' ;

test('Call based on Environment', async ({ page }) => {
    await page.goto(ENV.baseUrl!)
})