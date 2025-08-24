# AI Behavior Control Mod

**Name**: ai-behavior-control  
**Version**: 1.0.0  
**Description**: Control AI capabilities and permissions for file operations and content generation  
**Author**: shahzebqazi  
**Type**: system  
**Category**: permissions  

## Configuration

### Settings
- **Mode**: `read-only` (read-only, docs-only, edit-only, full-access)
- **File Operations**: `disabled` (disabled, read, write, create, delete)
- **Content Generation**: `disabled` (disabled, docs-only, code-only, full)
- **Execution Control**: `disabled` (disabled, suggest, confirm, auto)

## Access Modes

### Read-Only Mode
- **Name**: Read-Only Access
- **Description**: AI can only read and analyze existing files
- **File Operations**: Read only
- **Content Generation**: Disabled
- **Execution**: Disabled

### Docs-Only Mode
- **Name**: Documentation Focus
- **Description**: AI can read files and generate/edit documentation only
- **File Operations**: Read, write (docs only)
- **Content Generation**: Documentation only
- **Execution**: Suggest only

### Edit-Only Mode
- **Name**: Edit Existing Files
- **Description**: AI can read and edit existing files but not create new ones
- **File Operations**: Read, write (existing files)
- **Content Generation**: Edit existing content
- **Execution**: Suggest and confirm

### Full-Access Mode
- **Name**: Full Access
- **Description**: AI has complete access to all operations
- **File Operations**: Read, write, create, delete
- **Content Generation**: Full access
- **Execution**: Full control with safety checks

## File Operation Permissions

### Read Operations
- **File Reading**: `enabled`
- **Directory Listing**: `enabled`
- **Content Analysis**: `enabled`
- **Search Operations**: `enabled`

### Write Operations
- **File Editing**: `conditional` (based on mode)
- **File Creation**: `conditional` (based on mode)
- **File Deletion**: `conditional` (based on mode)
- **Backup Creation**: `enabled`

### Content Restrictions
- **Documentation Files**: `full-access` (.md, .txt, .yaml, .json)
- **Code Files**: `conditional` (based on mode)
- **Configuration Files**: `conditional` (based on mode)
- **Binary Files**: `read-only`

## Content Generation Rules

### Documentation Generation
- **Markdown Files**: `enabled`
- **YAML Files**: `enabled`
- **JSON Files**: `enabled`
- **Text Files**: `enabled`

### Code Generation
- **Source Code**: `conditional` (based on mode)
- **Scripts**: `conditional` (based on mode)
- **Configuration**: `conditional` (based on mode)
- **Tests**: `conditional` (based on mode)

### Content Validation
- **Syntax Check**: `enabled`
- **Format Validation**: `enabled`
- **Content Review**: `enabled`
- **Safety Checks**: `enabled`

## Commands

### Available Commands
- **Name**: `set-ai-mode`
  - **Description**: Change AI behavior mode
  - **Usage**: `set-ai-mode [read-only|docs-only|edit-only|full-access]`
  - **Shortcut**: `cmd+shift+m`

- **Name**: `ai-permissions`
  - **Description**: Show current AI permissions
  - **Shortcut**: `cmd+shift+p`

- **Name**: `toggle-file-ops`
  - **Description**: Toggle file operation permissions
  - **Shortcut**: `cmd+shift+f`

- **Name**: `toggle-content-gen`
  - **Description**: Toggle content generation permissions
  - **Shortcut**: `cmd+shift+c`

## Mode-Specific Behaviors

### Read-Only Mode
- **Analysis**: Deep file analysis and insights
- **Suggestions**: Provide recommendations without changes
- **Documentation**: Suggest documentation improvements
- **Code Review**: Analyze code without modifications

### Docs-Only Mode
- **Documentation**: Create and edit documentation files
- **Code Analysis**: Analyze code for documentation purposes
- **Structure**: Suggest file organization improvements
- **Templates**: Generate documentation templates

### Edit-Only Mode
- **File Editing**: Modify existing files
- **Content Updates**: Update existing content
- **Refactoring**: Suggest and implement refactoring
- **Bug Fixes**: Fix issues in existing code

### Full-Access Mode
- **Complete Control**: All operations available
- **Safety Checks**: Enhanced safety validations
- **Backup System**: Automatic backup before changes
- **Audit Logging**: Track all operations

## Safety Features

### Permission Validation
- **Mode Check**: Verify current mode before operations
- **File Type Check**: Validate file types for operations
- **Content Check**: Validate content before writing
- **Backup Check**: Ensure backups exist before changes

### Confirmation Requirements
- **File Deletion**: Always require confirmation
- **Mode Changes**: Require confirmation for mode changes
- **Large Changes**: Confirm before major modifications
- **System Files**: Extra confirmation for system files

### Fallback Behavior
- **Permission Denied**: Graceful fallback to read-only
- **Error Handling**: Clear error messages and suggestions
- **Mode Reset**: Reset to safe mode on errors
- **Logging**: Log all permission violations

## Integration

### Mod Integration
- **Cursor Profiles**: Works with profile switching
- **Auto-Execution**: Integrates with execution controls
- **Permissions**: Works with security mods
- **Workflow**: Integrates with workflow automation

### File Integration
- **Map.md**: Respects style guidelines
- **Memories**: Updates permission history
- **User Preferences**: Stores mode preferences
- **Project Context**: Adapts to project type

## UI Integration

### Interface Elements
- **Mode Selector**: `true`
- **Permission Display**: `true`
- **Operation Controls**: `true`
- **Safety Indicators**: `true`

## Usage

### Setting AI Mode
1. Use `set-ai-mode [mode]` command
2. Choose from: read-only, docs-only, edit-only, full-access
3. AI will adjust behavior accordingly

### Permission Management
1. **Read-Only**: Safe analysis and review mode
2. **Docs-Only**: Focus on documentation tasks
3. **Edit-Only**: Modify existing files safely
4. **Full-Access**: Complete control with safety

### Safety Considerations
1. **Start Conservative**: Begin with read-only mode
2. **Gradual Increase**: Increase permissions as needed
3. **Monitor Changes**: Watch AI behavior in each mode
4. **Regular Review**: Review permission settings regularly

## Customization

### Mode Customization
You can customize each mode's behavior:
- **File Operations**: Which file types can be modified
- **Content Generation**: What types of content can be created
- **Execution Control**: How much control AI has over execution
- **Safety Levels**: How strict safety checks should be

### Permission Granularity
- **File-Level**: Set permissions per file or directory
- **Content-Type**: Different permissions for different content types
- **Project-Level**: Project-specific permission sets
- **User-Level**: User-specific permission preferences

### Safety Configuration
- **Confirmation Levels**: Set when confirmations are required
- **Backup Policies**: Configure automatic backup behavior
- **Audit Settings**: Set logging and tracking preferences
- **Fallback Behavior**: Configure what happens on permission errors

## Best Practices

### Effective Permission Management
1. **Principle of Least Privilege**: Start with minimal permissions
2. **Gradual Escalation**: Increase permissions as trust builds
3. **Regular Review**: Periodically review and adjust permissions
4. **Safety First**: Always prioritize safety over convenience

### Mode Selection
1. **Read-Only**: Use for analysis and review tasks
2. **Docs-Only**: Use for documentation-focused work
3. **Edit-Only**: Use for safe file modifications
4. **Full-Access**: Use only when complete control is needed

### Security Considerations
1. **Permission Validation**: Always validate permissions before operations
2. **Content Validation**: Validate content before writing to files
3. **Audit Logging**: Log all operations for review
4. **Fallback Safety**: Ensure safe fallback behavior on errors
