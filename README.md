
# Day 14 - Test Reliability and CI

## Flaky Test Detection

- Use repeat-each to reproduce intermittent failures.
- Use retries to identify flaky behavior.
- Use fail-on-flaky-tests to prevent hidden failures.
- Avoid hard-coded waits.
- Use independent test state.
- Use deterministic test data.

## Reliability Results

Before fix:
- Total: 80
- Passed: 63
- Failed: 17
- Failure rate: 21.25%

After fix:
- Total: 40
- Passed: 40
- Failed: 0
- Failure rate: 0%

## Verification Command

npx playwright test tests/flaky.spec.ts --project=chromium --repeat-each=10 --retries=1 --fail-on-flaky-tests
