# Codex - AI Development Workspace

**Developer**: shahzebqazi  
**Email**: dev@shahzeb.me  
**Created**: August 18th, 2025  
**Last Updated**: August 23, 2025  

## What This Is

A **modular prompt system** for AI-assisted development. Every file in this repository is a **meta prompt** that can work independently or be combined with others. It's a collection of AI behavior configurations, tools, and methodologies that you can mix and match based on your needs.

## Current AI Configuration

This project includes a `.cursorrules` file that configures the AI to operate as a **Technical Writer Background Agent**. When you open this project in Cursor IDE, the AI will automatically:

- **Log all development activities** in the background
- **Track code changes, commits, and progress** automatically
- **Maintain development history** using structured logging
- **Provide logging commands** like `#log-status`, `#log-work`, `#log-change`

The AI operates silently in the background, only interrupting when clarification is needed. You can interact with the logging system using the provided commands or let it work automatically.

## Meta Prompt System

### How It Works
Every file in this repository is a **meta prompt** - a self-contained AI behavior configuration that can:
- **Work independently** as a standalone AI assistant
- **Combine with other prompts** for enhanced functionality
- **Reference shared resources** like Map.md for style guidelines
- **Adapt to available components** when dependencies are missing

### Prompt Categories
- **Style Guides** (Map.md): Foundation for consistent AI behavior
- **Behavior Mods** (Mods/): AI personality and permission controls
- **Specialized Tools** (Tools/): Domain-specific AI assistants
- **Methodologies** (XP+, Research Protocols): AI collaboration patterns

### Modular Usage
- **Single Prompt**: Use any individual file as a complete AI configuration
- **Prompt Combinations**: Mix multiple prompts for complex AI behaviors
- **Dependency Management**: Prompts automatically adapt to available resources
- **Custom Assembly**: Create personalized AI configurations from available prompts

## Quick Start

