# 🎯 Vim-Zed Cheat Sheet

## 🚀 Universal Navigation (Works Everywhere)

| Key | Action | Context |
|-----|--------|---------|
| `ctrl+h` | Move to left pane | Global |
| `ctrl+j` | Move to lower pane | Global |
| `ctrl+k` | Move to upper pane | Global |
| `ctrl+l` | Move to right pane | Global |
| `ctrl+\` | Toggle terminal | Global |

## 🎮 Vim Modes

| Key | Action | From Mode |
|-----|--------|-----------|
| `i` | Insert before cursor | Normal |
| `a` | Insert after cursor | Normal |
| `o` | New line below | Normal |
| `O` | New line above | Normal |
| `v` | Visual select | Normal |
| `V` | Visual line select | Normal |
| `jj` | Exit to normal | Insert |
| `jk` | Exit to normal | Insert |

## 🏃 Movement & Navigation

### Basic Movement
| Key | Action |
|-----|--------|
| `h` | Left |
| `j` | Down |
| `k` | Up |
| `l` | Right |

### Word Movement
| Key | Action |
|-----|--------|
| `w` | Next word start |
| `e` | Next word end |
| `b` | Previous word start |
| `ge` | Previous word end |

### Line Movement
| Key | Action |
|-----|--------|
| `0` | Beginning of line |
| `^` | First non-blank character |
| `$` | End of line |
| `g_` | Last non-blank character |

### Search Movement
| Key | Action |
|-----|--------|
| `f<char>` | Find character forward |
| `t<char>` | Till character forward |
| `F<char>` | Find character backward |
| `T<char>` | Till character backward |
| `;` | Repeat last f/t/F/T |
| `,` | Repeat last f/t/F/T backward |

## ✂️ Text Objects

### Pattern: `<operator><text-object>`

#### Inner vs Around
| Text Object | Inner | Around |
|-------------|-------|---------|
| Word | `iw` | `aw` |
| Sentence | `is` | `as` |
| Paragraph | `ip` | `ap` |

#### Delimiters
| Character | Inner | Around |
|-----------|-------|---------|
| `"` | `i"` | `a"` |
| `'` | `i'` | `a'` |
| `` ` `` | `i`` | `a`` |
| `(` | `i(` | `a(` |
| `[` | `i[` | `a[` |
| `{` | `i{` | `a{` |
| `<` | `i<` | `a<` |

#### HTML/XML Tags
| Text Object | Action |
|-------------|--------|
| `it` | Inside tag |
| `at` | Around tag |

## 🛠️ Operators

| Key | Action |
|-----|--------|
| `c` | Change (delete and insert) |
| `d` | Delete |
| `y` | Yank (copy) |
| `p` | Paste after |
| `P` | Paste before |

### Common Combinations
| Command | Action |
|---------|--------|
| `ciw` | Change inner word |
| `daw` | Delete around word |
| `yiw` | Yank inner word |
| `ci"` | Change inside quotes |
| `da(` | Delete around parentheses |
| `yi{` | Yank inside braces |

## 🌟 Space Leader Commands

### File Operations
| Key | Action |
|-----|--------|
| `space space` | File finder |
| `space /` | Project search |
| `space e` | Show in project panel |

### Code Actions
| Key | Action |
|-----|--------|
| `space c a` | Code actions |
| `space c r` | Rename symbol |
| `space .` | Quick code actions |

### Git Workflow
| Key | Action |
|-----|--------|
| `space g s` | Git panel |
| `space g h d` | Toggle diff hunks |
| `] h` | Next hunk |
| `[ h` | Previous hunk |

### AI Assistant
| Key | Action |
|-----|--------|
| `space a c` | AI chat |
| `ctrl+enter` | Inline assist |

### Navigation
| Key | Action |
|-----|--------|
| `g d` | Go to definition |
| `g r` | Find references |
| `g i` | Go to implementation |
| `] d` | Next diagnostic |
| `[ d` | Previous diagnostic |

## 📂 Buffer Management

| Key | Action |
|-----|--------|
| `shift+h` | Previous tab |
| `shift+l` | Next tab |
| `shift+q` | Close tab |
| `space b d` | Close buffer |
| `space b o` | Close other buffers |

## 🔍 Search & Replace

| Key | Action |
|-----|--------|
| `/pattern` | Search forward |
| `?pattern` | Search backward |
| `n` | Next match |
| `N` | Previous match |
| `*` | Search word under cursor |
| `#` | Search word under cursor backward |

## ⚡ Quick Tips

### Speed Boosters
- **Stay in normal mode** - 80% of your time
- **Think in text objects** - `ciw` not `dwiw`
- **Use f/t for navigation** - Faster than arrow keys
- **Combine operators** - `d2w` deletes two words

### Common Patterns
- **Change word**: `ciw` → type → `jj`
- **Change inside quotes**: `ci"` → type → `jj`
- **Go to character**: `f<char>` or `t<char>`
- **Navigate panes**: `ctrl+hjkl`

### Efficiency Rules
1. **Minimize mode switches**
2. **Use text objects over motions**
3. **Prefer f/t over multiple hjkl**
4. **Stay on home row**