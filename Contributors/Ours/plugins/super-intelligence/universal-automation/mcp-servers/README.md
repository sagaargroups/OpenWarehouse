# 🔌 MCP Servers Guide

> MCP (Model Context Protocol) servers extend the AI agent's abilities.
> Each server gives the agent access to a new tool or service.

## What is MCP?
MCP is a protocol that lets AI agents interact with external tools.
Instead of copying data back and forth, the agent directly calls tools.

## How to Add a New MCP Server

### Step 1: Find the Server
- Check [mcp.so](https://mcp.so) (MCP server directory)
- Search npm: `npm search mcp-server`
- Search GitHub: `mcp-server-[tool]`

### Step 2: Install
```bash
npm install -g @mcp/server-[name]
# or
npx @mcp/server-[name]
```

### Step 3: Add to Config
Add to your AI tool's MCP config (e.g., Claude Desktop, Cursor, etc.):
```json
{
  "mcpServers": {
    "server-name": {
      "command": "npx",
      "args": ["@mcp/server-name"],
      "env": {
        "API_KEY": "your-key-here"
      }
    }
  }
}
```

### Step 4: Restart Agent
The agent will now have access to the new tools.

## Recommended MCP Servers

### 🔴 Must-Have (Install First)
| Server | What It Does | Install |
|---|---|---|
| `filesystem` | Read/write local files | Built into most agents |
| `github` | Manage repos, issues, PRs | `@modelcontextprotocol/server-github` |
| `postgres` | Query databases | `@modelcontextprotocol/server-postgres` |
| `brave-search` | Web search | `@modelcontextprotocol/server-brave-search` |

### 🟡 Productivity
| Server | What It Does | Install |
|---|---|---|
| `slack` | Send/read Slack messages | `@modelcontextprotocol/server-slack` |
| `google-drive` | Access Google Docs/Sheets | `@anthropic/server-google-drive` |
| `notion` | Read/write Notion pages | Community: `mcp-server-notion` |
| `linear` | Project management | Community: `mcp-server-linear` |

### 🟢 Creative
| Server | What It Does | Install |
|---|---|---|
| `cloudinary` | Image upload & transform | Community: `mcp-server-cloudinary` |
| `youtube` | YouTube data & upload | Community: `mcp-server-youtube` |

### 🔵 Analytics
| Server | What It Does | Install |
|---|---|---|
| `sentry` | Error monitoring | Community: `mcp-server-sentry` |
| `stripe` | Payment data | Community: `mcp-server-stripe` |

## Adding Your Own Custom MCP Server
If a tool doesn't have an MCP server, you can create one:
1. Wrap the API in a simple Node.js server
2. Follow the MCP spec: [modelcontextprotocol.io](https://modelcontextprotocol.io)
3. Expose tools, resources, and prompts
4. Add to your config like any other server

## Security Notes
- API keys in MCP config are stored locally
- Never commit MCP config files with real keys to Git
- Use environment variables for sensitive values
