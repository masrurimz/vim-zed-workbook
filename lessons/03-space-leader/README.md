# Lesson 03: Space Leader Workflows

## 🎯 Learning Objectives

By the end of this lesson, you will:
- [ ] Master file operations with space leader (space space, space /, space e)
- [ ] Execute code actions efficiently (space c a, space c r, space .)
- [ ] Navigate git workflows (space g s, space g h d)
- [ ] Use AI assistant integration (space a c)
- [ ] Build efficient workspace navigation patterns
- [ ] Understand when to use space leader vs vim commands

## 📚 Concepts

### The Space Leader Philosophy

**Space as Leader**: The spacebar is your command center in Zed
- Easy to reach with either thumb
- Doesn't conflict with vim motions
- Groups related functionality logically
- Provides discoverable workflows

**Why Space Leader?**
- **Ergonomic**: No finger gymnastics required
- **Logical**: Commands grouped by functionality
- **Fast**: Two-key combinations for common operations
- **Discoverable**: Space reveals available commands

### Space Leader Categories

#### File Operations (`space f...`)
- `space space` - File finder (most used!)
- `space /` - Project-wide search
- `space e` - Reveal in project panel
- `space f p` - Open recent projects

#### Code Actions (`space c...`)
- `space c a` - Code actions menu
- `space c r` - Rename symbol
- `space .` - Quick code actions
- `space c z` - Toggle centered layout

#### Git Workflow (`space g...`)
- `space g s` - Git status panel
- `space g h d` - Toggle diff hunks
- `] h` / `[ h` - Navigate hunks

#### AI Assistant (`space a...`)
- `space a c` - AI chat panel
- `ctrl+enter` - Inline assist

#### Buffer Management (`space b...`)
- `space b d` - Close buffer
- `space b o` - Close other buffers

### When to Use Space Leader vs Vim

**Use Space Leader for**:
- File operations (finding, searching)
- IDE features (code actions, git)
- Panel toggles
- AI assistance

