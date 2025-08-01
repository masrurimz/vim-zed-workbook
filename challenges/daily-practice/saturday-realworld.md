# 🌍 Saturday: Real-World Day

Apply all your vim skills to realistic development scenarios. Today simulates actual coding challenges you'll face in professional development environments.

## 🎯 Today's Focus
- **Primary**: Full workflow integration
- **Secondary**: Real development scenarios
- **Goal**: Seamless vim usage in professional coding contexts

## ⏱️ Time Budget: 35-45 minutes

### Warm-up: Development Environment Setup (5 minutes)
Simulate starting a new work session:

**Setup Tasks**:
1. **Project Navigation**: Use `space space` to find and open key files
2. **Git Status Check**: Use `space g s` to review current changes
3. **Search TODOs**: Use `space /` to find "TODO" comments
4. **Check Diagnostics**: Use `] d` to review any linting errors
5. **AI Context**: Use `space a c` to prepare AI assistance

**Warm-up Goal**: Establish efficient "start of day" routine using vim

---

## 🌍 Challenge 1: Bug Fix Sprint (12 minutes)

**Scenario**: You've been assigned 3 production bugs that need immediate fixes. Each has specific requirements and time constraints.

### Bug 1: Authentication Issue (4 minutes)
**Context**: Users can't log in due to validation errors

**File: auth.js**
```javascript
const validateLogin = (email, password) => {
    if (!email || email.length < 3) {
        return { valid: false, error: "Email too short" };
    }
    
    if (!password || password.length < 6) {
        return { valid: false, error: "Password too short" };
    }
    
    // Bug: Email validation is too restrictive
    if (!email.includes("@") || !email.includes(".")) {
        return { valid: false, error: "Invalid email format" };
    }
    
    // Bug: Password validation missing special characters
    if (!/[A-Za-z]/.test(password)) {
        return { valid: false, error: "Password must contain letters" };
    }
    
    return { valid: true };
};

export const login = async (email, password) => {
    const validation = validateLogin(email, password);
    if (!validation.valid) {
        throw new Error(validation.error);
    }
    
    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        
        // Bug: Not handling non-200 responses properly
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Login failed');
    }
};
```

**Required Fixes**:
1. Fix email validation to use proper regex
2. Update password validation for better security
3. Add proper HTTP response status checking
4. Add proper error handling for network failures

**Time Limit**: 4 minutes

---

### Bug 2: React Component Performance Issue (4 minutes)
**Context**: User list component is causing browser freezes

**File: UserList.jsx**
```javascript
import React, { useState, useEffect } from 'react';

const UserList = ({ users, searchTerm, sortBy }) => {
    const [selectedUsers, setSelectedUsers] = useState([]);
    
    // Bug: Expensive computation on every render
    const processedUsers = users.map(user => ({
        ...user,
        fullName: user.firstName + ' ' + user.lastName,
        initials: user.firstName[0] + user.lastName[0],
        isActive: user.lastLogin > Date.now() - 30 * 24 * 60 * 60 * 1000,
        score: calculateUserScore(user), // Expensive function
        category: determineUserCategory(user) // Another expensive function
    })).filter(user => 
        user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    ).sort((a, b) => {
        if (sortBy === 'name') return a.fullName.localeCompare(b.fullName);
        if (sortBy === 'score') return b.score - a.score;
        return 0;
    });
    
    const toggleUserSelection = (userId) => {
        setSelectedUsers(prev => 
            prev.includes(userId) 
                ? prev.filter(id => id !== userId)
                : [...prev, userId]
        );
    };
    
    return (
        <div className="user-list">
            {processedUsers.map((user, index) => (
                <div 
                    key={index} // Bug: Using index as key
                    className={`user-item ${selectedUsers.includes(user.id) ? 'selected' : ''}`}
                    onClick={() => toggleUserSelection(user.id)}
                >
                    <div className="user-avatar">{user.initials}</div>
                    <div className="user-info">
                        <h3>{user.fullName}</h3>
                        <p>Score: {user.score}</p>
                        <p>Category: {user.category}</p>
                        <span className={user.isActive ? 'active' : 'inactive'}>
                            {user.isActive ? 'Active' : 'Inactive'}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

// Mock expensive functions
const calculateUserScore = (user) => {
    // Simulate expensive computation
    let score = 0;
    for (let i = 0; i < 10000; i++) {
        score += Math.random();
    }
    return Math.round(score);
};

const determineUserCategory = (user) => {
    // Another expensive operation
    const categories = ['Bronze', 'Silver', 'Gold', 'Platinum'];
    return categories[Math.floor(Math.random() * categories.length)];
};

export default UserList;
```

**Required Fixes**:
1. Implement `useMemo` for expensive computations
2. Fix key prop to use stable IDs
3. Optimize filtering and sorting
4. Add `React.memo` with proper comparison
5. Extract expensive functions to custom hooks

**Time Limit**: 4 minutes

---

