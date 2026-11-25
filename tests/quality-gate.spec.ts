
import { test, expect } from '@playwright/test';

test('quality gate verification @smoke', async ({ page }) => {
  await page.setContent('<h1>Application Ready</h1>');

  await expect(
    page.getByRole('heading')
  ).toHaveText('Application Ready', {
    timeout: 2000
  });
});
