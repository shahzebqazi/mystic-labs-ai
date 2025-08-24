# Map - AI Tool & Prompt Style Guide

## Overview
This document defines the foundational structure, symbolic language, and protocols for creating consistent AI tools and prompts across all projects. It serves as the single source of truth for style, formatting, and architectural decisions.

## Core Principles

### 1. Single Source of Truth
- All style decisions are centralized in this document
- Changes here automatically propagate to all tools and prompts
- No hardcoded style elements in individual prompt files

### 2. Abstraction First
- Prompts reference this document for style guidance
- Tools inherit configuration from centralized definitions
- Style changes require only one document update

### 3. Consistency Through Protocol
- Standardized structure for all AI-generated content
- Unified symbolic language across all tools
- Consistent formatting and organization patterns

## Symbolic Language System

### Status Indicators
```
!   - Active/In Progress
@   - Blocked/Issue
#   - Pending/Review
$   - Completed
%   - Paused/On Hold
&   - Cancelled/Deprecated
!!! - Urgent/Immediate Action Required
@@  - High Priority Blocked
*   - In Review/QA
**  - Deployed/Released
->  - In Transition/Moving
```

### Priority Levels
```
!   - Critical/High Priority
@   - Medium Priority
#   - Low Priority
$   - Pinned/Important
!!! - Emergency/Immediate
@@  - High Priority
*   - Normal Priority
**  - Low Priority
->  - Future/Planned
```

### Role Indicators
```
!   - Developer
@   - Designer
#   - Tester
$   - PM
!!! - Lead
@@  - Architect
*   - QA
**  - DevOps
->  - Intern
```

### Progress Tracking
```
0%  - Not Started
25% - Planning/Research
50% - In Development
75% - Testing/Review
90% - Final Polish
100% - Complete
```

## AI Model Configuration

### Primary Models
- **GPT-4**: Complex reasoning, code generation, architectural decisions
- **Claude-3**: Document analysis, writing, creative tasks
- **Code-LLaMA**: Code-specific tasks, debugging, optimization

### Model Selection Criteria
- **Complexity**: Use GPT-4 for multi-step reasoning
- **Domain**: Use Code-LLaMA for code-heavy tasks
- **Creativity**: Use Claude-3 for writing and design
- **Speed**: Use fastest model for simple, repetitive tasks

### Context Management
- **Token Limits**: Respect model-specific limits
- **Memory**: Use external memory systems for long conversations
- **Persistence**: Store important context in project files

## Prompt Structure Template

### Header Section
```markdown
# [Tool/Prompt Name]

## Purpose
[Clear, single-sentence description]

## Context
[What this tool/prompt does and when to use it]

## Dependencies
[List of required files, tools, or configurations]
```

### Core Requirements
```markdown
## Core Requirements
- **Requirement 1**: [Description]
- **Requirement 2**: [Description]
- **Requirement 3**: [Description]
```

### Technical Specifications
```markdown
## Technical Specifications
- **Language**: [Programming language or framework]
- **Dependencies**: [External libraries or tools]
- **Performance**: [Speed, memory, or other constraints]
- **Platform**: [Supported operating systems or environments]
```

### Output Format
```markdown
## Output Format
[Describe the expected output structure and format]

## Integration
[How this tool/prompt integrates with other components]
```

## Tool Architecture Protocol

### 1. Input Validation
- Always validate input against expected format
- Provide clear error messages for invalid input
- Handle edge cases gracefully

### 2. State Management
- Use external files for persistent state
- Implement atomic operations for data integrity
- Provide rollback mechanisms for failed operations

### 3. Error Handling
- Log all errors with context
- Provide user-friendly error messages
- Implement retry mechanisms where appropriate

### 4. Performance Optimization
- Set clear performance targets
- Monitor resource usage
- Implement caching for expensive operations

## Memory System Protocol

### Location Strategy
- **Project-specific**: Store in project root directory
- **User-specific**: Store in user's home directory
- **Global**: Store in system-wide configuration directory

### Memory Types
- **Context**: Current conversation state
- **Preferences**: User-specific settings
- **History**: Past interactions and decisions
- **Knowledge**: Learned patterns and solutions

