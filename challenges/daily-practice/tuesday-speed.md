# ⚡ Tuesday: Speed Day

Push your vim velocity to the limit! Today's challenges focus on building muscle memory and optimizing keystroke efficiency under time pressure.

## 🎯 Today's Focus
- **Primary**: Speed and fluency
- **Secondary**: Keystroke optimization
- **Goal**: Develop automatic responses to common editing tasks

## ⏱️ Time Budget: 20-25 minutes

### Warm-up: Speed Typing (3 minutes)
Set timer for 3 minutes. Practice mode switching speed with this exercise:

**Drill**: Type `i` → "hello" → `jj` → `w` → `i` → "world" → `jj` → repeat

**Goal**: Achieve 20+ cycles in 3 minutes (smooth mode switching)

---

## 🏃‍♂️ Challenge 1: Lightning Edits (4 minutes)

**Setup**: Create file with this content:
```javascript
function getUserData() {
    return {
        name: "old_name",
        email: "old_email@test.com",
        status: "inactive",
        role: "user"
    };
}
```

**Round 1** (60 seconds):
1. Change `getUserData` to `fetchUserProfile`
2. Change `"old_name"` to `"new_name"`
3. Change `"old_email@test.com"` to `"new_email@test.com"`
4. Change `"inactive"` to `"active"`
5. Change `"user"` to `"admin"`

**Round 2** (45 seconds - same changes):
Reset file and repeat the same 5 changes

**Round 3** (30 seconds - same changes):
Final attempt with increased pressure

**Scoring**:
- All 3 rounds completed successfully: A+
- 2 rounds completed: A
- 1 round completed: B
- Needed extra time: C

**Focus**: Build muscle memory through repetition

---

## 🏃‍♂️ Challenge 2: Rapid Fire Text Objects (5 minutes)

**Setup**: HTML form structure:
```html
<form class="user-form" method="post" action="/submit">
    <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
    </div>
    <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
    </div>
    <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
    </div>
    <button type="submit" class="btn-primary">Sign Up</button>
</form>
```

**Rapid Fire Tasks** (3 minutes total):
1. Change `class="user-form"` to `class="signup-form"` (10 seconds)
2. Change `method="post"` to `method="POST"` (8 seconds)
3. Change `action="/submit"` to `action="/api/signup"` (10 seconds)
4. Change all `class="form-group"` to `class="field"` (20 seconds)
5. Change `for="username"` to `for="user"` (8 seconds)
6. Change `id="username"` to `id="user"` (8 seconds)
7. Change `name="username"` to `name="user"` (8 seconds)
8. Change `"Username:"` to `"User:"` (8 seconds)
9. Change `class="btn-primary"` to `class="btn btn-primary"` (10 seconds)
10. Change `"Sign Up"` to `"Create Account"` (12 seconds)

**Bonus Round** (2 minutes): Add `placeholder` attributes to all inputs

**Scoring**:
- Completed all in under 3 minutes: A+
- Completed 8-9 tasks in time: A
- Completed 6-7 tasks in time: B
- Completed 4-5 tasks in time: C

---

## 🏃‍♂️ Challenge 3: Speed Refactoring (6 minutes)

**Setup**: Inefficient code that needs quick improvements:
```python
def calculate_total(items):
    total = 0
    for item in items:
        if item["type"] == "product":
            if item["category"] == "electronics":
                total = total + item["price"] * 1.1
            elif item["category"] == "books":
                total = total + item["price"] * 1.05
            else:
                total = total + item["price"]
        elif item["type"] == "service":
            total = total + item["price"] * 1.15
    return total
```

**Speed Tasks** (6 minutes total):
1. **Minute 1**: Change all `item["key"]` to `item.get("key")` (8 instances)
2. **Minute 2**: Change function name to `compute_order_total`
3. **Minute 3**: Replace `total = total + X` with `total += X` (4 instances)
4. **Minute 4**: Add type hints to function signature
5. **Minute 5**: Add docstring with parameter and return descriptions
6. **Minute 6**: Optimize the nested if-elif structure using dictionary lookup

**Target Result**:
```python
def compute_order_total(items: list) -> float:
    """Calculate total price with category-based multipliers.
    
    Args:
        items: List of item dictionaries
        
    Returns:
        Total price with applicable multipliers
    """
    multipliers = {
        ("product", "electronics"): 1.1,
        ("product", "books"): 1.05,
        ("product", "other"): 1.0,
        ("service", None): 1.15
    }
    
    total = 0
    for item in items:
        item_type = item.get("type")
        category = item.get("category", "other")
        key = (item_type, category if item_type == "product" else None)
        multiplier = multipliers.get(key, 1.0)
        total += item.get("price", 0) * multiplier
    
    return total
```

**Scoring**:
- Completed transformation in 6 minutes: A+
- Completed 80% in time: A
- Completed 60% in time: B
- Completed 40% in time: C

---

## 🏃‍♂️ Challenge 4: Multi-File Speed Navigation (4 minutes)

**Setup**: Create 3 files with content:

**File 1: config.js**
```javascript
export const API_URL = "http://localhost:3000";
export const TIMEOUT = 5000;
export const DEBUG = true;
```

**File 2: api.js**
```javascript
import { API_URL, TIMEOUT } from "./config.js";

export async function fetchData(endpoint) {
    const url = `${API_URL}/${endpoint}`;
    return fetch(url, { timeout: TIMEOUT });
}
```

