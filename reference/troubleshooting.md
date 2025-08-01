# 🚨 Troubleshooting Guide

## 🔧 Common Issues & Solutions

### Terminal & Escape Key Problems

#### Issue: Escape key doesn't work properly in terminal
**Symptoms:**
- Pressing Esc in terminal mode switches you out of terminal
- Cannot use Esc to exit vim modes within terminal applications

**Solution:**
```json
// In keymap.json
{
  "context": "Terminal",
  "bindings": {
    "escape": "terminal::SendText"
  }
}
```

#### Issue: Cannot escape from insert mode in terminal vim
**Symptoms:**
- `jj` or `jk` not working in terminal vim
- Stuck in insert mode within terminal vim

**Solutions:**
1. **Use the provided keymap** - It includes proper terminal escape handling
2. **Manual fix:** Add terminal-specific bindings
3. **Alternative:** Use `ctrl+[` instead of escape

### Keymap & Binding Issues

#### Issue: Custom keybindings not working
**Checklist:**
- [ ] Keymap file in correct location (`~/.config/zed/keymap.json`)
- [ ] Valid JSON syntax (check for trailing commas)
- [ ] Zed restarted after keymap changes
- [ ] Vim mode enabled in settings

**Debug Steps:**
```bash
# Check keymap location
ls -la ~/.config/zed/keymap.json

# Validate JSON syntax
python -m json.tool ~/.config/zed/keymap.json

# Check Zed settings
open ~/.config/zed/settings.json
```

#### Issue: Space leader commands not responding
**Common Causes:**
- Space key mapped to something else
- Context conflicts
- Vim mode disabled

**Solution:**
```json
// Ensure space is available as leader
{
  "context": "Editor && vim_mode == normal",
  "bindings": {
    "space space": "file_finder::Toggle"
  }
}
```

### Performance Issues

#### Issue: Zed becomes slow with vim mode
**Symptoms:**
- Delayed key responses
- Laggy cursor movement
- High CPU usage

**Solutions:**
1. **Disable animations:**
```json
{
  "animated_cursor": false,
  "cursor_blink": false
}
```

2. **Reduce file watching:**
```json
{
  "file_scan_exclusions": [
    "**/node_modules",
    "**/.git",
    "**/target",
    "**/build",
    "**/dist"
  ]
}
```

3. **Optimize language servers:**
```json
{
  "lsp": {
    "typescript-language-server": {
      "initialization_options": {
        "preferences": {
          "includeCompletionsForModuleExports": false
        }
      }
    }
  }
}
```

#### Issue: Large files cause vim mode lag
**Symptoms:**
- Slow navigation in files >1MB
- Delayed syntax highlighting
- Unresponsive key commands

**Solutions:**
1. **Disable features for large files:**
```json
{
  "large_file_threshold": 1000000,
  "languages": {
    "*": {
      "format_on_save": "off",
      "code_actions_on_format": {}
    }
  }
}
```

2. **Use external tools:**
```bash
# For very large files, use terminal vim
vim large_file.txt
```

### Navigation & Movement Issues

#### Issue: hjkl navigation feels unnatural
**Symptoms:**
- Constantly reaching for arrow keys
- Slow navigation speed
- Finger positioning problems

**Solutions:**
1. **Practice muscle memory:**
   - Use lessons/01-basics exercises
   - Disable arrow keys temporarily
   - Focus on home row positioning

2. **Gradual transition:**
```json
// Temporarily keep arrow keys while learning
{
  "context": "Editor && vim_mode == normal",
  "bindings": {
    "up": "vim::Up",
    "down": "vim::Down", 
    "left": "vim::Left",
    "right": "vim::Right"
  }
}
```

#### Issue: Can't navigate between panes/splits
**Common Causes:**
- Missing pane navigation bindings
- Context conflicts with other shortcuts

**Solution:**
```json
// Global pane navigation
{
  "bindings": {
    "ctrl-h": ["workspace::ActivatePaneInDirection", "Left"],
    "ctrl-l": ["workspace::ActivatePaneInDirection", "Right"],
    "ctrl-k": ["workspace::ActivatePaneInDirection", "Up"],
    "ctrl-j": ["workspace::ActivatePaneInDirection", "Down"]
  }
}
```

### Text Objects & Operators

#### Issue: Text objects not working as expected
**Symptoms:**
- `ciw` doesn't change word
- `di"` doesn't delete inside quotes
- `yip` doesn't copy paragraph

**Debug Steps:**
1. **Check vim mode status:** Should show in status bar
2. **Verify cursor position:** Must be on/inside target text
3. **Test basic operators:** Try `d`, `c`, `y` alone first

