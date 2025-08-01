# Lesson 01: Vim Basics

## 🎯 Learning Objectives

By the end of this lesson, you will:
- [ ] Understand vim modes (Normal, Insert, Visual)
- [ ] Navigate efficiently with hjkl
- [ ] Use custom escape sequences (jj, jk)
- [ ] Master basic editing operations
- [ ] Navigate between Zed panes with ctrl+hjkl

## 📚 Concepts

### Vim Modes

**Normal Mode** (Default)
- Command mode for navigation and operations
- Press `Esc` or `jj`/`jk` to enter
- Most powerful mode - you'll spend 80% of time here

**Insert Mode** 
- For typing text
- Press `i`, `a`, `o` to enter
- Press `jj` or `jk` to exit (custom in our keymap)

**Visual Mode**
- For selecting text
- Press `v` (character), `V` (line), `ctrl+v` (block)
- Make selection, then operate on it

### Navigation (Keep hands on home row!)

```
     k (up)
h (left) l (right)  
   j (down)
```

**Why hjkl?**
- No need to move hands to arrow keys
- Faster and more ergonomic
- Standard across all vim implementations

## 🎮 Practice Exercises

### Exercise 1: Mode Switching

**File**: Open any text file in Zed

**Tasks**:
1. Start in Normal mode
2. Press `i` → type "Hello World"
3. Press `jj` to return to Normal mode
4. Press `a` → type " from Vim!"
5. Press `jk` to return to Normal mode

**Success Criteria**: ✅ You can switch modes without using Esc key

### Exercise 2: hjkl Navigation

**File**: Use `practice.js` (create if needed)

**Tasks**:
1. Use only `h`, `j`, `k`, `l` to move around
2. Navigate to different words
3. Move up and down lines
4. **Challenge**: Navigate without looking at arrow keys

**Success Criteria**: ✅ hjkl feels natural, no arrow key temptation

### Exercise 3: Universal Pane Navigation

**Setup**: 
1. Open terminal: `ctrl+\`
2. Split panes in Zed (cmd+\)

**Tasks**:
1. Use `ctrl+h` to move left between panes
2. Use `ctrl+l` to move right between panes  
3. Use `ctrl+j` to move down to terminal
4. Use `ctrl+k` to move up from terminal
5. **Test**: Press `escape` in terminal - should stay in terminal!

**Success Criteria**: ✅ You can navigate between editor, terminal, and panels seamlessly

### Exercise 4: Basic Editing

**File**: Create `editing-practice.js`

**Tasks**:
1. `i` → type a simple function
2. `jj` → exit insert mode
3. `o` → open new line below and add code
4. `jk` → exit insert mode  
5. `O` → open new line above
6. Practice `a` (append) vs `i` (insert)

**Success Criteria**: ✅ You understand when to use i/a/o/O

## 🎯 Challenges

### Challenge 1: No Mouse Navigation
- Navigate Zed for 10 minutes using only keyboard
- Use `space space` for file finder
- Use `ctrl+hjkl` for pane switching
- Use hjkl for cursor movement

### Challenge 2: Custom Escape Speed Test
- Set a timer for 1 minute
- Switch between normal and insert mode 20 times
- Use only `jj` and `jk` (no Esc key)
- Goal: Feel natural and automatic

## 🔗 Key Bindings Used

| Key | Action | Context |
|-----|--------|---------|
| `hjkl` | Navigate cursor | Normal mode |
| `i` | Insert before cursor | Normal mode |
| `a` | Insert after cursor | Normal mode |
| `o` | New line below | Normal mode |
| `O` | New line above | Normal mode |
| `jj`/`jk` | Exit to normal mode | Insert mode |
| `ctrl+hjkl` | Navigate panes | Global |
| `space space` | File finder | Global |

## ✅ Lesson Complete

You've mastered vim basics when:
- [ ] Mode switching feels automatic
- [ ] hjkl navigation is natural
- [ ] Pane navigation works everywhere
- [ ] You prefer jj/jk over Esc key
- [ ] You can edit text efficiently

**Next**: [Lesson 02: Text Objects & Motions](../02-motions/README.md)