# Workflow Preferences Mod

**Name**: workflow-preferences  
**Version**: 1.0.0  
**Description**: User-specific workflow preferences and automation settings  
**Author**: shahzebqazi  
**Type**: workflow  
**Category**: preferences  

## Configuration

### Settings
- **Enabled**: `true`
- **Auto Save**: `true`
- **Context Preservation**: `true`
- **Workflow Automation**: `true`

## Workflow Preferences

### Development Style
- **Planning First**: `true`
- **Incremental Development**: `true`
- **Test Driven**: `true`
- **Documentation Focused**: `true`

### Tool Integration
- **Prefer JSON Over Scripts**: `true`
- **Active Git Utilization**: `true`
- **Comprehensive Documentation**: `true`
- **Clean File Organization**: `true`

### Automation Level
- **File Backup**: `true`
- **Git Workflow**: `true`
- **Documentation Updates**: `true`
- **Context Switching**: `true`

## Context Management

### Context Features
- **Preserve Work State**: `true`
- **Remember Project Context**: `true`
- **Auto Context Recovery**: `true`
- **Session Persistence**: `true`

## Workflow Triggers

### File Change Triggers
- **Action**: `auto_backup`
  - **Condition**: `file_modified`

- **Action**: `update_documentation`
  - **Condition**: `code_changed`

- **Action**: `git_commit`
  - **Condition**: `logical_change_complete`

### Project Switching Triggers
- **Action**: `save_context`
  - **Condition**: `project_change`

- **Action**: `restore_context`
  - **Condition**: `project_return`

- **Action**: `update_memories`
  - **Condition**: `context_switch`

## Commands

### Available Commands
- **Name**: `save-context`
  - **Description**: Save current work context
  - **Shortcut**: `cmd+shift+c`

- **Name**: `restore-context`
  - **Description**: Restore previous work context
  - **Shortcut**: `cmd+shift+r`

- **Name**: `workflow-status`
  - **Description**: Show current workflow status
  - **Shortcut**: `cmd+shift+w`

## Integration

### Mod Integration
- **Auto-Execution**: Works with execution controls
- **Agent Training**: Integrates with learning system
- **Cursor Profiles**: Works with profile switching

### File Integration
- **User-Preferences.md**: Personal preference storage
- **Memories.md**: Context and learning storage
- **Map.md**: Style guide and patterns

## UI Integration

### Interface Elements
- **Workflow Dashboard**: `true`
- **Context Indicator**: `true`
- **Automation Controls**: `true`
- **Preference Editor**: `true`

## Usage

### Enabling Workflow Automation
1. Set `enabled: true` in configuration
2. Configure specific automation preferences
3. Set up context preservation settings
4. Enable desired workflow triggers

### Context Management
1. **Save Context**: Use `save-context` command before switching projects
2. **Restore Context**: Use `restore-context` command when returning to a project
3. **Auto Recovery**: System automatically recovers context when possible

### Workflow Triggers
- **File Changes**: Automatic backup and documentation updates
- **Project Switching**: Context preservation and restoration
- **Code Changes**: Automatic git commits for logical changes

## Customization

### Automation Preferences
You can customize which workflows are automated:
- **File Operations**: Backup, organization, cleanup
- **Git Workflow**: Commits, branches, merges
- **Documentation**: Updates, formatting, validation
- **Context Management**: Saving, restoring, switching

### Trigger Configuration
- **File Change Triggers**: Configure which file changes trigger actions
- **Project Switch Triggers**: Set up context preservation rules
- **Code Change Triggers**: Define what constitutes a logical change

### Context Settings
- **Preservation Level**: How much context to save
- **Recovery Strategy**: How to restore context
- **Session Management**: How long to keep context active

## Best Practices

### Effective Workflow Design
1. **Start Simple**: Begin with basic automation and expand
2. **Consistent Patterns**: Use consistent naming and organization
3. **Documentation**: Keep workflow documentation up to date
4. **Testing**: Test automation in safe environments first

### Context Management
1. **Regular Saves**: Save context before major changes
2. **Meaningful Names**: Use descriptive names for saved contexts
3. **Cleanup**: Periodically clean up old context data
4. **Backup**: Keep backups of important context information

### Integration
1. **Mod Compatibility**: Ensure workflows work with other mods
2. **File Consistency**: Maintain consistent file organization
3. **Git Integration**: Use git for version control and collaboration
4. **Documentation**: Keep all documentation synchronized
