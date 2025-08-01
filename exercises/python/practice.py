# Vim Practice File - Basic Python
# Use this file to practice vim movements and editing

# Exercise 1: Navigate to each function name and practice movements
def calculate_total(price, tax_rate):
    """Calculate total price including tax."""
    result = price + (price * tax_rate)
    return result

def format_currency(amount):
    """Format amount as currency string."""
    return f"${amount:.2f}"

# Exercise 2: Practice text objects on these data structures
user_data = {
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30,
    "is_active": True,
    "preferences": {
        "theme": "dark",
        "notifications": True
    }
}

shopping_items = ["apple", "banana", "orange", "grape"]
coordinates = [(0, 0), (1, 2), (3, 4), (5, 6)]

# Exercise 3: Fix these intentional "bugs" using vim commands
def process_order(order_data):
    # TODO: Change 'order_data' to 'order' using ciw
    # TODO: Change the string using ci"
    print("Processing order data...")
    
    # TODO: Change this list using ci[
    statuses = ["pending", "processing", "completed"]
    
    # TODO: Modify this dict using ci{
    return {
        "id": order_data.get("id"),
        "status": "pending",
        "timestamp": "2024-01-01"
    }

# Exercise 4: Refactor this function (rename variables, change logic)
def old_calculate_discount(original_price, discount_percent, customer_type):
    final_price = original_price
    
    if customer_type == "premium":
        final_price = original_price - (original_price * discount_percent)
    elif customer_type == "gold":
        final_price = original_price - (original_price * (discount_percent * 0.8))
    else:
        final_price = original_price - (original_price * (discount_percent * 0.5))
    
    return final_price

# Exercise 5: Complete this class by adding missing parts
class User:
    def __init__(self, name, email):
        # TODO: Add parameter validation
        # TODO: Add instance variables
        pass
    
    def update_profile(self):
        # TODO: Add profile update logic
        pass
    
    def __str__(self):
        # TODO: Add string representation
        pass

# Exercise 6: Practice with list comprehensions and generators
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# TODO: Change this using text objects
even_numbers = [n for n in numbers if n % 2 == 0]
squared_numbers = [n**2 for n in numbers]

# Exercise 7: Dictionary and set operations
student_grades = {
    "alice": [85, 92, 78, 96],
    "bob": [79, 83, 91, 87],
    "charlie": [92, 88, 95, 89]
}

# TODO: Practice text object editing on these expressions
average_grades = {name: sum(grades)/len(grades) for name, grades in student_grades.items()}

# Exercise 8: Function with complex parameters
def create_api_request(endpoint, method="GET", headers=None, data=None, timeout=30):
    """Create an API request configuration."""
    if headers is None:
        headers = {"Content-Type": "application/json"}
    
    config = {
        "url": f"https://api.example.com/{endpoint}",
        "method": method,
        "headers": headers,
        "timeout": timeout
    }
    
    if data:
        config["data"] = data
    
    return config

# Exercise 9: Error handling practice
def safe_divide(numerator, denominator):
    try:
        result = numerator / denominator
        return {"success": True, "result": result}
    except ZeroDivisionError:
        return {"success": False, "error": "Cannot divide by zero"}
    except TypeError:
        return {"success": False, "error": "Invalid input types"}

# Exercise 10: Python-specific text object practice
# Practice with docstrings (use text objects on triple quotes)
def fibonacci_generator(n):
    """
    Generate fibonacci sequence up to n terms.
    
    Args:
        n (int): Number of terms to generate
        
    Yields:
        int: Next fibonacci number
        
    Example:
        >>> list(fibonacci_generator(5))
        [0, 1, 1, 2, 3]
    """
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b