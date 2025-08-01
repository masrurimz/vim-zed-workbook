# 🔄 Wednesday: Workflow Day

Master the integration of vim with modern development workflows. Today focuses on space leader commands, IDE features, and creating seamless development experiences.

## 🎯 Today's Focus
- **Primary**: Space leader command mastery
- **Secondary**: IDE integration and development workflows
- **Goal**: Seamless transition between vim editing and modern dev tools

## ⏱️ Time Budget: 25-30 minutes

### Warm-up: Command Muscle Memory (4 minutes)
Practice essential space leader commands without files open:

**Drill Sequence** (repeat 10 times):
1. `space space` → (imagine file finder opens)
2. `space /` → (imagine search opens)  
3. `space g s` → (imagine git panel opens)
4. `space c a` → (imagine code actions)
5. `space a c` → (imagine AI chat)

**Goal**: Commands feel automatic, no hesitation

---

## 🔧 Challenge 1: File Navigation Mastery (6 minutes)

**Setup**: Create a project structure:
```
project/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── UserProfile.jsx
│   ├── utils/
│   │   ├── api.js
│   │   ├── helpers.js
│   │   └── validation.js
│   └── main.js
├── tests/
│   ├── Header.test.js
│   └── api.test.js
└── README.md
```

**Navigation Challenges**:

**Round 1: Speed Navigation** (2 minutes)
1. Open `Header.jsx` using `space space`
2. Navigate to `api.js` using `space space`
3. Jump to `UserProfile.jsx` using `space space`
4. Open `README.md` using `space space`
5. Switch to `Header.test.js` using `space space`
6. Return to `main.js` using `space space`

**Round 2: Context Switching** (2 minutes)
1. Open `UserProfile.jsx`
2. Use `space e` to show in project panel
3. Navigate to related `api.js` file
4. Use `space /` to search for "getUserData"
5. Jump to definition using `g d`
6. Return using navigation history

**Round 3: Workflow Integration** (2 minutes)
1. Open any component file
2. Trigger `space c a` for code actions
3. Use `space c r` to rename a symbol
4. Open `space g s` for git panel
5. Stage some changes using git panel
6. Use `space a c` to get AI help with code

**Scoring**:
- All rounds smooth and fast: A+
- Minor hesitations but completed: A
- Some commands forgotten: B
- Struggled with workflow: C

---

## 🔧 Challenge 2: Code Action Integration (7 minutes)

**Setup**: JavaScript file with deliberate issues:
```javascript
// api.js
const API_BASE_URL = 'http://localhost:3000';

function fetchUserData(userId) {
    const url = API_BASE_URL + '/users/' + userId;
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.log(error));
}

function updateUserProfile(userId, data) {
    const url = API_BASE_URL + '/users/' + userId;
    return fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

// Unused import (add this line)
import { unusedFunction } from './helpers.js';

// Undefined variable usage
console.log(undefinedVariable);
```

**Code Action Tasks**:

**Task 1: Auto-fixes** (2 minutes)
1. Position cursor on `fetchUserData`
2. Use `space c a` to trigger code actions
3. Select "Add missing return type" or similar
4. Use `space c a` on string concatenation
5. Select "Convert to template literal"
6. Repeat for `updateUserProfile` function

**Task 2: Refactoring** (3 minutes)
1. Select the URL building logic in both functions
2. Use `space c a` to extract to shared function
3. Use `space c r` to rename the extracted function
4. Position on unused import
5. Use `space c a` to remove unused import
6. Fix the undefined variable with `space c a`

**Task 3: Advanced Actions** (2 minutes)
1. Select both fetch functions
2. Use `space c a` to extract to class or module
3. Add error handling using code actions
4. Use `space c a` to add JSDoc comments
5. Format code using `space c f`

**Focus Skills**:
- Quick problem identification
- Efficient code action triggering
- Refactoring with vim + LSP
- Error resolution workflows

**Scoring**:
- Smooth integration with code actions: A+
- Most actions completed efficiently: A
- Some actions completed: B
- Struggled with LSP integration: C

---

## 🔧 Challenge 3: Git Workflow Integration (6 minutes)

**Setup**: Modified project with git changes
```bash
# Create some changes first
echo "// New feature" >> src/main.js
echo "console.log('debug');" >> src/components/Header.jsx
echo "test changes" >> tests/Header.test.js
```

**Git Workflow Tasks**:

**Task 1: Review Changes** (2 minutes)
1. Use `space g s` to open git panel
2. Navigate through changed files
3. Use `space g h d` to toggle diff hunks
4. Use `] h` to jump to next hunk
5. Use `[ h` to jump to previous hunk
6. Review each change in context

**Task 2: Selective Staging** (2 minutes)
1. In git panel, stage only specific files
2. Use hunk navigation to stage partial changes
3. View staged vs unstaged changes
4. Unstage some changes for refinement
5. Make additional edits based on diff review

**Task 3: Commit Workflow** (2 minutes)
1. Stage final changes using git panel
2. Write commit message in vim
3. Use vim navigation in commit message editor
4. Review commit before finalizing
5. Use `space g s` to confirm commit success

**Advanced Git Tasks**:
- Branch switching with `space g b`
- Merge conflict resolution with vim
- Interactive rebase using vim editor
- Git log exploration with vim navigation

**Focus Skills**:
- Git panel navigation
- Hunk-level change management
- Commit message crafting
- Conflict resolution

**Scoring**:
- Seamless git workflow: A+
- Efficient staging and committing: A
- Basic git operations completed: B
- Struggled with git integration: C

---

## 🔧 Challenge 4: AI-Assisted Development (4 minutes)

