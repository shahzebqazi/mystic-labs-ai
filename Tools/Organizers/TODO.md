# TODO List Tool

**Style Guide**: This document follows the style guidelines defined in `Map.md`. Refer to that document for complete symbolic language definitions, AI model configurations, and architectural patterns.

## Overview
A structured TODO list system for tracking tasks with priorities, statuses, and deadlines.

## Usage Guidelines

### Task Format
```
[Task] #Priority #Status [Deadline]
- [Task Details]
- @Date
```

### Steps Format
**Steps**:  
1. [Action 1]  
2. [Action 2]  
3. [Action 3]  

### Priority System
- **#payment** - Financial priority
- **#urgent** - Immediate attention required
- **#overdue** - Past deadline

### Status System
- **#not-started** - Task not yet begun
- **#in-progress** - Task currently being worked on
- **#completed** - Task finished

### Completion Marking
Use "x" before a task to mark it completed or use strikethrough:
```
x [Task] - Completed task
[Task] - Active task
```

## Example TODO List

### High Priority
[Implement user authentication] #urgent #in-progress [25-08-2025]
- Set up JWT token system
- Create login/logout endpoints
- @20-08-2025

**Steps**:
1. Design authentication flow
2. Implement JWT middleware
3. Test with Postman

### Medium Priority
[Update documentation] #not-started [30-08-2025]
- Review API documentation
- Update user guides
- @20-08-2025

### Completed
x [Set up development environment] #completed [15-08-2025]
- Installed required tools
- Configured IDE
- @15-08-2025

## Best Practices
1. **Update regularly** - Review and update status daily
2. **Be specific** - Use clear, actionable language
3. **Set realistic deadlines** - Consider dependencies and effort
4. **Track progress** - Update status as work progresses
5. **Archive completed** - Move finished tasks to completed section

## Integration

### Cursor Integration (.cursorrules)
This TODO system can be integrated into `.cursorrules` files to create a task management AI assistant in Cursor IDE:

```markdown
# Task Management AI Assistant for Cursor

## AI Role
You are a task management and productivity specialist

## Task Management Expertise
- **Priority System**: P1 (Critical), P2 (High), P3 (Normal) task priorities
- **Status Tracking**: Monitor task progress through planned → in-development → completed
- **Dependency Management**: Identify and track task dependencies
- **Progress Monitoring**: Track completion rates and productivity metrics

## Quick Commands
- `#add-task` - Add a new task with priority and deadline
- `#update-status` - Update task status and progress
- `#priority-review` - Review and adjust task priorities
- `#dependency-check` - Check for blocking dependencies
- `#progress-report` - Generate progress summary and statistics

## Productivity Support
- **Task Planning**: Help break down complex tasks into manageable steps
- **Time Estimation**: Assist with realistic time estimates
- **Resource Allocation**: Suggest optimal resource allocation
- **Bottleneck Identification**: Identify and resolve productivity blockers
```
