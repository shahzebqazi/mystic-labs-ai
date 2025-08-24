# Cursor Profiles Mod

**Name**: cursor-profiles  
**Version**: 1.0.0  
**Description**: Switch between different Cursor AI profiles and configurations  
**Author**: shahzebqazi  
**Type**: ai  
**Category**: profiles  

## Configuration

### Settings
- **Current Profile**: `default`
- **Auto Switch**: `false` (auto-switch based on project/file type)
- **Remember Context**: `true`

## Available Profiles

### Default Profile
- **Name**: Default Assistant
- **Description**: Standard AI coding assistant
- **Personality**: helpful, concise, practical
- **Expertise**: general, coding, debugging

### Expert Profile
- **Name**: Expert Mode
- **Description**: Advanced developer with deep technical knowledge
- **Personality**: technical, detailed, thorough
- **Expertise**: advanced, architecture, optimization

### Mentor Profile
- **Name**: Code Mentor
- **Description**: Educational approach with explanations
- **Personality**: patient, explanatory, educational
- **Expertise**: teaching, best_practices, code_review

### Rapid Profile
- **Name**: Rapid Prototype
- **Description**: Quick implementation focus
- **Personality**: fast, pragmatic, minimal
- **Expertise**: prototyping, quick_fixes, minimal_code

## Profile Switching

### Triggers
- **Command**: `switch-profile`
- **File Extension**: `.rs` → `expert`
- **Project Type**: `ai_ml` → `expert`
- **Keyword**: `explain` → `mentor`

### Keyboard Shortcuts
- **Default Profile**: `cmd+shift+1`
- **Expert Profile**: `cmd+shift+2`
- **Mentor Profile**: `cmd+shift+3`
- **Rapid Profile**: `cmd+shift+4`

## Context Preservation

### Preserved Elements
- **Settings**: `true`
- **Memory**: `true`
- **Preferences**: `true`

## Commands

### Available Commands
- **Name**: `switch-profile`
  - **Description**: Switch to a different AI profile
  - **Usage**: `switch-profile [profile_name]`

- **Name**: `list-profiles`
  - **Description**: Show available profiles
  - **Shortcut**: `cmd+shift+p`

- **Name**: `profile-info`
  - **Description**: Show current profile information
  - **Shortcut**: `cmd+shift+i`

## UI Integration

### Interface Elements
- **Profile Selector**: `true`
- **Quick Switch**: `true`
- **Profile Preview**: `true`
- **Context Indicator**: `true`

## Usage

### Manual Profile Switching
1. Use `switch-profile [profile_name]` command
2. Use keyboard shortcuts for quick switching
3. Use UI profile selector

### Automatic Profile Switching
1. Enable `auto_switch` in settings
2. System will automatically switch based on:
   - File type (e.g., Rust files → Expert mode)
   - Project context (e.g., AI/ML projects → Expert mode)
   - Keywords in queries (e.g., "explain" → Mentor mode)

### Context Preservation
- When switching profiles, the system preserves:
  - Current work context
  - User preferences
  - Learning progress
  - Project-specific settings

## Customization

### Adding New Profiles
1. Create a new profile section in the configuration
2. Define personality traits and expertise areas
3. Set appropriate keyboard shortcuts
4. Configure auto-switch triggers

### Profile Behavior
Each profile can have different:
- Response styles
- Detail levels
- Example usage patterns
- Technical depth
- Teaching approaches

## Integration

### Mod Integration
- **Cursor Profiles**: Works with profile switching
- **Auto-Execution**: Integrates with execution controls
- **Agent Training**: Integrates with learning system
- **Workflow Preferences**: Works with workflow automation

### Cursor Integration (.cursorrules)
This mod provides ready-to-use `.cursorrules` configurations for Cursor IDE:

```markdown
# Cursor Profile Configuration

## Available Profiles
- **Default**: Standard AI coding assistant (helpful, concise, practical)
- **Expert**: Advanced developer with deep technical knowledge
- **Mentor**: Educational approach with detailed explanations
- **Rapid**: Quick implementation focus with minimal explanations

## Profile Switching
- Use `#default` to switch to default profile
- Use `#expert` to switch to expert profile
- Use `#mentor` to switch to mentor profile
- Use `#rapid` to switch to rapid profile

## Profile Characteristics
- **Default**: Balanced assistance for general development tasks
- **Expert**: Deep architectural insights and optimization focus
- **Mentor**: Educational explanations and best practice guidance
- **Rapid**: Fast prototyping and quick fixes
```
