# 🔄 Vim Development Workflows

## 🚀 Core Development Patterns

### The Vim Mindset
- **Stay in Normal Mode**: 80% of your time should be in normal mode
- **Think in Text Objects**: Operate on logical units (words, sentences, paragraphs)
- **Compose Operations**: Combine operators with motions/text objects
- **Minimize Keystrokes**: Find the shortest path to your goal

### Basic Edit Cycle
```
1. Navigate (f/t, w/b, gg/G)
2. Select/Target (text objects, motions)
3. Operate (c/d/y + motion/text object)
4. Repeat (. command)
```

## 📝 File Editing Workflows

### Quick Text Changes
| Pattern | Keys | Use Case |
|---------|------|----------|
| Change word | `ciw` | Replace entire word |
| Change to end | `C` | Replace from cursor to line end |
| Change line | `cc` | Replace entire line |
| Change inside quotes | `ci"` | Replace quoted content |
| Change inside parens | `ci(` | Replace parenthesized content |

### Efficient Navigation
| Pattern | Keys | Use Case |
|---------|------|----------|
| Go to character | `f<char>` | Jump forward to character |
| Go to matching bracket | `%` | Jump between () [] {} |
| Go to line | `:<num>` | Jump to specific line |
| Go to definition | `gd` | Navigate to symbol definition |
| Go back | `ctrl+o` | Return to previous location |

### Copy/Paste Workflows
```vim
" Copy current line
yy

" Copy word
yiw

" Copy inside quotes
yi"

" Copy paragraph
yip

" Paste and format
p=p
```

## 🔍 Search & Replace Patterns

### File-wide Search
| Pattern | Command | Description |
|---------|---------|-------------|
| Find in file | `/pattern` | Search forward |
| Find backwards | `?pattern` | Search backward |
| Find word under cursor | `*` | Search current word forward |
| Find references | `gr` | Find all references (LSP) |

### Project-wide Operations
| Pattern | Keys | Description |
|---------|------|-------------|
| Project search | `space /` | Search across all files |
| Find files | `space space` | Quick file finder |
| Recent files | `space r` | Recently opened files |

### Replace Workflows
```vim
" Replace in current line
:s/old/new/g

" Replace in entire file
:%s/old/new/g

" Replace with confirmation
:%s/old/new/gc

" Replace in visual selection
:'<,'>s/old/new/g
```

## 🧩 Code Navigation Workflows

### Function-Level Navigation
```vim
" Jump to function definition
gd

" Find function references
gr

" Go to implementation
gi

" Navigate function parameters
f(    " Jump to opening paren
f,    " Jump to next comma
```

### Class/Module Navigation
| Pattern | Keys | Use Case |
|---------|------|----------|
| Outline view | `space o` | View file structure |
| Symbol search | `space s` | Find symbols in file |
| Go to type | `gt` | Navigate to type definition |

### Multi-file Workflows
```vim
" Open file in split
:split filename
:vsplit filename

" Navigate between splits
ctrl+h/j/k/l

" Navigate between tabs
shift+h/l

" Close current buffer
shift+q
```

## 🔧 Refactoring Workflows

### Rename Symbol
```vim
1. Position cursor on symbol
2. space c r  (code rename)
3. Type new name
4. Enter to confirm
```

### Extract Function
```vim
1. Select code in visual mode (V)
2. space c a  (code actions)
3. Choose "Extract to function"
4. Provide function name
```

### Code Actions
| Pattern | Keys | Use Case |
|---------|------|----------|
| Quick fix | `space .` | Apply quick fixes |
| Code actions | `space c a` | View all code actions |
| Format code | `space c f` | Format current file |
| Organize imports | `space c i` | Sort/clean imports |

## 🎯 Debugging Workflows

### Error Navigation
```vim
" Jump to next error
]d

" Jump to previous error
[d

" Show error details
space e
```

### Diagnostic Workflows
| Pattern | Keys | Description |
|---------|------|-------------|
| Error list | `space x x` | Show all diagnostics |
| Hover info | `K` | Show documentation |
| Signature help | `ctrl+k` | Function signature |

## 🌿 Git Integration Workflows

### Basic Git Operations
```vim
" Open git panel
space g s

" Stage changes
space g a

" Commit changes
space g c

" Push changes
space g p
```

### Diff & Merge Workflows
| Pattern | Keys | Description |
|---------|------|-------------|
| Toggle diff hunks | `space g h d` | Show/hide changes |
| Next hunk | `]h` | Jump to next change |
| Previous hunk | `[h` | Jump to previous change |
| Stage hunk | `space g h s` | Stage current change |

### Blame & History
```vim
" Git blame
space g b

" File history
space g l

" Show commit details
space g d
```

## 🤖 AI-Assisted Development

### AI Workflows
| Pattern | Keys | Use Case |
|---------|------|----------|
| AI chat | `space a c` | Open AI assistant |
| Inline assist | `ctrl+enter` | AI code suggestions |
| Explain code | `space a e` | Get code explanation |
| Generate tests | `space a t` | Create unit tests |

### Code Generation Patterns
```vim
1. Write comment describing what you want
2. ctrl+enter (inline assist)
3. Review and accept/modify suggestion
4. Repeat for iterative development
```

## 🔀 Advanced Workflows

### Macro Recording
```vim
" Record macro
qa        " Start recording to register 'a'
<commands>
q         " Stop recording

" Play macro
@a        " Execute macro 'a'
@@        " Repeat last macro
```

### Buffer Management
| Pattern | Keys | Description |
|---------|------|-------------|
| Buffer list | `space b b` | Show all buffers |
| Close buffer | `space b d` | Close current buffer |
| Close others | `space b o` | Close other buffers |
| Buffer navigation | `]b` / `[b` | Next/previous buffer |

### Window Management
```vim
" Split windows
:split     " Horizontal split
:vsplit    " Vertical split

" Resize windows
ctrl+w +   " Increase height
ctrl+w -   " Decrease height
ctrl+w >   " Increase width
ctrl+w <   " Decrease width
```

## 📊 Efficiency Metrics

### Speed Benchmarks
- **File navigation**: < 2 keystrokes to any file
- **Code changes**: < 5 keystrokes for common edits
- **Search operations**: < 3 keystrokes to find anything
- **Mode switches**: Minimize to essential only

### Common Patterns to Master
1. **ciw** - Change inner word (most common edit)
2. **f<char>** - Jump to character (fastest navigation)
3. **space space** - Find files (fastest file switching)
4. **gd** - Go to definition (code navigation)
5. **.** - Repeat last action (efficiency multiplier)

## 🎯 Best Practices

### Movement Optimization
- Use `f/t` instead of repeated `h/l`
- Use `w/b` instead of repeated `h/l`
- Use `gg/G` for file boundaries
- Use `%` for bracket matching

### Edit Optimization
- Plan your edit before entering insert mode
- Use text objects over motions when possible
- Prefer `c` over `d` + `i` when replacing
- Use `.` to repeat actions

### Workflow Integration
- Keep related files in same window/tab group
- Use git integration for change tracking
- Leverage AI for boilerplate generation
- Practice muscle memory daily

Remember: **Efficiency comes from consistency**. Master a few patterns deeply before adding new ones.