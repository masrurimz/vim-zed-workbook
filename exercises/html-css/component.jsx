// Vim Practice File - React/JSX Component
// Use this file to practice vim movements with mixed HTML/JavaScript syntax

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Exercise 1: Function component with props - practice text objects
const UserProfile = ({ user, onEdit, isEditing = false }) => {
  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
    bio: user.bio || ""
  });
  
  const [errors, setErrors] = useState({});
  
  // Exercise 2: useEffect hook - practice on dependency arrays
  useEffect(() => {
    // TODO: Change dependency array using ci[
    setFormData({
      name: user.name || "",
      email: user.email || "",
      bio: user.bio || ""
    });
  }, [user]);

  // Exercise 3: Event handlers - practice on function parameters
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // TODO: Practice ci{ on the setFormData object
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // TODO: Change validation logic using text objects
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (validateForm()) {
      onEdit(formData);
    }
  };

  // Exercise 4: Conditional rendering with JSX
  return (
    <div className="user-profile">
      {/* TODO: Practice cit/cat on JSX text content */}
      <div className="profile-header">
        <h2 className="profile-title">User Profile</h2>
        <span className="profile-status">
          {user.isActive ? "Active" : "Inactive"}
        </span>
      </div>

      {isEditing ? (
        /* Exercise 5: Form JSX - practice on form elements */
        <form className="profile-form" onSubmit={handleSubmit}>
          <div className="form-group">
            {/* TODO: Change label text using cit */}
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`form-input ${errors.name ? 'error' : ''}`}
              placeholder="Enter your full name"
            />
            {/* TODO: Practice on error message JSX */}
            {errors.name && (
              <span className="error-message">{errors.name}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="user@example.com"
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          {/* Exercise 6: Textarea JSX element */}
          <div className="form-group">
            <label htmlFor="bio" className="form-label">
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              className="form-textarea"
              rows="4"
              placeholder="Tell us about yourself..."
            />
          </div>

          {/* TODO: Practice on button JSX attributes */}
          <div className="form-actions">
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={Object.keys(errors).length > 0}
            >
              Save Changes
            </button>
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={() => onEdit(null)}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        /* Exercise 7: Display mode JSX */
        <div className="profile-display">
          <div className="profile-field">
            <strong className="field-label">Name:</strong>
            <span className="field-value">{user.name}</span>
          </div>
          
          <div className="profile-field">
            <strong className="field-label">Email:</strong>
            <span className="field-value">
              <a href={`mailto:${user.email}`}>{user.email}</a>
            </span>
          </div>
          
          {/* TODO: Use cit to change bio content */}
          <div className="profile-field">
            <strong className="field-label">Bio:</strong>
            <p className="field-value bio-text">
              {user.bio || "No bio available"}
            </p>
          </div>

          {/* Exercise 8: Nested JSX with user data */}
          <div className="profile-metadata">
            <div className="meta-item">
              <span className="meta-label">Member since:</span>
              <time className="meta-value" dateTime={user.createdAt}>
                {new Date(user.createdAt).toLocaleDateString()}
              </time>
            </div>
            
            <div className="meta-item">
              <span className="meta-label">Last updated:</span>
              <time className="meta-value" dateTime={user.updatedAt}>
                {new Date(user.updatedAt).toLocaleDateString()}
              </time>
            </div>
          </div>

          {/* TODO: Practice changing onClick handler using ci{ */}
          <button 
            className="btn btn-outline"
            onClick={() => onEdit(user)}
          >
            Edit Profile
          </button>
        </div>
      )}

      {/* Exercise 9: Conditional styling with template literals */}
      <style jsx>{`
        .user-profile {
          background-color: ${user.theme === 'dark' ? '#2d3748' : '#ffffff'};
          color: ${user.theme === 'dark' ? '#e2e8f0' : '#2d3748'};
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .profile-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          border-bottom: 2px solid #e2e8f0;
          padding-bottom: 1rem;
        }
        
        .profile-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0;
        }
        
        .profile-status {
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 500;
          background-color: ${user.isActive ? '#48bb78' : '#ed8936'};
          color: white;
        }
      `}</style>
    </div>
  );
};

// Exercise 10: PropTypes definition - practice on object structures
UserProfile.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    bio: PropTypes.string,
    isActive: PropTypes.bool,
    theme: PropTypes.oneOf(['light', 'dark']),
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  isEditing: PropTypes.bool
};

// Exercise 11: Higher-order component example
const withErrorBoundary = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
      return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
      if (this.state.hasError) {
        // TODO: Practice cit to change error message
        return (
          <div className="error-boundary">
            <h2>Something went wrong!</h2>
            <p>Please refresh the page and try again.</p>
            <details>
              <summary>Error details</summary>
              <pre>{this.state.error && this.state.error.toString()}</pre>
            </details>
          </div>
        );
      }

      return <WrappedComponent {...this.props} />;
    }
  };
};

// Exercise 12: Custom hook example
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
};

// Exercise 13: Component with complex JSX structure
const UserCard = ({ user, onClick }) => (
  <div 
    className={`user-card ${user.isPremium ? 'premium' : 'standard'}`}
    onClick={() => onClick(user)}
  >
    <div className="card-header">
      <img 
        src={user.avatar || '/default-avatar.png'} 
        alt={`${user.name}'s avatar`}
        className="avatar"
      />
      <div className="user-info">
        {/* TODO: Practice text object editing on user name */}
        <h3 className="user-name">{user.name}</h3>
        <p className="user-title">{user.title || 'User'}</p>
      </div>
    </div>
    
    <div className="card-body">
      <p className="user-bio">{user.bio || 'No bio available'}</p>
      
      {/* TODO: Practice on array mapping JSX */}
      <div className="user-skills">
        {user.skills && user.skills.length > 0 && (
          <>
            <h4 className="skills-title">Skills:</h4>
            <ul className="skills-list">
              {user.skills.map((skill, index) => (
                <li key={index} className="skill-item">
                  {skill}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
    
    <div className="card-footer">
      <span className="join-date">
        Joined {new Date(user.createdAt).getFullYear()}
      </span>
      {user.isPremium && (
        <span className="premium-badge">Premium</span>
      )}
    </div>
  </div>
);

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
  onClick: PropTypes.func
};

// Export components
export default UserProfile;
export { UserCard, withErrorBoundary, useLocalStorage };

/*
PRACTICE CHALLENGES:
1. Change JSX attribute values: className="user-profile" to className="profile-container"
2. Replace JSX text content: "User Profile" to "Account Information" using cit
3. Change prop destructuring: { user, onEdit } to { userData, handleEdit }
4. Replace template literal expressions: ${user.name} to ${userData.fullName}
5. Change event handler function names: handleInputChange to onInputChange
6. Replace array method calls: user.skills.map() to user.skills.filter().map()
7. Change conditional expressions: user.isActive ? "Active" : "Inactive"
8. Replace import statements: change imported component names
9. Update PropTypes definitions: change property types and requirements
10. Change CSS-in-JS template literal values
11. Replace JSX tag names: <span> to <div> using vim-surround or similar
12. Change HTML attributes: htmlFor="name" to htmlFor="fullName"
*/