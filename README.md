# Revenue.DIY Plugin

Revenue skills and specialist agents for your AI, plus the connector that lets them read your own business context – so your AI can do real revenue work instead of guessing.

Two things make it work, and they are separate:

- **The plugin** – this repository – gives your AI the skills and the agents. It is free, and it is the whole thing you install.
- **The connector** gives those skills your business: positioning, ICP, offering, brand voice, messaging. That context is not in this repository and never will be. It is served by Revenue.DIY to the account it belongs to.

Install the plugin and you get the skills. Add the connector and the skills know who you are.

---

## Get set up

**[revenue.diy/install-guide](https://revenue.diy/install-guide)**

Covers every route: Claude on the web, Claude Desktop and Cowork, Claude Code on the command line and in VS Code, Claude Code on the web, and the one-time setup an admin does on a Claude Team or Enterprise plan. It also covers switching the connector on, and setting it up by hand if it does not appear.

## Keep it current

**[revenue.diy/updating-plugin](https://revenue.diy/updating-plugin)**

New versions ship regularly and **automatic updates are off until you turn them on**. That guide shows where the switch is on each surface, how to update by hand, and what to do when a version refuses to move.

Both links are permanent. They always point at the current instructions, which is why the steps are not repeated here – a README cannot be corrected without a release, and instructions on a moving product go stale.

---

## What is in here

```
.claude-plugin/   plugin manifest + marketplace.json
.mcp.json         the Revenue.DIY connector declaration
agents/           specialist agents (auto-discovered)
skills/           workflow skills (auto-discovered)
hooks/            the session-start version check, which tells you when this copy is behind
CHANGELOG.md      what changed in each release
```

**Your business context is not in here, and no business's is.** This repository holds skills, agents and configuration – nothing else. Context is held per account, served by the connector, and reaches only the account that owns it.

The skills run without the connector. They will ask you for the facts they need instead of knowing them.

Using something other than Claude? The skills follow the `SKILL.md` standard, and the connector is a standard MCP server, so most of this travels.

---

## Issues

**Bugs and feature requests: open an Issue on this repository.** That is what Issues here are for, and what gets read.

Please do not put business detail, customer names or anything confidential in an Issue – it is a public tracker. For anything account-specific, email **support@revenue.diy** instead.

Pull requests are not accepted: this repository is published from an upstream baseline, so anything merged here would be overwritten by the next release. Open an Issue and it gets fixed at the source.

Or say "report a bug" in any session and the AI drafts the report for you.

---

## Licence

Copyright Revenue DIY Ltd. Licensed under PolyForm Shield 1.0.0 – see `LICENSE.txt` at the root and in every skill folder. Use it, change it and share it for your own business; do not sell it or use it to provide a competing product.
