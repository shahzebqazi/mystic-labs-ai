# Auto-Execution Mod

**Name**: auto-execution  
**Version**: 1.0.0  
**Description**: Control whether AI can automatically execute code or requires user approval  
**Author**: shahzebqazi  
**Type**: system  
**Category**: safety  

## Configuration

### Settings
- **Enabled**: `false` (default to requiring approval)
- **Execution Level**: `manual` (manual, semi-auto, full-auto)
- **Require Confirmation**: `true`
- **Timeout**: `30` seconds to wait for confirmation

## Execution Levels

### Manual Level
- **Name**: Manual Only
- **Description**: All code execution requires explicit user approval
- **Auto Run**: `false`
- **Auto Install**: `false`
- **Auto Test**: `false`

### Semi-Auto Level
- **Name**: Semi-Automatic
- **Description**: Safe operations auto-execute, potentially dangerous ones require approval
- **Auto Run**: `true`
- **Auto Install**: `false`
- **Auto Test**: `true`

### Full-Auto Level
- **Name**: Full Automatic
- **Description**: All operations execute automatically (use with caution)
- **Auto Run**: `true`
- **Auto Install**: `true`
- **Auto Test**: `true`

## Safety Rules

### Dangerous Operations
- File deletion
- System commands
- Package installation
- Database modifications
- Network requests

### Safe Operations
- Code generation
- File creation
- Code formatting
- Simple tests
- Documentation updates

### Confirmation Required
- Execution level change
- Dangerous operation
- System restart
- Permission changes

## Commands

### Available Commands
- **Name**: `set-execution-level`
  - **Description**: Change execution level
  - **Usage**: `set-execution-level [manual|semi-auto|full-auto]`
  - **Shortcut**: `cmd+shift+e`

- **Name**: `toggle-auto-execution`
  - **Description**: Quick toggle between manual and current level
  - **Shortcut**: `cmd+shift+a`

- **Name**: `execution-status`
  - **Description**: Show current execution settings
  - **Shortcut**: `cmd+shift+s`

## Notifications

### Notification Types
- **Execution Pending**: `true`
- **Execution Completed**: `true`
- **Execution Failed**: `true`
- **Level Changed**: `true`

## Logging

### Log Categories
- **All Executions**: `true`
- **User Decisions**: `true`
- **Safety Violations**: `true`

## UI Integration

### Interface Elements
- **Execution Controls**: `true`
- **Safety Indicator**: `true`
- **Confirmation Dialog**: `true`
- **Execution History**: `true`

## Usage

### Setting Execution Level
1. Use `set-execution-level [level]` command
2. Choose from: manual, semi-auto, full-auto
3. Confirm the change if required

### Quick Toggle
1. Use `toggle-auto-execution` command
2. Switches between manual and current level
3. Useful for temporary permission changes

### Safety Features
- **Confirmation Dialogs**: Required for dangerous operations
- **Timeout Protection**: Automatic denial if no response
- **Audit Logging**: All actions are logged for review
- **Fallback Safety**: System defaults to safe mode on errors

## Security Considerations

### Risk Levels
- **Manual**: Lowest risk, highest control
- **Semi-Auto**: Balanced risk and convenience
- **Full-Auto**: Highest risk, maximum convenience

### Best Practices
1. Start with manual level for new environments
2. Use semi-auto for trusted development workflows
3. Reserve full-auto for automated testing environments
4. Regularly review execution logs
5. Set appropriate timeouts for confirmations

## Customization

### Operation Categories
You can customize which operations fall into each category:
- **Safe**: Operations that can always auto-execute
- **Dangerous**: Operations that always require approval
- **Restricted**: Operations that require special permissions

### Timeout Settings
- **Short Timeout**: 10-30 seconds for quick decisions
- **Medium Timeout**: 1-5 minutes for complex operations
- **Long Timeout**: 10+ minutes for major system changes

## Integration

### Mod Integration
- **Cursor Profiles**: Works with profile switching
- **Agent Training**: Integrates with learning system
- **Workflow Preferences**: Works with workflow automation
- **Permissions**: Works with security mods

### Cursor Integration (.cursorrules)
This mod can be integrated into `.cursorrules` files to control code execution in Cursor IDE:

```markdown
# Auto-Execution Control for Cursor

## Execution Levels
- **Manual Mode**: All code execution requires user approval
- **Semi-Auto Mode**: Safe operations auto-execute, dangerous ones require approval
- **Full-Auto Mode**: All operations execute automatically (use with caution)

## Safety Rules
- **Safe Operations**: Code generation, file creation, formatting
- **Require Approval**: File deletion, system commands, package installation
- **Always Confirm**: Execution level changes, dangerous operations

## Quick Commands
- `#manual` - Switch to manual execution mode
- `#semi-auto` - Switch to semi-automatic mode
- `#full-auto` - Switch to full automatic mode (use with caution)
- `#execution-status` - Show current execution settings
```
