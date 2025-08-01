// Text Objects Practice - JavaScript
// Master vim text objects with these exercises

// EXERCISE 1: Word Text Objects (w)
// Practice: ciw, daw, yiw on each variable name
const userName = "john_doe";
const userEmail = "john@example.com";
const userAge = 25;

// EXERCISE 2: Quoted String Text Objects (" ' `)
// Practice: ci", ca", yi', ya', ci`, ca`
console.log("Hello World");
const message = 'Welcome to vim!';
const template = `User: ${userName}`;

// EXERCISE 3: Parentheses Text Objects (( ))  
// Practice: ci(, ca(, yi), ya)
function greetUser(name, age) {
  return `Hello ${name}, you are ${age} years old`;
}

const result = calculateSum(10, 20, 30);

// EXERCISE 4: Bracket Text Objects ([ ])
// Practice: ci[, ca[, yi], ya]
const fruits = ["apple", "banana", "cherry"];
const matrix = [[1, 2], [3, 4], [5, 6]];
const config = {
  colors: ["red", "green", "blue"],
  sizes: ["small", "medium", "large"]
};

// EXERCISE 5: Brace Text Objects ({ })
// Practice: ci{, ca{, yi}, ya}
const person = {
  name: "Alice",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown"
  }
};

function processData() {
  const data = { id: 1, status: "active" };
  return data;
}

// EXERCISE 6: Tag Text Objects (< >) - For HTML/JSX
// Practice: cit, cat, yit, yat
const htmlString = `
  <div>
    <h1>Title</h1>
    <p>This is a paragraph with <strong>bold text</strong></p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
  </div>
`;

// EXERCISE 7: Mixed Practice - Complex Nested Structures
const complexObject = {
  users: [
    { name: "John", skills: ["javascript", "react"] },
    { name: "Jane", skills: ["python", "django"] }
  ],
  settings: {
    theme: "dark",
    notifications: { email: true, sms: false }
  }
};

// EXERCISE 8: Function Call Text Objects
// Practice on these function calls
const result1 = someFunction("arg1", "arg2", { option: true });
const result2 = anotherFunction(getValue(), processData(), formatOutput());
const chained = getData().filter(item => item.active).map(item => item.name);

// PRACTICE CHALLENGES:
// 1. Change "john_doe" to "jane_smith" (cursor anywhere in the word)
// 2. Replace entire function parameters: (name, age) -> (user, isActive)
// 3. Change the array ["apple", "banana", "cherry"] to ["orange", "grape"]
// 4. Replace the address object completely
// 5. Change all string contents without retyping quotes