# Security Checklist

Run through this checklist for security audit.

## Authentication & Authorization

- [ ] Passwords hashed with bcrypt (cost factor >= 10)
- [ ] Session tokens are httpOnly cookies
- [ ] Session expiration implemented
- [ ] CSRF tokens on all forms
- [ ] Rate limiting on auth endpoints
- [ ] Account lockout after failed attempts
- [ ] MFA available for sensitive accounts

## Input Validation

- [ ] All user inputs validated server-side
- [ ] Input sanitization for XSS prevention
- [ ] File upload restrictions (type, size)
- [ ] SQL injection protection (parameterized queries)
- [ ] JSON schema validation on API inputs

## Data Protection

- [ ] Sensitive data encrypted at rest
- [ ] HTTPS enforced (no HTTP)
- [ ] PII logged only when necessary
- [ ] Database credentials rotated regularly
- [ ] Backups encrypted

## API Security

- [ ] API authentication required
- [ ] API rate limiting enabled
- [ ] CORS configured properly
- [ ] No sensitive data in URLs
- [ ] Error messages don't leak internals

## Infrastructure

- [ ] Firewall rules configured
- [ ] SSH keys only (no passwords)
- [ ] Security patches up to date
- [ ] Unused ports closed
- [ ] Database not publicly accessible

## Dependencies

- [ ] No known vulnerabilities (`pnpm audit`)
- [ ] Dependencies up to date
- [ ] Lock files committed
- [ ] Third-party scripts from trusted sources

## Headers

- [ ] Content-Security-Policy set
- [ ] X-Content-Type-Options: nosniff
- [ ] X-Frame-Options: DENY or SAMEORIGIN
- [ ] Strict-Transport-Security set
- [ ] X-XSS-Protection: 1; mode=block

## Secrets Management

- [ ] Secrets in env vars (not code)
- [ ] .env files in .gitignore
- [ ] Secrets manager used in production
- [ ] API keys scoped to minimum permissions
- [ ] Secrets rotated periodically

## Logging & Monitoring

- [ ] Authentication events logged
- [ ] Failed access attempts logged
- [ ] Suspicious activity alerts set
- [ ] Logs don't contain sensitive data
- [ ] Log retention policy defined

## Incident Response

- [ ] Security incident procedure documented
- [ ] Contact list for security issues
- [ ] Data breach notification plan
- [ ] Regular security training for team