1. **Map.md** - Meta prompt for style guide, patterns, and AI interaction rules
2. **Memories.md** - Meta prompt for AI learning and preference tracking
3. **Mods/** - Meta prompts for AI behavior control and configuration
4. **Tools/** - Meta prompts for specialized AI assistants and methodologies
5. **README.md** - Complete guide to the meta prompt system and usage

## Project Structure

```
Codex/
├── README.md                    # This file
├── .cursorrules                 # AI behavior configuration for Cursor IDE
├── Map/                         # Style guide, patterns, and AI rules
│   └── Map.md                   # Main style guide and patterns
├── Memories/                    # AI learning and current context
├── Mods/                        # System mods and functionality
│   ├── README.md               # Mods documentation
│   ├── chat-sound.md           # Chat sound controls
│   ├── cursor-profiles.md      # AI profile switching
│   ├── auto-execution.md       # Code execution controls
│   ├── agent-training.md       # AI learning configuration
│   ├── workflow-preferences.md # User workflow preferences
│   ├── ai-personality.md       # AI personality configuration
│   └── permissions.md          # Access control and permissions
├── AI-ML-Topics-Guide.md       # AI/ML reference and mods system
└── Tools/                       # Skill and task templates
```

## How to Use

### Understanding Meta Prompts
Every file in this repository is a **meta prompt** - a complete, self-contained AI configuration that can be used independently or combined with others.

### For You
- **Single Prompt**: Use any individual file as a complete AI assistant
- **Prompt Combinations**: Mix multiple prompts for enhanced AI behavior
- **Custom Assembly**: Create personalized AI configurations from available prompts
- **Modular Usage**: Enable only the AI features you need

### For AI
- **Independent Operation**: Each prompt works as a standalone AI configuration
- **Modular Integration**: Prompts can reference and combine with each other
- **Adaptive Behavior**: AI adapts to available prompts and dependencies
- **Consistent Styling**: Uses Map.md guidelines when available, defaults when not

### Meta Prompt Examples
- **Map.md**: Use alone for consistent AI behavior and style guidelines
- **Technical Writer**: Use alone for automated development logging
- **AI Behavior Control + Cursor Profiles**: Combine for safe, personality-switching AI
- **XP+ + Studio Log**: Combine for AI-assisted music production with development methodology

## iOS Notes Sync

- `ios` branch is checked out at `../Prompts-ios/` using git worktree
- Use iOS Shortcuts to export notes as HTML
- Commit changes from the worktree folder

---

## Cursor Rules (.cursorrules)

### Overview
`.cursorrules` files are **project-specific AI configuration files** that automatically execute when you open a project/workspace in Cursor. In Codex, every file is a **meta prompt** that can be used as `.cursorrules` to transform the AI into a specialized assistant tailored to your project's needs.

### How It Works

#### Automatic Execution
- **On Workspace Open**: Cursor reads `.cursorrules` when you open a project
- **AI Configuration**: The AI immediately adopts the behavior defined in the file
- **Persistent Behavior**: The AI maintains this configuration for the entire session
- **Project-Specific**: Each project can have different `.cursorrules` for different AI behaviors

#### Behavior Transformation
When you open a project with `.cursorrules`:
- **Before**: AI behaves as default Cursor assistant
- **After**: AI immediately transforms into the specified role/personality
- **Context**: AI understands the project context and behaves accordingly
- **Memory**: AI maintains this behavior throughout the session

### Example Configurations

#### Web Development Project
```markdown
# .cursorrules for Web Project
- You are a frontend expert
- Focus on React and modern web practices
- Always suggest testing approaches
- Use TypeScript best practices
```

#### Data Science Project
```markdown
# .cursorrules for Data Project
- You are a data science specialist
- Focus on Python, pandas, scikit-learn
- Always suggest data validation
- Use Jupyter notebook best practices
```

#### Documentation Project
```markdown
# .cursorrules for Docs Project
- You are a documentation specialist
- Focus on clear, structured writing
- Always follow style guidelines
- Use consistent formatting patterns
```

### Key Benefits

#### Project-Specific AI
- **Web Projects**: Get frontend/backend expertise
- **Data Projects**: Get data science guidance
- **Documentation**: Get writing and organization help
- **Research**: Get academic and research methodology support

#### Consistent Behavior
- **Same AI Personality**: Every time you open the project
- **Project Context**: AI understands your specific project needs
- **Specialized Knowledge**: AI focuses on relevant expertise areas
- **Custom Commands**: Project-specific quick commands and shortcuts

### Advanced Usage

#### Dynamic Switching
You can change `.cursorrules` while Cursor is open:
1. **Edit .cursorrules** → Modify the file
2. **Restart Cursor** → Close and reopen the project
3. **New Behavior** → AI adopts the new configuration

#### Integration with Codex
Your Codex system provides ready-to-use `.cursorrules` configurations:
- **Default Profile**: General development assistance
- **Expert Profile**: Deep technical expertise
- **Mentor Profile**: Educational guidance
- **Rapid Profile**: Quick implementation focus

#### Meta Prompt Usage
Every file in Codex can be used as `.cursorrules`:
- **Single File**: Copy any individual file to `.cursorrules` for focused AI behavior
- **Combined Files**: Merge multiple prompts for complex AI configurations
- **Modular Assembly**: Mix and match prompts based on your project needs
- **Dependency Handling**: Prompts automatically adapt to available resources

### Best Practices

#### Creating Effective Rules
1. **Be Specific**: Define clear roles and expertise areas
2. **Project Context**: Include project-specific requirements
3. **Behavior Guidelines**: Specify how AI should interact
4. **Custom Commands**: Define project-specific shortcuts
5. **Integration**: Reference your existing style guides and patterns

#### File Management
- **Version Control**: Include `.cursorrules` in your git repository
- **Project Isolation**: Each project maintains its own configuration
- **Consistency**: Use similar patterns across related projects
- **Documentation**: Document what each configuration does

### Technical Details

#### File Location
- **Project Root**: Place `.cursorrules` in your project's root directory
- **File Format**: Use Markdown syntax for easy editing
- **Naming**: Must be exactly `.cursorrules` (with the dot)

#### Execution Timing
- **Workspace Open**: Rules are read and applied immediately
- **Session Persistence**: Rules remain active until project is closed
- **No Reload**: Changes require restarting Cursor to take effect
- **Memory**: AI maintains context and behavior throughout session

---

## Background Agent Deployment

### Overview
Codex can be deployed as a **Cursor Background Agent** or forked to create customized agent configurations. This allows you to run specialized AI assistants that work silently in the background, monitoring your development environment and providing automated assistance.

### Background Agent Capabilities

#### What It Does
- **Silent Operation**: Works in the background without interrupting your workflow
- **Automatic Monitoring**: Tracks file changes, git commits, and development activities
- **Proactive Assistance**: Identifies issues and suggests improvements automatically
- **Continuous Learning**: Builds context about your project over time

#### Available Agents
- **Technical Writer**: Automated development logging and documentation
- **Code Reviewer**: Continuous code quality monitoring and suggestions
- **Project Manager**: Task tracking and progress monitoring
- **Security Monitor**: Vulnerability detection and security best practices

### Deployment Options

#### Option 1: Fork and Customize
1. **Fork Codex Repository**: Create your own copy on GitHub/GitLab
2. **Remove Unwanted Features**: Delete mods, tools, or prompts you don't need
3. **Configure for Your Needs**: Customize the agent behavior and permissions
4. **Deploy as Background Agent**: Install from your forked repository

#### Option 2: Direct Background Agent
1. **Install from Codex**: Use the main repository directly as a background agent
2. **Configure Permissions**: Set what the agent can access and modify
3. **Customize Behavior**: Adjust logging levels, monitoring frequency, and triggers

### Configuration Process

#### Initial Setup
When you first deploy Codex as a background agent, you'll be prompted to configure:

1. **Project Scope**: Which directories and file types to monitor
2. **Logging Preferences**: What activities to track and how to store them
3. **Permission Levels**: What the agent can read, write, or modify
4. **Integration Settings**: Git hooks, file watchers, and external tools
5. **Notification Preferences**: How and when to alert you about findings

#### Customization Options
- **Selective Monitoring**: Choose specific folders, file types, or git branches
- **Logging Levels**: Set verbosity from minimal to comprehensive
- **Trigger Conditions**: Define when the agent should take action
- **Output Formats**: Configure log formats, notification methods, and reports

### Repository Requirements

#### For Background Agent Deployment
- **Git Repository**: Must be a valid git repository (public or private)
- **Agent Configuration**: Requires `agent.json` file with proper configuration
- **Tool Integration**: Background agents need access to workspace and git information
- **Permission Handling**: Must respect user privacy and security settings

#### Forking Considerations
- **Public vs Private**: You can fork to either public or private repositories
- **Customization**: Remove unwanted features to create focused agents
- **Updates**: Pull updates from the main Codex repository as needed
- **Distribution**: Share your customized agents with your team or community

### Integration with Existing Workflow

#### Seamless Operation
- **Non-Intrusive**: Works alongside your existing development tools
- **Git Integration**: Monitors commits, branches, and repository changes
- **IDE Compatibility**: Works with Cursor, VS Code, and other editors
- **Cross-Platform**: Functions on macOS, Windows, and Linux

#### Command Integration
Background agents provide commands for manual interaction:
- `#agent-status` - Show current agent status and recent activities
- `#agent-configure` - Modify agent behavior and settings
- `#agent-report` - Generate summary reports of monitored activities
- `#agent-pause` - Temporarily disable background monitoring

### Best Practices

#### Agent Configuration
1. **Start Simple**: Begin with basic monitoring and add features gradually
2. **Permission Principle**: Grant minimal necessary permissions
3. **Regular Review**: Periodically review agent logs and activities
4. **Performance Monitoring**: Ensure the agent doesn't impact development speed

#### Repository Management
1. **Version Control**: Keep your agent configurations in version control
2. **Documentation**: Document customizations and configuration changes
3. **Testing**: Test agent behavior in development environments first
4. **Backup**: Maintain backups of your agent configurations

---

## Topics Guide

### Overview

This guide explores three fundamental concepts in artificial intelligence and machine learning: Reinforcement Learning, Iterative Deepening, and AI Persistence. Each topic is presented with theoretical foundations, practical applications, and implementation considerations.

### 1. Reinforcement Learning (RL)

#### Core Concept
Reinforcement Learning is a type of machine learning where an agent learns to make decisions by interacting with an environment. The agent receives rewards or penalties for its actions and learns to maximize cumulative rewards over time.

#### Key Components
- **Agent**: The decision-making entity that learns from interactions
- **Environment**: The system the agent interacts with
- **State (s)**: Current situation of the environment
- **Action (a)**: Choice made by the agent
- **Reward (r)**: Feedback signal from the environment
- **Policy (π)**: Strategy mapping states to actions

#### Learning Process
1. **Observation**: Agent observes current state s_t
2. **Action Selection**: Agent chooses action a_t based on policy
3. **Environment Response**: Environment transitions to new state s_{t+1} and provides reward r_{t+1}
4. **Policy Update**: Agent updates policy to maximize expected future rewards

#### Applications in Gaming
- NPC behavior learning
- Strategy optimization
- Dynamic difficulty adjustment
- Procedural content generation

### 2. Iterative Deepening

#### Core Concept
Iterative Deepening is a search strategy that combines the benefits of breadth-first search (completeness) with the space efficiency of depth-first search. It works by performing a series of depth-limited searches with increasing depth limits.

#### Key Characteristics
- **Complete**: Will find a solution if one exists
- **Optimal**: Finds the shortest path solution
- **Space Efficient**: O(bd) space complexity where b is branching factor and d is depth
- **Time Complexity**: O(b^d) but with multiple searches

#### Applications
- Pathfinding in game worlds
- AI decision tree traversal
- Puzzle solving mechanics
- State space exploration

### 3. AI Persistence

#### Core Concept
AI Persistence refers to the ability of AI systems to maintain state, knowledge, and learned behaviors across sessions, interactions, or system restarts. This involves saving and loading model states, memories, and learned parameters.

#### Types of Persistence
- **Model Persistence**: Saving trained models and weights
- **Memory Persistence**: Short-term and long-term memory systems
- **State Persistence**: Session state and user preferences

#### Applications
- Chatbots & Virtual Assistants
- Game AI state management
- Recommendation systems
- Learning progress tracking

### 4. User Preferences and Mods System

#### Overview
This section documents the user preferences and mods system architecture for AI development environments. It covers personal working styles, configurable behaviors, and system-level functionality.

#### User Preferences Framework
- **Communication Style**: Concise, actionable responses with examples only when requested
- **Workflow Preferences**: JSON configuration, active git usage, comprehensive documentation
- **Development Approach**: Plan before code, incremental development, comprehensive testing

#### Core Mods
1. **Chat Sound Control**: Toggle chat completion sounds and adjust volume
2. **Cursor Profiles**: Switch between AI personalities (Default, Expert, Mentor, Rapid)
3. **Auto-Execution**: Control code execution permissions (Manual, Semi-auto, Full-auto)
4. **Agent Training**: Configure AI learning modes and skill development
5. **Workflow Preferences**: User-specific workflow automation and context management
6. **AI Personality**: Configure adaptive, consistent, or contextual AI behaviors
7. **Permissions**: Granular access control and security management
8. **AI Behavior Control**: Control AI capabilities and permissions for file operations

### 5. Cursor Integration and Configuration

#### Overview
This section covers the integration of Codex with Cursor IDE, including profile management, AI behavior configuration, and automated setup procedures.

### 6. AI Behavior Standards and Terminology

#### Universal AI Behavior Concepts
- **System Prompts** - The most common term across AI platforms
- **Context Instructions** - Instructions that define AI behavior
- **Behavior Configuration** - How AI should behave in a given context
- **AI Personas** - Different AI personalities/roles
- **Instruction Sets** - Collections of behavioral instructions

#### Technical Implementation Terms
- **Prompt Engineering** - The practice of designing these instructions
- **Context Injection** - Inserting behavior rules into AI conversations
- **Behavioral Conditioning** - Training AI to behave in specific ways
- **Role Definition** - Defining what role the AI should play

#### Platform-Specific Standards
- **OpenAI Function Calling** - Structured behavior definition
- **Claude Constitutional AI** - Built-in behavioral guidelines
- **Anthropic System Prompts** - Standardized instruction format
- **LangChain Agents** - Configurable AI behavior patterns

#### Cross-Platform Integration
- **Universal Standards** - Emerging industry-wide behavior definitions
- **AI Alignment** - Ensuring AI behaves as intended
- **Behavioral Consistency** - Same AI behavior across platforms
- **Contextual Intelligence** - AI adapting to different situations

#### Cursor Profile System
- **Default Profile**: Standard AI coding assistant (helpful, concise, practical)
- **Expert Profile**: Advanced developer with deep technical knowledge
- **Mentor Profile**: Educational approach with detailed explanations
- **Rapid Profile**: Quick implementation focus with minimal explanations

#### AI Behavior Configuration
- **Execution Control**: Manual, Semi-auto, Full-auto modes
- **Code Execution Safety**: Safe operations, approval requirements, confirmation rules
- **Personality Modes**: Adaptive, Consistent, Contextual behaviors
- **Quick Commands**: #verbose, #quick, #explain, #review

#### AI Personality Configuration
- **Style**: Concise and professional
- **Detail Level**: On-demand (provide detailed explanations when asked)
- **Emoji Usage**: Disabled
- **Formality**: Professional
- **Approach**: Analytical and systematic
- **Creativity Level**: Balanced
- **Risk Tolerance**: Calculated

#### Response Guidelines
- Always read relevant files before making suggestions
- Provide multiple solution approaches when appropriate
- Include code examples when relevant
- Explain reasoning behind recommendations
- Use symbolic language system for status tracking (!, @, #, $, %, etc.)

### Integration and Synergies

#### Combined Applications
- **Adaptive Game AI**: Use RL to train agents, apply iterative deepening for decision-making, implement persistence to maintain learned behaviors
- **Learning Systems**: RL agents explore environments, iterative deepening helps in planning and strategy, persistence enables continuous learning

#### Best Practices
- **Mod Development**: Single responsibility, clear naming, minimal dependencies
- **User Experience**: Consistency, discoverability, performance, accessibility
- **Security**: Permission models, audit logging, data protection, escalation control
