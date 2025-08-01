# 🚀 Advanced Vim Techniques

## 🎯 Expert-Level Patterns

### Complex Text Manipulation

#### Multi-Cursor Operations (Zed Enhancement)
```vim
" Select multiple instances of word under cursor
cmd+d           " Add next occurrence
cmd+shift+l     " Select all occurrences  
cmd+u           " Undo last selection

" Combined with vim motions
cmd+d, ciw      " Change all selected words
cmd+d, A        " Append to all selections
```

#### Advanced Text Objects
```vim
" Entire function (custom text object)
vaf             " Visual select around function
daf             " Delete around function
caf             " Change around function

" Indented block
vii             " Select same indentation level
dii             " Delete indented block
cii             " Change indented block

" Entire buffer
ggVG            " Select entire file
:%d             " Delete entire file content
:%y             " Yank entire file
```

### Surgical Editing Patterns

#### Precision Targeting
```vim
" Change from cursor to specific character
cf)             " Change from cursor to next )
ct,             " Change from cursor to (but not including) next ,
df"             " Delete from cursor to next "
dt.             " Delete from cursor to (but not including) next .

" Backwards precision
cF(             " Change from cursor back to previous (
dT,             " Delete back to (but not including) previous ,
```

#### Line-Level Precision
```vim
" Change specific parts of line
c^              " Change from start of line to cursor
c$              " Change from cursor to end of line  
c0              " Change from beginning of line to cursor

" Advanced line operations
J               " Join current line with next
gJ              " Join without adding space
cc              " Change entire line but preserve indentation
S               " Substitute entire line (same as cc)
```

## 🔄 Advanced Workflow Automation

### Macro Mastery

#### Recording Complex Macros
```vim
" Record macro with conditional logic
qa                          " Start recording to register 'a'
/function<CR>               " Search for function
n                          " Next match
ciw                        " Change inner word
newFunctionName            " Type replacement
jj                         " Escape to normal
q                          " Stop recording

" Execute macro
@a                         " Execute macro once
10@a                       " Execute macro 10 times
:%normal @a                " Execute macro on every line
```

#### Macro Editing and Refinement
```vim
" View macro content
:registers a               " Show contents of register 'a'

" Edit macro
"ap                        " Paste macro content to edit
" Edit the line...
"ayy                       " Yank back to register 'a'

" Chain macros
qaq                        " Clear register 'a'
qa                         " Start recording new macro that includes old
@b                         " Execute another macro within this one
@c                         " Chain multiple macros
q                          " Stop recording
```

### Custom Commands and Functions

#### Zed Integration Commands
```vim
" Custom leader commands (in keymap.json)
{
  "context": "Editor && vim_mode == normal",
  "bindings": {
    "space x f": "editor::Format",
    "space x s": "workspace::Save",
    "space x q": "workspace::CloseWindow"
  }
}
```

#### Project-Specific Workflows
```vim
" Language-specific commands
space l t          " Run tests for current file
space l b          " Build current project  
space l r          " Run current file
space l d          " Deploy project
space l c          " Coverage report
```

## 🧩 Advanced Navigation Mastery

### Expert Movement Patterns

#### Contextual Navigation
```vim
" Code structure navigation
]]              " Next function/class
[[              " Previous function/class
][              " Next end of function
[]              " Previous end of function

" Bracket-aware navigation
%               " Jump to matching bracket
[{              " Jump to previous unmatched {
]}              " Jump to next unmatched }
[(              " Jump to previous unmatched (
])              " Jump to next unmatched )
```

#### Search-Based Navigation
```vim
" Advanced search patterns
/\<function\>   " Find exact word 'function'
/\cfind         " Case insensitive search for 'find'
/^import        " Find lines starting with 'import'
/const.*=       " Find const assignments
```

#### Mark-Based Navigation System
```vim
" Set marks for complex navigation
ma              " Set mark 'a' at current position
mA              " Set global mark 'A' (works across files)
`a              " Jump to exact position of mark 'a'
'a              " Jump to line of mark 'a'

