# Accessibility Checklist (WCAG 2.1 AA)

Run through this checklist for accessibility compliance.

## Perceivable

### Text Alternatives
- [ ] All images have alt text
- [ ] Decorative images have empty alt=""
- [ ] Complex images have long descriptions
- [ ] Icons have aria-labels

### Audio/Video
- [ ] Videos have captions
- [ ] Audio has transcripts
- [ ] No auto-playing audio

### Adaptable
- [ ] Content readable without CSS
- [ ] Correct heading hierarchy (h1 → h2 → h3)
- [ ] Lists use proper markup (ul, ol)
- [ ] Tables have headers (th)

### Distinguishable
- [ ] Color contrast ratio ≥ 4.5:1 for text
- [ ] Color not sole information indicator
- [ ] Text resizable to 200% without loss
- [ ] No horizontal scrolling at 320px width

## Operable

### Keyboard
- [ ] All interactive elements keyboard accessible
- [ ] Tab order is logical
- [ ] Focus visible on all elements
- [ ] No keyboard traps
- [ ] Skip to main content link

### Timing
- [ ] Users can extend time limits
- [ ] Moving content can be paused
- [ ] No content flashes > 3 times/second

### Navigable
- [ ] Page has descriptive title
- [ ] Links have descriptive text
- [ ] Breadcrumbs present where appropriate
- [ ] Current page indicated in navigation

### Input Modalities
- [ ] Touch targets ≥ 44x44 pixels
- [ ] Gestures have alternatives
- [ ] Pointer cancellation available

## Understandable

### Readable
- [ ] Page language declared (lang attribute)
- [ ] Abbreviations explained on first use
- [ ] Reading level appropriate

### Predictable
- [ ] Navigation consistent across pages
- [ ] Components behave consistently
- [ ] No unexpected context changes

### Input Assistance
- [ ] Form labels associated with inputs
- [ ] Error messages are clear
- [ ] Error suggestions provided
- [ ] Required fields marked clearly
- [ ] Form validation on submit

## Robust

### Compatible
- [ ] HTML validates
- [ ] ARIA used correctly
- [ ] Custom components have ARIA roles
- [ ] Status messages announced by screen readers

## Testing Tools

Use these tools to verify:
- axe DevTools (browser extension)
- WAVE (wave.webaim.org)
- Lighthouse (Chrome DevTools)
- NVDA/VoiceOver for screen reader testing
- Keyboard-only navigation test

## Quick Wins

High-impact, low-effort fixes:
1. Add alt text to all images
2. Ensure color contrast meets 4.5:1
3. Add visible focus styles
4. Use semantic HTML (nav, main, footer)
5. Associate labels with form inputs
