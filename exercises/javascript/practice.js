// Vim Practice File - Basic JavaScript
// Use this file to practice vim movements and editing

// Exercise 1: Navigate to each function name and practice movements
function calculateTotal(price, tax) {
  const result = price + (price * tax);
  return result;
}

function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

// Exercise 2: Practice text objects on these data structures
const user = {
  name: "John Doe",
  email: "john@example.com",
  age: 30,
  isActive: true
};

const items = ["apple", "banana", "orange", "grape"];

// Exercise 3: Fix these intentional "bugs" using vim commands
function processOrder(orderData) {
  // TODO: Change 'orderData' to 'order' using ciw
  // TODO: Change the string using ci"
  console.log("Processing order data...");
  
  // TODO: Change this array using ci[
  const statuses = ["pending", "processing", "completed"];
  
  // TODO: Modify this object using ci{
  return {
    id: orderData.id,
    status: "pending",
    timestamp: new Date()
  };
}

// Exercise 4: Refactor this function (rename variables, change logic)
function oldCalculateDiscount(originalPrice, discountPercent, customerType) {
  let finalPrice = originalPrice;
  
  if (customerType === "premium") {
    finalPrice = originalPrice - (originalPrice * discountPercent);
  } else {
    finalPrice = originalPrice - (originalPrice * (discountPercent * 0.5));
  }
  
  return finalPrice;
}

// Exercise 5: Complete this function by adding missing parts
function createUser(/* Add parameters here */) {
  // Add validation
  // Add user creation logic
  // Add return statement
}