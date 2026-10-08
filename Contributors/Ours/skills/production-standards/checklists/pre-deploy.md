# Pre-Deployment Checklist

Run through this checklist before deploying to production.

## Code Quality

- [ ] TypeScript compiles with no errors (`pnpm build`)
- [ ] ESLint passes with no warnings (`pnpm lint`)
- [ ] No `console.log` statements in production code
- [ ] All TODOs addressed or documented
- [ ] Code reviewed by at least one team member

## Testing

- [ ] All unit tests pass (`pnpm test`)
- [ ] All integration tests pass
- [ ] E2E tests pass for critical flows
- [ ] Coverage meets thresholds (> 70%)
- [ ] No skipped tests without documentation

## Security

- [ ] No hardcoded secrets or API keys
- [ ] Environment variables set in deployment platform
- [ ] SQL injection protection verified (using ORM)
- [ ] CSRF protection enabled on forms
- [ ] Security headers configured (CSP, X-Frame-Options)
- [ ] Dependencies audited (`pnpm audit`)

## Performance

- [ ] No memory leaks detected
- [ ] Bundle size acceptable (< 500KB initial JS)
- [ ] Images optimized (WebP, proper sizing)
- [ ] Lazy loading implemented for heavy components
- [ ] API response times acceptable (< 200ms p95)

## Database

- [ ] Migrations run on staging first
- [ ] Migrations tested for rollback capability
- [ ] Indexes added for slow queries
- [ ] Connection pooling configured
- [ ] Backup verified

## Infrastructure

- [ ] SSL certificates valid
- [ ] DNS configured correctly
- [ ] CDN caching rules set
- [ ] Rate limiting enabled
- [ ] Monitoring and alerting configured

## Documentation

- [ ] API documentation updated
- [ ] README updated with setup instructions
- [ ] Changelog updated
- [ ] Breaking changes documented

## Rollback Plan

- [ ] Previous version tagged in git
- [ ] Rollback procedure documented
- [ ] Database rollback scripts ready
- [ ] Team notified of deployment

## Final Checks

- [ ] Staging deployment tested manually
- [ ] Feature flags configured
- [ ] Analytics tracking verified
- [ ] Error tracking configured (Sentry, etc.)
