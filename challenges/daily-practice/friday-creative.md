# 🎨 Friday: Creative Day

Unleash your vim creativity! Today focuses on innovative techniques, code golf challenges, and discovering unique solutions to editing problems. Think outside the box and push vim's boundaries.

## 🎯 Today's Focus
- **Primary**: Creative problem solving with vim
- **Secondary**: Advanced technique exploration
- **Goal**: Discover new ways to use vim efficiently and elegantly

## ⏱️ Time Budget: 20-30 minutes

### Warm-up: Creative Movement (3 minutes)
Practice unconventional navigation patterns:

**Movement Challenges**:
```
Navigate this text using creative combinations:
- Use `f` + `;` chains instead of word motions
- Combine `t` with operators for precise editing
- Use `/` for navigation instead of movement keys
- Try `*` and `#` for symbol navigation
```

**Sample Text**:
```javascript
const userConfig = {
    theme: "dark",
    fontSize: 14,
    fontFamily: "Fira Code",
    tabSize: 2,
    autoSave: true,
    extensions: ["vim", "git", "prettier"]
};
```

**Creative Navigation Goals**:
1. Navigate to each string value using only `f` and `;`
2. Change each number using `*` to find them
3. Navigate between brackets using `%`
4. Use `/` to jump to specific characters

---

## 🎨 Challenge 1: Vim Golf Artistry (7 minutes)

**Golf Hole 1: The Transformer** (2 minutes)
**Par**: 15 keystrokes

**Before**:
```javascript
function getUserName(user) {
    if (user && user.name) {
        return user.name;
    } else {
        return "Unknown";
    }
}
```

**After**:
```javascript
const getUserName = user => user?.name || "Unknown";
```

**Your Solution**: _________________ (__ keystrokes)

---

**Golf Hole 2: The Restructurer** (2 minutes)
**Par**: 18 keystrokes

**Before**:
```css
.button {
    background-color: blue;
    color: white;
    border: none;
    padding: 10px 20px;
}
```

**After**:
```css
.btn {
    background: #00f;
    color: #fff;
    border: 0;
    padding: .625rem 1.25rem;
}
```

**Your Solution**: _________________ (__ keystrokes)

---

**Golf Hole 3: The List Manipulator** (3 minutes)
**Par**: 22 keystrokes

**Before**:
```python
users = [
    "john@email.com",
    "jane@email.com", 
    "bob@email.com"
]
```

**After**:
```python
emails = ["john@email.com", "jane@email.com", "bob@email.com"]
domains = [email.split('@')[1] for email in emails]
```

**Your Solution**: _________________ (__ keystrokes)

---

## 🎨 Challenge 2: Pattern Wizardry (6 minutes)

**Challenge 2A: The Data Transformer** (3 minutes)
Transform this JSON into different formats using creative vim patterns:

**Original**:
```json
{
    "users": [
        {"id": 1, "name": "John", "role": "admin"},
        {"id": 2, "name": "Jane", "role": "user"},
        {"id": 3, "name": "Bob", "role": "user"}
    ]
}
```

**Task 1**: Convert to CSV format (60 seconds)
```
id,name,role
1,John,admin
2,Jane,user
3,Bob,user
```

**Task 2**: Convert to environment variables (60 seconds)
```bash
USER_1_NAME=John
USER_1_ROLE=admin
USER_2_NAME=Jane
USER_2_ROLE=user
USER_3_NAME=Bob
USER_3_ROLE=user
```

**Task 3**: Convert to SQL INSERT statements (60 seconds)
```sql
INSERT INTO users (id, name, role) VALUES (1, 'John', 'admin');
INSERT INTO users (id, name, role) VALUES (2, 'Jane', 'user');
INSERT INTO users (id, name, role) VALUES (3, 'Bob', 'user');
```

**Focus**: Creative use of search/replace, visual block mode, and text manipulation

---

**Challenge 2B: The ASCII Artist** (3 minutes)
Create ASCII art using vim's visual block mode:

**Task**: Transform this structure:
```
Item 1
Item 2  
Item 3
Item 4
```

**Into this**:
```
┌─────────┐
│ Item 1  │
│ Item 2  │
│ Item 3  │
│ Item 4  │
└─────────┘
```

**Bonus**: Create a more complex ASCII structure with vim block operations.

---

## 🎨 Challenge 3: Advanced Text Manipulation (8 minutes)

**Challenge 3A: The Log Parser** (4 minutes)
Transform server logs into structured data:

**Input**:
```
[2024-01-15 10:30:45] INFO: User john@email.com logged in from 192.168.1.100
[2024-01-15 10:31:22] ERROR: Failed login attempt for jane@email.com from 10.0.0.50
[2024-01-15 10:32:01] INFO: User bob@email.com logged out
[2024-01-15 10:33:15] WARN: Suspicious activity detected for admin@email.com
```

**Target Output**:
```javascript
const logEntries = [
    {
        timestamp: "2024-01-15 10:30:45",
        level: "INFO",
        user: "john@email.com",
        action: "logged in",
        ip: "192.168.1.100"
    },
    {
        timestamp: "2024-01-15 10:31:22", 
        level: "ERROR",
        user: "jane@email.com",
        action: "failed login",
        ip: "10.0.0.50"
    },
    {
        timestamp: "2024-01-15 10:32:01",
        level: "INFO", 
        user: "bob@email.com",
        action: "logged out",
        ip: null
    },
    {
        timestamp: "2024-01-15 10:33:15",
        level: "WARN",
        user: "admin@email.com", 
        action: "suspicious activity",
        ip: null
    }
];
```

**Creative Techniques to Use**:
- Visual block mode for column operations
- Complex search and replace patterns
- Macro recording for repetitive transformations
- Multiple cursor operations

---

**Challenge 3B: The Code Generator** (4 minutes)
Generate boilerplate code from minimal input:

**Input Schema**:
```
User:
  - name: string
  - email: string
  - age: number
  - active: boolean
