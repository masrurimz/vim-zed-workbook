# Lesson 04: Code Navigation

## 🎯 Learning Objectives

By the end of this lesson, you will:
- [ ] Navigate codebases using LSP commands (g d, g r, g i)
- [ ] Jump between diagnostics and errors (] d, [ d)
- [ ] Use symbols and outline navigation (s s, s S)
- [ ] Master multi-file navigation patterns
- [ ] Efficiently explore unfamiliar codebases

## 📚 Concepts

### LSP Integration (Language Server Protocol)

Zed's LSP integration provides intelligent code navigation that understands your project's structure and dependencies.

**Core Navigation Commands:**
- `g d` - Go to definition (jump to where symbol is defined)
- `g r` - Find all references (show everywhere symbol is used)  
- `g i` - Go to implementation (jump to concrete implementation)
- `g t` - Go to type definition (jump to type declaration)

**Why LSP Navigation is Powerful:**
- Works across files and projects
- Understands language semantics, not just text matching
- Handles complex scenarios like inheritance, imports, and interfaces
- Provides instant feedback without external tools

### Diagnostic Navigation

Diagnostics are real-time feedback from your language server about errors, warnings, and suggestions.

**Commands:**
- `] d` - Next diagnostic (error/warning)
- `[ d` - Previous diagnostic
- `space x x` - Open diagnostics panel

**Types of Diagnostics:**
- **Errors** (red) - Code that won't compile/run
- **Warnings** (yellow) - Potentially problematic code
- **Information** (blue) - Suggestions and hints
- **Hints** (gray) - Style and optimization suggestions

### Symbol Navigation

Navigate large codebases by understanding structure rather than scrolling.

**Commands:**
- `s s` - Toggle outline (current file symbols)
- `s S` - Toggle project symbols (all files)
- `space space` - File finder with fuzzy matching

**Symbol Types:**
- Functions/methods
- Classes/interfaces  
- Variables/constants
- Types/enums
- Modules/namespaces

## 🎮 Practice Exercises

### Exercise 1: Definition Jumping

**Setup**: Open a project with multiple files (React, Node.js, Python, etc.)

**Tasks**:
1. Place cursor on a function call
2. Press `g d` to jump to definition
3. Use `ctrl+o` to jump back (Zed's jump list)
4. Try `g i` on an interface/abstract method
5. Use `g t` on a variable to see its type definition

**Success Criteria**: ✅ You can navigate between related code locations seamlessly

### Exercise 2: Reference Finding

**File**: Use any project with imported functions/classes

**Tasks**:
1. Place cursor on a function name
2. Press `g r` to find all references
3. Navigate through references using arrow keys or hjkl
4. Press `Enter` to jump to a reference
5. **Challenge**: Find references for a commonly-used utility function

**Success Criteria**: ✅ You understand how code connects across your project

### Exercise 3: Diagnostic-Driven Development

**Setup**: Introduce some errors in a TypeScript/JavaScript file

**Tasks**:
1. Create syntax errors, type errors, unused variables
2. Use `] d` to jump to first diagnostic
3. Fix error, then `] d` to next diagnostic
4. Use `[ d` to go backward through diagnostics
5. Open `space x x` to see full diagnostic panel

**Success Criteria**: ✅ You can efficiently fix errors without manual searching

### Exercise 4: Large Codebase Exploration

**Setup**: Clone a medium-sized open source project

**Tasks**:
1. Use `s S` to open project symbols
2. Search for "render" or "handler" functions
3. Jump to interesting functions and explore with `g d`
4. Use `s s` to understand file structure
5. **Advanced**: Follow a complete data flow using `g d` → `g r` chains

**Success Criteria**: ✅ You can understand unfamiliar codebases quickly

### Exercise 5: Multi-File Refactoring Navigation

**File**: Create a small multi-file project

**Tasks**:
1. Create a utility function used in multiple files
2. Use `g r` to find all usages
3. Navigate to each usage with vim motions
4. Use `space c r` to rename the function
5. Verify changes with `g r` again

**Success Criteria**: ✅ You can safely refactor across multiple files

## 🎯 Challenges

### Challenge 1: Code Detective
- Find how a specific API endpoint connects to the database
- Start from route definition, use `g d` and `g r` to trace the complete path
- Document the flow: route → controller → service → database

### Challenge 2: Error Hunt
- Introduce 10 different types of errors in a project
- Use only diagnostic navigation (`] d`, `[ d`) to find and fix all errors
- Time yourself - aim for under 2 minutes

### Challenge 3: Library Exploration
- Add a new library to your project (lodash, axios, etc.)
- Use `g d` on imported functions to explore the library's source
- Find alternative functions using symbol navigation

### Challenge 4: Inheritance Navigation
- In an OOP project, find a method implementation
- Use `g i` to find all implementations
- Use `g d` to jump to base class/interface
- Navigate the entire inheritance hierarchy

## 🔗 Key Bindings Used

| Key | Action | Context |
|-----|--------|---------|
| `g d` | Go to definition | Normal mode |
| `g D` | Go to definition (split) | Normal mode |
| `g r` | Find references | Normal mode |
| `g i` | Go to implementation | Normal mode |
| `g I` | Go to implementation (split) | Normal mode |
| `g t` | Go to type definition | Normal mode |
| `g T` | Go to type definition (split) | Normal mode |
| `] d` | Next diagnostic | Normal mode |
| `[ d` | Previous diagnostic | Normal mode |
| `] e` | Next error | Normal mode |
| `[ e` | Previous error | Normal mode |
| `s s` | Toggle outline | Normal mode |
| `s S` | Toggle project symbols | Normal mode |
| `space x x` | Diagnostics panel | Normal mode |
| `space c r` | Rename symbol | Normal mode |
| `space space` | File finder | Global |
| `ctrl+o` | Jump back | Global |
| `ctrl+i` | Jump forward | Global |

## 💡 Pro Tips

### Navigation Patterns

**The Definition Chain:**
1. `g d` to understand what something does
2. `g r` to see how it's used
3. `g i` to find concrete implementations
4. `ctrl+o` to backtrack when needed

**Error-First Development:**
1. Write code quickly without fixing errors
2. Use `] d` to jump through all diagnostics
3. Fix errors in order of severity
4. Use LSP suggestions when available

**Symbol Exploration:**
1. Use `s S` to get project overview
2. Filter by symbol type (functions, classes)
3. Use fuzzy search to find patterns
4. Jump and explore with `g d`

### Keyboard-First Navigation

**Stay in Flow:**
- Minimize mouse usage for navigation
- Use `ctrl+hjkl` for pane switching  
- Combine LSP commands with vim motions
- Use jump list (`ctrl+o`/`ctrl+i`) as navigation history

**Search Strategy:**
- Project symbols for "what exists"
- File finder for "where is file"
- LSP navigation for "how does this work"
- Diagnostics for "what's broken"

## ✅ Lesson Complete

You've mastered code navigation when:
- [ ] LSP commands feel natural for exploration
- [ ] You can trace code flow across multiple files
- [ ] Diagnostic navigation speeds up debugging
- [ ] Symbol navigation helps you understand large codebases
- [ ] You rarely need to manually search for definitions

**Advanced Skills Unlocked:**
- Reading unfamiliar codebases efficiently
- Refactoring with confidence
- Debugging complex issues quickly
- Understanding system architecture through navigation

**Next**: [Lesson 05: Git Workflow](../05-git-workflow/README.md)