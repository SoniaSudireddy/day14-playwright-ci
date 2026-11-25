
import { test, expect } from '@playwright/test';

test('demonstrate flaky retry behavior', async ({}, testInfo) => {

  console.log(`Retry attempt: ${testInfo.retry}`);

  // Intentionally fail the first attempt
  // and pass on retry.
  expect(testInfo.retry).toBeGreaterThan(0);

});
