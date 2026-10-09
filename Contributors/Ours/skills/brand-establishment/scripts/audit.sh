#!/bin/bash
# Brand Establishment — Zero-Placeholder Audit Script
# Usage: ./audit.sh <path-to-brand-output-directory>
#
# Scans for unreplaced {{VARIABLE}} template tags in generated output files.
# Exit 0 = PASS (no placeholders found)
# Exit 1 = FAIL (unreplaced placeholders found)

set -euo pipefail

if [ -z "${1:-}" ]; then
  echo "❌ Usage: ./audit.sh <path-to-brand-output-directory>"
  echo "   Example: ./audit.sh outputs/d2c-with-ahrik-mono-craft-lifetime-identity-v0/"
  exit 1
fi

TARGET_DIR="$1"

if [ ! -d "$TARGET_DIR" ]; then
  echo "❌ Directory not found: $TARGET_DIR"
  exit 1
fi

echo "🔍 Auditing: $TARGET_DIR"
echo "──────────────────────────────────────"

# Check for unreplaced template variables
RESULTS=$(grep -rn --include="*.md" --include="*.html" --include="*.css" --include="*.json" "{{" "$TARGET_DIR" 2>/dev/null || true)

if [ -n "$RESULTS" ]; then
  echo "❌ FAIL: Unreplaced placeholders found:"
  echo ""
  echo "$RESULTS"
  echo ""
  echo "──────────────────────────────────────"
  echo "Total: $(echo "$RESULTS" | wc -l | tr -d ' ') occurrences"
  exit 1
else
  echo "✅ PASS: Zero unreplaced placeholders"
  echo ""
  
  # Bonus: check directory completeness
  EXPECTED_DIRS=("BRAND-GUIDELINES" "BRAND-VOICE" "COLORS" "IMAGERY" "LOGO" "TAGLINE" "TEMPLATES" "TYPOGRAPHY")
  MISSING=0
  
  for DIR in "${EXPECTED_DIRS[@]}"; do
    if [ ! -d "$TARGET_DIR/$DIR" ]; then
      echo "⚠️  Missing directory: $DIR/"
      MISSING=$((MISSING + 1))
    fi
  done
  
  if [ "$MISSING" -eq 0 ]; then
    echo "✅ All 8 identity suites present"
  else
    echo "⚠️  $MISSING directory(ies) missing"
  fi
  
  exit 0
fi
