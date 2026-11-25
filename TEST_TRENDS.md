# Flaky Test Management Policy

## Objective

Maintain a reliable automated test suite and prevent unstable tests from hiding application defects.

## Flaky Test Detection

- Execute repeated tests using `--repeat-each`.
- Configure one retry in CI and zero retries locally.
- Use `--fail-on-flaky-tests` to prevent hidden failures.
- Investigate tests that pass only after a retry.

## Root Cause Investigation

Investigate hard-coded waits, shared state, test order dependencies, unstable test data, network delays and asynchronous operations.

## Quarantine Policy

Unreliable tests may be temporarily quarantined after documenting the reason, assigning an owner and creating a tracking issue. Critical smoke tests must not be silently excluded from the quality gate.

## Ownership and SLA

- Owner: Assigned QA engineer.
- Investigation: Within 24 hours.
- Resolution target: Within 2 working days.
- Critical smoke test failures: Immediate investigation.

## Failure Evidence

Retain HTML reports, JSON reports, JUnit XML reports, traces, screenshots and videos where configured.

## Exit Criteria

A corrected test must pass at least 10 consecutive executions without retries before being removed from quarantine.

## CI Quality Gate

Pull requests must pass required smoke tests before merging. Full regression tests run on pushes to main and through the nightly schedule.

The CI execution target is less than 10 minutes.