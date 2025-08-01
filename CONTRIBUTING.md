# 🤝 Contributing to Vim-Zed Workbook

## 🎯 Welcome Contributors!

Thank you for your interest in improving the Vim-Zed Workbook! This guide will help you contribute effectively to help others master vim in Zed Editor.

## 📋 Contribution Guidelines

### What We're Looking For

**High Priority Contributions:**
- **New lessons** covering missing vim concepts
- **Practice exercises** with real-world scenarios  
- **Bug fixes** in existing keymap or documentation
- **Performance improvements** to settings and configurations
- **Troubleshooting guides** for common issues

**Medium Priority:**
- **Language-specific vim patterns** (Python, JavaScript, Go, etc.)
- **Advanced workflows** and power-user techniques
- **AI integration** examples and best practices
- **Video tutorials** or interactive content

**Lower Priority:**
- **Translation** of documentation to other languages
- **Theme customizations** and aesthetic improvements
- **Alternative keymaps** for different preferences

### Before You Start

1. **Check existing issues** - Someone may already be working on it
2. **Read the codebase** - Understand current patterns and style
3. **Test your changes** - Ensure everything works in Zed
4. **Start small** - Begin with minor improvements before major features

## 🏗️ Project Structure

```
vim-zed-workbook/
├── lessons/           # Structured learning modules
│   ├── 01-basics/     # Foundation concepts
│   ├── 02-motions/    # Navigation and movement
│   └── XX-topic/      # Each lesson follows same structure
├── exercises/         # Hands-on practice files
│   ├── javascript/    # Language-specific practice
│   ├── python/        # Language-specific practice
│   └── refactoring/   # Code improvement exercises
├── reference/         # Quick reference materials
│   ├── cheat-sheet.md # Key command reference
│   ├── workflows.md   # Common development patterns
│   └── troubleshooting.md # Problem solving guide
├── setup/             # Installation and configuration
│   ├── installation.md # Setup instructions
│   ├── keymap.json    # Optimized key bindings
│   └── settings.json  # Recommended Zed settings
└── progress/          # Progress tracking tools
    └── checklist.md   # Skill assessment checklist
```

## ✍️ Content Standards

### Documentation Style

**Tone & Voice:**
- **Clear and concise** - Get to the point quickly
- **Beginner-friendly** - Assume minimal vim knowledge
- **Practical focus** - Emphasize real-world usage
- **Encouraging** - Motivate learners through challenges

**Formatting Standards:**
```markdown
# 🎯 Title with Emoji

## Section Headers (H2)

### Subsections (H3)

| Key | Action | Context |
|-----|--------|---------|
| `ctrl+h` | Move left | Global |

**Bold for emphasis**
*Italic for terms*
`Code for keys/commands`

// Code blocks with syntax highlighting
function example() {
  return "hello vim";
}
```

**File References:**
- Always use absolute paths in documentation
- Format: `/Users/username/Projects/vim-zed-workbook/path/file.ext`
- Include line numbers when relevant: `file.js:42`

### Lesson Structure

Each lesson should follow this template:

```markdown
# 🎯 Lesson Title

## 🎓 Learning Objectives
- Specific skill 1
- Specific skill 2  
- Specific skill 3

## 📚 Theory
Brief explanation of concepts

## 🛠️ Practice
Hands-on exercises with step-by-step instructions

## ✅ Checkpoint
Skills assessment/verification

## 🚀 Next Steps
Links to related lessons or advanced topics
```

### Exercise Design

**Good Exercise Characteristics:**
- **Specific learning target** - Focus on one concept
- **Progressive difficulty** - Start simple, build complexity
- **Real-world relevant** - Use actual code scenarios
- **Clear instructions** - Step-by-step guidance
- **Self-verifying** - Learner can check their own progress

**Exercise Template:**
```markdown
## Exercise: [Specific Skill]

**Goal:** Learn to [specific objective]

**Setup:**
1. Open `exercises/[category]/[file]`
2. Position cursor on line X

**Tasks:**
1. [Specific vim command] - Expected result
2. [Next command] - Expected result
3. [Final command] - Expected result

**Verification:**
- [ ] Achieved result 1
- [ ] Achieved result 2
- [ ] Completed in < X keystrokes
```

## 🧪 Testing Your Contributions

### Before Submitting

**Test Checklist:**
- [ ] All keybindings work in fresh Zed installation
- [ ] Documentation renders correctly in Markdown
- [ ] Code examples are syntax-highlighted properly
- [ ] Links point to correct files/sections
- [ ] Instructions are clear to vim beginners
- [ ] No typos or grammar errors

### Testing Process

1. **Fresh Installation Test:**
```bash
# Test with clean Zed config
mv ~/.config/zed ~/.config/zed.backup
# Install from your changes
# Verify everything works
mv ~/.config/zed.backup ~/.config/zed
```

2. **Cross-Platform Testing:**
- Test on macOS (primary target)
- Verify paths work on different systems
- Check keybinding compatibility

3. **Beginner Testing:**
- Have someone unfamiliar with vim try your lesson
- Watch for confusion points
- Refine based on feedback

## 📤 Submission Process

### Pull Request Workflow

1. **Fork the repository**
```bash
gh repo fork masrurimz/vim-zed-workbook
git clone https://github.com/YOUR_USERNAME/vim-zed-workbook.git
cd vim-zed-workbook
```

2. **Create feature branch**
```bash
git checkout -b feature/lesson-advanced-navigation
# or
git checkout -b fix/keymap-terminal-escape
```

3. **Make your changes**
- Follow project structure and conventions
- Test thoroughly
- Document your changes

