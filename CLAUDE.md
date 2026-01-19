# CLAUDE.md - AI Assistant Guide

This document provides comprehensive guidance for AI assistants (like Claude) working with this codebase. It covers the project structure, development workflows, conventions, and best practices.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Game Design](#game-design)
3. [Repository Structure](#repository-structure)
4. [Development Environment](#development-environment)
5. [Code Conventions](#code-conventions)
6. [Development Workflows](#development-workflows)
7. [Testing Guidelines](#testing-guidelines)
8. [Git Workflow](#git-workflow)
9. [AI Assistant Guidelines](#ai-assistant-guidelines)
10. [Common Tasks](#common-tasks)
11. [Troubleshooting](#troubleshooting)

---

## Project Overview

### Project Name
**claudtesti** - Cycling Adventure Game

### Purpose
A casual cycling game where players experience cycling adventures through the eyes of a female cyclist. The game focuses on route selection, bicycle customization, equipment management, and embarking on various cycling trips.

### Game Type
- **Genre**: Casual Adventure/Simulation
- **Platform**: [To be determined - Web/Mobile/Desktop]
- **Language**: English
- **Target Audience**: Casual gamers interested in cycling and exploration

### Core Gameplay Elements

1. **Main Character**: Female cyclist protagonist
2. **Route Selection**: Players choose from various cycling routes
3. **Bicycle Customization**: Select and customize different bicycles
4. **Equipment Management**: Choose appropriate gear and equipment for trips
5. **Cycling Trips**: Engage in cycling adventures based on chosen parameters

### Technology Stack
[To be filled in as technologies are added - likely includes game engine, graphics library, UI framework]

### Key Dependencies
[To be populated when dependencies are added]

---

## Game Design

### Game Loop

The core game loop consists of:
1. **Preparation Phase**: Player selects route, bicycle, and equipment
2. **Trip Phase**: Player experiences the cycling trip
3. **Completion Phase**: Trip results, rewards, and progression
4. **Repeat**: Return to preparation for next adventure

### Key Features to Implement

#### Character System
- Female cyclist protagonist
- Character customization options (as game develops)
- Skill/stat progression system (to be defined)

#### Route System
- Multiple cycling routes with varying difficulty
- Route characteristics (distance, terrain, scenery)
- Weather and environmental conditions
- Dynamic route events and encounters

#### Bicycle System
- Different bicycle types (road bike, mountain bike, hybrid, etc.)
- Bicycle stats (speed, handling, durability, comfort)
- Upgrade and maintenance mechanics
- Visual customization options

#### Equipment System
- Cycling gear (helmet, clothing, shoes, accessories)
- Equipment affects performance and safety
- Weather-appropriate gear selection
- Inventory management

#### Trip System
- Journey progression and pacing
- Stamina/energy management
- Random events and challenges
- Scenic points and discoveries
- Trip completion rewards

### Game Design Principles

1. **Accessible**: Easy to learn, casual-friendly gameplay
2. **Relaxing**: Focus on enjoyment rather than hardcore challenge
3. **Progressive**: Gradual unlocking of content and features
4. **Rewarding**: Meaningful progression and achievements
5. **Immersive**: Create authentic cycling experience

### Content Areas

As the game develops, organize content into these areas:
- **Characters**: Player character data and customization
- **Routes**: Route definitions, maps, and data
- **Bicycles**: Bicycle types, stats, and customization
- **Equipment**: Gear items and their properties
- **Events**: Trip events and encounters
- **UI/Menus**: Game interface screens
- **Assets**: Graphics, audio, and other media

---

## Repository Structure

```
claudtesti/
├── .git/                 # Git repository metadata
├── CLAUDE.md            # This file - AI assistant guide
└── [To be populated as project grows]

Expected structure as game develops:
├── src/                  # Source code
│   ├── character/       # Character system
│   ├── routes/          # Route definitions and logic
│   ├── bicycles/        # Bicycle system
│   ├── equipment/       # Equipment and inventory
│   ├── trips/           # Trip/journey mechanics
│   ├── ui/              # User interface components
│   ├── game/            # Core game logic
│   └── utils/           # Utility functions
├── assets/              # Game assets
│   ├── images/          # Graphics and sprites
│   ├── audio/           # Sound effects and music
│   ├── fonts/           # Font files
│   └── data/            # Game data (JSON/XML)
├── tests/               # Test files
├── docs/                # Additional documentation
├── config/              # Configuration files
└── scripts/             # Build and utility scripts
```

### Directory Conventions

- **src/** - All game source code organized by system
- **src/character/** - Character-related code (stats, customization)
- **src/routes/** - Route data structures, generation, and management
- **src/bicycles/** - Bicycle types, stats, and mechanics
- **src/equipment/** - Equipment items, inventory, and effects
- **src/trips/** - Trip progression, events, and completion logic
- **src/ui/** - All user interface code and components
- **src/game/** - Core game loop, state management, and initialization
- **src/utils/** - Shared utilities and helper functions
- **assets/** - All non-code game assets (images, audio, data files)
- **tests/** - Unit tests, integration tests, and test utilities
- **docs/** - Game design documents, API documentation
- **config/** - Build configuration, game settings, constants
- **scripts/** - Automation scripts for building, testing, deployment

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

#### General Naming
- Use clear, descriptive names that reveal intent
- Prefer full words over abbreviations (except common ones)
- Use consistent naming patterns across similar items

#### Game Objects (to be refined as tech stack is chosen)
- **Routes**: `route_mountain_trail`, `route_city_loop`, etc.
- **Bicycles**: `bicycle_road_racer`, `bicycle_mountain_bike`, etc.
- **Equipment**: `equipment_helmet_aero`, `equipment_shoes_clipless`, etc.
- **Events**: `event_flat_tire`, `event_scenic_overlook`, etc.

#### Code Naming (examples - adapt to chosen language)
- **Classes**: PascalCase (e.g., `BicycleManager`, `TripController`)
- **Functions/Methods**: camelCase (e.g., `startTrip`, `selectBicycle`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_STAMINA`, `DEFAULT_SPEED`)
- **Variables**: camelCase (e.g., `currentRoute`, `playerStamina`)

### File Organization

#### Code Files
- Group related functionality in the same directory
- One primary class/module per file (exceptions allowed for small helpers)
- Name files after their primary export/class
- Keep files focused and reasonably sized (under 500 lines when possible)

#### Asset Files
- Use descriptive names with category prefix
- Include size/variant in filename if multiple versions exist
- Examples: `bicycle_road_racer_icon.png`, `route_mountain_large.jpg`
- Organize by type in appropriate subdirectories

### Comments and Documentation
- Use comments sparingly - code should be self-documenting where possible
- Add comments only when logic is complex or non-obvious
- Keep comments up-to-date with code changes
- Use docstrings/JSDoc for public APIs

### Game-Specific Conventions

#### Data-Driven Design
- Separate data from logic where practical
- Use configuration files for game content (routes, bicycles, equipment)
- Make it easy to add new content without code changes
- Keep game balance parameters easily adjustable

#### Game Balance
- Document stat ranges and their meanings
- Consider balance implications when adding content
- Test new content against existing content
- Avoid power creep - keep progression meaningful

#### User Experience
- Provide clear feedback for player actions
- Handle edge cases gracefully (no crashes from unexpected input)
- Keep UI responsive and intuitive
- Consider accessibility in design choices

#### Performance
- Optimize asset loading and memory usage
- Profile performance in actual gameplay scenarios
- Keep game loop efficient
- Consider target platform limitations

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

### Adding a New Route
1. Define route data (distance, terrain, difficulty, scenery)
2. Create route configuration file/object
3. Add route to route selection system
4. Implement any unique events or features for the route
5. Test route selection and trip completion
6. Add route to documentation

### Adding a New Bicycle
1. Define bicycle stats (speed, handling, durability, comfort)
2. Create bicycle data structure
3. Add bicycle to selection/shop system
4. Implement any unique mechanics or behaviors
5. Add visual assets (if applicable)
6. Test bicycle in various routes
7. Balance stats relative to other bicycles

### Adding New Equipment
1. Define equipment properties and effects
2. Create equipment data structure
3. Add to equipment/inventory system
4. Implement equipment effects on gameplay
5. Add to shop/unlock system (if applicable)
6. Test equipment interactions
7. Ensure proper UI display

### Creating Trip Events
1. Design event trigger conditions
2. Define event outcomes and player choices
3. Implement event logic in trip system
4. Add event text/narrative content
5. Test event triggers and outcomes
6. Balance event difficulty and rewards

### Implementing UI Screens
1. Design screen layout and flow
2. Identify required UI components
3. Implement screen logic and state management
4. Connect screen to game systems
5. Add navigation to/from screen
6. Test user interactions and edge cases
7. Ensure responsive design (if applicable)

### Fixing a Bug
1. Reproduce the bug consistently
2. Identify the affected system/component
3. Read relevant code thoroughly
4. Locate root cause
5. Implement minimal fix
6. Test fix doesn't break other features
7. Document fix in commit message

### Adding Game Content (General)
1. Determine content type (route, bicycle, equipment, etc.)
2. Follow established data format/structure
3. Keep content balanced with existing content
4. Add content to appropriate system
5. Test content in actual gameplay
6. Get feedback on content quality

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

### Game Systems Quick Reference

When working on game features, consider these interconnected systems:

- **Character System** → Affects all gameplay through stats and abilities
- **Route System** → Determines trip difficulty and available events
- **Bicycle System** → Influences performance in different route types
- **Equipment System** → Modifies character stats and capabilities
- **Trip System** → Orchestrates the main gameplay experience
- **UI System** → Presents all game information to player

When modifying one system, check if changes affect connected systems.

---

**Last Updated**: 2026-01-19
**Document Version**: 1.1.0
**Repository**: sonic1991uae-eng/claudtesti
**Game**: Casual Cycling Adventure Game