### Memory Access Patterns
- **Read**: Retrieve relevant information
- **Write**: Store new information
- **Update**: Modify existing information
- **Delete**: Remove obsolete information

## Integration Protocol

### Tool Communication
- Use standardized data formats (JSON, YAML, Markdown)
- Implement event-driven architecture
- Provide clear APIs for inter-tool communication

### Data Flow
- **Input**: Validate and sanitize incoming data
- **Process**: Apply business logic and transformations
- **Output**: Format and deliver results
- **Feedback**: Collect and process user feedback

### Version Control
- Track changes to tool configurations
- Maintain backward compatibility
- Provide migration paths for breaking changes

## Style Guidelines

### Markdown Formatting
- Use consistent heading levels (## for sections, ### for subsections)
- Implement bullet points for lists
- Use code blocks for technical content
- Maintain consistent spacing and indentation

### Language and Tone
- Use clear, concise language
- Avoid jargon unless necessary
- Maintain professional but approachable tone
- Use active voice when possible

### Visual Organization
- Group related information logically
- Use consistent visual hierarchy
- Implement clear separation between sections
- Use tables for structured data

## Code Style Guidelines

### General Principles
- **Readability First**: Code should be easy to understand
- **Consistency**: Follow established patterns within the project
- **Maintainability**: Write code that's easy to modify and extend
- **Documentation**: Include necessary comments and documentation

### Code Organization
- **Functional Paradigm**: Prefer functional programming for App.rs
- **Single Responsibility**: Each function should do one thing well
- **Clear Interfaces**: Design APIs that are intuitive to use
- **Error Handling**: Implement proper error handling and validation

### Commenting Standards
- **Descriptive Comments**: Write comments that explain "why" not "what"
- **Avoid Redundancy**: Don't comment obvious code
- **Update Comments**: Keep comments in sync with code changes
- **Documentation**: Use docstrings for public APIs

### Formatting Standards
- **Minimal Spacing**: Use empty lines sparingly and purposefully
- **Consistent Indentation**: Follow language-specific conventions
- **Line Length**: Respect reasonable line length limits
- **Naming Conventions**: Use clear, descriptive names

## Development Practices

### Testing Requirements
- **Unit Tests**: Every function in App.rs must have unit tests
- **Test Coverage**: Aim for comprehensive test coverage
- **Test Quality**: Write meaningful tests that catch real issues
- **Test Maintenance**: Keep tests updated with code changes

### Security and Quality Standards
- **Data Handling**: Never hardcode sensitive information
- **Input Validation**: Always validate and sanitize user inputs
- **Error Messages**: Don't expose internal system details in error messages
- **Code Readability**: Write code that's easy for other developers to understand
- **Documentation**: Include usage examples for complex functions
- **API Design**: Design APIs that are intuitive and well-documented

### Technology Stack Preferences
- **DSP Libraries**: Build custom DSP library, avoid existing C/C++ libraries
- **Password Manager**: Haskell backend with SQLite, Lua LÖVE 2D frontend
- **Version Control**: Improve git utilization, active version control required

### Performance Standards
- **Code Efficiency**: Prioritize performance in DSP and audio processing code
- **Memory Management**: Minimize memory allocations in hot paths
- **Algorithm Selection**: Choose algorithms based on time/space complexity requirements

### Security Practices
- **Data Handling**: Never hardcode sensitive information
- **Input Validation**: Always validate and sanitize user inputs
- **Error Messages**: Don't expose internal system details in error messages

## AI Interaction Patterns

### Response Guidelines
- **Concise Responses**: Provide actionable, to-the-point answers
- **Examples on Demand**: Include examples only when specifically requested
- **Multiple Approaches**: Offer 2-3 alternative solutions when appropriate
- **Trade-off Explanation**: Highlight pros/cons of different approaches
- **No Emojis**: Avoid emoji usage in responses and database storage
- **Professional Tone**: Maintain professional but approachable communication style

### Problem-Solving Approach
- **Understand First**: Ask clarifying questions when needed
- **Plan Before Code**: Outline approach before implementation
- **Incremental Development**: Build features step by step
- **Follow-up Questions**: Ask if more details are needed
- **Workflow Preferences**: Prefer JSON configuration over scripts, active git utilization
- **Vim Commands**: Only provide full Vim command lists when specifically requested

### Code Review Standards
- **Issue Identification**: Point out bugs, inefficiencies, and style problems
- **Actionable Suggestions**: Offer specific, implementable improvements
- **Reasoning**: Explain why suggestions are beneficial
- **Style Respect**: Work within established coding patterns

### Context Awareness
- **File Reading**: Always read relevant files before making suggestions
- **Proactive Suggestions**: Suggest improvements to existing code and documentation
- **Error Prevention**: Point out potential issues before they become problems
- **Pattern Recognition**: Learn and apply user's preferred approaches

### Response Adaptation
- **Query Complexity**: Adapt response style based on query complexity
- **Context Switching**: Adjust behavior when switching between projects or technologies
- **Priority Awareness**: Modify response patterns for urgent vs. routine tasks
- **Learning Integration**: Continuously update understanding of user preferences

## File Management Patterns

### Working with Existing Files
- **Read First**: Always read the file before making changes
- **Preserve Structure**: Maintain existing organization and patterns
- **Version Control**: Make atomic commits for logical changes
- **Backup Strategy**: Create backups before major refactoring

### Creating New Files
- **Follow Patterns**: Use existing file structures and naming conventions
- **Include Headers**: Add appropriate file headers and documentation
- **Consider Dependencies**: Think about how new files integrate with existing code
- **Update Indexes**: Modify any index or navigation files

### Project Organization
- **Clean Structure**: Maintain logical file organization
- **Documentation**: Keep README.md and other docs up to date
- **Git Workflow**: Use meaningful commit messages, branch for features
- **Consistent Naming**: Follow established naming conventions

## Communication Triggers

### Special Commands
- **"My Vim Progress"**: Show complete Vim command reference
- **"Explain This"**: Provide detailed explanation of code or concept
- **"Show Alternatives"**: Present multiple approaches to a problem
- **"Review This"**: Perform comprehensive code review
- **"Update Memories"**: Update AI learning with new information

### Command Usage Patterns
- **Vim Commands**: Only provide full command lists when specifically requested
- **Simple Queries**: For simple coding queries, deliver summarized response and ask if more details desired
- **Context Awareness**: Adapt response style based on query complexity and context

### Context Switches
- **Project Focus**: When switching between different projects or tasks
- **Technology Change**: When moving between different programming languages or frameworks
- **Priority Shift**: When urgent tasks require different response patterns
- **Workflow Change**: When switching between different development modes

## Update Protocol

### When to Update Map
- Adding new tools or prompts
- Changing symbolic language
- Updating AI model configurations
- Modifying architectural patterns

### Update Process
1. **Identify Change**: Determine what needs to be updated
2. **Plan Impact**: Assess how changes affect existing tools
3. **Update Map**: Modify this document first
4. **Update Tools**: Apply changes to affected tools
5. **Test Integration**: Verify all tools work together
6. **Document Changes**: Record what was changed and why

### Version Tracking
- Maintain version history of Map changes
- Document breaking changes clearly
- Provide migration guides for major updates
- Tag releases for easy reference

## Quality Assurance

### Consistency Checks
- Verify all tools follow current style guidelines
- Ensure symbolic language is used consistently
- Validate integration points work correctly
- Test performance meets defined targets

### Review Process
- Review new tools against style guide
- Validate integration with existing tools
- Test performance and reliability
- Gather user feedback and iterate

### Maintenance Schedule
- **Weekly**: Review tool performance and user feedback
- **Monthly**: Update style guidelines based on usage patterns
- **Quarterly**: Major review and optimization
- **As Needed**: Address critical issues immediately

## Future Considerations

### Scalability
- Design for growth and expansion
- Plan for additional tools and prompts
- Consider performance implications of scale
- Maintain flexibility for new requirements

### Evolution
- Allow for gradual improvement over time
- Plan for breaking changes when necessary
- Maintain backward compatibility when possible
- Document evolution path clearly

### Integration with External Systems
- Plan for integration with other tools
- Consider API standards and protocols
- Design for extensibility
- Maintain security and privacy standards

---

*This document serves as the foundation for all AI tools and prompts. Updates here automatically propagate to all dependent systems.*