**Use Vim Commands for**:
- Text editing (ciw, ci", etc.)
- Navigation within files (hjkl, f/t)
- Basic operations (copy, paste, undo)

## 🎮 Practice Exercises

### Exercise 1: File Navigation Mastery

**Setup**: Open any project directory in Zed

**Tasks**:
1. **File Finder Basics**:
   - Press `space space` to open file finder
   - Type partial filename to find files
   - Use arrow keys or tab to navigate results
   - Press enter to open file

2. **Advanced File Finding**:
   - Use `space space` and type file extension: `.js`
   - Search for files in subdirectories: `components/Button`
   - Find files by partial name: `user` to find `UserService.js`

3. **Project Search**:
   - Press `space /` to open project search
   - Search for function names: `handleClick`
   - Search for text patterns: `console.log`
   - Navigate results with arrow keys

4. **Project Panel Integration**:
   - Find a file with `space space`
   - Press `space e` to reveal it in project panel
   - Navigate in project panel, then back to editor with `ctrl+l`

**Success Criteria**: ✅ You can find any file in under 3 seconds

### Exercise 2: Code Actions Workflow

**File**: Create `code-actions.js`

```javascript
function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
}

const userPreferences = {
  theme: "dark",
  language: "en",
  notifications: true
};

class UserManager {
  constructor() {
    this.users = [];
  }
  
  addUser(user) {
    this.users.push(user);
  }
  
  findUserById(id) {
    return this.users.find(user => user.id === id);
  }
}
```

**Tasks**:
1. **Symbol Renaming**:
   - Put cursor on `calculateTotal`
   - Press `space c r` to rename
   - Change to `computeTotal`
   - Observe all references update

2. **Code Actions Menu**:
   - Put cursor on the for loop
   - Press `space c a` to see available actions
   - Look for "Convert to for...of loop" or similar
   - Apply the suggested refactoring

3. **Quick Actions**:
   - Select the `userPreferences` object
   - Press `space .` for quick actions
   - Look for extract/refactor options

4. **Method Extraction**:
   - Select code inside `addUser` method
   - Use `space c a` to extract to new method
   - Practice with different code blocks

**Success Criteria**: ✅ Code actions feel natural and you use them to improve code quality

### Exercise 3: Git Integration Workflow

**Setup**: Initialize a git repository in your practice directory

```bash
git init
git add .
git commit -m "Initial commit"
```

**File**: Modify `code-actions.js` from Exercise 2

**Tasks**:
1. **Git Status Panel**:
   - Make changes to the file (add comments, modify functions)
   - Press `space g s` to open git panel
   - Navigate through changed files
   - Use `space` to stage individual files

2. **Diff Hunk Navigation**:
   - With changes in the file, press `space g h d` to show diff hunks
   - Use `] h` to jump to next hunk
   - Use `[ h` to jump to previous hunk
   - Practice navigating between hunks quickly

3. **Git Panel Operations**:
   - In git panel (`space g s`):
     - Use `space` to stage/unstage files
     - Use `tab` to focus the commit message editor
     - Write commit message and commit changes
     - Use `escape` to return to git panel

4. **Integrated Git Workflow**:
   - Make more changes to different files
   - Use `space g s` → stage changes → commit
   - Switch between git panel and editor with `ctrl+h/l`

**Success Criteria**: ✅ Git operations feel integrated into your editing workflow

### Exercise 4: AI Assistant Integration

**File**: Use existing `code-actions.js`

**Tasks**:
1. **AI Chat Panel**:
   - Press `space a c` to open AI chat
   - Ask: "How can I optimize this JavaScript code?"
   - Include your code in the conversation
   - Navigate between chat and editor with `ctrl+h/l`

2. **Inline Assistance**:
   - Select a function in your code
   - Press `ctrl+enter` for inline assist
   - Ask for code improvements or explanations
   - Apply suggestions using the inline interface

3. **Code Generation**:
   - Use AI chat to generate new functions
   - Ask: "Write a function to validate email addresses"
   - Copy/paste or use suggested code insertions
   - Refine with follow-up prompts

4. **Debug Assistance**:
   - Introduce a bug in your code
   - Use AI chat to help debug
   - Share error messages and get suggestions

**Success Criteria**: ✅ AI becomes part of your development workflow

### Exercise 5: Workspace Navigation Patterns

**Setup**: Open a multi-file project with terminal

**Tasks**:
1. **Multi-Panel Workflow**:
   - Open terminal: `ctrl+\`
   - Split editor pane: `cmd+\`
   - Open git panel: `space g s`
   - Practice navigating: `ctrl+hjkl` between all panels

2. **File-Finding Patterns**:
   - Use `space space` to quickly switch between files
   - Use `space /` to find where functions are defined
   - Use `space e` to locate files in project structure
   - Chain operations: find → edit → git → commit

3. **Buffer Management**:
   - Open multiple files with `space space`
   - Use `shift+h` and `shift+l` to switch tabs
   - Use `space b d` to close unwanted buffers
   - Use `space b o` to close all others, keep current

4. **Integrated Development Flow**:
   - Find file (`space space`)
   - Make changes (vim commands)
   - Use code actions (`space c a`)
   - Check git status (`space g s`)
   - Get AI help (`space a c`)
   - Navigate efficiently (`ctrl+hjkl`)

**Success Criteria**: ✅ Workspace navigation feels fluid and efficient

## 🎯 Challenges

### Challenge 1: Speed File Navigation
- Set timer for 2 minutes
- Navigate to 10 different files using only `space space`
- Each file should be in a different directory
- Goal: Average under 3 seconds per file

### Challenge 2: Code Refactoring Sprint
- Take a JavaScript/Python project
- Use only space leader commands for 10 minutes
- Perform: 5 renames, 3 code actions, 2 extractions
- Use `space c r`, `space c a`, `space .`
- No manual text selection allowed

### Challenge 3: Git Workflow Speed Test
- Make changes to 5 different files
- Complete git workflow in under 60 seconds:
  - View changes (`space g s`)
  - Stage selectively
  - Navigate hunks (`] h`, `[ h`)
  - Commit with message
- Use only keyboard navigation

### Challenge 4: AI-Assisted Development
- Build a simple feature using AI help
- Use `space a c` for planning and design
- Use `ctrl+enter` for inline code improvements
- Integrate AI feedback into code using space leader workflows
- Goal: AI feels like pair programming

### Challenge 5: No Mouse Development Session
- Develop for 30 minutes using only keyboard
- Use space leader for all file operations
- Use `ctrl+hjkl` for all navigation
- Use vim commands for text editing
- Challenge: Never touch mouse or trackpad

## 🔗 Key Bindings Used

### File Operations
| Key | Action | Context |
|-----|--------|---------|
| `space space` | File finder | Global |
| `space /` | Project search | Global |
| `space e` | Show in project panel | Global |
| `space f p` | Open recent projects | Global |

### Code Actions
| Key | Action | Context |
|-----|--------|---------|
| `space c a` | Code actions menu | Normal mode |
| `space c r` | Rename symbol | Normal mode |
| `space .` | Quick code actions | Normal mode |
| `space c z` | Toggle centered layout | Global |

### Git Workflow
| Key | Action | Context |
|-----|--------|---------|
| `space g s` | Git status panel | Global |
| `space g h d` | Toggle diff hunks | Normal mode |
| `] h` | Next hunk | Normal mode |
| `[ h` | Previous hunk | Normal mode |

### AI Assistant
| Key | Action | Context |
|-----|--------|---------|
| `space a c` | AI chat panel | Global |
| `ctrl+enter` | Inline assist | Global |

### Buffer Management
| Key | Action | Context |
|-----|--------|---------|
| `space b d` | Close buffer | Global |
| `space b o` | Close other buffers | Global |
| `shift+h` | Previous tab | Global |
| `shift+l` | Next tab | Global |
| `shift+q` | Close tab | Global |

### Navigation
| Key | Action | Context |
|-----|--------|---------|
| `ctrl+h` | Move left pane | Global |
| `ctrl+j` | Move down pane | Global |
| `ctrl+k` | Move up pane | Global |
| `ctrl+l` | Move right pane | Global |
| `ctrl+\` | Toggle terminal | Global |

## 💡 Pro Tips

### Efficiency Patterns
- **File finder first**: `space space` should be muscle memory
- **Chain operations**: Find → Edit → Git → AI in sequence
- **Stay in flow**: Use space leader to avoid context switching
- **Think in workflows**: Group related actions together

### Common Workflows

#### Code Development Flow
1. `space space` → find file
2. Edit with vim commands
3. `space c a` → apply code actions
4. `space c r` → rename if needed
5. `space g s` → check git status

#### Debugging Flow
1. `space /` → search for error patterns
2. `space a c` → ask AI for help
3. `ctrl+enter` → get inline suggestions
4. Apply fixes with vim commands
5. Test and iterate

#### Project Exploration Flow
1. `space space` → browse files by name
2. `space /` → search for patterns
3. `space e` → see project structure
4. `ctrl+hjkl` → navigate panels
5. Build mental model of codebase

### Muscle Memory Builders
- Practice `space space` 50 times daily
- Use `space /` instead of manual file searching
- Replace all mouse clicks with space leader commands
- Build "space first" habits for IDE operations

### Speed Optimizations
- **Fuzzy matching**: Type partial filenames in file finder
- **Search patterns**: Use specific terms in project search
- **Panel switching**: Master `ctrl+hjkl` for zero-delay navigation
- **Keyboard-only**: Avoid mouse for all space leader operations

## ✅ Lesson Complete

You've mastered space leader workflows when:
- [ ] `space space` is your primary file navigation method
- [ ] Code actions (`space c a`, `space c r`) are automatic
- [ ] Git workflow feels integrated and fast
- [ ] AI assistance enhances your development process
- [ ] You prefer keyboard navigation over mouse
- [ ] Workspace navigation feels fluid and efficient
- [ ] You think in space leader patterns for IDE operations

**Next**: [Lesson 04: Code Navigation](../04-code-navigation/README.md)