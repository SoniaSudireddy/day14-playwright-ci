
import { test, expect } from '@playwright/test';

test('quality gate failure demonstration @smoke', async ({ page }) => {
  await page.setContent('<h1>Application Ready</h1>');

  await expect(
    page.getByRole('heading')
  ).toHaveText('Application Failed', {
    timeout: 2000
  });
});
