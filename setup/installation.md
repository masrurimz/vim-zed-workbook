# 🚀 Setup Guide

## Prerequisites

- [Zed Editor](https://zed.dev/) installed
- Basic familiarity with Zed interface

## Installation Steps

### 1. Install the Optimized Keymap

**Option A: Quick Setup (Recommended)**
```bash
# Copy the keymap to your Zed config
cp setup/keymap.json ~/.config/zed/keymap.json
```

**Option B: Manual Setup**
1. Open Zed
2. Press `cmd+,` to open Settings
3. Click "Open Keymap" 
4. Replace contents with the keymap from `setup/keymap.json`

### 2. Verify Installation

1. Open Zed
2. Test these key combinations:
   - `ctrl+h/j/k/l` - Should move between panes
   - `space space` - Should open file finder
   - `jj` in insert mode - Should return to normal mode
   - `space a c` - Should open AI assistant

### 3. Enable Vim Mode

1. In Zed settings (`cmd+,`)
2. Search for "vim"
3. Enable "Vim mode" 

## ✅ Verification Checklist

- [ ] `ctrl+h/j/k/l` navigation works everywhere
- [ ] `space space` opens file finder
- [ ] `jj` escapes from insert mode
- [ ] Terminal escape key works properly (stays in terminal)
- [ ] Space leader commands work (`space g s`, `space c a`, etc.)

## 🆘 Troubleshooting

### Terminal Escape Issues
If escape key switches you out of terminal:
- Make sure you're using the provided keymap
- The keymap fixes this common issue

### Key Bindings Not Working
1. Restart Zed after installing keymap
2. Check that vim mode is enabled
3. Verify keymap.json is in the correct location (`~/.config/zed/keymap.json`)

## Next Steps

Once setup is complete, start with [Lesson 01: Vim Basics](../lessons/01-basics/README.md)!