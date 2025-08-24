# Mods System Guide

## Overview

The Mods system allows you to dynamically configure and control various aspects of your AI development environment. Mods are configuration files that can be enabled/disabled, modified, and combined to create your ideal workflow. This system provides a flexible, extensible way to customize your AI development experience.

## What Mods Can Do

### Core Functionality
- **Toggle Features**: Turn on/off specific AI behaviors and system features
- **Profile Management**: Switch between different Cursor profiles and AI personalities
- **Execution Control**: Change whether AI can auto-execute code or requires approval
- **Agent Training**: Configure and teach AI agents specific skills or tasks
- **System Integration**: Control chat sounds, notifications, and other UI elements

### Advanced Features
- **AI Personalities**: Switch between different AI behavior patterns
- **Permission Systems**: Granular control over what AI can access/modify
- **Workflow Automation**: Automated task execution and project management
- **Integration Hooks**: Connect with external tools and services

## How Mods Work

### Mod Structure
Each mod is a Markdown file containing:
- **Metadata**: Name, version, description, author, type, category
- **Configuration**: Settings and parameters
- **Dependencies**: Other mods or system requirements
- **Triggers**: When and how the mod activates
- **Commands**: Available commands and keyboard shortcuts
- **UI Integration**: Interface elements and controls

### Mod Loading
1. **Discovery**: System scans `Mods/` folder for available mods
2. **Validation**: Checks dependencies and compatibility
3. **Activation**: Loads enabled mods in dependency order
4. **Runtime**: Mods can be toggled on/off during use

### Mod Types
- **System Mods**: Control core system behavior (sounds, profiles, execution)
- **AI Mods**: Configure AI behavior and capabilities
- **Workflow Mods**: Automate development tasks and processes
- **Integration Mods**: Connect with external tools and services

## Available Mods

### 1. **[chat-sound.md](chat-sound.md)**
Controls chat completion sounds in Cursor and other AI interfaces.
- **Toggle**: `cmd+shift+s`
- **Volume**: `cmd+shift+v`
- **Default**: Enabled with 70% volume

### 2. **[cursor-profiles.md](cursor-profiles.md)**
Switch between different AI personalities and expertise levels.
- **Profiles**: Default, Expert, Mentor, Rapid
- **Quick Switch**: `cmd+shift+1` through `cmd+shift+4`
- **Auto-switch**: Based on file type and project context

### 3. **[auto-execution.md](auto-execution.md)**
Control whether AI can automatically execute code.
- **Levels**: Manual, Semi-auto, Full-auto
- **Toggle**: `cmd+shift+a`
- **Safety**: Built-in protection for dangerous operations

### 4. **[agent-training.md](agent-training.md)**
Configure AI learning and skill development.
- **Training Mode**: Active, Passive, Disabled
- **Skills**: Code Review, Debugging, Architecture
- **Progress**: Track learning across sessions

### 5. **[workflow-preferences.md](workflow-preferences.md)**
User-specific workflow preferences and automation settings.
- **Development Style**: Planning first, incremental development, test-driven
- **Tool Integration**: JSON over scripts, active git, comprehensive docs
- **Automation**: File backup, git workflow, documentation updates

### 6. **[ai-personality.md](ai-personality.md)**
Configure AI personality traits and behavior patterns.
- **Personality Modes**: Adaptive, Consistent, Contextual
- **Traits**: Communication style, problem-solving approach, learning behavior
- **Context Behaviors**: Different personalities for different task types

### 7. **[permissions.md](permissions.md)**
Granular control over what AI can access and modify.
- **Permission Levels**: Restricted, Standard, Permissive, Custom
- **File Access**: Read/write permissions for different file types
- **Operation Control**: Safe vs. dangerous operation permissions

## Using Mods

### Mod Management
Mods are configured by editing their Markdown files directly. Each mod has:
- **Configuration**: Settings and parameters
- **Behavior**: How the mod behaves
- **Commands**: Available commands and shortcuts
- **UI Integration**: Interface elements and controls

### Configuration
Each mod can be configured by editing its Markdown file. Key sections:
- **Configuration**: Basic settings and parameters
- **Behavior**: How the mod behaves and responds
- **Commands**: Available commands and keyboard shortcuts
- **UI Integration**: Interface elements and user controls

### Enabling/Disabling
To enable a mod, set `enabled: true` in its configuration section. To disable, set `enabled: false`.

## Creating Custom Mods

### Mod Categories

#### User Mods
User mods are personalized configurations that adapt the system to your specific workflow and preferences.

**Examples:**
- **Workflow Automation**: Custom git workflows, file organization patterns
- **Personal Preferences**: Code style preferences, documentation standards
- **Project Templates**: Standard project structures, common file patterns
- **Tool Integration**: Custom integrations with your preferred tools

**Use Cases:**
- Automate repetitive development tasks
- Enforce personal coding standards
- Create project templates for common work types
- Integrate with your existing development tools

#### Cursor Mods
Cursor mods are AI behavior and interface customizations that enhance your interaction with the AI assistant.

**Examples:**
- **AI Personalities**: Different response styles, expertise levels
- **Context Awareness**: Project-specific behaviors, file type handling
- **Response Patterns**: Custom response formats, example usage
- **Learning Behaviors**: Adaptive responses, skill development

**Use Cases:**
- Switch between different AI personalities for different tasks
- Customize how AI responds to specific file types
- Create specialized AI behaviors for different project types
- Train AI on your specific coding patterns and preferences

### Template Structure