**Common Mistakes:**
```vim
" Wrong - cursor not on word
cursor here:     hello
Command: ciw (won't work)

" Right - cursor on word  
cursor here: h|ello
Command: ciw (works)
```

#### Issue: Visual mode selections feel wrong
**Symptoms:**
- Visual selection includes/excludes unexpected characters
- `v` vs `V` behavior confusing

**Understanding:**
- `v` - Character-wise visual mode
- `V` - Line-wise visual mode  
- `ctrl+v` - Block-wise visual mode

### Search & Replace Problems

#### Issue: Search patterns not found
**Common Issues:**
- Case sensitivity: Use `/pattern/i` for case-insensitive
- Regex escaping: Special characters need `\`
- Word boundaries: Use `\<word\>` for exact matches

**Examples:**
```vim
" Find exact word 'the' (not 'them')
/\<the\>

" Case insensitive search
/pattern/i

" Find special characters
/\[bracket\]
```

#### Issue: Replace operations affect wrong text
**Prevention:**
```vim
" Always preview with confirmation
:%s/old/new/gc

" Use visual selection for precise range
:'<,'>s/old/new/g

" Test on single line first
:s/old/new/g
```

### Git Integration Issues

#### Issue: Git panel not showing changes
**Checklist:**
- [ ] File is in a git repository
- [ ] Changes are saved to disk
- [ ] Git status shows changes in terminal

**Debug:**
```bash
# Check git status
git status

# Verify Zed git settings
grep -A5 '"git"' ~/.config/zed/settings.json
```

#### Issue: Git keybindings conflict
**Solution:** Use namespaced bindings
```json
{
  "context": "Editor",
  "bindings": {
    "space g s": "git::OpenPanel",
    "space g b": "editor::ToggleGitBlame"
  }
}
```

### AI Assistant Issues

#### Issue: AI commands not working
**Checklist:**
- [ ] AI assistant enabled in settings
- [ ] Valid API credentials configured
- [ ] Network connectivity

**Common Solutions:**
1. **Check AI settings:**
```json
{
  "features": {
    "edit_prediction_provider": "copilot"
  },
  "agent": {
    "default_model": {
      "provider": "copilot_chat",
      "model": "claude-3.5-sonnet"  
    }
  }
}
```

2. **Restart AI service:**
   - Restart Zed completely
   - Check provider status in settings

## 🔍 Diagnostic Tools

### Built-in Diagnostics
```vim
" Check vim mode status
:help vim-mode

" View all keybindings  
cmd+shift+p -> "zed: open keymap"

" Check performance
Activity Monitor -> Zed processes
```

### External Tools
```bash
# Validate JSON files
python -m json.tool ~/.config/zed/keymap.json
python -m json.tool ~/.config/zed/settings.json

# Check file permissions
ls -la ~/.config/zed/

# Monitor system performance
top -p $(pgrep zed)
```

### Debug Mode
```json
// Enable debug logging
{
  "debug": true,
  "log_level": "debug"
}
```

## 🆘 Getting Help

### Community Resources
- **Zed Discord:** [Official Discord Server](https://discord.gg/zed)
- **GitHub Issues:** [Zed Repository](https://github.com/zed-industries/zed)
- **Documentation:** [Official Docs](https://zed.dev/docs)

### Vim Resources
- **Vim Tutorial:** `:help vimtutor`
- **Vim Wiki:** [vim.fandom.com](https://vim.fandom.com)
- **r/vim:** [Reddit Community](https://reddit.com/r/vim)

### Quick Help Commands
```vim
" In Zed
cmd+shift+p -> search for help

" Vim help system
:help <topic>
:help motions
:help text-objects
:help keybinding
```

## 🔄 Reset to Defaults

### Complete Reset
```bash
# Backup current config
cp ~/.config/zed/keymap.json ~/.config/zed/keymap.json.backup
cp ~/.config/zed/settings.json ~/.config/zed/settings.json.backup

# Reset to defaults
rm ~/.config/zed/keymap.json
rm ~/.config/zed/settings.json

# Restart Zed
```

### Selective Reset
```bash
# Reset only keymap
rm ~/.config/zed/keymap.json

# Reset only settings  
rm ~/.config/zed/settings.json
```

### Restore from Backup
```bash
# Restore keymap
cp ~/.config/zed/keymap.json.backup ~/.config/zed/keymap.json

# Restore settings
cp ~/.config/zed/settings.json.backup ~/.config/zed/settings.json
```

Remember: **When in doubt, restart Zed**. Many configuration issues resolve with a simple restart.