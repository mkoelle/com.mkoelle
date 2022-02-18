import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test.describe('Home Page', () => {
  test('should welcome visitors', async ({ page }) => {
    // Make sure the list only has one todo item.
    await expect(page.locator('h1')).toHaveText('Hello')
  })
})
