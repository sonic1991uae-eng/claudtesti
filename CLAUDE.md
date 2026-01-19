# CLAUDE.md - AI Assistant Guide

This document provides comprehensive guidance for AI assistants (like Claude) working with this codebase. It covers the project structure, development workflows, conventions, and best practices.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Repository Structure](#repository-structure)
3. [Development Environment](#development-environment)
4. [Code Conventions](#code-conventions)
5. [Development Workflows](#development-workflows)
6. [Testing Guidelines](#testing-guidelines)
7. [Git Workflow](#git-workflow)
8. [AI Assistant Guidelines](#ai-assistant-guidelines)
9. [Common Tasks](#common-tasks)
10. [Troubleshooting](#troubleshooting)

---

## Project Overview

### Project Name
**claudtesti**

### Purpose
[To be filled in as the project develops]

### Technology Stack
[To be filled in as technologies are added]

### Key Dependencies
[To be populated when dependencies are added]

---

## Repository Structure

```
claudtesti/
├── .git/                 # Git repository metadata
├── CLAUDE.md            # This file - AI assistant guide
└── [To be populated as project grows]
```

### Directory Conventions
As the project develops, document the purpose of each major directory here:

- **src/** - Source code (if applicable)
- **tests/** - Test files (if applicable)
- **docs/** - Documentation (if applicable)
- **config/** - Configuration files (if applicable)
- **scripts/** - Build and utility scripts (if applicable)

---

## Development Environment

### Prerequisites
[To be documented when environment is set up]

### Setup Instructions
[To be documented when setup is required]

```bash
# Example commands will go here
```

### Environment Variables
[Document required environment variables here]

---

## Code Conventions

### General Principles

1. **Simplicity First**: Write simple, readable code. Avoid over-engineering.
2. **No Premature Abstraction**: Don't create abstractions until they're clearly needed.
3. **Explicit Over Implicit**: Code should be clear and obvious in its intent.
4. **Security Conscious**: Always consider security implications (XSS, SQL injection, etc.).

### Naming Conventions
[To be documented based on chosen language/framework]

### File Organization
[To be documented as structure emerges]

### Comments and Documentation
- Use comments sparingly - code should be self-documenting where possible
- Add comments only when logic is complex or non-obvious
- Keep comments up-to-date with code changes
- Use docstrings/JSDoc for public APIs

---

## Development Workflows

### Creating New Features

1. **Understand Requirements**: Read and understand the full requirement before coding
2. **Read Existing Code**: Always read related code before making changes
3. **Plan the Approach**: Consider the simplest solution that meets requirements
4. **Implement**: Write minimal code needed to solve the problem
5. **Test**: Verify the implementation works as expected
6. **Review**: Check for security issues and edge cases

### Modifying Existing Code

1. **Read First**: Always read the entire file/function before modifying
2. **Understand Context**: Understand why the code exists in its current form
3. **Minimal Changes**: Make only the changes necessary for the task
4. **Preserve Style**: Match the existing code style and patterns
5. **Avoid Scope Creep**: Don't refactor or "improve" code outside the task scope

### Code Review Checklist

- [ ] Code solves the stated problem
- [ ] No security vulnerabilities introduced
- [ ] Error handling is appropriate (not excessive)
- [ ] Code follows existing patterns in the codebase
- [ ] No unnecessary complexity or abstractions
- [ ] Comments only where necessary
- [ ] Tests cover the changes (if applicable)

---

## Testing Guidelines

### Testing Philosophy
[To be documented when testing strategy is established]

### Running Tests
[To be documented when tests exist]

```bash
# Example test commands will go here
```

### Writing Tests
[To be documented based on testing framework]

---

## Git Workflow

### Branch Naming Convention

- Feature branches: `claude/claude-md-[session-id]` (for AI-driven development)
- [Other conventions to be added as team grows]

### Commit Message Format

Use clear, descriptive commit messages:

```
Brief summary of change (50 chars or less)

More detailed explanation if needed. Explain the "why"
not the "what". Wrap at 72 characters.
```

### Development Process

1. **Work on Feature Branch**: All development happens on designated branch
2. **Commit Regularly**: Make atomic commits with clear messages
3. **Push When Complete**: Push to origin when work is done
4. **Create Pull Request**: For code review and merge to main

### Important Git Commands

```bash
# Check current status
git status

# Create and switch to new branch
git checkout -b branch-name

# Stage and commit changes
git add .
git commit -m "Commit message"

# Push to remote
git push -u origin branch-name

# View commit history
git log --oneline -10
```

---

## AI Assistant Guidelines

### Core Principles for AI Assistants

1. **Read Before Acting**: Always read files before modifying them
2. **Never Guess**: If uncertain, search the codebase or ask for clarification
3. **Minimal Scope**: Only change what's needed for the task
4. **Security First**: Always consider security implications
5. **No Over-Engineering**: Avoid adding features or complexity not requested
6. **Preserve Patterns**: Match existing code style and patterns

### What to AVOID

- ❌ Creating files unnecessarily (especially documentation)
- ❌ Refactoring code not related to the task
- ❌ Adding error handling for impossible scenarios
- ❌ Creating abstractions for single-use code
- ❌ Adding comments to unchanged code
- ❌ Making assumptions about requirements
- ❌ Pushing to wrong branches

### Best Practices

- ✅ Use TodoWrite tool for complex, multi-step tasks
- ✅ Read related code before making changes
- ✅ Make parallel tool calls when possible
- ✅ Use specialized tools (Read, Edit, Write) over bash commands
- ✅ Commit with descriptive messages
- ✅ Push to the correct feature branch
- ✅ Ask questions when requirements are unclear

### Tool Usage Priority

1. **Read Tool**: For reading files (not `cat`)
2. **Edit Tool**: For modifying existing files (not `sed`)
3. **Write Tool**: For creating new files (not `echo >`)
4. **Grep Tool**: For searching code (not `grep` or `rg`)
5. **Glob Tool**: For finding files (not `find` or `ls`)
6. **Bash Tool**: For actual system commands (git, npm, etc.)

---

## Common Tasks

### Adding a New Feature
[To be documented with specific examples as patterns emerge]

### Fixing a Bug
[To be documented with debugging approach]

### Refactoring Code
[To be documented with refactoring guidelines]

### Updating Dependencies
[To be documented when dependency management is established]

---

## Troubleshooting

### Common Issues

#### Issue: [To be populated as issues arise]
**Solution**: [Solution details]

#### Issue: Git push fails with 403
**Solution**: Ensure branch name starts with 'claude/' and matches session ID pattern

#### Issue: Tests failing after changes
**Solution**:
1. Read test output carefully
2. Understand what the test expects
3. Fix the code or update the test if requirements changed
4. Never skip or disable tests without good reason

---

## Maintenance

### Updating This Document

This CLAUDE.md file should be updated when:
- Project structure changes significantly
- New conventions are established
- New tools or frameworks are added
- Common issues and solutions are discovered
- Development workflows evolve

Keep this document concise and practical. Remove outdated information promptly.

---

## Quick Reference

### Essential Commands
```bash
# Git status and branch info
git status
git branch

# Run tests (update when available)
# [test command]

# Build project (update when available)
# [build command]

# Start development server (update when available)
# [dev server command]
```

### Key Files to Check Before Making Changes
[To be populated as key configuration files are added]

---

**Last Updated**: 2026-01-19
**Document Version**: 1.0.0
**Repository**: sonic1991uae-eng/claudtesti
