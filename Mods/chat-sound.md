# Chat Sound Control Mod

**Name**: chat-sound  
**Version**: 1.0.0  
**Description**: Control chat completion sounds in Cursor and other AI chat interfaces  
**Author**: shahzebqazi  
**Type**: system  
**Category**: ui  

## Configuration

### Settings
- **Enabled**: `true`
- **Sound Type**: `completion` (completion, error, notification)
- **Volume**: `0.7`
- **Custom Sound**: `null` (path to custom sound file)

### Behavior
- **Trigger**: `chat_complete` (when to play sound)
- **Cooldown**: `0.5` seconds between sounds

### Dependencies
- None

## Hooks

### Event Handlers
- **Event**: `chat_complete`
  - **Action**: `play_sound`
  - **Condition**: `enabled == true`

- **Event**: `mod_toggle`
  - **Action**: `update_sound_state`

## Commands

### Available Commands
- **Name**: `toggle-sound`
  - **Description**: Turn chat sounds on/off
  - **Shortcut**: `cmd+shift+s`

- **Name**: `sound-volume`
  - **Description**: Adjust sound volume
  - **Shortcut**: `cmd+shift+v`

## UI Integration

### Interface Elements
- **Settings Panel**: `true`
- **Quick Toggle**: `true`
- **Volume Slider**: `true`

## Usage

To enable this mod:
1. Set `enabled: true` in the configuration
2. Adjust volume and sound type as needed
3. Use keyboard shortcuts to control sound settings

To disable this mod:
1. Set `enabled: false` in the configuration
2. Or use the `toggle-sound` command

## Customization

### Volume Control
- Range: 0.0 to 1.0
- Default: 0.7 (70%)
- Can be adjusted via UI or configuration

### Sound Types
- **Completion**: Played when chat response is complete
- **Error**: Played when errors occur
- **Notification**: Played for general notifications

### Custom Sounds
- Set `custom_sound` to a file path for custom audio
- Supported formats: MP3, WAV, AIFF
- Leave as `null` to use system defaults
