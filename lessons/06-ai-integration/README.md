# Lesson 06: AI Integration

## 🎯 Learning Objectives

By the end of this lesson, you will:
- [ ] Use AI assistant for code explanations (space a c)
- [ ] Apply inline assistance for targeted improvements (ctrl+enter)
- [ ] Integrate AI suggestions with vim editing patterns
- [ ] Use AI for refactoring and code generation
- [ ] Develop efficient human-AI collaboration workflows

## 📚 Concepts

### AI Assistant Panel

Zed's AI assistant provides conversational help for complex coding tasks.

**Core Commands:**
- `space a c` - Toggle AI chat panel
- `cmd-enter` - Send message to AI
- `cmd-n` - New conversation thread
- `cmd->` - Quote selection for AI context

**Use Cases:**
- **Code Explanation** - Understand complex algorithms
- **Architecture Planning** - Design system components  
- **Debugging Help** - Analyze error patterns
- **Code Review** - Get suggestions for improvements
- **Learning** - Understand new technologies

### Inline Assistance

Inline assistance provides contextual AI help directly in your editor.

**Command:** `ctrl+enter` (with text selected)

**Inline Patterns:**
- **Code Generation** - Create functions from comments
- **Refactoring** - Improve selected code blocks
- **Documentation** - Generate JSDoc/docstrings
- **Testing** - Create test cases for functions
- **Optimization** - Suggest performance improvements

**Benefits:**
- Preserves vim workflow
- Maintains editor context
- Quick iterations on code
- No context switching

### AI-Assisted Refactoring

Combine AI suggestions with vim editing for powerful refactoring workflows.

**Pattern:**
1. Select code with vim text objects (`vi{`, `vap`)
2. Use `ctrl+enter` for AI suggestions
3. Apply suggestions with vim editing commands
4. Iterate and refine with additional AI input

**Common Refactoring Tasks:**
- Extract functions from complex methods
- Rename variables for clarity
- Optimize algorithms
- Add error handling
- Improve type safety

### Context-Aware Development

AI assistance works best with proper context and clear instructions.

**Context Strategies:**
- **Select Relevant Code** - Highlight specific functions/classes
- **Include Comments** - Add context about intent and constraints
- **Quote Error Messages** - Use `cmd->` to include full error context
- **Reference Files** - Mention related files and their purposes

**Effective AI Prompts:**
- Be specific about desired outcome
- Mention programming language and framework
- Include constraints (performance, compatibility)
- Ask for explanations with code changes

## 🎮 Practice Exercises

### Exercise 1: Code Explanation Workflow

**Setup**: Find a complex function in any codebase

**Tasks**:
1. Select the function with `vi{` or `vaf`
2. Press `space a c` to open AI chat
3. Use `cmd->` to quote the selection
4. Ask: "Explain this function and its complexity"
5. Follow up with specific questions about edge cases

**Success Criteria**: ✅ You understand how to get detailed code explanations

### Exercise 2: Inline Code Generation

**Setup**: Create a new file with just function comments

**Tasks**:
```javascript
// Function to validate email format and check if domain exists
// Should return object with isValid boolean and error message
// Handle edge cases like empty string and malformed emails
```

1. Select the comment block with `vip`
2. Press `ctrl+enter`
3. Request: "Generate the function implementation"
4. Use vim editing to refine the generated code
5. Test and iterate with additional AI requests

**Success Criteria**: ✅ You can generate working code from specifications

### Exercise 3: Refactoring with AI

**File**: Create a function with multiple responsibilities

**Tasks**:
```javascript
function processUserData(userData) {
    // Validation
    if (!userData.email || !userData.name) return null;
    if (userData.email.indexOf('@') === -1) return null;
    
    // Data transformation  
    const cleanData = {
        email: userData.email.toLowerCase().trim(),
        name: userData.name.trim(),
        createdAt: new Date().toISOString()
    };
    
    // Database operations
    const user = database.createUser(cleanData);
    sendWelcomeEmail(user.email);
    logUserCreation(user.id);
    
    return user;
}
```

1. Select function with `vif`
2. Use `ctrl+enter` → "Refactor this function to follow single responsibility principle"
3. Apply suggestions using vim editing commands
4. Create separate functions with AI help
5. **Challenge**: Ask AI to generate tests for refactored functions

**Success Criteria**: ✅ You can collaboratively refactor complex code

### Exercise 4: Debugging with AI Context

**Setup**: Create a bug in your code that's not immediately obvious

**Tasks**:
1. Include error message and stack trace
2. Select problematic code section
3. Use `space a c` and `cmd->` to provide context
4. Ask: "Help debug this error, here's the code and error message"
5. Apply suggested fixes using vim motions
6. **Advanced**: Ask for prevention strategies

**Success Criteria**: ✅ You can efficiently debug with AI assistance

### Exercise 5: Documentation Generation

**File**: Create functions without documentation

**Tasks**:
1. Position cursor above function
2. Select function signature with `vi(`
3. Use `ctrl+enter` → "Generate JSDoc documentation"
4. Edit generated docs with vim motions
5. **Challenge**: Generate README sections for your module