4. **Commit with clear messages**
```bash
git add .
git commit -m "feat: add advanced navigation lesson with f/t practice"
# or
git commit -m "fix: resolve terminal escape key conflict in keymap"
```

5. **Push and create PR**
```bash
git push origin feature/lesson-advanced-navigation
gh pr create --title "Add advanced navigation lesson" --body "Comprehensive lesson covering f/t/F/T navigation with practice exercises"
```

### PR Requirements

**Required Information:**
- **Clear title** describing the change
- **Detailed description** of what was added/changed
- **Testing performed** - How you verified it works
- **Screenshots** if UI/visual changes involved
- **Breaking changes** if any exist

**PR Template:**
```markdown
## Summary
Brief description of changes

## Type of Change
- [ ] New lesson/exercise
- [ ] Bug fix
- [ ] Documentation improvement
- [ ] Configuration enhancement
- [ ] Performance optimization

## Testing
- [ ] Tested in fresh Zed installation
- [ ] All keybindings work correctly
- [ ] Documentation renders properly
- [ ] Beginner-tested (if applicable)

## Checklist
- [ ] Follows project style guidelines
- [ ] Self-reviewed for errors
- [ ] Added appropriate documentation
- [ ] No breaking changes (or documented)
```

## 🔄 Review Process

### What to Expect

1. **Initial Review** (1-3 days)
   - Maintainer reviews for basic standards
   - Feedback on structure and approach
   - Request for changes if needed

2. **Community Review** (3-7 days)
   - Other contributors may provide feedback
   - Testing by community members
   - Discussion of improvements

3. **Final Approval** (1-2 days)
   - Maintainer final review
   - Merge when approved
   - Celebration! 🎉

### Review Criteria

**Technical Standards:**
- Code works as intended
- Follows project conventions
- No breaking changes to existing functionality
- Proper error handling where applicable

**Content Quality:**
- Clear, beginner-friendly writing
- Accurate technical information
- Good progression of difficulty
- Practical, real-world relevance

**Documentation:**
- Proper formatting and structure
- Complete and accurate information
- Good use of examples
- Links work correctly

## 🎨 Style Guidelines

### Code Formatting

**JSON Files:**
```json
{
  "key": "value",
  "nested": {
    "array": [
      "item1",
      "item2"
    ]
  }
}
```

**Markdown:**
- Use 2 spaces for indentation
- Empty line before/after headers
- Consistent table formatting
- Proper code block language tags

**JavaScript/Python Examples:**
- Follow language conventions
- Include helpful comments
- Use meaningful variable names
- Keep examples concise but complete

### Naming Conventions

**Files:**
- `kebab-case` for filenames
- Descriptive names: `advanced-text-objects.md`
- Number lessons: `01-basics`, `02-motions`

**Directories:**
- Lowercase, descriptive
- Plural for collections: `exercises/`, `lessons/`
- Specific categories: `javascript/`, `python/`

## 🐛 Bug Reports

### How to Report Issues

1. **Search existing issues** first
2. **Use issue templates** when available
3. **Provide detailed information:**
   - Zed version
   - Operating system
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if relevant

**Good Bug Report:**
```markdown
**Bug Description:**
Terminal escape key switches focus instead of staying in terminal

**Steps to Reproduce:**
1. Open terminal with ctrl+`
2. Start vim in terminal
3. Enter insert mode with 'i'
4. Press Escape key

**Expected:** Should exit insert mode in terminal vim
**Actual:** Switches focus away from terminal

**Environment:**
- Zed version: 0.123.0
- OS: macOS 14.0
- Terminal: zsh
```

## 🆘 Getting Help

### Where to Ask Questions

**For Contributors:**
- **GitHub Discussions** - General questions about contributing
- **Issues** - Specific bugs or feature requests
- **Discord** - Real-time help and discussion

**For Learning:**
- **GitHub Issues** - Problems with lessons or exercises
- **Discussions** - General vim/Zed questions
- **Community forums** - Broader vim community

### Communication Guidelines

**Be respectful and helpful:**
- Assume good intentions
- Provide constructive feedback
- Help newcomers feel welcome
- Share knowledge generously

**Clear communication:**
- Use specific examples
- Include relevant context
- Ask clarifying questions
- Follow up on responses

## 🏆 Recognition

### Contributor Credits

All contributors are recognized in:
- **README.md** - Contributor list
- **Individual lessons** - Author attribution
- **Release notes** - Major contribution highlights
- **Community spotlight** - Regular contributor features

### Contribution Levels

**🌱 First-time Contributors:**
- Documentation fixes
- Small exercises additions
- Typo corrections

**🌿 Regular Contributors:**
- New lessons or major exercises
- Feature enhancements
- Troubleshooting guides

**🌳 Core Contributors:**
- Major feature development
- Architecture improvements
- Community leadership

## 📋 Quick Start Checklist

Ready to contribute? Follow this checklist:

- [ ] Read this contributing guide completely
- [ ] Set up local development environment
- [ ] Test current setup works properly
- [ ] Identify specific contribution area
- [ ] Check existing issues/discussions
- [ ] Create feature branch for changes
- [ ] Make changes following style guide
- [ ] Test thoroughly in clean environment
- [ ] Document changes appropriately
- [ ] Submit pull request with clear description
- [ ] Respond to review feedback promptly
- [ ] Celebrate your contribution! 🎉

---

## 🙏 Thank You!

Every contribution, no matter how small, helps make vim more accessible to developers worldwide. Your efforts help others discover the joy and efficiency of vim-style editing.

**Happy contributing!** 🚀

For questions about this guide or the contribution process, please open a GitHub Discussion or contact the maintainers.