### Bug 3: API Error Handling (4 minutes)
**Context**: API calls are failing silently, causing UI inconsistencies

**File: apiService.js**
```javascript
class ApiService {
    constructor() {
        this.baseURL = 'https://api.example.com';
        this.timeout = 5000;
    }
    
    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        
        try {
            // Bug: No timeout implementation
            const response = await fetch(url, {
                ...options,
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers
                }
            });
            
            // Bug: Not checking response status
            const data = await response.json();
            return data;
        } catch (error) {
            // Bug: Generic error handling
            console.error('API Error:', error);
            return null;
        }
    }
    
    async getUsers() {
        return this.request('/users');
    }
    
    async createUser(userData) {
        return this.request('/users', {
            method: 'POST',
            body: JSON.stringify(userData)
        });
    }
    
    async updateUser(id, userData) {
        return this.request(`/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify(userData)
        });
    }
    
    async deleteUser(id) {
        return this.request(`/users/${id}`, {
            method: 'DELETE'
        });
    }
}

export default new ApiService();
```

**Required Fixes**:
1. Add timeout implementation
2. Add proper HTTP status checking
3. Create specific error types for different failures
4. Add retry logic for failed requests
5. Add proper loading states and error reporting

**Time Limit**: 4 minutes

---

## 🌍 Challenge 2: Feature Development (15 minutes)

**Scenario**: Implement a new user notification system with real-time updates

**Requirements**:
1. **Backend API endpoint** for notifications
2. **React component** for displaying notifications
3. **WebSocket integration** for real-time updates
4. **State management** for notification data
5. **Error handling** and loading states

### Implementation Tasks:

**Task 1: API Layer** (5 minutes)
Create notification service with proper error handling:

```javascript
// notificationService.js
class NotificationService {
    constructor() {
        this.baseURL = '/api/notifications';
        this.wsConnection = null;
    }
    
    // TODO: Implement notification fetching
    async getNotifications(userId) {
        // Your implementation here
    }
    
    // TODO: Implement notification marking as read
    async markAsRead(notificationId) {
        // Your implementation here
    }
    
    // TODO: Implement WebSocket connection
    connectWebSocket(userId, onNotification) {
        // Your implementation here
    }
    
    // TODO: Implement WebSocket cleanup
    disconnect() {
        // Your implementation here
    }
}

export default new NotificationService();
```

**Requirements**:
- Proper error handling and retries
- WebSocket connection management
- TypeScript types (if applicable)
- Loading states

---

**Task 2: React Hook** (5 minutes)
Create custom hook for notification management:

```javascript
// useNotifications.js
import { useState, useEffect } from 'react';
import notificationService from './notificationService';

export const useNotifications = (userId) => {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // TODO: Implement notification fetching
    // TODO: Implement WebSocket connection
    // TODO: Implement notification management functions
    
    return {
        notifications,
        loading,
        error,
        markAsRead: () => {}, // TODO: Implement
        clearAll: () => {}, // TODO: Implement
        refresh: () => {} // TODO: Implement
    };
};
```

**Requirements**:
- Real-time updates via WebSocket
- Optimistic updates for better UX
- Proper cleanup on unmount
- Error recovery mechanisms

---

**Task 3: UI Component** (5 minutes)
Create notification component with proper styling:

```javascript
// NotificationCenter.jsx
import React from 'react';
import { useNotifications } from './useNotifications';

const NotificationCenter = ({ userId, isOpen, onClose }) => {
    const { notifications, loading, error, markAsRead, clearAll } = useNotifications(userId);
    
    // TODO: Implement component logic
    // TODO: Add proper accessibility
    // TODO: Add loading and error states
    // TODO: Add animations for better UX
    
    return (
        <div className={`notification-center ${isOpen ? 'open' : ''}`}>
            {/* Your implementation here */}
        </div>
    );
};

export default NotificationCenter;
```

**Requirements**:
- Proper accessibility (ARIA labels, keyboard navigation)
- Loading and error states
- Smooth animations
- Mobile-responsive design

---

## 🌍 Challenge 3: Code Review Simulation (8 minutes)

**Scenario**: Review a pull request and fix issues using vim efficiently

**Pull Request**: "Add user profile editing functionality"

**Files to Review**:

**File 1: UserProfile.jsx**
```javascript
import React, { useState, useEffect } from 'react';

