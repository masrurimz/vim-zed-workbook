# 🏛️ Monday: Foundation Day

Start your week by reinforcing the core vim skills that everything else builds upon. Today focuses on precise movement, text objects, and fundamental editing operations.

## 🎯 Today's Focus
- **Primary**: Text object mastery
- **Secondary**: Efficient navigation patterns  
- **Goal**: Build muscle memory for core operations

## ⏱️ Time Budget: 15-20 minutes

### Warm-up (3 minutes)
Basic movement drill - set timer for 3 minutes:
```
Navigate this sample text using only hjkl:

function calculateUserProfile(userData) {
    const profile = {
        name: userData.firstName + " " + userData.lastName,
        email: userData.email.toLowerCase(),
        age: calculateAge(userData.birthDate),
        status: userData.isActive ? "active" : "inactive"
    };
    return profile;
}
```

**Tasks**:
1. Move to each opening brace `{`
2. Navigate to each string literal
3. Jump between each variable name
4. Move to each operator symbol

**Success Criteria**: Smooth navigation without arrow keys

---

## 🎮 Challenge 1: Text Object Speed Run (5 minutes)

**Setup**: Create a file with this content:
```javascript
const user = {
    name: "John Doe",
    email: "john@example.com", 
    phone: "(555) 123-4567",
    address: {
        street: "123 Main St",
        city: "Anytown",
        zip: "12345"
    },
    preferences: ["email", "sms", "push"]
};
```

**Tasks** (Complete as fast as possible):
1. Change `"John Doe"` to `"Jane Smith"`
2. Change `"john@example.com"` to `"jane@example.com"`
3. Change `"(555) 123-4567"` to `"(555) 987-6543"`
4. Change `"123 Main St"` to `"456 Oak Ave"`
5. Change `"Anytown"` to `"Springfield"`
6. Change `"12345"` to `"67890"`
7. Change `["email", "sms", "push"]` to `["phone", "email"]`

**Target Time**: Under 60 seconds
**Focus**: Use `ci"` for all quoted strings, `ci[` for array

**Scoring**:
- Under 45 seconds: A+
- 45-60 seconds: A
- 60-75 seconds: B
- 75-90 seconds: C
- Over 90 seconds: Try again

---

## 🎮 Challenge 2: Word Navigation Mastery (4 minutes)

**Setup**: Use this CSS content:
```css
.navigation-menu {
    background-color: #ffffff;
    border-bottom: 2px solid #e0e0e0;
    padding: 10px 20px;
    margin-bottom: 15px;
}

.menu-item {
    display: inline-block;
    padding: 8px 16px;
    margin-right: 10px;
    color: #333333;
    text-decoration: none;
}

.menu-item:hover {
    background-color: #f5f5f5;
    color: #007bff;
}
```

**Tasks**:
1. Navigate to each class name using `w` and `b`
2. Change `navigation-menu` to `nav-bar`
3. Change `background-color` to `bg-color` (both instances)
4. Change `border-bottom` to `border-b`
5. Change `text-decoration` to `text-decor`
6. Change `inline-block` to `flex`

**Target Time**: Under 2 minutes
**Focus**: Use `w`/`e`/`b` for word jumping, `ciw` for word changes

**Scoring**:
- Under 90 seconds: A+
- 90-120 seconds: A
- 120-150 seconds: B
- 150-180 seconds: C
- Over 180 seconds: Practice more

---

## 🎮 Challenge 3: Mixed Text Objects (5 minutes)

**Setup**: HTML with various nested structures:
```html
<div class="user-profile">
    <header>
        <h1>User Profile</h1>
        <nav>
            <a href="/profile">Profile</a>
            <a href="/settings">Settings</a>
            <a href="/logout">Logout</a>
        </nav>
    </header>
    <main>
        <section class="personal-info">
            <p>Name: <span class="highlight">John Doe</span></p>
            <p>Email: <span class="highlight">john@example.com</span></p>
        </section>
        <section class="preferences">
            <h2>Notification Preferences</h2>
            <label><input type="checkbox" checked> Email notifications</label>
            <label><input type="checkbox"> SMS notifications</label>
        </section>
    </main>
</div>
```

**Tasks**:
1. Change `class="user-profile"` to `class="profile-container"`
2. Change the `<h1>` content to `"My Profile"`
3. Change `/profile` to `/dashboard`
4. Change both `class="highlight"` to `class="info"`
5. Change `John Doe` to `Jane Smith`
6. Change `john@example.com` to `jane.smith@email.com`
7. Change `<h2>` content to `"Settings"`
8. Add `disabled` attribute to second checkbox

