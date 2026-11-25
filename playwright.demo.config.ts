
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './demos',
  retries: 1,
  workers: 1,
  reporter: 'list',
});