" Special marks
`.              " Last change position
`^              " Last insert position
`[              " Start of last change/yank
`]              " End of last change/yank
```

## 🎨 Visual Mode Mastery

### Advanced Selection Techniques

#### Block Visual Mode
```vim
ctrl+v          " Enter block visual mode
I               " Insert at beginning of all selected lines
A               " Append to end of all selected lines
c               " Change all selected blocks
r<char>         " Replace all selected characters
```

#### Intelligent Selection
```vim
" Expand/shrink selection  
v               " Start character selection
o               " Switch between start/end of selection
U               " Make selection uppercase
u               " Make selection lowercase
~               " Toggle case of selection
```

### Visual Mode Operations
```vim
" Text transformation in visual mode
:s/old/new/g    " Replace in selection
:sort           " Sort selected lines
:!sort -u       " Sort and remove duplicates
:!column -t     " Format as table
```

## ⚡ Performance Optimization

### Speed-Focused Patterns

#### Minimal Keystrokes Philosophy
```vim
" Instead of: dw dw dw (9 keystrokes)
d3w             " Delete 3 words (3 keystrokes)

" Instead of: ea;<Esc> (5 keystrokes)  
A;              " Append semicolon (2 keystrokes)

" Instead of: 0i//<Esc> (6 keystrokes)
I//             " Insert comment at start (3 keystrokes)
```

#### Repetition Efficiency
```vim
" Use counts with operators
3dd             " Delete 3 lines
5yy             " Yank 5 lines
2cc             " Change 2 lines
4>>             " Indent 4 lines

" Combine with motions
d5w             " Delete 5 words
c3e             " Change to end of 3rd word
y4j             " Yank 4 lines down
```

### Workflow Optimization

#### Context Switching Minimization
```vim
" Stay in normal mode patterns
ciw<new-word>jj     " Change word and stay in normal
da)<new-text>jj     " Replace parentheses content
```

#### Buffer Management Efficiency
```vim
" Quick buffer operations
:b#             " Switch to alternate buffer
:bd             " Delete current buffer
:bn             " Next buffer
:bp             " Previous buffer
ctrl+^          " Switch between two most recent buffers
```

## 🔗 Integration with Modern Tools

### Git Integration Mastery

#### Advanced Git Workflows
```vim
" Advanced git operations in Zed
space g s       " Git status panel
space g l       " Git log/history
space g b       " Git blame inline
space g d       " Git diff for file