**Success Criteria**: ✅ You can quickly create comprehensive documentation

## 🎯 Challenges

### Challenge 1: Full Feature Development
- Start with user story or requirement
- Use AI chat to plan architecture
- Generate skeleton code with inline assistance
- Implement using AI suggestions + vim editing
- Create tests and documentation with AI help

### Challenge 2: Legacy Code Modernization
- Take old-style JavaScript/Python code
- Use AI to suggest modern patterns
- Apply refactoring suggestions incrementally
- Ensure backward compatibility
- Document changes and improvements

### Challenge 3: Error-Driven Development
- Intentionally write code with multiple issues
- Use AI to identify problems without running code
- Fix issues using suggested solutions
- Learn patterns for avoiding similar problems
- Create comprehensive error handling

### Challenge 4: Performance Optimization
- Create intentionally slow algorithm
- Ask AI for optimization suggestions
- Compare different approaches
- Implement optimizations with vim editing
- Measure and validate improvements

## 🔗 Key Bindings Used

| Key | Action | Context |
|-----|--------|---------|
| `space a c` | Toggle AI chat | Global |
| `ctrl+enter` | Inline assistance | With selection |
| `cmd-enter` | Send AI message | AI chat |
| `cmd-n` | New AI thread | AI chat |
| `cmd->` | Quote selection | AI chat |
| `cmd-<` | Insert AI response | AI chat |
| `ctrl-hjkl` | Navigate panes | Global |
| `vi{` | Select inside braces | Normal mode |
| `vif` | Select inside function | Normal mode |
| `vap` | Select around paragraph | Normal mode |

## 💡 Pro Tips

### AI Collaboration Patterns

**The Iterative Approach:**
1. Start with broad AI conversation for planning
2. Use inline assistance for specific implementations
3. Return to chat for complex problem solving
4. Iterate between AI suggestions and manual refinement

**Context Building:**
1. Select relevant code before asking questions
2. Include error messages and stack traces
3. Mention language, framework, and constraints
4. Reference related files and their purposes

**Efficient Prompting:**
- "Refactor this to..." (specific improvement)
- "Explain why this..." (understanding)
- "Generate tests for..." (comprehensive coverage)
- "Optimize this for..." (performance/readability)

### Vim + AI Integration

**Selection Strategies:**
- `vi{` → select function body for refactoring
- `vap` → select comment block for code generation
- `V` + motions → select multiple lines for analysis
- `gv` → reselect previous selection for follow-up

**Editing Flow:**
1. AI suggestion appears
2. Use `yy` to copy useful lines
3. `p` to paste and modify
4. `ciw` to change specific terms
5. `.` to repeat changes across similar patterns

**Navigation Pattern:**
- `space a c` → plan and discuss
- `ctrl+enter` → quick inline help
- `space g s` → review changes
- `] d` → check for new errors
- Back to AI for refinement

### Professional AI Workflows

**Code Review Preparation:**
1. Select changed functions
2. Ask AI: "Review this for potential issues"
3. Address suggestions before submitting
4. Use AI to generate change descriptions

**Learning New Technologies:**
1. Paste unfamiliar code into AI chat
2. Ask for explanation and best practices
3. Request examples of common patterns
4. Practice with AI-generated exercises

**Architecture Planning:**
1. Describe requirements in AI chat
2. Ask for architecture suggestions
3. Discuss tradeoffs and alternatives
4. Generate implementation plan
5. Use inline assistance for specific components

## ✅ Lesson Complete

You've mastered AI integration when:
- [ ] AI chat and inline assistance feel natural
- [ ] You can effectively provide context for better suggestions
- [ ] AI suggestions integrate smoothly with vim editing
- [ ] You use AI for planning, implementation, and review
- [ ] Human-AI collaboration improves your development speed

**Advanced Skills Unlocked:**
- Rapid prototyping with AI assistance
- Efficient debugging and problem-solving
- Collaborative refactoring workflows
- AI-assisted learning and exploration

**Development Superpowers:**
- **Faster Learning** - AI explains complex concepts instantly
- **Better Code Quality** - AI suggests improvements and best practices
- **Reduced Context Switching** - Help available directly in editor
- **Enhanced Creativity** - AI suggests approaches you might not consider

**Next Steps:**
- Combine all lessons for complete vim-zed mastery
- Explore advanced AI prompting techniques
- Develop personal AI collaboration workflows
- Share knowledge with team members

## 🎓 Course Complete!

Congratulations! You've mastered:

1. **Vim Basics** - Efficient text editing and navigation
2. **Text Objects & Motions** - Semantic code manipulation  
3. **Space Leader Commands** - Powerful tool integration
4. **Code Navigation** - LSP-powered codebase exploration
5. **Git Workflow** - Professional version control
6. **AI Integration** - Human-AI collaborative development

You now have a complete toolkit for professional development in Zed with vim bindings. Practice these skills daily and watch your productivity soar!