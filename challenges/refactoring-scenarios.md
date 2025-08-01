# 🔧 Refactoring Scenarios - Real-World Vim Mastery

Complex, multi-file refactoring challenges that simulate real development scenarios. These challenges test your ability to navigate large codebases, understand context, and make systematic changes efficiently.

## 🎯 Refactoring Challenge Rules

1. **Multiple files** - Most scenarios involve 3-8 files
2. **Preserve functionality** - Code must work the same after refactoring
3. **Follow patterns** - Maintain existing code style and architecture
4. **Systematic approach** - Plan your changes before starting
5. **Use vim efficiently** - Leverage text objects, search, and navigation

## 🥉 Intermediate Scenarios

### Scenario 1: Component Extraction
**Time Limit**: 15 minutes  
**Files**: 2 main, 1 new  
**Difficulty**: Intermediate

**Context**: You have a React component that's grown too large. Extract the user form into its own component.

**File 1: UserProfile.jsx** (Before):
```jsx
import React, { useState } from 'react';

export default function UserProfile({ user, onUpdate }) {
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: {
            street: user.address.street,
            city: user.address.city,
            zip: user.address.zip
        }
    });

    const handleInputChange = (field, value) => {
        if (field.includes('.')) {
            const [parent, child] = field.split('.');
            setFormData(prev => ({
                ...prev,
                [parent]: { ...prev[parent], [child]: value }
            }));
        } else {
            setFormData(prev => ({ ...prev, [field]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData);
        setEditing(false);
    };

    if (!editing) {
        return (
            <div className="user-profile">
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <div className="address">
                    <p>{user.address.street}</p>
                    <p>{user.address.city}, {user.address.zip}</p>
                </div>
                <button onClick={() => setEditing(true)}>Edit Profile</button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="user-form">
            <h2>Edit Profile</h2>
            <div className="form-group">
                <label>Name:</label>
                <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Phone:</label>
                <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Street:</label>
                <input
                    type="text"
                    value={formData.address.street}
                    onChange={(e) => handleInputChange('address.street', e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>City:</label>
                <input
                    type="text"
                    value={formData.address.city}
                    onChange={(e) => handleInputChange('address.city', e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>ZIP:</label>
                <input
                    type="text"
                    value={formData.address.zip}
                    onChange={(e) => handleInputChange('address.zip', e.target.value)}
                />
            </div>
            <div className="form-actions">
                <button type="submit">Save Changes</button>
                <button type="button" onClick={() => setEditing(false)}>Cancel</button>
            </div>
        </form>
    );
}
```

**Tasks**:
1. Create new file `UserForm.jsx` with the form logic
2. Extract form state management to UserForm
3. Extract handleInputChange and handleSubmit to UserForm
4. Update UserProfile to use UserForm component
5. Ensure proper prop passing and callbacks
6. Maintain all existing functionality

**Expected Result Structure**:
- `UserProfile.jsx`: Display component with toggle to edit mode
- `UserForm.jsx`: Form component with all form logic
- Clean separation of concerns
- No functionality lost

**Vim Skills Focus**:
- Visual mode for selecting large blocks
- Copy/paste between files
- Search and replace for prop updates
- Efficient file switching

---

### Scenario 2: API Layer Consolidation  
**Time Limit**: 20 minutes
**Files**: 4 existing, 1 new
**Difficulty**: Intermediate+

**Context**: Multiple components are making direct API calls. Consolidate into a centralized API service layer.

**Current Files**:

**UserList.js**:
```javascript
import React, { useState, useEffect } from 'react';

export default function UserList() {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        fetch('/api/users')
            .then(res => res.json())
            .then(setUsers)
            .catch(console.error);
    }, []);
    
    const deleteUser = async (id) => {
        try {
            await fetch(`/api/users/${id}`, { method: 'DELETE' });
            setUsers(users.filter(u => u.id !== id));
        } catch (error) {
            console.error('Delete failed:', error);
        }
    };

    return (
        <div>
            {users.map(user => (
                <div key={user.id}>
                    <span>{user.name}</span>
                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}
```

