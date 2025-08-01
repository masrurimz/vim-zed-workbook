# ⛳ Code Golf - Minimal Keystroke Mastery

Welcome to vim code golf - the art of achieving maximum results with minimum keystrokes. These challenges push the absolute limits of vim efficiency and creativity.

## 🎯 Code Golf Rules

1. **Keystrokes count** - Every keystroke matters (including modifiers)
2. **Exact result required** - Must match target exactly
3. **Single attempt scoring** - Best attempt counts
4. **Creative solutions encouraged** - Multiple approaches welcome
5. **Share your solutions** - Help others learn optimal techniques

## 📊 Scoring System

### Golf Terminology
- **Par**: Expected keystrokes for competent vimmer
- **Birdie**: 1-2 keystrokes under par (Excellent)
- **Eagle**: 3-5 keystrokes under par (Outstanding) 
- **Albatross**: 6+ keystrokes under par (Legendary)
- **Hole-in-One**: Perfect theoretical minimum

### Point Awards
- **Albatross**: 1000 points
- **Eagle**: 500 points  
- **Birdie**: 300 points
- **Par**: 100 points
- **Bogey**: 50 points
- **Double Bogey+**: 10 points

## 🥉 Beginner Golf Challenges

### Hole 1: Word Swap
**Par**: 12 keystrokes

**Setup**:
```
The quick brown fox
```

**Target**:
```
The brown quick fox
```

**Hint**: Think about word text objects and transposition.

**Solution Space**: `ciw` patterns, `w` movements, paste operations

---

### Hole 2: Quote Style Change
**Par**: 8 keystrokes

**Setup**:
```javascript
const message = "Hello World";
```

**Target**:
```javascript
const message = 'Hello World';
```

**Hint**: Text objects are your friend.

---

### Hole 3: Function Name Convert
**Par**: 15 keystrokes

**Setup**:
```javascript
function calculateUserAge() {
    return 25;
}
```

**Target**:
```javascript
function getUserAge() {
    return 25;
}
```

**Hint**: Word boundaries and partial replacements.

---

## 🥈 Intermediate Golf Challenges

### Hole 4: Array Transformation
**Par**: 20 keystrokes

**Setup**:
```javascript
const numbers = [1, 2, 3, 4, 5];
```

**Target**:
```javascript
const values = [1, 2, 3, 4, 5].map(n => n * 2);
```

**Hint**: Multiple cursor positions and efficient appending.

---

### Hole 5: Object Restructure
**Par**: 25 keystrokes

**Setup**:
```javascript
const user = {
    name: "John",
    age: 30
};
```

**Target**:
```javascript
const profile = {
    fullName: "John",
    years: 30,
    active: true
};
```

**Hint**: Strategic field editing and additions.

---

### Hole 6: HTML Tag Conversion
**Par**: 18 keystrokes

**Setup**:
```html
<div class="container">
    <p>Hello</p>
    <p>World</p>
</div>
```

**Target**:
```html
<section class="wrapper">
    <span>Hello</span>
    <span>World</span>
</section>
```

**Hint**: Tag text objects and global replacements.

---

## 🥇 Advanced Golf Challenges

### Hole 7: Function Refactor
**Par**: 30 keystrokes

**Setup**:
```javascript
function processData(data) {
    let result = [];
    for (let item of data) {
        result.push(item.toUpperCase());
    }
    return result;
}
```

**Target**:
```javascript
const processData = data => data.map(item => item.toUpperCase());
```

**Advanced Challenge**: Can you do it in under 25 keystrokes?

---

### Hole 8: Complex Restructure
**Par**: 35 keystrokes

**Setup**:
```css
.user-card {
    background-color: white;
    border: 1px solid gray;
    padding: 10px;
    margin: 5px;
}

.user-name {
    font-size: 16px;
    font-weight: bold;
}
```

**Target**:
```css
.profile-card {
    background: #fff;
    border: 1px solid #ccc;
    padding: 0.625rem;
    margin: 0.3125rem;
}

.profile-title {
    font: bold 1rem/1.2 Arial;
}
```

**Master Challenge**: Under 30 keystrokes possible with advanced techniques.

---

### Hole 9: The Pyramid Challenge
**Par**: 45 keystrokes

**Setup**:
```
*
**
***
****
```

**Target**:
```
    *
   ***
  *****
 *******
```

**Hint**: Visual block mode mastery required.

---

## 💎 Master Golf Challenges

### Hole 10: The One-Liner Converter
**Par**: 22 keystrokes

**Setup**:
```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
```

**Target**:
```python
fibonacci = lambda n: n if n <= 1 else fibonacci(n-1) + fibonacci(n-2)
```

**Legendary Challenge**: The theoretical minimum is believed to be 18 keystrokes.

