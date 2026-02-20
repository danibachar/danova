# SKILL: Resume Work After Agent Interruption (Cursor)

## Purpose
Help the agent reliably continue a task after it was interrupted (stuck, manually stopped, crashed, or context lost) by:
1) reconstructing “where we were”,
2) restoring the relevant working context,
3) confirming the next concrete action,
4) continuing with minimal thrash.

This skill assumes a local repo and terminal access in Cursor.

---

## When to Use
Use this skill whenever:
- the agent got stuck and you stopped it,
- the agent lost context / forgot decisions,
- the agent is about to redo work already done,
- you want it to “pick up where it left off” with high confidence.

---

## Operating Principles
- **State first, action second.** Never continue without reconstructing the last known state.
- **Prefer evidence over memory.** Use git, file diffs, logs, and TODO markers to infer progress.
- **Minimize rework.** Identify what’s already done, what’s partially done, and what’s next.
- **Checkpoint often.** If you’re resuming, you should create a new checkpoint quickly once stable.

---

## Repo Conventions (Lightweight, Recommended)
If the repo doesn’t already have this, introduce it during the next resume:
- A short-lived file: `./.agent/last_state.md` (or `./AGENT_LAST_STATE.md`) that records:
  - Goal
  - What was done
  - What’s next
  - Commands run / key outputs
  - Known issues
- Use explicit markers in code when mid-flight:
  - `// AGENT_TODO(resume): ...`
  - `# AGENT_TODO(resume): ...`
- If relevant, create a WIP branch: `wip/<topic>-<date>`.

This skill works even if none of these exist (it will infer state).

---

## Core Workflow (Do This Every Time)

### Step 0 — Declare “Resume Mode”
Start your response with:
- “Entering Resume Mode. I will rebuild context from the repo and artifacts before taking action.”

### Step 1 — Collect Hard State (Must-Run Commands)
Run and capture outputs (summarize, don’t paste walls unless needed):

1. **Repo + branch**
   - `pwd`
   - `git rev-parse --show-toplevel`
   - `git branch --show-current`
   - `git log -n 15 --oneline --decorate`

2. **Working tree + diffs**
   - `git status --porcelain=v1`
   - `git diff`
   - `git diff --staged`

3. **Recent file activity**
   - If available:
     - `git diff --name-only HEAD~1..HEAD` (if recent commits exist)
   - Also list recently modified files (pick one):
     - `ls -lt` (top-level)
     - or if repo is large: search in likely dirs (`src`, `app`, etc.)

4. **Search for “resume breadcrumbs”**
   - `rg -n "AGENT_TODO\\(resume\\)|TODO\\(resume\\)|RESUME|WIP|FIXME\\(resume\\)" .`
   - `rg -n "TODO|FIXME" <relevant directories>` (only if needed)

5. **Tests / build status**
   - Run the fastest relevant check (project-dependent). Prefer one of:
     - `npm test` / `pnpm test` / `yarn test`
     - `npm run lint`
     - `swift test`
     - `pytest -q`
     - `go test ./...`
   - If too slow, at least run a “smoke” command or compile step.

### Step 2 — Reconstruct the “Task Timeline”
Based on the evidence above, produce a short structured summary:

**A) Goal (1–2 lines)**  
What the task is trying to accomplish.

**B) What’s already done (bullets)**  
Cite evidence: commits, changed files, passing checks.

**C) What’s partially done / risky (bullets)**  
Uncommitted changes, failing tests, TODO markers, half-written code.

**D) What likely caused the agent to get stuck (1–3 hypotheses)**  
Examples: infinite loop in reasoning, ambiguous requirement, long-running command, flaky tests, merge conflicts, missing dependency.

**E) Next minimal step (single step)**  
One action that reduces uncertainty the most.

### Step 3 — Load “Just Enough Context” Before Editing
Before making any code changes, open and skim:
- the 1–3 most recently edited files,
- the file that contains the main entrypoint for the feature/fix,
- any failing test output / relevant logs.

Then state:
- “I’ve loaded X/Y/Z files and the failing output. Proceeding with the next minimal step.”

### Step 4 — Continue with Guardrails
When resuming, follow these rules:
- Prefer **small, reversible** changes first.
- After each meaningful change, run a quick verification step.
- If you need to make a big refactor, create a checkpoint commit first.

### Step 5 — Checkpoint
As soon as the task is stable enough:
- If changes are correct and tests pass: commit.
- If mid-way but progress is real: create a WIP commit with a clear message.

Recommended commit messages:
- `checkpoint: resume <topic> — state rebuilt`
- `wip: <topic> — partial, tests pending`
- `fix: <topic> — <specific outcome>`

Also write or update:
- `./.agent/last_state.md` (or `AGENT_LAST_STATE.md`) with:
  - current goal
  - what changed
  - next step
  - any blockers

---

## If There Is Not Enough Evidence
If the repo state doesn’t reveal the goal, do this fallback:

### Fallback A — Infer from open PR / branch name
- Look at branch name and last commits. Summarize inferred intent.

### Fallback B — Infer from changed files
- Read the main changed files and infer the feature/fix from code deltas.

### Fallback C — Ask the user (only after A+B)
Ask **one** targeted question maximum:
- “What is the intended end-state / acceptance criteria for this task?”
But still proceed with a best-effort guess based on evidence.

---

## Stuck-Prevention Pattern (Use While Resuming)
If you detect looping / uncertainty:
1) Stop and write “Decision Point”.
2) List 2–3 options with pros/cons.
3) Pick one and proceed, unless user constraints clearly prohibit it.

---

## Output Format (What You Should Produce Each Resume)
Always produce:

### 1) Resume Summary
- Goal:
- Evidence:
- Done:
- Partial/Unknown:
- Next step:

### 2) Actions Taken
Bulleted list of concrete actions and commands run.

### 3) Current Status
- Tests:
- Build:
- Remaining work:

### 4) New Checkpoint
- Commit created? (yes/no)
- `last_state.md` updated? (yes/no)

---

## Safety / Risk Notes
- Never run destructive commands (`git reset --hard`, `git clean -fd`, mass refactors) during Resume Mode unless explicitly requested or clearly safe and necessary.
- Don’t rewrite history (rebase/force push) unless user explicitly asks.