# ⚡ Speed Trials - Vim Efficiency Challenges

Time-based challenges focused on raw speed and keystroke efficiency. These trials test your muscle memory and workflow optimization under pressure.

## 🎯 Speed Trial Rules

1. **Prepare environment** before starting timer
2. **Single attempt** per trial (no retries for score)
3. **Exact match required** for full points
4. **Record keystrokes** if possible (for efficiency scoring)
5. **Use only vim-zed** - no external tools during trial

## 🥉 Intermediate Trials

### Trial 1: Text Object Speed Run
**Target Time**: 45 seconds  
**Optimal Keystrokes**: 32

**Setup**:
```javascript
function calculateTotal(items) {
    let sum = 0;
    for (let item of items) {
        sum += item.price * item.quantity;
    }
    return sum;
}
```

**Tasks**:
1. Change `calculateTotal` to `computeOrderTotal`
2. Change `sum` to `totalAmount` (both occurrences)
3. Change `item.price` to `item.unitPrice`  
4. Change `item.quantity` to `item.count`
5. Add `// Calculate final total` comment above return

**Expected Result**:
```javascript
function computeOrderTotal(items) {
    let totalAmount = 0;
    for (let item of items) {
        totalAmount += item.unitPrice * item.count;
    }
    // Calculate final total
    return totalAmount;
}
```

**Scoring**:
- Time: 45s target (1.0x), under 35s (2.0x)
- Keystrokes: 32 optimal, under 40 excellent
- Difficulty: 1x multiplier

---

### Trial 2: Navigation Marathon
**Target Time**: 60 seconds  
**Optimal Keystrokes**: 45

**Setup**: Create file with this content:
```python
def process_user_data(users):
    validated_users = []
    for user in users:
        if user['email'] and user['age'] >= 18:
            validated_users.append({
                'id': user['id'],
                'name': user['name'],
                'email': user['email'],
                'status': 'active'
            })
    return validated_users
```

**Tasks**:
1. Go to line with `validated_users = []`
2. Change `validated_users` to `approved_users`
3. Navigate to `user['email']` in the if condition
4. Change condition to `user.get('email')` 
5. Navigate to `user['age']` and change to `user.get('age', 0)`
6. In the append block, change all `user['key']` to `user.get('key')`
7. Change final `return validated_users` to `return approved_users`

**Focus Skills**:
- `f`/`t` navigation for finding characters
- Text object mastery for changing quoted strings
- Efficient line jumping
- Pattern recognition

---

### Trial 3: Multi-line Mayhem  
**Target Time**: 90 seconds
**Optimal Keystrokes**: 65

**Setup**: HTML file content:
```html
<div class="user-card">
    <h2>John Doe</h2>
    <p>Email: john@example.com</p>
    <p>Phone: 555-1234</p>
    <button>Contact</button>
</div>
<div class="user-card">
    <h2>Jane Smith</h2>
    <p>Email: jane@example.com</p>
    <p>Phone: 555-5678</p>
    <button>Contact</button>
</div>
```

**Tasks**:
1. Change both `user-card` classes to `profile-card`
2. Wrap each `<h2>` in `<header>` tags
3. Change all `Email:` to `📧 Email:`
4. Change all `Phone:` to `📞 Phone:` 
5. Add `class="btn-primary"` to both buttons
6. Add `<footer>` tags around each button

**Challenge Focus**:
- Visual mode selections
- Block operations
- HTML tag text objects
- Repeated operations

---

## 🥈 Advanced Trials

### Trial 4: Refactoring Race
**Target Time**: 2 minutes
**Optimal Keystrokes**: 85

**Setup**: JavaScript class:
```javascript
class UserManager {
    constructor() {
        this.users = [];
        this.currentUser = null;
    }
    
    addUser(user) {
        this.users.push(user);
    }
    
    removeUser(userId) {
        this.users = this.users.filter(u => u.id !== userId);
    }
    
    getCurrentUser() {
        return this.currentUser;
    }
    
    setCurrentUser(user) {
        this.currentUser = user;
    }
}
```

**Tasks**:
1. Extract `users` array operations to new `UserRepository` class
2. Add parameter validation to all methods
3. Add JSDoc comments to all methods
4. Convert to using async/await pattern
5. Add error handling with try/catch

**Expected Pattern**:
```javascript
class UserRepository {
    constructor() {
        this.users = [];
    }
    
    /**
     * Add user to repository
     * @param {Object} user - User object to add
     */  
    async addUser(user) {
        try {
            if (!user || !user.id) throw new Error('Invalid user');
            this.users.push(user);
        } catch (error) {
            console.error('Add user failed:', error);
        }
    }
    
    // ... rest of implementation
}
```

---

### Trial 5: Multi-File Sprint
**Target Time**: 3 minutes
**Optimal Operations**: 12 file switches

**Setup**: Three files to modify simultaneously

**File 1 - config.js**:
```javascript
export const API_BASE_URL = 'http://localhost:3000';
export const TIMEOUT = 5000;
```

