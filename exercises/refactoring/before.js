// BEFORE: Code that needs refactoring
// Practice vim editing techniques to improve this code

// Challenge 1: Rename variables to be more descriptive
function calc(a, b, c) {
  const x = a + b;
  const y = x * c;
  return y;
}

// Challenge 2: Fix inconsistent naming and improve structure
const userData = {
  n: "John",
  a: 30,
  e: "john@email.com",
  isActive: true
};

function processUser(data) {
  console.log("Processing user: " + data.n);
  if (data.a > 18) {
    return { status: "adult", email: data.e };
  }
  return { status: "minor", email: data.e };
}

// Challenge 3: Extract magic numbers and improve readability
function calculatePrice(basePrice, customerType) {
  if (customerType === "premium") {
    return basePrice * 0.9; // 10% discount
  } else if (customerType === "gold") {
    return basePrice * 0.8; // 20% discount
  } else if (customerType === "platinum") {
    return basePrice * 0.7; // 30% discount
  }
  return basePrice;
}

// Challenge 4: Simplify nested conditions
function validateForm(form) {
  if (form.name) {
    if (form.email) {
      if (form.age) {
        if (form.age >= 18) {
          return { valid: true, message: "Form is valid" };
        } else {
          return { valid: false, message: "Must be 18 or older" };
        }
      } else {
        return { valid: false, message: "Age is required" };
      }
    } else {
      return { valid: false, message: "Email is required" };
    }
  } else {
    return { valid: false, message: "Name is required" };
  }
}

// Challenge 5: Convert to modern JavaScript syntax
function createUserProfile(name, age, email) {
  var profile = {};
  profile.name = name;
  profile.age = age;
  profile.email = email;
  profile.createdAt = new Date();
  profile.isActive = true;
  return profile;
}

// Challenge 6: Fix inconsistent array methods
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function processNumbers(arr) {
  var evens = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens.push(arr[i]);
    }
  }
  
  var doubled = [];
  for (var j = 0; j < evens.length; j++) {
    doubled.push(evens[j] * 2);
  }
  
  return doubled;
}