# Revenue.DIY Plugin

Revenue skills and specialist agents for your AI, from [revenue.diy](https://revenue.diy).

Install the plugin and your AI gets the skills. Add the **Revenue.DIY connector** and the skills work from your own business context – positioning, ICP, offering, brand voice, messaging. That context is served by the connector to the account it belongs to; none of it is stored in this repository.

## Get set up

**[revenue.diy/install-guide](https://revenue.diy/install-guide)** – every surface (Claude on the web, Desktop, Cowork, Claude Code in the terminal, in VS Code and on the web, and the one-time admin setup on a Claude Team or Enterprise plan), plus switching the connector on.

## Keep it current

**[revenue.diy/updating-plugin](https://revenue.diy/updating-plugin)** – automatic updates are off until you turn them on; this guide shows the switch on each surface and how to update by hand.

Both links are permanent and always point at the current instructions, so the steps are not repeated here.

## What is in here

```
.claude-plugin/   plugin manifest + marketplace.json
.mcp.json         the Revenue.DIY connector declaration
agents/           specialist agents (auto-discovered)
skills/           workflow skills (auto-discovered)
hooks/            the session-start version check
CHANGELOG.md      what changed in each release
```

The skills follow the `SKILL.md` standard and the connector is a standard MCP server, so most of this travels to other AI tools.

## Help

**support@revenue.diy** – installation, issues, feature requests, anything account-specific. Or say "report a bug" in any session and the AI drafts the report for you.

This repository is published from an upstream baseline: changes made here are overwritten by the next release, so send fixes to support rather than as pull requests.

## Licence

Copyright Revenue DIY Ltd. Licensed under PolyForm Shield 1.0.0 – see `LICENSE.txt` at the root and in every skill folder. Use it, change it and share it for your own business; do not sell it or use it to provide a competing product.
