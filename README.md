# Revenue.DIY Plugin

Revenue skills and specialist agents for your AI, from [revenue.diy](https://revenue.diy).

Install the plugin and your AI gets the skills. Add the **Revenue.DIY connector** and the skills work from your own business context – positioning, ICP, offering, brand voice, messaging. That context is served by the connector to the account it belongs to; none of it is stored in this repository.

## Get set up

**[revenue.diy/install-guide](https://revenue.diy/install-guide)** – connect the Revenue.DIY MCP and install the plugin on every Claude plan and app, including the one-time admin setup on a Claude Team or Enterprise plan.

The link is permanent and always points at the current instructions, so the steps are not repeated here.

## What is in here

```
.claude-plugin/   plugin manifest + marketplace.json
.mcp.json         the Revenue.DIY connector declaration
agents/           specialist agents (auto-discovered)
skills/           workflow skills (auto-discovered)
CHANGELOG.md      what changed in each release
```

The skills follow the `SKILL.md` standard and the connector is a standard MCP server, so most of this travels to other AI tools.

## Help

**support@revenue.diy** – installation, issues, feature requests, anything account-specific. Or say "report a bug" in any session and the AI drafts the report for you.

This repository is published from an upstream baseline: changes made here are overwritten by the next release, so send fixes to support rather than as pull requests.

## Licence

Copyright Revenue DIY Ltd. Licensed under PolyForm Shield 1.0.0 – see `LICENSE.txt` at the root and in every skill folder. Use it, change it and share it for your own business; do not sell it or use it to provide a competing product.