" Hunk-level operations
]h              " Next git hunk
[h              " Previous git hunk
space g h s     " Stage current hunk
space g h u     " Undo current hunk
```

#### Conflict Resolution
```vim
" During merge conflict
[c              " Previous conflict
]c              " Next conflict
do              " Use other version (diff obtain)
dp              " Use current version (diff put)
```

### Language Server Integration

#### Code Intelligence Navigation
```vim
" Advanced LSP operations
gd              " Go to definition
gr              " Find references
gi              " Go to implementation
gy              " Go to type definition
K               " Show hover information
space c a       " Code actions
space c r       " Rename symbol
```

#### Diagnostic Navigation
```vim
" Error and warning navigation
]d              " Next diagnostic
[d              " Previous diagnostic
space x x       " Show all diagnostics
space x w       " Show workspace diagnostics
```

## 🎯 Custom Workflow Creation

### Project-Specific Patterns

#### Framework-Specific Workflows
```vim
" React development pattern
space r c       " Create component
space r h       " Add hook
space r p       " Add prop types
space r t       " Run tests
space r s       " Start dev server

" Backend API development
space a r       " Create route
space a m       " Create model  
space a t       " Create test
space a d       " Generate docs
```

#### File Template Integration
```vim
" Quick file creation with templates
:template component    " Create React component
:template test         " Create test file
:template config       " Create config file
```

### Cross-Tool Integration

#### Terminal Integration
```vim
" Terminal workflow integration
ctrl+`          " Toggle terminal
space t t       " Open terminal tab
space t s       " Split terminal
space t f       " Float terminal
```

#### AI Assistant Integration
```vim
" AI-powered vim workflows
space a v       " AI vim help
space a r       " AI refactor suggestion
space a e       " AI explain code
space a g       " AI generate code
space a o       " AI optimize workflow
```

## 🔧 Customization Mastery

### Advanced Keymap Patterns

#### Context-Aware Bindings
```json
{
  "context": "Editor && vim_mode == normal && language == javascript",
  "bindings": {
    "space j f": "editor::Format",
    "space j l": "editor::ToggleLineNumbers",
    "space j r": "task::Rerun"
  }
}
```

#### Modal Bindings
```json
{
  "context": "Editor && vim_mode == insert",
  "bindings": {
    "jj": "vim::NormalMode", 
    "jk": "vim::NormalMode",
    "ctrl+h": "editor::Backspace",
    "ctrl+w": "editor::DeleteToPreviousWordStart"
  }
}
```

### Settings Optimization

#### Performance Tuning
```json
{
  "editor": {
    "scroll_beyond_last_line": "one_page",
    "cursor_blink": false,
    "vim_mode": true,
    "relative_line_numbers": true
  },
  "vim": {
    "use_system_clipboard": "always",
    "use_multiline_find": true,
    "use_smartcase_find": true
  }
}
```

## 🎖️ Master-Level Challenges

### Complex Editing Scenarios

#### Challenge 1: Refactor Function Signatures
```javascript
// Transform this:
function processData(userData, configOptions, debugMode) {
  // implementation
}

// To this:
function processData({
  userData,
  configOptions,
  debugMode = false
}) {
  // implementation  
}

// Master solution: f(ci(}userData,configOptions,debugMode = false}jj
```

#### Challenge 2: Convert Array to Object
```javascript
// Transform:
const items = ['name', 'email', 'phone', 'address'];

// To:
const items = {
  name: '',
  email: '',
  phone: '',
  address: ''
};

// Master approach: Use block visual mode + macros
```

### Workflow Optimization Challenges

#### Speed Benchmarks
- **File navigation**: < 2 seconds to any file
- **Code refactoring**: < 30 seconds for function rename
- **Search and replace**: < 10 seconds project-wide
- **Git operations**: < 5 seconds per commit

#### Efficiency Metrics
```vim
" Track your improvements
:messages           " View command history
:history /          " View search history
:registers          " View register contents
```

## 🚀 Next-Level Integration

### Automation Scripts

#### Workflow Automation
```bash
# Create vim-optimized project setup
create_vim_project() {
  mkdir -p "$1"/{src,tests,docs}
  cd "$1"
  
  # Setup vim-friendly structure
  touch .vimrc.local
  echo "set number relativenumber" > .vimrc.local
  
  # Initialize with git
  git init
  git add .
  git commit -m "Initial vim-optimized project setup"
}
```

#### Custom Commands
```vim
" Add to your shell config
alias vim-project="code . && echo 'Vim mode enabled'"
alias vim-config="code ~/.config/zed/"
alias vim-learn="code ~/Projects/vim-zed-workbook/"
```

### Continuous Improvement

#### Daily Practice Routine
1. **Morning warm-up**: 5 minutes of basic motions
2. **Active usage**: Apply one new pattern during work
3. **Evening review**: Reflect on efficiency gains
4. **Weekly challenge**: Master one advanced technique

#### Skill Assessment Matrix
```markdown
| Skill Category | Beginner | Intermediate | Advanced | Master |
|---------------|----------|--------------|----------|---------|
| Basic Movement | hjkl | wbeW | f/t navigation | Custom motions |
| Text Objects | iw, i" | Multiple delimiters | Custom objects | Complex combinations |
| Operators | d,c,y | Combined operations | Advanced patterns | Macro integration |
| Workflow | File editing | Multi-file work | Project workflows | Team integration |
```

## 🎯 Mastery Mindset

### Philosophical Approach
- **Economy of motion**: Every keystroke should have purpose
- **Muscle memory**: Practice until patterns become automatic  
- **Contextual thinking**: Choose tools based on task requirements
- **Continuous refinement**: Always seek more efficient patterns

### Advanced Learning Path
1. **Master fundamentals** - Perfect basic operations
2. **Develop patterns** - Create repeatable workflows
3. **Optimize constantly** - Find efficiency improvements
4. **Share knowledge** - Teach others to reinforce learning
5. **Innovate workflows** - Create unique solutions for your domain

Remember: **True mastery isn't about knowing every command, but choosing the right tool for each task with minimal cognitive overhead.**

---

*"The expert in anything was once a beginner who refused to give up."* - Keep practicing! 🚀