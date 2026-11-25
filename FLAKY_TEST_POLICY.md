# Flaky Test Management Policy

## Objective
Maintain a reliable automated test suite.

## Detection
- Use repeat-each to identify flaky tests.
- Configure one retry in CI and zero locally.
- Use fail-on-flaky-tests in CI.

## Root Causes
- Hard-coded waits
- Shared state
- Test order dependency
- Unstable test data
- Network delays

## Quarantine Policy
Document unstable tests, create a tracking issue,
and assign an owner. Critical smoke tests must
not be silently excluded.

## Ownership and SLA
- Owner: Assigned QA engineer
- Investigation: Within 24 hours
- Resolution: Within 2 working days
- Critical failures: Immediate investigation

## Failure Evidence
Retain HTML, JSON, JUnit reports, traces,
screenshots and videos where configured.

## Exit Criteria
10 consecutive successful executions without retries.

## CI Quality Gate
- Smoke tests on pull requests.
- Full regression on main and nightly.
- Failed or flaky required checks block merging.
- CI execution target: Under 10 minutes.
