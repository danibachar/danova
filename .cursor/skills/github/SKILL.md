# GitHub Manager Skill (GitHub MCP Required)

## Overview

This skill enables an AI agent to safely manage GitHub workflows using GitHub MCP.

Supported capabilities:
- List Pull Requests
- Open Pull Requests
- Review Pull Requests
- Merge Pull Requests (policy controlled)
- Run GitHub Actions workflows (workflow_dispatch)
- Rerun failed CI jobs
- Manage labels / reviewers / assignees
- Sync PR branch with base branch
- Create / update Issues
- Generate PR summaries and risk analysis
- Create tags / releases (if permitted)

This skill is MCP-FIRST and must never operate without verified GitHub MCP connectivity.

---

# HARD PREREQUISITE — GitHub MCP Connectivity

## REQUIRED BEFORE ANY ACTION

Agent MUST verify GitHub MCP connectivity.

### Steps

1. Detect repository:
   - git remote origin
   - workspace metadata

2. Verify via GitHub MCP:
   - Authenticated user
   - Repo accessible
   - Default branch
   - Permission scopes:
     - pull_request:write
     - contents:write
     - actions:write

---

## If Verification Fails

STOP and output:

GitHub MCP is not connected or not authorized for this repository.
Please connect GitHub MCP and retry.

---

# STANDARD OUTPUT FORMAT (MANDATORY)

## 1. Connectivity
- GitHub User:
- Repository:
- Default Branch:
- Permissions:

## 2. Plan
Bullet list of intended actions.

## 3. Actions Taken
Execution summary.

## 4. Results
Links + statuses.

## 5. Suggested Next Steps
2–5 intelligent follow-ups.

---

# COMMANDS

---

## list_prs

### Inputs
- state: open | closed | merged
- author
- assignee
- reviewer_requested
- label
- base
- head
- draft
- updated_since
- sort: updated | created | comments
- limit

### MCP Operations
- Search PRs
- Fetch reviews
- Fetch check status (best effort)

### Output Table
| PR | Title | Author | Draft | Reviews | Checks | Updated | Link |

---

## open_pr

### Inputs
- head_branch
- base_branch (default repo default)
- title
- body
- draft (default true)
- labels
- reviewers
- assignees

### Rules
Must verify remote branch exists.

If body missing → generate using template:

## Summary
## Changes
## Testing
## Risk / Rollback
## Screenshots / Notes
## Checklist

### MCP Operations
- Create PR
- Add labels
- Add reviewers
- Add assignees

---

## review_pr

### Inputs
- pr_number
- event:
  - COMMENT
  - APPROVE
  - REQUEST_CHANGES
- summary_comment
- inline_comments:
  - file
  - line
  - message

### Rules
Must:
- Fetch diff
- Check CI status

If REQUEST_CHANGES include:
- Blocking issues
- Non-blocking suggestions
- Questions

### MCP Operations
- Fetch PR diff
- Create review

---

## merge_pr

### Inputs
- pr_number
- method: squash (default) | merge | rebase
- delete_branch (default true)
- commit_title
- commit_message

---

### REQUIRED SAFETY CHECKS

Must verify:
- PR mergeable
- Required checks passing
- No blocking reviews
- Branch protection compliance (best effort)

---

### Default Policy
DO NOT MERGE if:
- CI failing
- Changes requested review exists

---

### Override Policy
If user explicitly requests:
- Restate failing checks
- Merge only if MCP allows

---

### MCP Operations
- Fetch PR status
- Fetch reviews
- Merge PR
- Delete branch (if allowed)

---

## run_workflow

### Inputs
- workflow (id or filename)
- ref (default default branch)
- inputs (key/value)

### Rules
If ambiguous → list workflows first.

After dispatch → fetch run link.

### MCP Operations
- List workflows
- Dispatch workflow
- Fetch runs

---

# ADDITIONAL COMMANDS

---

## rerun_failed_checks
- Identify failed runs
- Rerun if supported

---

## label_and_assign
- Add/remove labels
- Assign users
- Request reviewers

---

## sync_branch_with_base

Strategy:
1. Use GitHub Update Branch API if available
2. Otherwise propose rebase/merge instructions
3. Never force push unless explicitly allowed

---

## create_issue / update_issue

Template:

## Context
## Problem
## Acceptance Criteria
## References

---

## pr_summary

Must include:
- Change summary
- Key files touched
- Risk areas
- Test coverage signal
- Rollback approach
- Open questions

---

# GLOBAL GUARDRAILS

## Security
- Never expose secrets
- Never expose tokens
- Never expose raw logs with secrets

---

## Merge Safety
Default requires:
- Green CI
- No blocking reviews

---

## PR Defaults
- Default create PR = Draft
- Default merge method = Squash

---

## Logging
Always provide:
- PR links
- Workflow links
- Issue links

---

# DECISION HEURISTICS

Prefer:
- Small PRs
- Draft first
- Strong PR descriptions
- Reviewer suggestions from history
- Label inference from file paths (if patterns known)

---

# FAILURE HANDLING

If MCP call fails:
1. Retry once
2. If fails again → STOP and report failure

Never silently continue.

---

# MANDATORY AGENT BOOTSTRAP RULE

Before ANY GitHub action:

Verify GitHub MCP connectivity.
Resolve repository from workspace or git remote.
Fetch authenticated user and repository metadata.
If verification fails → STOP and notify user.