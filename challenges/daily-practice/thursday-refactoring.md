# 🔧 Thursday: Refactoring Day

Master complex, systematic code transformations using vim's powerful editing capabilities. Today focuses on multi-file refactoring, pattern recognition, and large-scale code improvements.

## 🎯 Today's Focus
- **Primary**: Complex multi-file refactoring
- **Secondary**: Pattern-based transformations
- **Goal**: Systematic code improvement with vim efficiency

## ⏱️ Time Budget: 30-35 minutes

### Warm-up: Pattern Recognition (4 minutes)
Practice identifying refactoring opportunities in this code:

```javascript
// Identify all the refactoring opportunities in this code
function processUserData(users) {
    var result = [];
    for (var i = 0; i < users.length; i++) {
        if (users[i].age >= 18) {
            if (users[i].email !== null && users[i].email !== undefined) {
                if (users[i].name !== null && users[i].name !== undefined) {
                    result.push({
                        id: users[i].id,
                        name: users[i].name,
                        email: users[i].email,
                        status: users[i].active === true ? "active" : "inactive"
                    });
                }
            }
        }
    }
    return result;
}
```

**Warm-up Task**: List refactoring opportunities (don't implement yet):
1. ________________________________
2. ________________________________
3. ________________________________
4. ________________________________

---

## 🔧 Challenge 1: Function Extraction Mastery (8 minutes)

**Setup**: Large component that needs breaking down:
```javascript
// UserDashboard.jsx
import React, { useState, useEffect } from 'react';

export default function UserDashboard({ userId }) {
    const [user, setUser] = useState(null);
    const [orders, setOrders] = useState([]);
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        Promise.all([
            fetch(`/api/users/${userId}`).then(res => res.json()),
            fetch(`/api/users/${userId}/orders`).then(res => res.json()),
            fetch(`/api/users/${userId}/notifications`).then(res => res.json())
        ]).then(([userData, ordersData, notificationsData]) => {
            setUser(userData);
            setOrders(ordersData);
            setNotifications(notificationsData);
            setLoading(false);
        }).catch(err => {
            setError(err.message);
            setLoading(false);
        });
    }, [userId]);

    const markNotificationRead = (notificationId) => {
        fetch(`/api/notifications/${notificationId}/read`, { method: 'POST' })
            .then(() => {
                setNotifications(notifications.map(n => 
                    n.id === notificationId ? { ...n, read: true } : n
                ));
            })
            .catch(console.error);
    };

    const cancelOrder = (orderId) => {
        fetch(`/api/orders/${orderId}/cancel`, { method: 'POST' })
            .then(() => {
                setOrders(orders.map(o => 
                    o.id === orderId ? { ...o, status: 'cancelled' } : o
                ));
            })
            .catch(console.error);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="dashboard">
            <section className="profile">
                <h1>Welcome, {user.name}</h1>
                <p>Email: {user.email}</p>
                <p>Member since: {new Date(user.createdAt).toLocaleDateString()}</p>
            </section>
            
            <section className="orders">
                <h2>Recent Orders</h2>
                {orders.length === 0 ? (
                    <p>No orders found</p>
                ) : (
                    <div>
                        {orders.map(order => (
                            <div key={order.id} className="order-item">
                                <span>Order #{order.id}</span>
                                <span>${order.total}</span>
                                <span>{order.status}</span>
                                {order.status === 'pending' && (
                                    <button onClick={() => cancelOrder(order.id)}>
                                        Cancel
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </section>

            <section className="notifications">
                <h2>Notifications</h2>
                {notifications.length === 0 ? (
                    <p>No notifications</p>
                ) : (
                    <div>
                        {notifications.filter(n => !n.read).map(notification => (
                            <div key={notification.id} className="notification-item">
                                <span>{notification.message}</span>
                                <button onClick={() => markNotificationRead(notification.id)}>
                                    Mark Read
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}
```

**Refactoring Tasks** (8 minutes total):

**Task 1: Extract Custom Hooks** (3 minutes)
1. Extract data fetching logic to `useUserData` hook
2. Extract notification logic to `useNotifications` hook  
3. Extract order logic to `useOrders` hook

**Task 2: Extract Components** (3 minutes)
1. Create `UserProfile` component from profile section
2. Create `OrdersList` component from orders section
3. Create `NotificationsList` component from notifications section

**Task 3: Extract Utilities** (2 minutes)
1. Create `api.js` with centralized fetch functions
2. Create `dateUtils.js` for date formatting
3. Update all imports and usage

**Expected Structure**:
```
components/
├── UserDashboard.jsx (main component)
├── UserProfile.jsx
├── OrdersList.jsx  
├── NotificationsList.jsx
hooks/
├── useUserData.js
├── useNotifications.js
└── useOrders.js
utils/
├── api.js
└── dateUtils.js
```

**Focus Skills**:
- Visual mode for selecting logical blocks
- Copy/paste between files efficiently
- Import/export management
- Maintaining component interfaces

---

## 🔧 Challenge 2: API Consolidation Refactor (10 minutes)

**Setup**: Multiple components with scattered API calls:

**File 1: ProductList.js**
```javascript
import React, { useState, useEffect } from 'react';

export default function ProductList() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('/api/products')
            .then(res => res.json())
            .then(setProducts)
            .catch(console.error);
    }, []);

    const deleteProduct = async (id) => {
        await fetch(`/api/products/${id}`, { method: 'DELETE' });
        setProducts(products.filter(p => p.id !== id));
    };

    return (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                    <button onClick={() => deleteProduct(product.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}
```

**File 2: ProductForm.js**
```javascript
import React, { useState } from 'react';

export default function ProductForm({ onSuccess }) {
    const [formData, setFormData] = useState({ name: '', price: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const product = await response.json();
            onSuccess(product);
        } catch (error) {
            console.error('Failed to create product:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input 
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
            />
            <button type="submit">Create Product</button>
        </form>
    );
}
```

**File 3: ProductDetails.js**
```javascript
import React, { useState, useEffect } from 'react';

export default function ProductDetails({ productId }) {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/products/${productId}`)
            .then(res => res.json())
            .then(product => {
                setProduct(product);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, [productId]);

    const updateProduct = async (updates) => {
        try {
            const response = await fetch(`/api/products/${productId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updates)
            });
            const updatedProduct = await response.json();
            setProduct(updatedProduct);
        } catch (error) {
            console.error('Update failed:', error);
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h1>{product.name}</h1>
            <p>Price: ${product.price}</p>
            <button onClick={() => updateProduct({ featured: true })}>
                Feature Product
            </button>
        </div>
    );
}
```

**Consolidation Tasks** (10 minutes):

**Task 1: Create API Service** (4 minutes)
1. Create `services/productService.js`
2. Extract all API calls into service methods
3. Add consistent error handling
4. Add request/response interceptors

**Task 2: Update Components** (4 minutes)
1. Replace direct fetch calls with service calls
2. Update error handling to use service patterns
3. Ensure all imports are updated
4. Test that functionality is preserved

**Task 3: Add Advanced Features** (2 minutes)
1. Add loading states to service
2. Add caching layer
3. Add retry logic for failed requests
4. Add request cancellation

**Expected API Service**:
```javascript
// services/productService.js
class ProductService {
    async getProducts() { /* implementation */ }
    async getProduct(id) { /* implementation */ }
    async createProduct(data) { /* implementation */ }
    async updateProduct(id, data) { /* implementation */ }
    async deleteProduct(id) { /* implementation */ }
}

export default new ProductService();
```

---

## 🔧 Challenge 3: Legacy Code Modernization (10 minutes)

**Setup**: jQuery-based code that needs modernization:
```javascript
// legacy-user-manager.js
var UserManager = {
    users: [],
    currentPage: 1,
    
    init: function() {
        this.loadUsers();
        this.bindEvents();
    },
    
    loadUsers: function() {
        var self = this;
        $.ajax({
            url: '/api/users',
            success: function(data) {
                self.users = data;
                self.renderUsers();
            },
            error: function() {
                alert('Failed to load users');
            }
        });
    },
    
    renderUsers: function() {
        var html = '';
        for (var i = 0; i < this.users.length; i++) {
            var user = this.users[i];
            html += '<div class="user-item" data-id="' + user.id + '">';
            html += '<span class="user-name">' + user.name + '</span>';
            html += '<span class="user-email">' + user.email + '</span>';
            html += '<button class="edit-btn">Edit</button>';
            html += '<button class="delete-btn">Delete</button>';
            html += '</div>';
        }
        $('#user-list').html(html);
    },
    
    bindEvents: function() {
        var self = this;
        $(document).on('click', '.edit-btn', function() {
            var userId = $(this).parent().data('id');
            self.editUser(userId);
        });
        
        $(document).on('click', '.delete-btn', function() {
            var userId = $(this).parent().data('id');
            self.deleteUser(userId);
        });
    },
    
    editUser: function(id) {
        var user = this.users.find(function(u) { return u.id === id; });
        $('#edit-modal').show();
        $('#user-name').val(user.name);
        $('#user-email').val(user.email);
    },
    
    deleteUser: function(id) {
        var self = this;
        if (confirm('Delete user?')) {
            $.ajax({
                url: '/api/users/' + id,
                method: 'DELETE',
                success: function() {
                    self.users = self.users.filter(function(u) { return u.id !== id; });
                    self.renderUsers();
                }
            });
        }
    }
};

$(document).ready(function() {
    UserManager.init();
});
```

**Modernization Tasks** (10 minutes):

**Task 1: ES6+ Conversion** (3 minutes)
1. Convert to ES6 class syntax
2. Replace `var` with `const`/`let`
3. Convert to arrow functions where appropriate
4. Use template literals for string building
5. Convert to async/await

**Task 2: Remove jQuery Dependencies** (4 minutes)
1. Replace `$.ajax` with `fetch`
2. Replace jQuery DOM manipulation with vanilla JS
3. Replace jQuery event handling
4. Update HTML string building to use createElement

**Task 3: Modern Patterns** (3 minutes)
1. Implement proper state management
2. Add error boundary patterns
3. Use modern event delegation
4. Add proper TypeScript types
5. Implement proper separation of concerns

**Target Modern Structure**:
```javascript
// UserManager.js
export class UserManager {
    constructor() {
        this.users = [];
        this.currentPage = 1;
        this.init();
    }
    
    async loadUsers() {
        try {
            const response = await fetch('/api/users');
            this.users = await response.json();
            this.renderUsers();
        } catch (error) {
            this.handleError('Failed to load users', error);
        }
    }
    
    // ... rest of modern implementation
}
```

---

## 🔧 Bonus Challenge: Performance Refactoring (3 minutes)

**Setup**: React component with performance issues:
```javascript
function ExpensiveComponent({ items, filter }) {
    // Heavy computation in render
    const processedItems = items.map(item => ({
        ...item,
        score: calculateComplexScore(item), // Expensive function
        category: determineCategory(item), // Another expensive function
        formattedDate: new Date(item.date).toLocaleDateString()
    })).filter(item => item.category === filter);

    return (
        <div>
            {processedItems.map((item, index) => (
                <div key={index}> {/* Bad key usage */}
                    <h3>{item.name}</h3>
                    <p>Score: {item.score}</p>
                    <p>Category: {item.category}</p>
                    <p>Date: {item.formattedDate}</p>
                </div>
            ))}
        </div>
    );
}
```

**Performance Tasks** (3 minutes):
1. Implement `useMemo` for expensive computations
2. Fix key prop to use stable IDs
3. Extract expensive functions to custom hooks
4. Add `React.memo` with proper comparison
5. Optimize filtering logic

---

## 📊 Refactoring Assessment

### Today's Performance
```markdown
**Thursday Refactoring Day - Week [X]**

**Challenge 1: Function Extraction**
- Custom Hooks: [Clean/Good/Messy]
- Component Extraction: [Smooth/Some issues/Difficult]
- Utility Extraction: [Efficient/Adequate/Slow]
- Grade: _____

**Challenge 2: API Consolidation**
- Service Creation: [Well-structured/Good/Poor]
- Component Updates: [Clean/Some issues/Messy]
- Advanced Features: [Implemented/Partial/Skipped]
- Grade: _____

**Challenge 3: Legacy Modernization**
- ES6+ Conversion: [Complete/Mostly/Incomplete]
- jQuery Removal: [Success/Partial/Failed]
- Modern Patterns: [Excellent/Good/Basic]
- Grade: _____

**Bonus: Performance Refactoring**
- Optimization Applied: [All/Most/Some/None]
- Grade: _____

**Overall Refactoring Grade**: _____
```

### Refactoring Skills Progression
| Week | Extract Functions | API Patterns | Legacy Modernization | Performance | Overall |
|------|------------------|--------------|---------------------|-------------|---------|
| 1    |                  |              |                     |             |         |
| 2    |                  |              |                     |             |         |
| 3    |                  |              |                     |             |         |
| 4    |                  |              |                     |             |         |

## 💡 Refactoring Mastery Tips

### Systematic Approach
1. **Analyze Before Acting**: Understand the code structure first
2. **Plan the Transformation**: Visualize the end state
3. **Work in Small Steps**: Make incremental changes
4. **Test Frequently**: Ensure functionality is preserved
5. **Refactor Ruthlessly**: Don't settle for "good enough"

### Vim Refactoring Techniques
1. **Visual Mode Mastery**: Select logical code blocks efficiently
2. **Search and Replace**: Use patterns for systematic changes
3. **Text Objects**: Leverage function and class text objects
4. **Multiple Cursors**: Handle repetitive changes
5. **File Navigation**: Quick switching between related files

### Refactoring Patterns Recognition
1. **Extract Function**: When you see repeated logic
2. **Extract Component**: When JSX becomes too complex
3. **Extract Hook**: When stateful logic is reused
4. **Consolidate API**: When similar calls are scattered
5. **Modernize Syntax**: When legacy patterns are used

### Quality Checks
After refactoring, verify:
- [ ] **Functionality preserved**: Everything works as before
- [ ] **Readability improved**: Code is easier to understand
- [ ] **Performance maintained**: No regression in speed
- [ ] **Tests still pass**: All existing tests work
- [ ] **Dependencies updated**: Imports/exports are correct

## 🎯 Advanced Refactoring Patterns

### The Extract and Replace Pattern
1. **Identify** the code to extract
2. **Extract** to new function/component/hook
3. **Replace** original usage
4. **Test** the integration
5. **Refine** the interface

### The Gradual Modernization Pattern
1. **Isolate** legacy code boundaries
2. **Create** modern replacements
3. **Bridge** old and new systems
4. **Migrate** usage gradually
5. **Remove** legacy code

### The Performance Refactoring Pattern
1. **Profile** to identify bottlenecks
2. **Measure** current performance
3. **Optimize** critical paths
4. **Verify** improvements
5. **Monitor** ongoing performance

---

**Refactoring mastery achieved!** 🔧 Time for [Friday's Creative Day](./friday-creative.md) to explore innovative vim techniques! 🎨