**File 3: main.js**
```javascript
import { fetchData } from "./api.js";

async function main() {
    const data = await fetchData("users");
    console.log(data);
}
```

**Speed Navigation Tasks** (4 minutes):
1. **30 seconds**: Add `RETRY_COUNT = 3` to config.js
2. **30 seconds**: Switch to api.js, import RETRY_COUNT
3. **45 seconds**: Add retry logic to fetchData function
4. **30 seconds**: Switch to main.js, add error handling
5. **45 seconds**: Add `DEBUG` import and console.log statements
6. **30 seconds**: Switch to config.js, change DEBUG to false
7. **30 seconds**: Test all imports are working correctly

**Focus Skills**:
- Rapid file switching with `space space`
- Quick import additions
- Efficient code insertion
- Multi-file awareness

**Scoring**:
- All tasks completed smoothly: A+
- Minor delays but completed: A
- Some tasks incomplete: B
- Struggled with navigation: C

---

## 🏃‍♂️ Bonus Challenge: Vim Golf Speed Run (3 minutes)

**Quick golf challenges for muscle memory:**

**Hole 1** (30 seconds):
```
Before: const userName = "john";
After:  const fullName = "John Doe";
```
**Par**: 8 keystrokes

**Hole 2** (30 seconds):
```
Before: function getData() { return null; }
After:  const getData = () => null;
```
**Par**: 12 keystrokes

**Hole 3** (45 seconds):
```
Before: <div class="old-class">Content</div>
After:  <section class="new-class">Updated Content</section>
```
**Par**: 15 keystrokes

**Hole 4** (45 seconds):
```
Before: const items = [1, 2, 3];
After:  const numbers = [1, 2, 3].map(x => x * 2);
```
**Par**: 18 keystrokes

**Hole 5** (30 seconds):
```
Before: if (user.active == true) {
After:  if (user.isActive) {
```
**Par**: 10 keystrokes

**Scoring**: 
- All under par: A+
- 4/5 under par: A
- 3/5 under par: B
- 2/5 under par: C

---

## 📊 Speed Metrics Tracking

### Today's Performance
```markdown
**Tuesday Speed Day - Week [X]**

**Challenge 1: Lightning Edits**
- Round 1 (60s): [Completed/Failed]
- Round 2 (45s): [Completed/Failed]  
- Round 3 (30s): [Completed/Failed]
- Grade: _____

**Challenge 2: Rapid Fire**
- Tasks completed: ___/10
- Time used: ___/3 minutes
- Grade: _____

**Challenge 3: Speed Refactoring**
- Completion percentage: ____%
- Time used: ___/6 minutes
- Grade: _____

**Challenge 4: Multi-File Navigation**
- Tasks completed: ___/7
- Smoothness (1-10): _____
- Grade: _____

**Bonus: Golf Speed Run**
- Holes under par: ___/5
- Grade: _____

**Overall Speed Day Grade**: _____
```

### Speed Improvement Tracking
| Week | Avg Challenge Time | Golf Under Par | Multi-File Fluency | Overall Grade |
|------|-------------------|----------------|-------------------|---------------|
| 1    |                   |                |                   |               |
| 2    |                   |                |                   |               |
| 3    |                   |                |                   |               |
| 4    |                   |                |                   |               |

## 💡 Speed Building Strategies

### Immediate Speed Gains
1. **Use Text Objects**: `ciw` vs character-by-character editing
2. **Plan Movement**: Think before moving, not during
3. **Leverage Repetition**: Use `.` command for repeated actions
4. **Master f/t**: Character search faster than counting
5. **Minimize Mode Switches**: Stay in normal mode when possible

### Long-term Speed Development
1. **Daily Practice**: Consistency beats intensity
2. **Identify Bottlenecks**: Time individual operations
3. **Learn Patterns**: Recognize common editing scenarios
4. **Muscle Memory**: Repeat until automatic
5. **Progressive Overload**: Gradually increase difficulty

### Speed Mindset
1. **Embrace Mistakes**: They're learning opportunities
2. **Focus on Flow**: Smooth is fast
3. **Practice Under Pressure**: Timers improve performance
4. **Measure Progress**: Track improvements over time
5. **Stay Relaxed**: Tension slows you down

### Recovery Techniques
When you make mistakes:
1. **Don't Panic**: Take a breath
2. **Use Undo**: `u` is your friend
3. **Restart if Needed**: Sometimes clean slate is faster
4. **Learn the Pattern**: Why did you make that mistake?
5. **Practice the Fix**: Repeat the correct sequence

## 🎯 Speed Benchmarks

### Beginner Speed Targets
- Mode switching: <1 second per switch
- Simple text objects: <2 seconds per operation
- Word navigation: <3 seconds to target
- File switching: <5 seconds between files

### Intermediate Speed Targets  
- Complex edits: <30 seconds per multi-step task
- Cross-file operations: <45 seconds per round trip
- Refactoring tasks: <5 minutes per function
- Golf challenges: Within 2x par consistently

### Advanced Speed Targets
- Lightning reflexes: <15 seconds for 5 quick changes
- Speed refactoring: <3 minutes for function transformation
- Multi-file mastery: <2 minutes for cross-file task
- Golf mastery: Under par on 80% of attempts

---

**Speed demon activated!** ⚡ Tomorrow, shift gears for [Wednesday's Workflow Day](./wednesday-workflow.md) - integrating speed with real development workflows! 🔄