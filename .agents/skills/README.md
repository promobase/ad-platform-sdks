# Repository Agent Skills

This directory is reserved for reusable, executable workflows specific to this repository. Ordinary
architecture notes, API research, and maintenance documentation belong in `docs/`, package READMEs,
or `CONTRIBUTING.md`.

Each skill should live in its own directory:

```text
.agents/skills/<skill-name>/
  SKILL.md
  scripts/       # optional helpers
  references/    # optional workflow-specific reference material
  templates/     # optional reusable artifacts
```

A skill's `SKILL.md` should state when it applies, inputs and safety boundaries, the exact workflow,
verification requirements, and expected outputs. Prefer a skill only when a process is repeatable and
repo-specific; do not create placeholder skills or duplicate commands already covered by `AGENTS.md`
or `CONTRIBUTING.md`.