#### Basic Mod Template
```markdown
# My Custom Mod

**Name**: my-mod  
**Version**: 1.0.0  
**Description**: What this mod does  
**Author**: your_name  
**Type**: system|ai|workflow|integration  
**Category**: ui|safety|profiles|learning  

## Configuration

### Settings
- **Enabled**: `true`
- **Your Setting**: `value`

## Behavior
- **Action**: Description of behavior
- **Trigger**: When behavior activates

## Commands
- **Name**: `command-name`
  - **Description**: What it does
  - **Shortcut**: `cmd+shift+key`

## UI Integration
- **Interface Element**: `true`
- **Control Type**: Description of control
```

#### User Mod Template
```markdown
# My Workflow Mod

**Name**: my-workflow  
**Version**: 1.0.0  
**Description**: Custom workflow automation for my development process  
**Author**: your_name  
**Type**: workflow  
**Category**: automation  

## Configuration

### Settings
- **Enabled**: `true`
- **Auto Save**: `true`
- **Git Integration**: `true`

## Workflow Preferences
- **Development Style**: Your preferred approach
- **Tool Integration**: Your preferred tools
- **Automation Level**: How much automation you want

## Triggers
- **File Changes**: What happens when files change
- **Project Switching**: What happens when switching projects
- **Git Operations**: What happens during git operations

## Commands
- **Name**: `my-workflow-command`
  - **Description**: What your workflow command does
  - **Shortcut**: `cmd+shift+w`
```

#### Cursor Mod Template
```markdown
# My AI Personality Mod

**Name**: my-personality  
**Version**: 1.0.0  
**Description**: Custom AI personality for my development style  
**Author**: your_name  
**Type**: ai  
**Category**: personality  

## Configuration

### Settings
- **Enabled**: `true`
- **Personality Mode**: `adaptive`
- **Learning Rate**: `0.1`

## Personality Traits
- **Communication Style**: How AI should communicate
- **Problem Solving**: How AI should approach problems
- **Learning Behavior**: How AI should learn and adapt

## Context Behaviors
- **Coding Tasks**: How AI behaves during coding
- **Debugging**: How AI behaves during debugging
- **Documentation**: How AI behaves during documentation

## Commands
- **Name**: `set-my-personality`
  - **Description**: Switch to your custom personality
  - **Shortcut**: `cmd+shift+p`
```

### Best Practices

#### General Mod Development
1. **Single Responsibility**: Each mod should do one thing well
2. **Clear Naming**: Use descriptive names and descriptions
3. **Dependencies**: Minimize dependencies between mods
4. **Documentation**: Include usage examples and commands
5. **Testing**: Test mods before enabling in production

#### User Mod Best Practices
1. **Start Simple**: Begin with basic automation and expand
2. **Consistent Patterns**: Use consistent naming and organization
3. **Documentation**: Keep workflow documentation up to date
4. **Testing**: Test automation in safe environments first

#### Cursor Mod Best Practices
1. **Start with Adaptive**: Begin with adaptive mode to learn your preferences
2. **Provide Feedback**: Give regular feedback to help AI learn
3. **Be Consistent**: Maintain consistent preferences to help AI learn
4. **Monitor Changes**: Watch how AI behavior evolves over time

### Mod API and Hooks

#### System Events
Mods can hook into system events:
- **File Changes**: React to file modifications
- **AI Interactions**: Customize AI behavior
- **System Events**: Respond to system state changes
- **User Actions**: Trigger on specific user commands

#### Integration Points
- **Other Mods**: Work with existing mods
- **System Files**: Integrate with Map.md, Memories.md
- **External Tools**: Connect with your development tools
- **User Preferences**: Adapt to your personal settings

## Mod Management

### File Organization
- Keep mods in separate Markdown files
- Use consistent naming conventions
- Group related mods in subdirectories if needed

### Version Control
- Track mod changes in git
- Use semantic versioning
- Document breaking changes

### Backup and Recovery
- Backup mod configurations regularly
- Test mod combinations before deployment
- Keep fallback configurations

## Troubleshooting

### Common Issues
- **Mod Not Loading**: Check Markdown syntax and dependencies
- **Conflicts**: Disable conflicting mods by setting `enabled: false`
- **Performance**: Monitor mod impact on system resources
- **Configuration Errors**: Validate Markdown syntax and required fields

### Debug Mode
Debugging mods involves:
- **Check Markdown Syntax**: Validate Markdown file structure
- **Review Dependencies**: Ensure required mods are enabled
- **Monitor Logs**: Check system logs for mod-related errors
- **Reset Mods**: Disable all mods and re-enable one by one

## Future Enhancements

### Planned Features
- **Mod Marketplace**: Community mods and sharing
- **Advanced Scripting**: Custom mod behaviors
- **Database Backend**: Persistent mod storage
- **Mod Dependencies**: Automatic dependency resolution

### Contributing
- Share useful mods with the community
- Report bugs and suggest improvements
- Contribute to the mod ecosystem

## Getting Help

- **Documentation**: Check individual mod files
- **Examples**: Study existing mods for patterns and best practices
- **Community**: Share mods and get help from other users
- **Support**: Report bugs and request features

## Roadmap

### Phase 1: Core System ✅
- Basic mod loading and management
- Essential system mods (sound, profiles, execution)
- Simple configuration interface

### Phase 2: Advanced Features ✅
- AI personality switching
- Permission systems
- Workflow automation
- Integration with external tools

### Phase 3: Ecosystem (Future)
- Mod marketplace
- Community mods
- Advanced scripting
- Database backend