**OrderList.js**:
```javascript
import React, { useState, useEffect } from 'react';

export default function OrderList({ userId }) {
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        if (userId) {
            fetch(`/api/users/${userId}/orders`)
                .then(res => res.json())
                .then(setOrders)
                .catch(console.error);
        }
    }, [userId]);
    
    const updateOrderStatus = async (orderId, status) => {
        try {
            const response = await fetch(`/api/orders/${orderId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status })
            });
            const updatedOrder = await response.json();
            setOrders(orders.map(o => o.id === orderId ? updatedOrder : o));
        } catch (error) {
            console.error('Update failed:', error);
        }
    };

    return (
        <div>
            {orders.map(order => (
                <div key={order.id}>
                    <span>Order #{order.id} - {order.status}</span>
                    <select onChange={(e) => updateOrderStatus(order.id, e.target.value)}>
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                    </select>
                </div>
            ))}
        </div>
    );
}
```

**ProfileSettings.js**:
```javascript
import React, { useState } from 'react';

export default function ProfileSettings({ user }) {
    const [loading, setLoading] = useState(false);
    
    const updateProfile = async (profileData) => {
        setLoading(true);
        try {
            const response = await fetch(`/api/users/${user.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(profileData)
            });
            const updatedUser = await response.json();
            console.log('Profile updated:', updatedUser);
        } catch (error) {
            console.error('Profile update failed:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h3>Profile Settings</h3>
            {/* Form implementation */}
        </div>
    );
}
```

**utils/constants.js**:
```javascript
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';
export const REQUEST_TIMEOUT = 5000;
```

**Tasks**:
1. Create `services/apiService.js` with centralized API methods
2. Extract all fetch calls into service methods
3. Add consistent error handling across all API calls
4. Add request timeout configuration
5. Add loading state management to service
6. Update all components to use the service
7. Add proper TypeScript types (if applicable)

**Expected API Service Structure**:
```javascript
// services/apiService.js
class ApiService {
    async getUsers() { /* implementation */ }
    async deleteUser(id) { /* implementation */ }
    async getUserOrders(userId) { /* implementation */ }
    async updateOrderStatus(orderId, status) { /* implementation */ }
    async updateUserProfile(userId, data) { /* implementation */ }
}

export default new ApiService();
```

**Vim Skills Focus**:
- Multi-file navigation with `space space`
- Search and replace across files
- Block operations for similar code patterns
- Import/export management

---

## 🥈 Advanced Scenarios

### Scenario 3: State Management Migration
**Time Limit**: 35 minutes
**Files**: 6 components, 2 new store files
**Difficulty**: Advanced

**Context**: Convert a prop-drilling heavy application to use a state management solution (Context API or Redux).

**Current Structure**: Parent component passes data through 4 levels of components.

**Challenge**: Implement centralized state management while maintaining all existing functionality.

**Files to Modify**:
- `App.js` (root component)
- `Dashboard.js` (level 1)
- `UserSection.js` (level 2) 
- `UserProfile.js` (level 3)
- `UserActions.js` (level 4)
- `NotificationSection.js` (level 2)

**Tasks**:
1. Create Context provider and reducer
2. Identify all state that needs to be centralized
3. Replace prop drilling with context consumption
4. Maintain all existing component interfaces
5. Add proper error boundaries
6. Ensure no functionality is lost

**Vim Skills Focus**:
- Complex multi-file refactoring
- Pattern recognition across files
- Systematic state extraction
- Import statement management

---

### Scenario 4: Legacy Code Modernization
**Time Limit**: 45 minutes
**Files**: 8 files in legacy codebase
**Difficulty**: Advanced+

**Context**: Modernize a jQuery-based dashboard to use modern ES6+ and module system.

**Before**: jQuery spaghetti code with global variables
**After**: Clean ES6 modules with proper separation of concerns

**Sample Legacy File**:
```javascript
// legacy-dashboard.js
$(document).ready(function() {
    var userData = [];
    var currentUser = null;
    
    function loadUsers() {
        $.ajax({
            url: '/api/users',
            success: function(data) {
                userData = data;
                displayUsers();
            },
            error: function() {
                alert('Failed to load users');
            }
        });
    }
    
    function displayUsers() {
        var html = '';
        for (var i = 0; i < userData.length; i++) {
            html += '<div class="user-item" data-id="' + userData[i].id + '">';
            html += '<span>' + userData[i].name + '</span>';
            html += '<button class="edit-btn">Edit</button>';
            html += '</div>';
        }
        $('#user-list').html(html);
    }
    
    $(document).on('click', '.edit-btn', function() {
        var userId = $(this).parent().data('id');
        editUser(userId);
    });
    
    function editUser(id) {
        currentUser = userData.find(function(u) { return u.id === id; });
        $('#edit-modal').show();
        $('#user-name').val(currentUser.name);
        $('#user-email').val(currentUser.email);
    }
    
    // ... 200+ more lines of similar code
});
```

**Tasks**:
1. Convert to ES6 modules
2. Replace jQuery with vanilla JS
3. Implement proper state management
4. Add error handling and validation
5. Create reusable utility functions
6. Add TypeScript types
7. Implement proper event handling
8. Add unit tests structure

**Expected Modern Structure**:
```javascript
// UserService.js
// UserComponent.js  
// EventManager.js
// ValidationUtils.js
// etc.
```

**Vim Skills Focus**:
- Large-scale search and replace
- Function extraction techniques
- Module system conversion
- Pattern-based refactoring

---

## 🥇 Expert Scenarios

### Scenario 5: Microservice Extraction
**Time Limit**: 60 minutes
**Files**: 12+ files across multiple directories  
**Difficulty**: Expert

**Context**: Extract user authentication logic from a monolith into a separate service with proper API boundaries.

**Monolith Structure**:
```
src/
├── controllers/
│   ├── AuthController.js
│   ├── UserController.js  
│   └── OrderController.js
├── models/
│   ├── User.js
│   ├── Session.js
│   └── Order.js
├── middleware/
│   ├── authMiddleware.js
│   └── validationMiddleware.js
├── routes/
│   ├── authRoutes.js
│   ├── userRoutes.js
│   └── orderRoutes.js
└── utils/
    ├── jwtUtils.js
    ├── passwordUtils.js
    └── emailUtils.js
```

**Tasks**:
1. Identify all authentication-related code across the codebase
2. Create new auth service directory structure
3. Extract and refactor auth logic
4. Create API boundary layer
5. Update remaining monolith to use auth service
6. Maintain backward compatibility
7. Add proper error handling for service communication
8. Update all import statements
9. Create migration plan documentation

**Expected Result**:
- Clean separation between auth service and main app
- Well-defined API contracts
- No broken functionality
- Proper error handling for service failures

**Vim Skills Focus**:
- Cross-directory navigation
- Complex dependency tracking
- Large-scale code movement
- API interface design

---

### Scenario 6: Performance Optimization Refactor
**Time Limit**: 90 minutes
**Files**: 15+ files
**Difficulty**: Expert+

**Context**: A React application with severe performance issues. Identify and fix performance bottlenecks through strategic refactoring.

**Performance Issues**:
1. Unnecessary re-renders throughout component tree
2. Heavy computations in render methods
3. Large bundle sizes due to improper imports
4. Memory leaks from uncleared subscriptions
5. Inefficient list rendering
6. Props drilling causing cascade updates

**Sample Problematic Component**:
```jsx
import * as _ from 'lodash'; // Importing entire lodash library
import moment from 'moment'; // Heavy date library
import { Chart } from 'chart.js'; // Heavy charting library

export default function Dashboard({ users, orders, analytics }) {
    // Heavy computation in render
    const processedData = users.map(user => ({
        ...user,
        totalOrders: orders.filter(o => o.userId === user.id).length,
        totalRevenue: orders
            .filter(o => o.userId === user.id)
            .reduce((sum, order) => sum + order.total, 0),
        lastOrderDate: moment(
            _.maxBy(orders.filter(o => o.userId === user.id), 'createdAt')?.createdAt
        ).format('YYYY-MM-DD')
    }));

    // Inefficient rendering
    return (
        <div>
            {processedData.map((user, index) => (
                <div key={index}> {/* Using index as key */}
                    <UserCard user={user} />
                    <OrderHistory 
                        orders={orders.filter(o => o.userId === user.id)} 
                    />
                    <Analytics data={analytics} userId={user.id} />
                </div>
            ))}
        </div>
    );
}
```

**Tasks**:
1. Implement React.memo and useMemo strategically
2. Extract heavy computations to custom hooks
3. Optimize bundle size with proper imports
4. Fix key prop issues
5. Implement virtualization for long lists
6. Add performance monitoring
7. Create reusable optimization patterns
8. Add performance testing

**Vim Skills Focus**:
- Performance pattern recognition
- Hook extraction techniques
- Import optimization
- Memoization implementation

---

## 💎 Master Scenarios

### Scenario 7: The Full-Stack Refactor
**Time Limit**: 2 hours
**Files**: 25+ files across frontend and backend
**Difficulty**: Master

**Context**: Refactor a full-stack application to implement real-time features, upgrade to latest technologies, and improve architecture.

**Current Stack**: 
- Frontend: React 16, REST API calls, localStorage
- Backend: Express.js with basic routing, direct database queries

**Target Stack**:
- Frontend: React 18 with Suspense, GraphQL client, WebSocket connections
- Backend: GraphQL API, WebSocket server, query optimization

**Scope**:
- 12 React components to upgrade
- 8 API endpoints to convert to GraphQL
- 5 database queries to optimize
- Real-time notifications system
- Authentication system upgrade

**Tasks**:
1. Convert REST endpoints to GraphQL schema
2. Implement WebSocket for real-time features
3. Upgrade React components to use Suspense
4. Add optimistic updates
5. Implement caching strategy
6. Add comprehensive error handling
7. Maintain 100% feature parity
8. Add performance monitoring

**This is the ultimate vim refactoring challenge** - testing every advanced technique you've learned.

---

## 🔍 Refactoring Analysis Framework

### Pre-Refactoring Checklist
- [ ] Understand the current architecture completely
- [ ] Identify all affected files and dependencies  
- [ ] Plan the refactoring approach step-by-step
- [ ] Set up proper testing environment
- [ ] Create backup/checkpoint commits

### During Refactoring
- [ ] Work systematically, not randomly
- [ ] Test frequently to catch breaking changes
- [ ] Use vim efficiently with text objects and motions
- [ ] Leverage search/replace for repetitive changes
- [ ] Maintain consistent code style

### Post-Refactoring Validation
- [ ] All functionality works as before
- [ ] No broken imports or dependencies
- [ ] Code style is consistent
- [ ] Performance is maintained or improved
- [ ] Documentation is updated

## 📊 Scenario Completion Tracker

```markdown
| Scenario | Completed | Time | Score | Notes |
|----------|-----------|------|-------|--------|
| 1        | [ ]       |      |       |        |
| 2        | [ ]       |      |       |        |
| 3        | [ ]       |      |       |        |
| 4        | [ ]       |      |       |        |
| 5        | [ ]       |      |       |        |
| 6        | [ ]       |      |       |        |
| 7        | [ ]       |      |       |        |
```

---

**Ready to tackle real-world refactoring?** Start with Scenario 1 and prove your vim mastery! 🚀