---

### Hole 11: The Import Optimizer
**Par**: 28 keystrokes

**Setup**:
```javascript
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';
```

**Target**:
```javascript
import React, { useState, useEffect, useMemo } from 'react';
```

**Master Hint**: Multiple approaches possible - find the shortest.

---

### Hole 12: The Impossible Transform
**Par**: 40 keystrokes

**Setup**:
```json
{
    "users": [
        {"id": 1, "name": "John"},
        {"id": 2, "name": "Jane"}
    ]
}
```

**Target**:
```typescript
interface User {
    id: number;
    name: string;
}

const users: User[] = [
    {id: 1, name: "John"},
    {id: 2, name: "Jane"}
];
```

**This is considered the hardest vim golf challenge.** Current record: 35 keystrokes.

---

## 🏆 Legendary Holes

### Hole 13: The Vim Virtuoso
**No Par Given** - Find the absolute minimum

**Setup**:
```
Create a function that:
1. Takes array of objects
2. Filters active users  
3. Maps to names only
4. Sorts alphabetically
5. Returns as comma-separated string
```

**Starting Code**:
```javascript
// implement here
```

**Target**:
```javascript
const getActiveUserNames = users => 
    users
        .filter(u => u.active)
        .map(u => u.name)
        .sort()
        .join(', ');
```

**Challenge**: Start from empty file, create the complete function.

---

## 🎮 Golf Techniques & Strategies

### Essential Golf Patterns

**Word Manipulation**:
- `ciw` - Change inner word (most common)
- `caw` - Change around word (includes spaces)
- `C` - Change to end of line
- `s` - Substitute character

**Movement Efficiency**:
- `f<char>` - Faster than multiple `l`
- `t<char>` - Till character
- `$` - End of line
- `0` - Beginning of line

**Text Objects Mastery**:
- `ci"` - Change inside quotes
- `ca(` - Change around parentheses  
- `cit` - Change inside HTML tag
- `ci{` - Change inside braces

**Advanced Techniques**:
- `R` - Replace mode for overwriting
- `r<char>` - Replace single character
- `.` - Repeat last change
- `*` - Search word under cursor

### Golf Strategy Framework

1. **Analyze the transformation** - What's the minimum required?
2. **Plan your approach** - Visualize key positions
3. **Use text objects** - More efficient than precise movements
4. **Think in chunks** - Group related changes
5. **Leverage repetition** - Use `.` command when possible

### Common Golf Anti-Patterns

❌ **Avoid**:
- Multiple `hjkl` movements when `f/t` would work
- Entering insert mode for single character changes
- Using arrow keys (costs extra keystrokes)
- Manual positioning when search would be faster

✅ **Use Instead**:
- Character search movements
- Replace mode and substitute commands
- Text object operations
- Pattern-based positioning

## 📊 Personal Golf Scorecard

Track your best scores for each hole:

```markdown
| Hole | Par | My Best | Strokes Saved | Technique Used |
|------|-----|---------|---------------|----------------|
| 1    | 12  |         |               |                |
| 2    | 8   |         |               |                |
| 3    | 15  |         |               |                |
| 4    | 20  |         |               |                |
| 5    | 25  |         |               |                |
| 6    | 18  |         |               |                |
| 7    | 30  |         |               |                |
| 8    | 35  |         |               |                |
| 9    | 45  |         |               |                |
| 10   | 22  |         |               |                |
| 11   | 28  |         |               |                |
| 12   | 40  |         |               |                |
| 13   | ?   |         |               |                |
```

## 🏅 Community Golf Hall of Fame

Share your record-breaking solutions! Document your approach:

### Hole X Solution (Y keystrokes)
```
Keystroke sequence: <your solution>
Technique explanation: <why this works>
```

## 🎯 Daily Golf Practice

### Warm-Up Routine (5 minutes)
1. Practice basic text objects on sample text
2. Speed through Holes 1-3 for muscle memory
3. Try one new technique on a familiar hole

### Weekly Golf Goals
- **Monday**: Focus on word manipulation holes
- **Tuesday**: Practice text object challenges  
- **Wednesday**: Work on movement efficiency
- **Thursday**: Try advanced holes
- **Friday**: Review and optimize previous solutions
- **Weekend**: Create your own golf challenges

### Golf Mindset Tips
- **Every keystroke matters** - but don't sacrifice accuracy
- **Learn from others** - study different solution approaches
- **Practice regularly** - golf skills decay quickly
- **Have fun** - enjoy the puzzle-solving aspect
- **Share knowledge** - help others discover new techniques

---

**Ready to play some vim golf?** Start with Hole 1 and work toward that perfect score! ⛳🏌️‍♂️