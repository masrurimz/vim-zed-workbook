# Lesson 02: Text Objects & Motions

## 🎯 Learning Objectives

By the end of this lesson, you will:
- [ ] Master text objects (ciw, ci", ci(, ci{)
- [ ] Navigate efficiently with word motions (w, e, b)
- [ ] Use f/t navigation for precise movement
- [ ] Combine operators with text objects for powerful editing
- [ ] Understand inner vs around text objects

## 📚 Concepts

### Text Objects: The Power of Vim

Text objects are **vim's superpower**. Instead of thinking character-by-character, think in meaningful chunks:
- Words, sentences, paragraphs
- Quoted strings, parentheses, brackets
- HTML/XML tags

**Pattern**: `<operator><text-object>`
- `c` = change (delete and enter insert mode)
- `d` = delete
- `y` = yank (copy)

### Inner vs Around

**Inner (`i`)**: Content only
**Around (`a`)**: Content + delimiters

```javascript
"Hello World"
```

- `ci"` → Changes `Hello World` (keeps quotes)
- `ca"` → Changes `"Hello World"` (includes quotes)

### Word Motions

| Motion | Action | Example |
|--------|--------|---------|
| `w` | Next word start | `hello|_world` → `hello_|world` |
| `e` | Next word end | `hello|_world` → `hell|o_world` |
| `b` | Previous word start | `hello_|world` → `|hello_world` |
| `ge` | Previous word end | `hello_|world` → `hell|o_world` |

### f/t Navigation (Character Search)

**Find and Till**: Jump to specific characters on current line

| Key | Action | Example |
|-----|--------|---------|
| `f<char>` | Find character | `f.` jumps to next period |
| `t<char>` | Till character (before) | `t.` jumps before next period |
| `F<char>` | Find backward | `F.` jumps to previous period |
| `T<char>` | Till backward | `T.` jumps after previous period |
| `;` | Repeat last f/t | Repeat in same direction |
| `,` | Repeat last f/t backward | Repeat in opposite direction |

## 🎮 Practice Exercises

### Exercise 1: Text Object Mastery

**File**: Create `text-objects.js`

```javascript
const user = {
  name: "John Doe",
  email: "john@example.com",
  settings: {
    theme: "dark",
    notifications: true
  }
};

function greetUser(user) {
  console.log("Hello, " + user.name + "!");
}
```

**Tasks**:
1. Change `"John Doe"` to `"Jane Smith"` using `ci"`
2. Change `user` parameter to `person` using `ciw`
3. Delete the entire `settings` object using `ci{`
4. Change function name using `ciw` on `greetUser`
5. Change `"Hello, "` to `"Welcome, "` using `ci"`

**Success Criteria**: ✅ You can edit without manually selecting text

### Exercise 2: Word Motion Navigation

**File**: Use the same `text-objects.js`

**Tasks**:
1. Start at beginning of line 1
2. Use `w` to jump word by word to `user`
3. Use `e` to jump to end of `user`
4. Use `b` to go back to start of `user`
5. Navigate to `notifications` using only word motions
6. **Challenge**: Navigate from `function` to `user.name` using `w` and `e`

**Success Criteria**: ✅ Word motions feel faster than hjkl for longer distances

### Exercise 3: f/t Navigation Practice

**File**: Create `navigation.html`

```html
<div class="container">
  <h1 class="title">Welcome to Our Site</h1>
  <p class="description">This is a sample paragraph with <a href="#">links</a> and <strong>bold text</strong>.</p>
  <button class="btn primary" onclick="handleClick()">Click Me</button>
</div>
```

**Tasks**:
1. Use `f"` to jump to first quote
2. Use `;` to jump to next quote
3. Use `t>` to jump before the `>` in `<h1>`
4. Use `f(` to find the opening parenthesis in `handleClick()`
5. **Practice**: Change `"container"` to `"wrapper"` using `f"ci"wrapper`

**Success Criteria**: ✅ f/t navigation is faster than multiple hjkl presses

### Exercise 4: Combining Operations

**File**: Create `practice.py`

```python
def calculate_total(items, tax_rate=0.08):
    """Calculate total price including tax."""
    subtotal = sum(item['price'] for item in items)
    tax = subtotal * tax_rate
    return subtotal + tax

# Test data
products = [
    {'name': 'laptop', 'price': 999.99},
    {'name': 'mouse', 'price': 25.50},
    {'name': 'keyboard', 'price': 75.00}
]

total = calculate_total(products, 0.10)
print(f"Total: ${total:.2f}")
```

**Tasks**:
1. Change `calculate_total` to `compute_total` using `ciw`
2. Change the docstring using `ci"`
3. Change `0.08` to `0.09` using selection
4. Change `'laptop'` to `'computer'` using `ci'`
5. Delete the entire `products` list using `ci[`
6. **Advanced**: Use `ci(` to change the parameters in `print(f"...")`

**Success Criteria**: ✅ You think in text objects, not individual characters

### Exercise 5: Real-World Editing Scenarios

**File**: Create `refactor.js`

```javascript
const API_ENDPOINT = "https://api.example.com/v1";

class UserService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = API_ENDPOINT;
  }

  async fetchUser(userId) {
    const response = await fetch(`${this.baseUrl}/users/${userId}`, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
  }
}
```

**Tasks**:
1. Change class name from `UserService` to `ApiService`
2. Change `fetchUser` method to `getUser`
3. Change the API version from `/v1` to `/v2`
4. Change `Bearer` to `Token` in Authorization header
5. Update error message using text objects
6. **Challenge**: Change all instances of `response` to `result` efficiently

**Success Criteria**: ✅ Complex refactoring feels natural and fast

## 🎯 Challenges

### Challenge 1: Speed Editing Race
- Set timer for 3 minutes
- Make 15 different text object edits in the practice files
- Use only text objects (no manual selection)
- Goal: Build muscle memory for common patterns

### Challenge 2: f/t Navigation Mastery
- Navigate through HTML file using only f/t commands
- No hjkl allowed for horizontal movement
- Complete 10 edits using f/t + text objects combination
- Example: `f"ci"new-value`

### Challenge 3: Code Refactoring Sprint
- Take any JavaScript/Python file
- Perform 20 meaningful edits using text objects
- Mix ciw, ci", ci(, ci{, ca", etc.
- Document which text objects you use most

### Challenge 4: No Mouse HTML Editing
- Edit HTML file for 5 minutes
- Use only text objects for changing attributes
- Practice `cit` (change inside tag) and `cat` (change around tag)
- Navigate with f/t between tags

## 🔗 Key Bindings Used

### Text Objects
| Key | Action | Context |
|-----|--------|---------|
| `ciw` | Change inner word | Normal mode |
| `caw` | Change around word | Normal mode |
| `ci"` | Change inside quotes | Normal mode |
| `ca"` | Change around quotes | Normal mode |
| `ci(` | Change inside parentheses | Normal mode |
| `ca(` | Change around parentheses | Normal mode |
| `ci{` | Change inside braces | Normal mode |
| `ca{` | Change around braces | Normal mode |
| `ci[` | Change inside brackets | Normal mode |
| `cit` | Change inside tag | Normal mode |

### Motions
| Key | Action | Context |
|-----|--------|---------|
| `w` | Next word start | Normal mode |
| `e` | Next word end | Normal mode |
| `b` | Previous word start | Normal mode |
| `ge` | Previous word end | Normal mode |

### Character Search
| Key | Action | Context |
|-----|--------|---------|
| `f<char>` | Find character forward | Normal mode |
| `t<char>` | Till character forward | Normal mode |
| `F<char>` | Find character backward | Normal mode |
| `T<char>` | Till character backward | Normal mode |
| `;` | Repeat last f/t/F/T | Normal mode |
| `,` | Repeat last f/t/F/T backward | Normal mode |

### Other Operations
| Key | Action | Context |
|-----|--------|---------|
| `d` + text object | Delete text object | Normal mode |
| `y` + text object | Yank (copy) text object | Normal mode |
| `p` | Paste after cursor | Normal mode |
| `P` | Paste before cursor | Normal mode |

## 💡 Pro Tips

### Efficiency Patterns
- **Think objects, not motions**: `ciw` instead of `dwiw`
- **Use f/t for precision**: Faster than multiple hjkl
- **Combine wisely**: `f"ci"` for quick quote changes
- **Practice patterns**: `caw` → type → `jj` should be automatic

### Common Workflows
1. **Change quoted string**: `ci"` → type → `jj`
2. **Change function parameter**: `ci(` → type → `jj`
3. **Change tag content**: `cit` → type → `jj`
4. **Navigate to character**: `f<char>` → edit → `jj`

### Muscle Memory Builders
- Practice `ciw` on every word edit
- Use `f.` to jump to punctuation
- Always prefer text objects over motions
- Build `ci"`, `ci(`, `ci{` into habits

## ✅ Lesson Complete

You've mastered text objects and motions when:
- [ ] Text objects feel more natural than manual selection
- [ ] You use f/t instead of multiple hjkl presses
- [ ] Word motions (w/e/b) are automatic
- [ ] You think in meaningful chunks, not characters
- [ ] Complex edits feel fast and precise

**Next**: [Lesson 03: Space Leader Workflows](../03-space-leader/README.md)