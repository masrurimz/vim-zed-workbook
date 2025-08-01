# Text Objects Practice - Python
# Master vim text objects with these Python-specific exercises

# EXERCISE 1: Word Text Objects (w) - Python snake_case
# Practice: ciw, daw, yiw on each variable name
user_name = "john_doe"
user_email = "john@example.com"
max_retry_count = 5
is_authenticated = True

# EXERCISE 2: Quoted String Text Objects (" ' """)
# Practice: ci", ca", yi', ya', ci""", ca"""
print("Hello Python World")
message = 'Welcome to vim with Python!'
docstring = """This is a multiline
docstring for practicing
text objects"""

# Python f-strings
formatted_message = f"User {user_name} has email {user_email}"
debug_info = f"""Debug info:
Name: {user_name}
Email: {user_email}
Count: {max_retry_count}"""

# EXERCISE 3: Parentheses Text Objects (( ))
# Practice: ci(, ca(, yi), ya) - Function calls and tuples
def greet_user(name, age, location="Unknown"):
    return f"Hello {name}, age {age}, from {location}"

coordinates = (10.5, 20.3, 30.7)
result = calculate_distance((0, 0), (3, 4))
nested_call = process_data(transform_input(raw_data), validate=True)

# EXERCISE 4: Bracket Text Objects ([ ])
# Practice: ci[, ca[, yi], ya] - Lists and indexing
fruits = ["apple", "banana", "cherry", "date"]
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
mixed_data = [
    {"name": "Alice", "scores": [85, 92, 78]},
    {"name": "Bob", "scores": [79, 83, 91]},
    {"name": "Charlie", "scores": [92, 88, 95]}
]

# Dictionary access with brackets
user_info = data["users"][0]["profile"]["settings"]

# EXERCISE 5: Brace Text Objects ({ })
# Practice: ci{, ca{, yi}, ya} - Dictionaries and sets
person = {
    "name": "Alice Johnson",
    "age": 30,
    "skills": ["python", "javascript", "sql"],
    "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "country": "USA"
    }
}

# Set comprehensions and dictionary comprehensions
unique_numbers = {x for x in range(10) if x % 2 == 0}
squared_dict = {x: x**2 for x in range(5)}

# EXERCISE 6: List Comprehensions - Complex Bracket Usage
# Practice editing the inner expressions
even_squares = [x**2 for x in range(10) if x % 2 == 0]
filtered_users = [user["name"] for user in users if user["active"]]
nested_comprehension = [[y*2 for y in row] for row in matrix]

# Dictionary comprehension with conditions
grade_status = {
    name: "pass" if avg > 80 else "fail" 
    for name, grades in student_grades.items() 
    for avg in [sum(grades)/len(grades)]
}

# EXERCISE 7: Function Definitions - Parameter Lists
# Practice: ci(, ca( on parameter lists
def complex_function(
    required_param,
    optional_param="default",
    *args,
    **kwargs
):
    """Function with complex parameter signature."""
    pass

def data_processor(
    input_data: list,
    transform_func: callable = None,
    filter_func: callable = None,
    sort_key: str = "id"
) -> dict:
    """Type-annotated function parameters."""
    pass

# EXERCISE 8: Class Definitions - Method Practice
class DataProcessor:
    """Practice text objects on class methods."""
    
    def __init__(self, config: dict = None):
        self.config = config or {"default": True}
        self.cache = {}
    
    def process_item(self, item: dict) -> dict:
        """Process a single item."""
        return {
            "id": item["id"],
            "processed": True,
            "timestamp": "2024-01-01"
        }
    
    def batch_process(self, items: list[dict]) -> list[dict]:
        """Process multiple items."""
        return [self.process_item(item) for item in items]

# EXERCISE 9: Lambda Functions and Inline Functions
# Practice text objects on lambda expressions
sort_by_name = lambda x: x["name"]
filter_active = lambda user: user.get("active", False)
transform_data = lambda item: {"id": item["id"], "value": item["data"]}

# Complex lambda in function calls
sorted_users = sorted(users, key=lambda u: (u["age"], u["name"]))
filtered_data = filter(lambda x: x > 0 and x < 100, numbers)

# EXERCISE 10: Exception Handling - Try/Except Blocks
try:
    result = risky_operation({"param": "value"})
    processed = transform_result(result)
except (ValueError, TypeError) as e:
    logger.error(f"Processing failed: {e}")
    result = {"error": str(e), "success": False}
except Exception as e:
    logger.critical(f"Unexpected error: {e}")
    raise
finally:
    cleanup_resources()

# EXERCISE 11: Context Managers - With Statements
with open("data.json", "r") as file:
    data = json.load(file)
    processed = [item for item in data if item["valid"]]

with database.transaction() as tx:
    user = tx.create_user({"name": "Alice", "email": "alice@example.com"})
    profile = tx.create_profile({"user_id": user.id, "bio": "Software engineer"})

# EXERCISE 12: F-string Expressions - Complex Formatting
user_summary = f"""
User Profile:
  Name: {user['name'].title()}
  Email: {user['email'].lower()}
  Age: {user['age']} years old
  Score: {user['score']:.2f}
  Status: {'Active' if user['active'] else 'Inactive'}
"""

debug_output = f"Processing {len(items)} items: {[item['id'] for item in items[:3]]}"

# PRACTICE CHALLENGES:
# 1. Change "john_doe" to "jane_smith" (cursor anywhere in the word)
# 2. Replace function parameters: (name, age, location="Unknown") -> (user, active=True)
# 3. Change the list ["apple", "banana", "cherry"] to ["orange", "grape", "kiwi"]
# 4. Replace the address dictionary completely with new structure
# 5. Modify list comprehension condition: if x % 2 == 0 -> if x % 3 == 0
# 6. Change dictionary key-value pairs in place
# 7. Update f-string expressions while preserving the f-string structure
# 8. Modify lambda function bodies without changing the lambda keyword