**Setup**: Partially implemented function needing completion:
```javascript
// user-service.js
class UserService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    
    // TODO: Implement user validation
    async validateUser(userData) {
        // Need validation logic here
    }
    
    // TODO: Implement user creation with proper error handling
    async createUser(userData) {
        // Need implementation
    }
}
```

**AI Integration Tasks**:

**Task 1: Context-Aware Assistance** (2 minutes)
1. Position cursor in `validateUser` method
2. Use `space a c` to open AI chat
3. Ask: "Help implement user validation for email, password strength, and required fields"
4. Use `ctrl+enter` for inline suggestions
5. Apply AI suggestions using vim editing
6. Refine with follow-up AI questions

**Task 2: Code Generation with Vim** (2 minutes)
1. Position cursor in `createUser` method
2. Use AI to generate error handling patterns
3. Apply generated code with vim text objects
4. Use `space c a` to refactor AI-generated code
5. Combine AI suggestions with vim refactoring
6. Add proper TypeScript types with AI help

**Advanced AI + Vim Patterns**:
- AI for code explanation, vim for implementation
- AI for architecture suggestions, vim for execution
- AI for debugging help, vim for fixes
- AI for testing strategies, vim for test writing

**Focus Skills**:
- Efficient AI prompt crafting
- Integrating AI suggestions with vim editing
- Context switching between AI and code
- Refining AI output with vim techniques

---

## 🔧 Bonus Challenge: Custom Workflow Creation (3 minutes)

**Goal**: Create a personal development workflow using space leader commands

**Custom Workflow Design**:
1. **Project Setup Workflow**: 
   - `space space` → open main file
   - `space e` → show in explorer
   - `space /` → search for TODOs
   - `space g s` → check git status

2. **Debugging Workflow**:
   - `space c a` → add console.log
   - `space /` → search for error patterns
   - `] d` → navigate diagnostics
   - `space a c` → ask AI for debugging help

3. **Refactoring Workflow**:
   - `space /` → find all usage
   - `space c r` → rename symbol
   - `space c a` → extract function
   - `space g s` → review changes

**Task**: Practice your custom workflow on real code and time each step.

---

## 📊 Workflow Integration Assessment

### Today's Performance
```markdown
**Wednesday Workflow Day - Week [X]**

**Challenge 1: File Navigation**
- Round 1 Speed: [Fast/Medium/Slow]
- Round 2 Context: [Smooth/Some issues/Struggled]
- Round 3 Integration: [Seamless/Good/Choppy]
- Grade: _____

**Challenge 2: Code Actions**
- Task 1 Auto-fixes: [Completed/Partial/Failed]
- Task 2 Refactoring: [Completed/Partial/Failed]
- Task 3 Advanced: [Completed/Partial/Failed]
- Grade: _____

**Challenge 3: Git Workflow**
- Change Review: [Efficient/Good/Slow]
- Selective Staging: [Smooth/Some issues/Difficult]
- Commit Process: [Natural/Adequate/Awkward]
- Grade: _____

**Challenge 4: AI Integration**
- AI + Vim Synergy: [Excellent/Good/Poor]
- Workflow Efficiency: [Fast/Medium/Slow]
- Grade: _____

**Overall Workflow Grade**: _____
```

### Workflow Evolution Tracking
| Week | File Nav Speed | Code Actions | Git Integration | AI Synergy | Custom Workflow |
|------|----------------|--------------|-----------------|------------|----------------|
| 1    |                |              |                 |            |                |
| 2    |                |              |                 |            |                |
| 3    |                |              |                 |            |                |
| 4    |                |              |                 |            |                |

## 💡 Workflow Optimization Tips

### Space Leader Mastery
1. **Memorize Core Commands**: `space space`, `space /`, `space g s`
2. **Build Muscle Memory**: Practice command sequences
3. **Create Mental Maps**: Associate commands with workflows
4. **Use Consistently**: Don't fall back to mouse/menus
5. **Customize for Your Needs**: Add personal space leader shortcuts

### IDE Integration Excellence
1. **Trust the LSP**: Let language server guide you
2. **Use Code Actions**: Don't manually fix what tools can handle
3. **Navigate Semantically**: Use `g d`, `g r` instead of search
4. **Leverage Diagnostics**: Follow the error navigation
5. **Integrate Git**: Make version control part of editing flow

### AI + Vim Synergy
1. **Clear Context**: Provide AI with relevant code context
2. **Efficient Application**: Use vim to quickly apply AI suggestions
3. **Iterative Refinement**: AI suggests, vim refines
4. **Learn from AI**: Understanding suggestions improves your skills
5. **Maintain Control**: AI assists, you decide

### Workflow Bottlenecks
Watch out for these common inefficiencies:
- **Mouse Fallback**: Reaching for mouse instead of commands
- **Menu Navigation**: Using menus instead of space leader
- **Manual Tasks**: Doing what tools could automate
- **Context Loss**: Losing track of what you were doing
- **Tool Switching**: Inefficient transitions between tools

## 🎯 Advanced Workflow Patterns

### The Code Review Workflow
1. `space g s` → Review changes
2. `] h` / `[ h` → Navigate hunks
3. `space c a` → Fix issues
4. `space /` → Search related code
5. `space a c` → AI assistance for complex issues

### The Debug Workflow
1. `] d` → Jump to next diagnostic
2. `space c a` → Quick fix or get suggestions
3. `space /` → Search for related patterns
4. `space a c` → AI debugging assistance
5. `space g s` → Commit fixes

### The Feature Development Workflow
1. `space space` → Navigate to files
2. `space c r` → Rename/refactor existing code
3. `space c a` → Generate boilerplate
4. `space a c` → AI assistance for implementation
5. `space g s` → Review and commit changes

---

**Workflow mastery unlocked!** 🔄 Ready for [Thursday's Refactoring Day](./thursday-refactoring.md) to apply these workflows to complex code transformations! 🔧