```

**Generate TypeScript Interface + Validation**:
```typescript
interface User {
    name: string;
    email: string;
    age: number;
    active: boolean;
}

const validateUser = (data: any): User => {
    if (typeof data.name !== 'string') throw new Error('Invalid name');
    if (typeof data.email !== 'string') throw new Error('Invalid email');
    if (typeof data.age !== 'number') throw new Error('Invalid age');
    if (typeof data.active !== 'boolean') throw new Error('Invalid active');
    
    return {
        name: data.name,
        email: data.email,
        age: data.age,
        active: data.active
    };
};

const createUser = (userData: Partial<User>): User => {
    return validateUser({
        name: userData.name || '',
        email: userData.email || '',
        age: userData.age || 0,
        active: userData.active ?? false
    });
};
```

**Challenge**: Generate this from the schema using vim text manipulation techniques.

---

## 🎨 Challenge 4: Vim Macro Mastery (6 minutes)

**Challenge 4A: The List Processor** (3 minutes)
Transform a simple list into complex HTML:

**Input**:
```
Apple
Banana
Cherry
Date
Elderberry
```

**Target**:
```html
<ul class="fruit-list">
    <li class="fruit-item" data-fruit="apple">
        <span class="fruit-name">Apple</span>
        <span class="fruit-type">fresh</span>
    </li>
    <li class="fruit-item" data-fruit="banana">
        <span class="fruit-name">Banana</span>
        <span class="fruit-type">fresh</span>
    </li>
    <li class="fruit-item" data-fruit="cherry">
        <span class="fruit-name">Cherry</span>
        <span class="fruit-type">fresh</span>
    </li>
    <li class="fruit-item" data-fruit="date">
        <span class="fruit-name">Date</span>
        <span class="fruit-type">fresh</span>
    </li>
    <li class="fruit-item" data-fruit="elderberry">
        <span class="fruit-name">Elderberry</span>
        <span class="fruit-type">fresh</span>
    </li>
</ul>
```

**Technique**: Record a macro for the first item, then replay it for others.

---

**Challenge 4B: The Data Normalizer** (3 minutes)
Clean up inconsistent data:

**Input**:
```
John Doe, 25, Software Engineer, john.doe@email.com
Jane Smith,30,Designer,jane@design.com
Bob Jones , 35 , Manager , bob.jones@company.org
Alice Brown,28,Developer,alice.brown@tech.io
```

**Target**:
```javascript
const employees = [
    { name: "John Doe", age: 25, role: "Software Engineer", email: "john.doe@email.com" },
    { name: "Jane Smith", age: 30, role: "Designer", email: "jane@design.com" },
    { name: "Bob Jones", age: 35, role: "Manager", email: "bob.jones@company.org" },
    { name: "Alice Brown", age: 28, role: "Developer", email: "alice.brown@tech.io" }
];
```

**Challenge**: Use macros to handle the inconsistent spacing and formatting.

---

## 🎨 Bonus: Invent Your Own Challenge (Optional)

**Create a unique vim challenge**:
1. **Identify a pattern** in your daily coding that's repetitive
2. **Design a challenge** that tests creative solutions
3. **Set constraints** (time limit, keystroke limit, or technique requirements)
4. **Document your solution** for others to try

**Example Challenge Ideas**:
- Transform API documentation into TypeScript types
- Convert markdown tables to HTML tables
- Generate test cases from function signatures
- Create configuration files from templates
- Transform one programming language to another

---

## 📊 Creative Assessment

### Today's Performance
```markdown
**Friday Creative Day - Week [X]**

