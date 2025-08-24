# Project Context

## Current Projects

### Codex Workspace
- **Status**: Active Development
- **Purpose**: AI development workspace with mods system and memory management
- **Current Focus**: Refactoring mods system, setting up iOS notes sync workflow
- **Last Updated**: December 2024

### iOS Notes Sync Workflow
- **Status**: Planned - Git worktree setup needed
- **Requirements**: iOS Shortcuts automation, git worktree management
- **Integration**: Will integrate with mods system for workflow automation
- **Priority**: High - Core functionality for workspace

### DSP Library Development
- **Status**: Planned
- **Approach**: Custom DSP library development, avoid existing C/C++ libraries
- **Focus**: Performance optimization for audio processing code
- **Integration**: Will integrate with password manager project

### Password Manager Project
- **Status**: Planned
- **Architecture**: Haskell backend with SQLite, Lua LÖVE 2D frontend
- **Integration**: Will use custom DSP library for audio features
- **Approach**: Functional programming paradigm

## Project Patterns

### File Organization
- **Clean Structure**: Maintain logical file organization
- **Consistent Naming**: Use established naming conventions
- **Documentation**: Keep comprehensive documentation up to date
- **Version Control**: Active git utilization with meaningful commit messages

### Development Workflow
- **Planning Phase**: Plan before code, outline approach before implementation
- **Incremental Development**: Build features step by step
- **Testing**: Test early and often, comprehensive unit testing required
- **Documentation**: Update documentation with code changes

### Technology Stack
- **Backend**: Haskell for services, custom DSP library
- **Frontend**: Lua LÖVE 2D for 2D applications
- **Database**: SQLite for local storage
- **Configuration**: JSON-based configuration over scripts

## Project Integration Points

### Mods System
- **Current Status**: Core structure complete, content redistribution needed
- **Integration**: Works with memory system and Map.md for complete system
- **Future**: Ready for database backend when scaling up

### Memory System
- **Current Status**: Refactored to work alongside Cursor's memory system
- **Integration**: Complements Cursor's session-based memory
- **Purpose**: Persistent, user-controlled memory storage

### iOS Sync Integration
- **Git Worktree**: `ios` branch checked out at `../Prompts-ios/`
- **Automation**: iOS Shortcuts to export notes as HTML
- **Workflow**: Commit changes from worktree folder
- **Integration**: Will integrate with mods system for automation

## Common Project Structures

### AI Development Projects
- **Documentation**: Comprehensive README and guides
- **Modular Design**: Separate concerns into logical modules
- **Configuration**: YAML/Markdown-based configuration
- **Integration**: Clear integration points between components

### Development Tools
- **JSON Configuration**: Prefer configuration files over scripts
- **Git Integration**: Active version control with meaningful commits
- **Documentation**: Keep all documentation synchronized
- **Testing**: Comprehensive testing from the start

### Research Projects
- **Iterative Approach**: Build understanding incrementally
- **Documentation**: Document findings and patterns
- **Integration**: Connect with existing knowledge and tools
- **Validation**: Test assumptions and validate approaches

## Technology Preferences by Project Type

### Web Development
- **Backend**: Haskell for services and APIs
- **Frontend**: Modern web frameworks with functional approach
- **Database**: SQLite for development, scalable solutions for production
- **Testing**: Comprehensive unit and integration testing

### Audio/DSP Projects
- **Performance**: Prioritize performance in hot paths
- **Memory Management**: Minimize allocations in critical sections
- **Custom Solutions**: Build specialized solutions over generic libraries
- **Testing**: Performance testing and validation

### System Integration
- **Modular Design**: Clear separation of concerns
- **Configuration**: External configuration management
- **Error Handling**: Graceful error handling and recovery
- **Monitoring**: Comprehensive logging and monitoring

## Project Lifecycle Patterns

### Planning Phase
- **Requirements**: Clear understanding of project goals
- **Architecture**: Design system architecture before implementation
- **Technology Selection**: Choose appropriate technologies and tools
- **Timeline**: Realistic project timeline and milestones

### Development Phase
- **Incremental Build**: Build features step by step
- **Testing**: Continuous testing throughout development
- **Documentation**: Keep documentation current with code
- **Integration**: Regular integration and validation

### Deployment Phase
- **Testing**: Comprehensive testing before deployment
- **Documentation**: Complete deployment and user documentation
- **Monitoring**: Set up monitoring and logging
- **Support**: Plan for ongoing support and maintenance

## Cross-Project Patterns

### Code Reuse
- **Common Libraries**: Extract common functionality into shared libraries
- **Pattern Recognition**: Identify and reuse successful patterns
- **Documentation**: Document reusable components and patterns
- **Versioning**: Maintain compatibility across projects

### Knowledge Transfer
- **Pattern Documentation**: Document successful approaches and patterns
- **Learning Integration**: Integrate learnings from previous projects
- **Best Practices**: Maintain and update best practices
- **Team Sharing**: Share knowledge and patterns with team members

### Tool Integration
- **Consistent Tools**: Use consistent tools across projects
- **Configuration**: Standardize configuration approaches
- **Workflow**: Maintain consistent development workflows
- **Integration**: Plan for tool integration from the start

---

*This file contains project-specific context and patterns that complement Cursor's project awareness. This information helps maintain context across sessions and projects.*
