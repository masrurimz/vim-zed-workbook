# Lesson 05: Git Workflow

## 🎯 Learning Objectives

By the end of this lesson, you will:
- [ ] Navigate git changes with the git panel (space g s)
- [ ] Review and stage hunks efficiently (] h, [ h)
- [ ] Commit changes using vim-style workflow
- [ ] Handle merge conflicts with keyboard navigation
- [ ] Integrate git operations with vim editing patterns

## 📚 Concepts

### Git Panel Integration

Zed's git panel provides a vim-friendly interface for reviewing and staging changes.

**Core Commands:**
- `space g s` - Toggle git panel (git status)
- `space g h d` - Toggle diff hunks in editor  
- `] h` - Next hunk (change block)
- `[ h` - Previous hunk
- `Enter` - Jump to change in editor

**Panel Navigation:**
- `hjkl` - Navigate file list
- `Space` - Stage/unstage file or hunk
- `tab` - Switch between files and diff view
- `escape` - Return to editor

### Hunk-Based Workflow

A "hunk" is a block of changes in git diff. Working at hunk level gives you precise control over what gets committed.

**Hunk Operations:**
- **Stage hunk** - Add specific changes to commit
- **Unstage hunk** - Remove from staged changes
- **Review hunk** - See context and understand changes
- **Navigate hunks** - Move between change blocks

**Benefits of Hunk Workflow:**
- Commit only related changes
- Review code before committing
- Create clean, logical commit history
- Separate formatting from logic changes

### Staging Workflow

Professional git workflow focuses on staging area management.

**Three States:**
1. **Working Directory** - Your current changes
2. **Staging Area** - Changes ready to commit  
3. **Repository** - Committed history

**Workflow Pattern:**
1. Make changes across multiple files
2. Review changes in git panel
3. Stage related changes together
4. Commit with meaningful message
5. Repeat for different logical groups

### Commit Message Best Practices

Following conventional commit format improves project history.

**Format**: `type(scope): description`

**Types:**
- `feat:` - New feature
- `fix:` - Bug fix
- `refactor:` - Code restructuring
- `docs:` - Documentation changes
- `style:` - Formatting, missing semicolons
- `test:` - Adding tests
- `chore:` - Build process, auxiliary tools

## 🎮 Practice Exercises

### Exercise 1: Git Panel Navigation

**Setup**: Make changes to 3-4 files in a git repository

**Tasks**:
1. Press `space g s` to open git panel
2. Use `hjkl` to navigate file list
3. Press `Enter` to see diff for selected file
4. Use `tab` to switch between file list and diff
5. Press `escape` to return to editor

**Success Criteria**: ✅ You can navigate git panel without using mouse

### Exercise 2: Hunk Staging Workflow

**Setup**: Make multiple unrelated changes in one file

**Tasks**:
1. Open git panel with `space g s`
2. Select file and view diff
3. Use `] h` and `[ h` to navigate between hunks
4. Press `Space` to stage individual hunks
5. Stage only half the hunks, leave others unstaged
6. Verify staging with `git status` in terminal

**Success Criteria**: ✅ You can selectively stage parts of files

### Exercise 3: Clean Commit Creation

**File**: Make changes to improve a function (rename variables, add comments, fix bug)

**Tasks**:
1. Use hunk navigation to review all changes
2. Stage formatting changes first → commit as "style: improve readability"
3. Stage logic changes → commit as "fix: handle edge case in validation"
4. Stage documentation → commit as "docs: add function comments"
5. Check git log to see clean history

**Success Criteria**: ✅ You create multiple focused commits from one editing session

### Exercise 4: Merge Conflict Resolution

**Setup**: Create a merge conflict (modify same line in two branches)

**Tasks**:
1. Start merge that creates conflicts
2. Use `space g s` to see conflicted files
3. Navigate to conflict in editor  
4. Use vim motions to resolve conflicts
5. Stage resolved files
6. Complete merge with commit

**Success Criteria**: ✅ You resolve conflicts without leaving Zed

