
import { test, expect } from '@playwright/test';

// Fixed Test 1: Timing issue
test('fixed timing test @smoke', async ({ page }) => {
  await page.setContent(`
    <button id="submit" style="display:none">
      Submit
    </button>
    <script>
      setTimeout(() => {
        document.getElementById('submit').style.display = 'block';
      }, Math.random() * 1000);
    </script>
  `);

  await expect(page.locator('#submit')).toBeVisible({
    timeout: 5000
  });
});

// Fixed Test 2: Independent state
test('fixed shared state test @smoke', async () => {
  let counter = 0;
  counter++;
  expect(counter).toBe(1);
});

// Fixed Test 3: Independent setup
test('fixed state dependent test', async () => {
  const counter = 1;
  expect(counter).toBe(1);
});

// Fixed Test 4: Deterministic data
test('fixed data test @smoke', async () => {
  const value = 0.75;
  expect(value).toBeGreaterThan(0.3);
});