**File 2 - api.js**:
```javascript
import { API_BASE_URL, TIMEOUT } from './config.js';

export async function fetchUser(id) {
    const response = await fetch(`${API_BASE_URL}/users/${id}`);
    return response.json();
}
```

**File 3 - components.js**:
```javascript
import { fetchUser } from './api.js';

export function UserProfile({ userId }) {
    // TODO: implement
}
```

**Tasks**:
1. Add `API_VERSION = 'v1'` to config.js
2. Update API_BASE_URL to include version: `http://localhost:3000/api/v1`
3. Add error handling to fetchUser function
4. Add timeout configuration to fetch call
5. Implement UserProfile component with useState hook
6. Add PropTypes to UserProfile
7. Export default from each file

**Focus Skills**:
- Rapid file switching with `space space`
- Context switching efficiency
- Import/export management
- Code completion integration

---

## 🥇 Expert Trials

### Trial 6: Vim Virtuoso
**Target Time**: 90 seconds
**Optimal Keystrokes**: 45
**Difficulty**: 4x multiplier

**Setup**: Complex nested data structure:
```javascript
const orderData = {
    order: {
        id: "12345",
        customer: { name: "John", email: "john@test.com" },
        items: [
            { product: "Widget", price: 10.99, qty: 2 },
            { product: "Gadget", price: 25.50, qty: 1 }
        ],
        shipping: { method: "standard", cost: 5.99 },
        payment: { method: "card", last4: "1234" }
    }
};
```

**Tasks**: Transform to this exact structure in under 90 seconds:
```javascript
const transformedOrder = {
    orderId: "12345",
    customerInfo: { 
        fullName: "John", 
        emailAddress: "john@test.com" 
    },
    orderItems: [
        { productName: "Widget", unitPrice: 10.99, quantity: 2, total: 21.98 },
        { productName: "Gadget", unitPrice: 25.50, quantity: 1, total: 25.50 }
    ],
    shippingDetails: { deliveryMethod: "standard", shippingCost: 5.99 },
    paymentInfo: { paymentMethod: "card", cardLast4: "1234" }
};
```

**Expert Requirements**:
- Calculate totals for each item
- Rename all nested keys
- Restructure object hierarchy
- Perfect accuracy required

---

### Trial 7: Code Golf Challenge
**Target**: Minimum keystrokes possible
**Par**: 30 keystrokes
**Birdie**: 25 keystrokes  
**Eagle**: 20 keystrokes

**Setup**:
```python
def calculate_average(numbers):
    if len(numbers) == 0:
        return 0
    return sum(numbers) / len(numbers)
```

**Goal**: Convert to one-liner with error handling:
```python
calculate_avg = lambda nums: sum(nums) / len(nums) if nums else 0
```

**Scoring**:
- Under 20 keystrokes: 1000 points
- 21-25 keystrokes: 800 points
- 26-30 keystrokes: 600 points
- Over 30 keystrokes: Try again

---

## 💎 Master Trials

### Trial 8: The Impossible Edit
**Target Time**: 60 seconds
**Expected Success Rate**: 10%

**Setup**: Deliberately broken code with multiple issues:
```javascript
function processData(data) {
    let result = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].status === "active" && data[i].age > 18) {
            result.push({
                id: data[i].id,
                name: data[i].firstName + " " + data[i].lastName,
                email: data[i].email.toLowerCase(),
                category: data[i].age < 30 ? "young" : data[i].age < 50 ? "middle" : "senior"
            });
        }
    }
    return result;
}
```

**Tasks** (All in 60 seconds):
1. Convert to modern arrow function with destructuring
2. Add TypeScript type annotations
3. Add input validation
4. Convert to functional programming style (no loops)
5. Add comprehensive error handling
6. Optimize for performance
7. Add JSDoc documentation

**This is designed to be nearly impossible** - testing absolute limits of vim mastery.

---

## 📊 Speed Trial Leaderboard

Track your best times and share with the community:

### Personal Best Tracker
```markdown
| Trial | Best Time | Keystrokes | Score | Date |
|-------|-----------|------------|-------|------|
| 1     |           |            |       |      |
| 2     |           |            |       |      |
| 3     |           |            |       |      |
| 4     |           |            |       |      |
| 5     |           |            |       |      |
| 6     |           |            |       |      |
| 7     |           |            |       |      |
| 8     |           |            |       |      |
```

## 🎯 Speed Training Tips

### Preparation Techniques
1. **Warm up** with basic motions for 5 minutes
2. **Visualize** the solution path before starting
3. **Practice sections** separately before full attempt
4. **Use metronome** to build consistent rhythm

### During Trials
1. **Stay calm** - panic leads to mistakes
2. **Think in chunks** - not individual keystrokes  
3. **Use text objects** - more efficient than motions
4. **Recovery tactics** - know how to fix mistakes quickly

### Analysis & Improvement
1. **Record sessions** to analyze inefficiencies
2. **Compare approaches** with optimal solutions
3. **Practice weak areas** identified in trials
4. **Time individual operations** to find bottlenecks

---

**Ready to test your speed?** Start with Trial 1 and work your way up! 🏃‍♂️💨