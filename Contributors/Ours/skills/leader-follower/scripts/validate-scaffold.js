#!/usr/bin/env node

/**
 * validate-scaffold.js
 * 
 * PURPOSE: Scans project files for remaining TODO: markers to verify
 * the Follower model completed all scaffolded tasks.
 * 
 * USAGE:
 *   node validate-scaffold.js [directory] [--strict]
 * 
 * FLAGS:
 *   --strict   Exit with code 1 if any TODOs remain (for CI)
 *   --json     Output results as JSON
 * 
 * EXAMPLES:
 *   node validate-scaffold.js ./src
 *   node validate-scaffold.js ./src --strict
 *   node validate-scaffold.js . --json
 */

const fs = require('fs');
const path = require('path');

const SCAN_EXTENSIONS = [
  '.jsx', '.js', '.ts', '.tsx',
  '.css', '.scss',
  '.md', '.mdx',
  '.json', '.yaml', '.yml',
  '.sql', '.html'
];

const IGNORE_DIRS = [
  'node_modules', '.git', 'dist', 'build',
  '.next', '.vercel', '.tauri',
  'target', '.agents'
];

const TODO_PATTERNS = [
  /TODO:/gi,
  /FIXME:/gi,
  /HACK:/gi,
  /\/\/ TODO: Implement/gi,
  /return null;\s*$/gm, // Scaffold placeholder
];

const MARKER_PATTERNS = [
  { regex: /TODO:/gi, label: 'TODO', severity: 'error' },
  { regex: /FIXME:/gi, label: 'FIXME', severity: 'warning' },
  { regex: /Leader clarification needed/gi, label: 'NEEDS_LEADER', severity: 'error' },
];

function scanDirectory(dirPath) {
  const results = [];

  function walk(currentPath) {
    const entries = fs.readdirSync(currentPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentPath, entry.name);

      if (entry.isDirectory()) {
        if (!IGNORE_DIRS.includes(entry.name)) {
          walk(fullPath);
        }
        continue;
      }

      const ext = path.extname(entry.name).toLowerCase();
      if (!SCAN_EXTENSIONS.includes(ext)) continue;

      const content = fs.readFileSync(fullPath, 'utf-8');
      const lines = content.split('\n');

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        for (const pattern of MARKER_PATTERNS) {
          if (pattern.regex.test(line)) {
            pattern.regex.lastIndex = 0; // Reset regex state
            results.push({
              file: path.relative(process.cwd(), fullPath),
              line: i + 1,
              content: line.trim(),
              label: pattern.label,
              severity: pattern.severity,
            });
          }
        }
      }
    }
  }

  walk(dirPath);
  return results;
}

// --- Main ---
const args = process.argv.slice(2);
const targetDir = args.find(a => !a.startsWith('--')) || '.';
const strict = args.includes('--strict');
const jsonOutput = args.includes('--json');

const resolvedDir = path.resolve(targetDir);

if (!fs.existsSync(resolvedDir)) {
  console.error(`Directory not found: ${resolvedDir}`);
  process.exit(1);
}

const results = scanDirectory(resolvedDir);

if (jsonOutput) {
  console.log(JSON.stringify({ total: results.length, items: results }, null, 2));
} else {
  if (results.length === 0) {
    console.log('\n✅ SCAFFOLD COMPLETE — No remaining TODO/FIXME markers found.\n');
    console.log('→ Safe to switch back to Leader model for verification.');
  } else {
    console.log(`\n⚠️  SCAFFOLD INCOMPLETE — ${results.length} marker(s) remaining:\n`);

    const grouped = {};
    for (const r of results) {
      if (!grouped[r.file]) grouped[r.file] = [];
      grouped[r.file].push(r);
    }

    for (const [file, items] of Object.entries(grouped)) {
      console.log(`  📄 ${file}`);
      for (const item of items) {
        const icon = item.severity === 'error' ? '❌' : '⚠️';
        console.log(`     ${icon} L${item.line}: [${item.label}] ${item.content}`);
      }
      console.log('');
    }

    const errors = results.filter(r => r.severity === 'error').length;
    const warnings = results.filter(r => r.severity === 'warning').length;
    console.log(`Summary: ${errors} error(s), ${warnings} warning(s)`);
    console.log('→ Follower must resolve errors before handoff to Leader.\n');
  }
}

if (strict && results.some(r => r.severity === 'error')) {
  process.exit(1);
}