### Exercise 5: Interactive Rebase Simulation

**Setup**: Create several small commits that could be squashed

**Tasks**:
1. Review commits in git panel
2. Use `space g s` to see what would be staged
3. Practice creating "fixup" commits for previous commits
4. Use descriptive commit messages that indicate intent
5. **Advanced**: Use git rebase interactive in terminal to clean up

**Success Criteria**: ✅ You understand how staging leads to better commit history

## 🎯 Challenges

### Challenge 1: Feature Branch Workflow
- Create feature branch for a new component
- Make changes across multiple files
- Use hunk staging to create 3-5 logical commits
- Each commit should be self-contained and testable
- Write conventional commit messages

### Challenge 2: Hotfix Workflow
- Simulate urgent bug fix scenario
- Create hotfix branch from main
- Make minimal fix using precise hunk staging
- Avoid staging unrelated changes
- Commit with clear fix message and return to feature work

### Challenge 3: Code Review Preparation
- Complete a feature with messy commit history
- Use git panel to review all changes
- Create summary of what changed
- Practice explaining changes by navigating hunks
- Ensure commits tell a story

### Challenge 4: Merge Conflict Marathon
- Create complex merge scenario with multiple conflicts
- Use only vim motions to navigate and resolve
- Stage resolved files using git panel
- Complete merge without external tools
- Verify resolution correctness

## 🔗 Key Bindings Used

| Key | Action | Context |
|-----|--------|---------|
| `space g s` | Git panel toggle | Global |
| `space g h d` | Toggle diff hunks | Editor |
| `] h` | Next hunk | Editor |
| `[ h` | Previous hunk | Editor |
| `hjkl` | Navigate files | Git panel |
| `Enter` | View file diff | Git panel |
| `Space` | Stage/unstage | Git panel |
| `tab` | Switch between list/diff | Git panel |
| `escape` | Return to editor | Git panel |
| `cmd-y` | Stage file | Git panel |
| `cmd-shift-y` | Unstage file | Git panel |
| `ctrl-hjkl` | Universal navigation | Global |

## 💡 Pro Tips

### Efficient Staging Patterns

**The Review-First Approach:**
1. Make all changes without staging
2. Use `space g s` to review everything
3. Group related changes mentally
4. Stage and commit in logical groups

**Hunk Navigation Flow:**
1. `] h` to next change
2. Read context and understand impact  
3. `Space` to stage if related to current commit
4. Continue until all related changes staged
5. Commit, then repeat for next logical group

**Commit Message Discipline:**
- Start with type (feat/fix/refactor)
- Use present tense ("add" not "added")
- Keep first line under 50 characters
- Add detailed explanation if needed

### Keyboard-First Git

**Stay in Editor:**
- Use git panel instead of terminal for staging
- Resolve conflicts with vim motions
- Navigate changes with hunk commands
- Only drop to terminal for complex git commands

**Workflow Integration:**
- `space g s` → review → `space c a` (if code actions needed)
- Use LSP navigation to understand change impact
- Stage → commit → `space /` to find next work

### Merge Conflict Strategy

**Conflict Resolution Pattern:**
1. Open conflicted file in editor
2. Use `/<<<<<<` to find conflicts
3. Navigate with vim motions (w, e, $)
4. Delete conflict markers manually
5. Stage resolved file in git panel

**Understanding Conflicts:**
- `<<<<<<< HEAD` - Your changes
- `=======` - Separator  
- `>>>>>>> branch` - Their changes
- Choose one, both, or hybrid solution

## ✅ Lesson Complete

You've mastered git workflow when:
- [ ] Git panel navigation feels natural
- [ ] You stage hunks instead of entire files
- [ ] Commit messages follow conventions
- [ ] Merge conflicts don't require external tools
- [ ] Git operations integrate smoothly with editing

**Advanced Skills Unlocked:**
- Clean commit history creation
- Efficient code review workflows  
- Professional git collaboration
- Conflict resolution mastery

**Next**: [Lesson 06: AI Integration](../06-ai-integration/README.md)