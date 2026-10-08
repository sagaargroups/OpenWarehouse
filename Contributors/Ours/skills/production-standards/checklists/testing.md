# Testing Checklist

Run through this checklist when adding or modifying tests.

## Test Creation

### When to Create Tests
- [ ] New API endpoint → Create API test
- [ ] New business logic → Create unit test
- [ ] New component with logic → Create component test
- [ ] Bug fix → Create regression test
- [ ] New user flow → Create E2E test

### Test Quality
- [ ] Tests are independent (can run in any order)
- [ ] Tests are deterministic (same result every time)
- [ ] Tests are fast (unit < 100ms)
- [ ] Tests use descriptive names
- [ ] Tests follow AAA pattern (Arrange, Act, Assert)

## Test Coverage

### Minimum Thresholds
- [ ] Overall coverage > 70%
- [ ] Critical paths coverage > 90%
- [ ] New code has tests

### What to Test
- [ ] Happy path (expected behavior)
- [ ] Edge cases (empty, null, max values)
- [ ] Error cases (invalid input, network failure)
- [ ] Boundary conditions

### What NOT to Test
- External libraries (trust their tests)
- Simple getters/setters
- Framework internals

## Test Maintenance

### Updating Tests
- [ ] Tests updated when logic changes
- [ ] Failing tests fixed before merge
- [ ] Flaky tests investigated immediately
- [ ] Deprecated tests removed

### Test Organization
- [ ] Tests colocated with source files
- [ ] Shared test utilities in test/utils
- [ ] Test data in fixtures/

## Mocking

### Best Practices
- [ ] Mock external APIs (not local logic)
- [ ] Use MSW for HTTP mocks
- [ ] Mock time for date-dependent tests
- [ ] Reset mocks between tests

### Avoid
- Mocking too much (test integration when possible)
- Mocking implementation details
- Leaving mocks in place after tests

## CI Integration

- [ ] Tests run on every PR
- [ ] Coverage reported on PR
- [ ] Failing tests block merge
- [ ] Slow tests flagged

## Test File Naming

```
// Unit tests
user.service.ts
user.service.test.ts

// Integration tests
api/users.integration.test.ts

// E2E tests
e2e/user-registration.spec.ts
```

## Running Tests

```bash
# All tests
pnpm test

# Watch mode
pnpm test:watch

# Coverage report
pnpm test:coverage

# Specific file
pnpm test user.service.test.ts
```