const UserProfile = ({ userId }) => {
    const [user, setUser] = useState();
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState({});
    
    useEffect(() => {
        fetchUser();
    }, []);
    
    const fetchUser = async () => {
        const response = await fetch(`/api/users/${userId}`);
        const userData = await response.json();
        setUser(userData);
        setFormData(userData);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`/api/users/${userId}`, {
            method: 'PUT',
            body: JSON.stringify(formData)
        });
        const updatedUser = await response.json();
        setUser(updatedUser);
        setEditing(false);
    };
    
    if (!user) return <div>Loading...</div>;
    
    return (
        <div>
            {editing ? (
                <form onSubmit={handleSubmit}>
                    <input 
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                    <input 
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                    <button type="submit">Save</button>
                    <button onClick={() => setEditing(false)}>Cancel</button>
                </form>
            ) : (
                <div>
                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                    <button onClick={() => setEditing(true)}>Edit</button>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
```

**Code Review Tasks** (8 minutes):
1. **Identify Issues** (2 minutes): Find all problems in the code
2. **Fix Error Handling** (2 minutes): Add proper error states and handling
3. **Add Validation** (2 minutes): Implement form validation
4. **Improve UX** (2 minutes): Add loading states and optimistic updates

**Issues to Find and Fix**:
- Missing error handling
- No form validation
- Missing loading states
- No proper headers in fetch requests
- Accessibility issues
- No input sanitization
- Memory leaks potential

---

## 🌍 Bonus Challenge: Production Deployment (5 minutes)

**Scenario**: Prepare code for production deployment

**Tasks**:
1. **Build Optimization**: Fix any build warnings
2. **Security Review**: Check for security vulnerabilities
3. **Performance Audit**: Identify performance bottlenecks
4. **Documentation**: Add proper JSDoc comments
5. **Testing**: Add unit test stubs

**Use vim to**:
- Add TypeScript types quickly
- Generate JSDoc comments
- Fix linting errors
- Add test file stubs

---

## 📊 Real-World Assessment

### Today's Performance
```markdown
**Saturday Real-World Day - Week [X]**

**Challenge 1: Bug Fix Sprint**
- Bug 1 (Auth): [Fixed/Partially/Failed] - Time: ___/4min
- Bug 2 (Performance): [Fixed/Partially/Failed] - Time: ___/4min  
- Bug 3 (API): [Fixed/Partially/Failed] - Time: ___/4min
- Bug Fix Grade: _____

**Challenge 2: Feature Development**
- API Layer: [Complete/Partial/Incomplete] - Time: ___/5min
- React Hook: [Complete/Partial/Incomplete] - Time: ___/5min
- UI Component: [Complete/Partial/Incomplete] - Time: ___/5min
- Feature Grade: _____

**Challenge 3: Code Review**
- Issues Identified: ___/7 total issues
- Fixes Implemented: ___/7 fixes
- Review Quality: [Thorough/Good/Surface-level]
- Review Grade: _____

**Bonus: Production Prep**
- Tasks Completed: ___/5
- Production Readiness: [Ready/Needs work/Not ready]

**Real-World Readiness Score**: ___/10
**Overall Grade**: _____
```

### Professional Skills Tracking
| Week | Bug Fixing | Feature Dev | Code Review | Production Prep | Vim Integration |
|------|------------|-------------|-------------|-----------------|-----------------|
| 1    |            |             |             |                 |                 |
| 2    |            |             |             |                 |                 |
| 3    |            |             |             |                 |                 |
| 4    |            |             |             |                 |                 |

## 💡 Real-World Vim Strategies

### Professional Workflows
1. **Morning Routine**: Start each day with git status and TODO search
2. **Bug Triage**: Use diagnostics navigation to prioritize issues
3. **Feature Development**: Plan with comments, implement with vim efficiency
4. **Code Review**: Use search patterns to find common issues
5. **Deployment Prep**: Systematic checks using vim navigation

### Time Management
1. **Time-box Activities**: Set strict limits for each task
2. **Prioritize Impact**: Fix high-impact issues first
3. **Use Tools Efficiently**: Let LSP and AI assist complex tasks
4. **Batch Similar Tasks**: Group related activities together
5. **Document as You Go**: Add comments and docs while context is fresh

### Quality Assurance
1. **Test Frequently**: Verify changes work before moving on
2. **Review Your Own Code**: Use vim to audit your changes
3. **Follow Patterns**: Maintain consistency with existing codebase
4. **Think About Edge Cases**: Consider error conditions and failures
5. **Performance Conscious**: Watch for inefficient patterns

### Team Collaboration
1. **Clear Commits**: Write descriptive commit messages
2. **Code Comments**: Explain complex logic for team members
3. **Consistent Style**: Follow team conventions
4. **Share Knowledge**: Document vim techniques that help team
5. **Help Others**: Use vim skills to assist teammates

## 🎯 Professional Vim Mastery

### Junior Developer Level
- Can complete basic bug fixes efficiently
- Uses vim for daily coding tasks
- Integrates vim with development tools

### Mid-Level Developer
- Handles complex refactoring with vim
- Efficient code review using vim navigation
- Creates custom workflows for productivity

### Senior Developer
- Mentors others in vim techniques
- Optimizes team workflows with vim patterns
- Contributes to vim tooling and configuration

### Vim Expert
- Creates innovative vim solutions for complex problems
- Influences team development practices
- Recognized as vim authority in organization

---

**Real-world mastery achieved!** 🌍 Complete your week with [Sunday's Review & Planning](./sunday-review.md) to consolidate learning and set future goals! 📊