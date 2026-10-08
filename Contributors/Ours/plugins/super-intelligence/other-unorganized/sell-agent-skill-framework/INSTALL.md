# Installation Guide

## Quick Install (Copy & Paste)

### macOS / Linux
```bash
cp -r .agent /path/to/your/project/
```

### Windows (PowerShell)
```powershell
Copy-Item -Recurse .agent C:\path\to\your\project\
```

## Manual Install

1. Download or clone this repository
2. Copy the `.agent` folder to your project root
3. Your project should look like:
   ```
   your-project/
   ├── .agent/           ← Add this folder
   ├── src/
   ├── package.json
   └── ...
   ```

## First Use

Tell your AI agent:
```
Read the skill file at .agent/skills/universal-production/SKILL.md 
and follow its instructions for this project.
```

That's it! The agent will:
1. Detect your framework
2. Load appropriate templates
3. Apply production standards
4. Start maintaining context logs

## Verify Installation

Check these files exist:
- `.agent/skills/universal-production/SKILL.md`
- `.agent/logs/README.md`
- `.agent/skills/universal-production/preferences/project-config.yaml`

## Troubleshooting

### Agent can't find the skill
Make sure the `.agent` folder is in your project root (same level as `package.json`).

### Logs not persisting
Check that `.agent/logs/` folder exists and is not in `.gitignore`.

### Wrong framework detected
Manually set in `.agent/skills/universal-production/preferences/project-config.yaml`:
```yaml
framework: nextjs  # or react-vite, vue, express
```

## Updates

To update to a new version:
1. Backup your `preferences/` folder (contains your settings)
2. Copy new `.agent` folder
3. Restore your `preferences/` folder

Your logs and settings will be preserved!
