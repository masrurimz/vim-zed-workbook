# BEFORE: Python code that needs refactoring
# Practice vim editing techniques to improve this code

# Challenge 1: Rename variables to be more descriptive
def calc(a, b, c, d=0.1):
    x = a + b
    y = x * c
    z = y * d
    return z

# Challenge 2: Fix inconsistent naming and improve structure
user_data = {
    "n": "John",
    "a": 30,
    "e": "john@email.com",
    "s": ["python", "javascript"],
    "active": True
}

def process_user(data):
    print("Processing user: " + data["n"])
    if data["a"] > 18:
        return {"status": "adult", "email": data["e"], "skills": data["s"]}
    return {"status": "minor", "email": data["e"], "skills": data["s"]}

# Challenge 3: Extract magic numbers and improve readability
def calculate_price(base_price, customer_type):
    if customer_type == "premium":
        return base_price * 0.9  # 10% discount
    elif customer_type == "gold":
        return base_price * 0.8  # 20% discount
    elif customer_type == "platinum":
        return base_price * 0.7  # 30% discount
    elif customer_type == "diamond":
        return base_price * 0.6  # 40% discount
    return base_price

# Challenge 4: Simplify nested conditions
def validate_form(form_data):
    if "name" in form_data:
        if form_data["name"]:
            if "email" in form_data:
                if form_data["email"]:
                    if "@" in form_data["email"]:
                        if "age" in form_data:
                            if form_data["age"] >= 18:
                                return {"valid": True, "message": "Form is valid"}
                            else:
                                return {"valid": False, "message": "Must be 18 or older"}
                        else:
                            return {"valid": False, "message": "Age is required"}
                    else:
                        return {"valid": False, "message": "Invalid email format"}
                else:
                    return {"valid": False, "message": "Email cannot be empty"}
            else:
                return {"valid": False, "message": "Email is required"}
        else:
            return {"valid": False, "message": "Name cannot be empty"}
    else:
        return {"valid": False, "message": "Name is required"}

# Challenge 5: Convert to modern Python syntax and improve
def create_user_profile(name, age, email, skills):
    profile = {}
    profile["name"] = name
    profile["age"] = age
    profile["email"] = email
    profile["skills"] = skills
    profile["created_at"] = "2024-01-01"
    profile["is_active"] = True
    profile["settings"] = {}
    profile["settings"]["theme"] = "light"
    profile["settings"]["notifications"] = True
    return profile

# Challenge 6: Replace loops with list comprehensions
def process_numbers(numbers):
    evens = []
    for num in numbers:
        if num % 2 == 0:
            evens.append(num)
    
    doubled = []
    for num in evens:
        doubled.append(num * 2)
    
    filtered = []
    for num in doubled:
        if num > 10:
            filtered.append(num)
    
    return filtered

# Challenge 7: Improve error handling and logging
def divide_numbers(a, b):
    result = a / b
    return result

def process_file(filename):
    file = open(filename, "r")
    content = file.read()
    file.close()
    data = content.split("\n")
    return data

# Challenge 8: Replace string concatenation with f-strings
def generate_report(user, stats):
    header = "=== User Report ==="
    name_line = "Name: " + user["name"]
    email_line = "Email: " + user["email"]
    score_line = "Score: " + str(stats["score"]) + "/" + str(stats["total"])
    percentage = "Percentage: " + str((stats["score"] / stats["total"]) * 100) + "%"
    status = "Status: " + ("PASS" if stats["score"] > stats["total"] * 0.7 else "FAIL")
    
    report = header + "\n" + name_line + "\n" + email_line + "\n" + score_line + "\n" + percentage + "\n" + status
    return report

# Challenge 9: Improve class design and method organization
class Calculator:
    def add(self, a, b):
        result = a + b
        print("Adding " + str(a) + " and " + str(b))
        print("Result: " + str(result))
        return result
    
    def subtract(self, a, b):
        result = a - b
        print("Subtracting " + str(b) + " from " + str(a))
        print("Result: " + str(result))
        return result
    
    def multiply(self, a, b):
        result = a * b
        print("Multiplying " + str(a) + " and " + str(b))
        print("Result: " + str(result))
        return result

# Challenge 10: Optimize data processing
def analyze_data(data_list):
    total = 0
    count = 0
    max_val = data_list[0]
    min_val = data_list[0]
    
    for item in data_list:
        total = total + item
        count = count + 1
        if item > max_val:
            max_val = item
        if item < min_val:
            min_val = item
    
    average = total / count
    
    positive_count = 0
    negative_count = 0
    zero_count = 0
    
    for item in data_list:
        if item > 0:
            positive_count = positive_count + 1
        elif item < 0:
            negative_count = negative_count + 1
        else:
            zero_count = zero_count + 1
    
    return {
        "total": total,
        "count": count,
        "average": average,
        "max": max_val,
        "min": min_val,
        "positive": positive_count,
        "negative": negative_count,
        "zero": zero_count
    }

# Challenge 11: Improve dictionary manipulation
def merge_user_data(user1, user2):
    result = {}
    
    for key in user1:
        result[key] = user1[key]
    
    for key in user2:
        if key in result:
            if isinstance(result[key], list) and isinstance(user2[key], list):
                combined = []
                for item in result[key]:
                    combined.append(item)
                for item in user2[key]:
                    if item not in combined:
                        combined.append(item)
                result[key] = combined
            else:
                result[key] = user2[key]
        else:
            result[key] = user2[key]
    
    return result