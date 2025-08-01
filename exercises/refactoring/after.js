// AFTER: Refactored code (reference solution)
// Compare your refactoring with this improved version

// Challenge 1: Descriptive variable names
function calculateTotalWithTax(price, taxRate, quantity) {
  const subtotal = price + taxRate;
  const total = subtotal * quantity;
  return total;
}

// Challenge 2: Consistent naming and better structure
const userProfile = {
  name: "John",
  age: 30,
  email: "john@email.com",
  isActive: true
};

function processUserProfile(profile) {
  console.log(`Processing user: ${profile.name}`);
  const status = profile.age >= 18 ? "adult" : "minor";
  
  return {
    status,
    email: profile.email,
    isEligible: status === "adult"
  };
}

// Challenge 3: Extracted constants and improved readability
const DISCOUNT_RATES = {
  premium: 0.1,   // 10% discount
  gold: 0.2,      // 20% discount
  platinum: 0.3   // 30% discount
};

function calculateDiscountedPrice(basePrice, customerType) {
  const discountRate = DISCOUNT_RATES[customerType] || 0;
  return basePrice * (1 - discountRate);
}

// Challenge 4: Flattened validation logic
function validateUserForm(form) {
  if (!form.name) {
    return { valid: false, message: "Name is required" };
  }
  
  if (!form.email) {
    return { valid: false, message: "Email is required" };
  }
  
  if (!form.age) {
    return { valid: false, message: "Age is required" };
  }
  
  if (form.age < 18) {
    return { valid: false, message: "Must be 18 or older" };
  }
  
  return { valid: true, message: "Form is valid" };
}

// Challenge 5: Modern JavaScript with destructuring and defaults
function createUserProfile(name, age, email, isActive = true) {
  return {
    name,
    age,
    email,
    createdAt: new Date(),
    isActive
  };
}

// Challenge 6: Functional programming approach
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function processNumbers(arr) {
  return arr
    .filter(num => num % 2 === 0)
    .map(num => num * 2);
}