**Challenge 1: Vim Golf Artistry**
- Hole 1 Keystrokes: ___/15 (Par)
- Hole 2 Keystrokes: ___/18 (Par)
- Hole 3 Keystrokes: ___/22 (Par)
- Golf Grade: _____

**Challenge 2: Pattern Wizardry**
- Data Transformer: [Smooth/Good/Struggled]
- ASCII Artist: [Creative/Basic/Incomplete]
- Pattern Grade: _____

**Challenge 3: Advanced Manipulation**
- Log Parser: [Elegant/Functional/Messy]
- Code Generator: [Automated/Manual/Incomplete]
- Manipulation Grade: _____

**Challenge 4: Macro Mastery**
- List Processor: [Efficient/Adequate/Manual]
- Data Normalizer: [Smooth/Good/Struggled]
- Macro Grade: _____

**Creativity Score**: ___/10 (How innovative were your solutions?)
**Overall Creative Grade**: _____
```

### Creative Evolution Tracking
| Week | Golf Prowess | Pattern Skills | Text Manipulation | Macro Mastery | Innovation |
|------|--------------|----------------|-------------------|---------------|------------|
| 1    |              |                |                   |               |            |
| 2    |              |                |                   |               |            |
| 3    |              |                |                   |               |            |
| 4    |              |                |                   |               |            |

## 💡 Creative Vim Techniques

### Advanced Text Objects
- **Custom text objects**: Create your own with plugins
- **Language-specific objects**: Use programming language text objects
- **Complex selections**: Combine objects with motions creatively

### Visual Block Magic
- **Column operations**: Insert, delete, change columns
- **ASCII art creation**: Build structures with block mode
- **Data alignment**: Perfect formatting with visual blocks
- **Multi-line editing**: Handle parallel edits efficiently

### Search and Replace Artistry
- **Complex patterns**: Use regex creatively
- **Capture groups**: Transform with `\1`, `\2` replacements
- **Conditional replacements**: Use `\=` for expressions
- **Global operations**: Transform entire files with `:g`

### Macro Wizardry
- **Recursive macros**: Macros that call themselves
- **Conditional macros**: Different actions based on content
- **Cross-file macros**: Apply patterns across multiple files
- **Macro libraries**: Build reusable automation

## 🎯 Creativity Boosters

### Inspiration Sources
1. **Study code golf solutions**: Learn from minimal keystroke masters
2. **Explore vim plugins**: Discover new text objects and operations
3. **Read vim tips**: Daily vim tip websites and communities
4. **Watch vim masters**: YouTube videos of expert vim usage
5. **Practice constraints**: Impose artificial limitations to force creativity

### Creative Exercises
1. **One-liner challenges**: Convert complex code to single lines
2. **Format transformations**: Convert between data formats
3. **Pattern generation**: Create repetitive structures efficiently
4. **Data manipulation**: Transform messy data into clean formats
5. **ASCII art**: Use vim for visual creativity

### Innovation Principles
1. **Question assumptions**: Why do it the "normal" way?
2. **Combine techniques**: Mix different vim features creatively
3. **Optimize for elegance**: Beautiful solutions over just functional ones
4. **Share discoveries**: Teach others your creative techniques
5. **Build on others**: Improve existing solutions

## 🏆 Creative Mastery Levels

### Novice Creative (Week 1-2)
- Can solve basic golf challenges
- Uses standard text objects creatively
- Discovers alternative approaches to common tasks

### Intermediate Creative (Week 3-4)
- Invents novel solutions to complex problems
- Combines multiple techniques elegantly
- Creates useful macros and patterns

### Advanced Creative (Month 2-3)
- Develops signature vim techniques
- Contributes original solutions to community
- Teaches creative vim approaches to others

### Vim Artist (Month 4+)
- Creates vim "art" - elegant, beautiful solutions
- Inspires others with innovative approaches
- Pushes boundaries of what's possible with vim

---

**Creativity unleashed!** 🎨 Ready for [Saturday's Real-World Day](./saturday-realworld.md) to apply all your skills to practical scenarios! 🌍