**Target Time**: Under 3 minutes
**Focus**: Mix of `ci"`, `cit` (inside tags), `ca"`, `cat` (around tags)

**Scoring**:
- Under 2 minutes: A+
- 2-3 minutes: A
- 3-4 minutes: B
- 4-5 minutes: C
- Over 5 minutes: Review text object basics

---

## 🎮 Bonus Challenge: Creative Text Objects (3 minutes)

**Setup**: Complex nested structure:
```python
def process_user_data(users):
    """Process and validate user data"""
    processed_users = []
    
    for user in users:
        if user.get('email') and user.get('age', 0) >= 18:
            processed_user = {
                'id': user['id'],
                'full_name': f"{user['first_name']} {user['last_name']}",
                'contact': {
                    'email': user['email'].lower(),
                    'phone': user.get('phone', 'N/A')
                },
                'metadata': {
                    'created_at': datetime.now(),
                    'status': 'active'
                }
            }
            processed_users.append(processed_user)
    
    return processed_users
```

**Tasks**:
1. Change function name to `validate_users`
2. Change docstring to `"Validate and process user data"`
3. Change `processed_users` to `valid_users` (both occurrences)
4. Change `processed_user` to `valid_user` (both occurrences)
5. Change `'full_name'` to `'name'`
6. Change `'contact'` to `'info'`
7. Change `'metadata'` to `'audit'`
8. Change `'active'` to `'verified'`

**Target Time**: Under 2.5 minutes
**Focus**: Mixed text objects in Python context

---

## 📊 Daily Assessment

### Self-Evaluation Checklist
Rate yourself (1-5 scale) on today's performance:

- [ ] **Text Object Speed**: How quickly could you use `ci"`, `ciw`, etc.?
- [ ] **Navigation Efficiency**: Did you use `hjkl` or find better paths?
- [ ] **Accuracy**: How many mistakes did you make?
- [ ] **Flow State**: Did the movements feel natural?
- [ ] **Time Management**: Did you stay within target times?

### Today's Key Insights
Write down 2-3 things you learned or want to remember:

1. ________________________________
2. ________________________________  
3. ________________________________

### Tomorrow's Focus Areas
Based on today's challenges, what should you practice more?

- [ ] Quoted string operations (`ci"`, `ci'`)
- [ ] Word-level operations (`ciw`, `caw`)
- [ ] HTML tag operations (`cit`, `cat`)
- [ ] Navigation patterns (`w`, `e`, `b`, `f`, `t`)
- [ ] Overall speed and fluency

### Progress Tracking
```markdown
**Monday Foundation - Week [X]**
- Challenge 1 Time: _____ (Target: <60s)
- Challenge 2 Time: _____ (Target: <2m)  
- Challenge 3 Time: _____ (Target: <3m)
- Bonus Time: _____ (Target: <2.5m)
- Overall Grade: _____ (A+/A/B/C/D)

**Notes**: What felt easy? What was challenging?
```

## 🎯 Week 1 vs Week 4 Comparison

Track your improvement over the month:

| Metric | Week 1 | Week 2 | Week 3 | Week 4 | Improvement |
|--------|--------|--------|--------|--------|-------------|
| Challenge 1 | | | | | |
| Challenge 2 | | | | | |
| Challenge 3 | | | | | |
| Confidence (1-10) | | | | | |

## 💡 Pro Tips for Foundation Day

### Text Object Mastery
- **Muscle Memory**: Practice `ci"` even when `c2l` might work
- **Think Semantically**: "Change the quoted string" not "change these characters"
- **Use Consistently**: Even for small changes to build habits
- **Combine with Motions**: `2ciw` changes next two words

### Navigation Efficiency
- **Plan Your Route**: Look ahead before moving
- **Use Character Search**: `f<char>` often faster than counting
- **Stay on Home Row**: Resist arrow key temptation
- **Practice Blind**: Don't watch your fingers

### Building Speed
- **Accuracy First**: Mistakes slow you down more than deliberate movements
- **Practice Daily**: 15 minutes daily better than 2 hours weekly  
- **Use Real Code**: Practice on your actual projects
- **Time Yourself**: Pressure helps identify inefficiencies

---

**Foundation complete!** 🏛️ Move on to [Tuesday's Speed Day](./tuesday-speed.md) to push your velocity! ⚡