import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Menu, Settings, User, Paperclip, Mic, Target, ChevronDown, Circle, PanelLeft, PanelRight, PanelBottom, X, Terminal, FileCode, Wrench, Cpu, Zap, Shield, Database, Code2, Layers, Activity, Bug, GitCommit, FolderOpen, File, Files, Puzzle, GitBranch, Search, ChevronRight as ChevronRightIcon, Folder, MessageCircle, Network, Plus, Globe, Image as ImageIcon } from 'lucide-react';

type Screen = 'main' | 'settings' | 'mods';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('main');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const screens: Array<{ id: Screen; label: string }> = [
    { id: 'main', label: 'Main Chat View' },
    { id: 'settings', label: 'Settings & Config' },
    { id: 'mods', label: 'Mods & Personas' },
  ];

  const currentIndex = screens.findIndex(s => s.id === currentScreen);

  const goNext = () => {
    if (currentIndex < screens.length - 1) {
      setCurrentScreen(screens[currentIndex + 1].id);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentScreen(screens[currentIndex - 1].id);
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col">
      {/* Presentation Header */}
      <div className="border-b border-[#1A1A1A] bg-[#0A0A0A] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-semibold mb-1">dotAi Desktop Chat Application</h1>
              <p className="text-sm text-[#666666]">UX/UI Design Mockups & Wireframes</p>
            </div>
            <div className="flex items-center gap-3">
              {screens.map((screen, idx) => (
                <button
                  key={screen.id}
                  onClick={() => setCurrentScreen(screen.id)}
                  className={`px-4 py-2 rounded-md text-sm transition-all ${
                    currentScreen === screen.id
                      ? 'bg-[#1A1A1A] text-white border border-[#333333]'
                      : 'text-[#666666] hover:text-white border border-transparent'
                  }`}
                >
                  {idx + 1}. {screen.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Progress Indicator */}
          <div className="flex gap-2">
            {screens.map((screen, idx) => (
              <div
                key={screen.id}
                className="flex-1 h-0.5 rounded-full overflow-hidden bg-[#1A1A1A]"
              >
                <motion.div
                  className="h-full bg-[#0EA5E9]"
                  initial={{ width: '0%' }}
                  animate={{ width: currentScreen === screen.id ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-7xl">
          <AnimatePresence mode="wait">
            {currentScreen === 'main' && (
              <motion.div
                key="main"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <MainChatView sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
              </motion.div>
            )}
            
            {currentScreen === 'settings' && (
              <motion.div
                key="settings"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <SettingsView />
              </motion.div>
            )}
            
            {currentScreen === 'mods' && (
              <motion.div
                key="mods"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <ModsView />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="border-t border-[#1A1A1A] bg-[#0A0A0A] p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={goPrev}
            disabled={currentIndex === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#1A1A1A] hover:bg-[#222222] disabled:opacity-30 disabled:cursor-not-allowed transition-all border border-[#333333]"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="text-sm">Previous</span>
          </button>
          
          <div className="text-sm text-[#666666]">
            {currentIndex + 1} of {screens.length}
          </div>
          
          <button
            onClick={goNext}
            disabled={currentIndex === screens.length - 1}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#1A1A1A] hover:bg-[#222222] disabled:opacity-30 disabled:cursor-not-allowed transition-all border border-[#333333]"
          >
            <span className="text-sm">Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

type MainCenterTab = 'chat' | 'graph';
type NewPaneType = 'chat' | 'xonsh' | 'file' | 'browser' | 'image' | null;

// Obsidian-style graph mock data (nodes + edges)
const GRAPH_NODES = [
  { id: '1', label: 'README', x: 120, y: 80 },
  { id: '2', label: 'MVP_PRD', x: 320, y: 60 },
  { id: '3', label: 'CHATBOT', x: 200, y: 180 },
  { id: '4', label: 'SETTINGS', x: 80, y: 220 },
  { id: '5', label: 'RULES', x: 280, y: 200 },
  { id: '6', label: 'Orchestration', x: 180, y: 280 },
];
const GRAPH_EDGES = [
  { from: '1', to: '2' }, { from: '1', to: '3' }, { from: '2', to: '3' },
  { from: '3', to: '4' }, { from: '3', to: '5' }, { from: '4', to: '6' }, { from: '5', to: '6' },
];

function MainChatView({ sidebarOpen, setSidebarOpen }: { sidebarOpen: boolean; setSidebarOpen: (open: boolean) => void }) {
  const [activeSidebarTab, setActiveSidebarTab] = useState<'files' | 'search' | 'git' | 'extensions'>('files');
  const [mainCenterTab, setMainCenterTab] = useState<MainCenterTab>('chat');
  const [newPane, setNewPane] = useState<NewPaneType>(null);
  const [expandedFolders, setExpandedFolders] = useState<string[]>(['Orchestration']);

  const toggleFolder = (folder: string) => {
    setExpandedFolders(prev =>
      prev.includes(folder) ? prev.filter(f => f !== folder) : [...prev, folder]
    );
  };

  return (
    <div className="bg-[#000000] rounded-xl overflow-hidden shadow-2xl border border-[#1A1A1A]">
      {/* Window Chrome */}
      <div className="bg-[#0A0A0A] border-b border-[#1A1A1A] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
        </div>
        <div className="text-xs text-[#666666] font-mono">dotAi — Local Desktop Chat</div>
        <div className="w-12" />
      </div>

      {/* Main Content Area */}
      <div className="flex h-[600px]">
        {/* Left Icon Bar */}
        <motion.div
          initial={false}
          animate={{ width: sidebarOpen ? 48 : 0 }}
          className="bg-[#0A0A0A] border-r border-[#1A1A1A] overflow-hidden flex flex-col items-center py-4"
        >
          <div className="w-12 space-y-2">
            <button
              onClick={() => setActiveSidebarTab('files')}
              className={`w-full aspect-square flex items-center justify-center rounded transition-colors ${
                activeSidebarTab === 'files' ? 'bg-[#E5E5E5]/10 text-[#E5E5E5]' : 'text-[#666666] hover:text-[#E5E5E5]'
              }`}
              title="Explorer"
            >
              <Files className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveSidebarTab('search')}
              className={`w-full aspect-square flex items-center justify-center rounded transition-colors ${
                activeSidebarTab === 'search' ? 'bg-[#E5E5E5]/10 text-[#E5E5E5]' : 'text-[#666666] hover:text-[#E5E5E5]'
              }`}
              title="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveSidebarTab('git')}
              className={`w-full aspect-square flex items-center justify-center rounded transition-colors ${
                activeSidebarTab === 'git' ? 'bg-[#E5E5E5]/10 text-[#E5E5E5]' : 'text-[#666666] hover:text-[#E5E5E5]'
              }`}
              title="Source Control"
            >
              <GitBranch className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveSidebarTab('extensions')}
              className={`w-full aspect-square flex items-center justify-center rounded transition-colors ${
                activeSidebarTab === 'extensions' ? 'bg-[#E5E5E5]/10 text-[#E5E5E5]' : 'text-[#666666] hover:text-[#E5E5E5]'
              }`}
              title="Extensions"
            >
              <Puzzle className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Left Sidebar Content */}
        <motion.div
          initial={false}
          animate={{ width: sidebarOpen ? 280 : 0 }}
          className="bg-[#000000] border-r border-[#1A1A1A] overflow-hidden"
        >
          <div className="w-[280px] h-full flex flex-col">
            {/* Sidebar Header */}
            <div className="px-4 py-3 border-b border-[#1A1A1A]">
              <div className="text-xs uppercase tracking-wide text-[#666666] font-mono">
                {activeSidebarTab === 'files' && 'Explorer'}
                {activeSidebarTab === 'search' && 'Search'}
                {activeSidebarTab === 'git' && 'Source Control'}
                {activeSidebarTab === 'extensions' && 'Extensions'}
              </div>
            </div>

            {/* Sidebar Content */}
            <div className="flex-1 overflow-y-auto p-2">
              {activeSidebarTab === 'files' && (
                <div className="space-y-0.5">
                  <div>
                    <button
                      onClick={() => toggleFolder('Orchestration')}
                      className="w-full flex items-center gap-1 px-2 py-1 hover:bg-[#1A1A1A] rounded text-sm transition-colors"
                    >
                      <ChevronRightIcon className={`w-3 h-3 transition-transform ${expandedFolders.includes('Orchestration') ? 'rotate-90' : ''}`} />
                      <Folder className="w-4 h-4 text-[#E5E5E5]" />
                      <span className="text-[#E5E5E5]">Orchestration</span>
                    </button>
                    {expandedFolders.includes('Orchestration') && (
                      <div className="ml-4 space-y-0.5">
                        <div className="flex items-center gap-1 px-2 py-1 hover:bg-[#1A1A1A] rounded text-sm cursor-pointer transition-colors">
                          <Folder className="w-4 h-4 text-[#E5E5E5]" />
                          <span className="text-[#E5E5E5]">Agents</span>
                        </div>
                        <div className="flex items-center gap-1 px-2 py-1 hover:bg-[#1A1A1A] rounded text-sm cursor-pointer transition-colors">
                          <Folder className="w-4 h-4 text-[#E5E5E5]" />
                          <span className="text-[#E5E5E5]">Memories</span>
                        </div>
                        <div className="flex items-center gap-1 px-2 py-1 hover:bg-[#1A1A1A] rounded text-sm cursor-pointer bg-[#E5E5E5]/5 transition-colors">
                          <FileCode className="w-4 h-4 text-[#F59E0B]" />
                          <span className="text-[#E5E5E5]">MVP_PRD.md</span>
                        </div>
                        <div className="flex items-center gap-1 px-2 py-1 hover:bg-[#1A1A1A] rounded text-sm cursor-pointer transition-colors">
                          <FileCode className="w-4 h-4 text-[#F59E0B]" />
                          <span className="text-[#E5E5E5]">CHATBOT.md</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeSidebarTab === 'git' && (
                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-[#666666] mb-2 font-mono">CHANGES</div>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2 px-2 py-1 hover:bg-[#1A1A1A] rounded cursor-pointer transition-colors">
                        <span className="text-[#10B981]">M</span>
                        <span className="text-[#E5E5E5]">MVP_PRD.md</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1 hover:bg-[#1A1A1A] rounded cursor-pointer transition-colors">
                        <span className="text-[#F59E0B]">A</span>
                        <span className="text-[#E5E5E5]">FEATURES.md</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSidebarTab === 'extensions' && (
                <div className="space-y-2">
                  <div className="px-2 py-2 bg-[#E5E5E5]/5 rounded border border-[#E5E5E5]/10">
                    <div className="flex items-center gap-2 mb-1">
                      <Zap className="w-4 h-4 text-[#E5E5E5]" />
                      <span className="text-sm font-medium text-[#E5E5E5]">SWE Developer</span>
                    </div>
                    <div className="text-xs text-[#666666]">Full development access</div>
                  </div>
                  <div className="px-2 py-2 hover:bg-[#1A1A1A] rounded cursor-pointer transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <Terminal className="w-4 h-4 text-[#666666]" />
                      <span className="text-sm text-[#E5E5E5]">Standard Chat</span>
                    </div>
                    <div className="text-xs text-[#666666]">Basic assistance</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Center Area - Icon tabs + Content */}
        <div className="flex-1 flex flex-col min-w-0 bg-[#000000] relative">
          {/* Icon tab bar + New pane buttons */}
          <div className="flex items-center border-b border-[#1A1A1A] px-2 py-1.5 gap-1">
            <button
              onClick={() => setMainCenterTab('chat')}
              className={`p-2 rounded transition-colors ${mainCenterTab === 'chat' ? 'bg-[#E5E5E5]/15 text-[#E5E5E5]' : 'text-[#666666] hover:text-[#E5E5E5]'}`}
              title="Chat"
            >
              <MessageCircle className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMainCenterTab('graph')}
              className={`p-2 rounded transition-colors ${mainCenterTab === 'graph' ? 'bg-[#E5E5E5]/15 text-[#E5E5E5]' : 'text-[#666666] hover:text-[#E5E5E5]'}`}
              title="Graph View"
            >
              <Network className="w-4 h-4" />
            </button>
            <div className="w-px h-5 bg-[#333333] mx-1" />
            <button
              onClick={() => setNewPane(newPane === 'chat' ? null : 'chat')}
              className={`flex items-center gap-1.5 px-2 py-1.5 rounded text-xs font-mono transition-colors ${newPane === 'chat' ? 'bg-[#0EA5E9]/20 text-[#0EA5E9]' : 'text-[#666666] hover:bg-[#1A1A1A] hover:text-[#E5E5E5]'}`}
              title="New chat"
            >
              <Plus className="w-3.5 h-3.5" /> New chat
            </button>
            <button
              onClick={() => setNewPane(newPane === 'xonsh' ? null : 'xonsh')}
              className={`flex items-center gap-1.5 px-2 py-1.5 rounded text-xs font-mono transition-colors ${newPane === 'xonsh' ? 'bg-[#0EA5E9]/20 text-[#0EA5E9]' : 'text-[#666666] hover:bg-[#1A1A1A] hover:text-[#E5E5E5]'}`}
              title="New xonsh"
            >
              <Plus className="w-3.5 h-3.5" /> New xonsh
            </button>
            <button
              onClick={() => setNewPane(newPane === 'file' ? null : 'file')}
              className={`flex items-center gap-1.5 px-2 py-1.5 rounded text-xs font-mono transition-colors ${newPane === 'file' ? 'bg-[#0EA5E9]/20 text-[#0EA5E9]' : 'text-[#666666] hover:bg-[#1A1A1A] hover:text-[#E5E5E5]'}`}
              title="New file"
            >
              <Plus className="w-3.5 h-3.5" /> New file
            </button>
            <button
              onClick={() => setNewPane(newPane === 'browser' ? null : 'browser')}
              className={`flex items-center gap-1.5 px-2 py-1.5 rounded text-xs font-mono transition-colors ${newPane === 'browser' ? 'bg-[#0EA5E9]/20 text-[#0EA5E9]' : 'text-[#666666] hover:bg-[#1A1A1A] hover:text-[#E5E5E5]'}`}
              title="New browser"
            >
              <Plus className="w-3.5 h-3.5" /> New browser
            </button>
            <button
              onClick={() => setNewPane(newPane === 'image' ? null : 'image')}
              className={`flex items-center gap-1.5 px-2 py-1.5 rounded text-xs font-mono transition-colors ${newPane === 'image' ? 'bg-[#0EA5E9]/20 text-[#0EA5E9]' : 'text-[#666666] hover:bg-[#1A1A1A] hover:text-[#E5E5E5]'}`}
              title="New image"
            >
              <Plus className="w-3.5 h-3.5" /> New image
            </button>
          </div>

          {mainCenterTab === 'graph' ? (
            <div className="flex-1 min-h-0 relative bg-[#0d1117] overflow-hidden" aria-label="Graph View canvas">
              {/* Obsidian-style graph */}
              <svg className="w-full h-full" viewBox="0 0 400 320" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                {GRAPH_EDGES.map((e, i) => {
                  const a = GRAPH_NODES.find(n => n.id === e.from)!;
                  const b = GRAPH_NODES.find(n => n.id === e.to)!;
                  return (
                    <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="url(#edgeGrad)" strokeWidth="1.2" strokeOpacity="0.7" />
                  );
                })}
                {GRAPH_NODES.map(node => (
                  <g key={node.id}>
                    <circle cx={node.x} cy={node.y} r="24" fill="#1a1f2e" stroke="#30363d" strokeWidth="1.5" className="hover:stroke-[#58a6ff]" />
                    <text x={node.x} y={node.y + 5} textAnchor="middle" fill="#e6edf3" fontSize="11" fontFamily="ui-monospace, monospace">{node.label}</text>
                  </g>
                ))}
              </svg>
              {/* + New pane overlays */}
            </div>
          ) : (
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="max-w-2xl w-full space-y-8">
              {/* Greeting */}
              <div className="text-center space-y-4">
                <div className="text-4xl font-light text-[#E5E5E5]">
                  Good evening.
                </div>
                <div className="text-lg text-[#666666]">
                  What would you like to work on today?
                </div>
              </div>

              {/* Zen Input */}
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Ask dotAi anything..."
                    className="w-full bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg px-6 py-4 text-base text-[#E5E5E5] placeholder:text-[#666666] outline-none focus:border-[#E5E5E5]/30 transition-colors"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <button className="p-2 hover:bg-[#1A1A1A] rounded transition-colors" title="Attach files">
                      <Paperclip className="w-4 h-4 text-[#666666]" />
                    </button>
                    <button className="p-2 hover:bg-[#1A1A1A] rounded transition-colors" title="Voice input">
                      <Mic className="w-4 h-4 text-[#666666]" />
                    </button>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex items-center justify-center gap-3 text-xs">
                  <button className="px-3 py-1.5 bg-[#0A0A0A] hover:bg-[#1A1A1A] border border-[#1A1A1A] rounded-md text-[#E5E5E5] transition-colors">
                    <span className="flex items-center gap-1.5">
                      <Cpu className="w-3 h-3" />
                      Llama-3-8B
                    </span>
                  </button>
                  <button className="px-3 py-1.5 bg-[#0A0A0A] hover:bg-[#1A1A1A] border border-[#1A1A1A] rounded-md text-[#E5E5E5] transition-colors">
                    <span className="flex items-center gap-1.5">
                      <Zap className="w-3 h-3" />
                      SWE Developer
                    </span>
                  </button>
                  <button className="px-3 py-1.5 bg-[#0A0A0A] hover:bg-[#1A1A1A] border border-[#1A1A1A] rounded-md text-[#E5E5E5] transition-colors">
                    <span className="flex items-center gap-1.5">
                      <Shield className="w-3 h-3" />
                      Local Only
                    </span>
                  </button>
                </div>
              </div>

              {/* Suggestions */}
              <div className="space-y-3">
                <div className="text-xs text-[#666666] uppercase tracking-wide font-mono">Suggestions</div>
                <div className="grid grid-cols-2 gap-3">
                  <button className="text-left p-4 bg-[#0A0A0A] hover:bg-[#1A1A1A] border border-[#1A1A1A] rounded-lg transition-colors group">
                    <div className="flex items-start gap-2 mb-2">
                      <GitCommit className="w-4 h-4 text-[#666666] group-hover:text-[#E5E5E5] transition-colors" />
                      <span className="text-sm text-[#E5E5E5]">Review recent commits</span>
                    </div>
                    <div className="text-xs text-[#666666]">Analyze jj log and summarize changes</div>
                  </button>
                  <button className="text-left p-4 bg-[#0A0A0A] hover:bg-[#1A1A1A] border border-[#1A1A1A] rounded-lg transition-colors group">
                    <div className="flex items-start gap-2 mb-2">
                      <FileCode className="w-4 h-4 text-[#666666] group-hover:text-[#E5E5E5] transition-colors" />
                      <span className="text-sm text-[#E5E5E5]">Update documentation</span>
                    </div>
                    <div className="text-xs text-[#666666]">Draft updates for project docs</div>
                  </button>
                  <button className="text-left p-4 bg-[#0A0A0A] hover:bg-[#1A1A1A] border border-[#1A1A1A] rounded-lg transition-colors group">
                    <div className="flex items-start gap-2 mb-2">
                      <Terminal className="w-4 h-4 text-[#666666] group-hover:text-[#E5E5E5] transition-colors" />
                      <span className="text-sm text-[#E5E5E5]">Run diagnostic check</span>
                    </div>
                    <div className="text-xs text-[#666666]">System health and dependencies</div>
                  </button>
                  <button className="text-left p-4 bg-[#0A0A0A] hover:bg-[#1A1A1A] border border-[#1A1A1A] rounded-lg transition-colors group">
                    <div className="flex items-start gap-2 mb-2">
                      <Code2 className="w-4 h-4 text-[#666666] group-hover:text-[#E5E5E5] transition-colors" />
                      <span className="text-sm text-[#E5E5E5]">Code review</span>
                    </div>
                    <div className="text-xs text-[#666666]">Check quality and patterns</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          )}
          {/* + New pane overlay (shared for Chat and Graph) */}
          {newPane && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-10 p-8">
              <div className="bg-[#161b22] border border-[#30363d] rounded-lg shadow-xl max-w-2xl w-full max-h-[80%] overflow-hidden flex flex-col">
                <div className="flex items-center justify-between px-4 py-2 border-b border-[#30363d]">
                  <span className="text-sm font-mono text-[#e6edf3]">
                    {newPane === 'chat' && 'Chat'}
                    {newPane === 'xonsh' && 'xonsh'}
                    {newPane === 'file' && 'file'}
                    {newPane === 'browser' && 'Browser'}
                    {newPane === 'image' && 'Image'}
                  </span>
                  <button onClick={() => setNewPane(null)} className="p-1 text-[#8b949e] hover:text-[#e6edf3] rounded"><X className="w-4 h-4" /></button>
                </div>
                <div className="flex-1 overflow-auto p-4 min-h-[200px]">
                  {newPane === 'chat' && <ChatPaneMock />}
                  {newPane === 'xonsh' && <XonshPaneMock />}
                  {newPane === 'file' && <FilePaneMock />}
                  {newPane === 'browser' && <BrowserPaneMock />}
                  {newPane === 'image' && <ImagePaneMock />}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ChatPaneMock() {
  return (
    <div className="space-y-3">
      <div className="bg-[#0d1117] rounded border border-[#30363d] p-3 font-mono text-sm text-[#e6edf3]">
        Ask dotAi anything...
      </div>
      <div className="text-xs text-[#8b949e] font-mono">New chat thread (mock)</div>
    </div>
  );
}

function XonshPaneMock() {
  return (
    <div className="bg-[#0d1117] rounded border border-[#30363d] font-mono text-sm overflow-hidden">
      <div className="px-3 py-1.5 border-b border-[#30363d] text-[#8b949e]">xonsh</div>
      <pre className="p-3 text-[#7ee787]">$ <span className="text-[#e6edf3]">_</span></pre>
    </div>
  );
}

function FilePaneMock() {
  return (
    <div className="bg-[#0d1117] rounded border border-[#30363d] font-mono text-sm overflow-hidden">
      <div className="px-3 py-1.5 border-b border-[#30363d] text-[#8b949e]">file.md — NORMAL</div>
      <pre className="p-3 text-[#e6edf3] whitespace-pre">1  │</pre>
    </div>
  );
}

function BrowserPaneMock() {
  return (
    <div className="bg-[#0d1117] rounded border border-[#30363d] overflow-hidden">
      <div className="flex items-center gap-2 px-3 py-2 border-b border-[#30363d] bg-[#161b22]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" /><div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" /><div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 rounded bg-[#0d1117] px-2 py-1 text-xs text-[#8b949e]">https://</div>
      </div>
      <div className="p-4 text-center text-[#8b949e] text-sm">Browser preview (mock)</div>
    </div>
  );
}

function ImagePaneMock() {
  return (
    <div className="bg-[#0d1117] rounded border border-[#30363d] overflow-hidden">
      <div className="aspect-video flex items-center justify-center border border-dashed border-[#30363d] text-[#8b949e] text-sm font-mono">
        <ImageIcon className="w-12 h-12 opacity-50" />
        <span className="ml-2">Image preview (mock)</span>
      </div>
    </div>
  );
}

function SettingsView() {
  return (
    <div className="bg-[#000000] rounded-xl overflow-hidden shadow-2xl border border-[#1A1A1A]">
      {/* Window Chrome */}
      <div className="bg-[#0A0A0A] border-b border-[#1A1A1A] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
        </div>
        <div className="text-xs text-[#666666] font-mono">dotAi — Settings</div>
        <div className="w-12" />
      </div>

      {/* Header */}
      <div className="bg-[#0A0A0A] border-b border-[#1A1A1A] px-6 py-4 flex items-center justify-between">
        <button className="flex items-center gap-2 text-sm text-[#666666] hover:text-white transition-colors">
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Chat</span>
        </button>
        <div className="text-lg font-medium flex items-center gap-2">
          <Settings className="w-5 h-5 text-[#0EA5E9]" />
          Settings
        </div>
        <div className="w-20" />
      </div>

      {/* Settings Content */}
      <div className="p-8 space-y-8 max-h-[600px] overflow-y-auto">
        {/* Config Path */}
        <div>
          <div className="text-xs text-[#666666] mb-2 font-mono flex items-center gap-2">
            <FileCode className="w-3 h-3" />
            Configuration Path
          </div>
          <div className="bg-[#000000] rounded-md px-4 py-3 font-mono text-xs text-[#E5E5E5] border border-[#1A1A1A]">
            ~/Project/Orchestration/Memories/SETTINGS.json
          </div>
        </div>

        {/* Backend & Routing */}
        <div>
          <div className="text-sm font-medium mb-4 text-[#E5E5E5] flex items-center gap-2">
            <Database className="w-4 h-4 text-[#0EA5E9]" />
            Backend & Routing
          </div>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 rounded-md hover:bg-[#0A0A0A] cursor-pointer transition-colors border border-[#1A1A1A]">
              <input type="radio" name="backend" defaultChecked className="w-4 h-4 accent-[#0EA5E9]" />
              <div className="flex-1">
                <div className="text-sm text-[#E5E5E5]">Local Default</div>
                <div className="text-xs text-[#666666] font-mono">http://localhost:11434</div>
              </div>
            </label>
            
            <label className="flex items-center gap-3 p-3 rounded-md hover:bg-[#0A0A0A] cursor-pointer transition-colors border border-transparent">
              <input type="radio" name="backend" className="w-4 h-4 accent-[#0EA5E9]" />
              <div className="flex-1">
                <div className="text-sm text-[#E5E5E5]">Custom Llama-Server</div>
                <div className="text-xs text-[#666666] font-mono">http://localhost:8080</div>
              </div>
            </label>
            
            <label className="flex items-center gap-3 p-3 rounded-md bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#0EA5E9]" />
              <div className="flex-1">
                <div className="text-sm text-[#E5E5E5] flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-[#0EA5E9]" />
                  Strictly Local-Only
                </div>
                <div className="text-xs text-[#666666]">Disable external API fallback</div>
              </div>
            </label>
          </div>
        </div>

        {/* Security & Execution */}
        <div>
          <div className="text-sm font-medium mb-4 text-[#E5E5E5] flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#0EA5E9]" />
            Security & Execution
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-xs text-[#666666] block mb-2 font-mono">Execution Level</label>
              <select className="w-full bg-[#000000] border border-[#1A1A1A] rounded-md px-4 py-2.5 text-sm text-[#E5E5E5] outline-none focus:border-[#0EA5E9]/50 transition-colors font-mono">
                <option>Ask for Confirmation</option>
                <option>Auto-execute Safe Commands</option>
                <option>Always Ask</option>
              </select>
              <div className="text-xs text-[#666666] mt-1.5 font-mono">Confirm all jj / destructive actions</div>
            </div>
          </div>
        </div>

        {/* Session Management */}
        <div>
          <div className="text-sm font-medium mb-4 text-[#E5E5E5] flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#0EA5E9]" />
            Session Management
          </div>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 rounded-md hover:bg-[#0A0A0A] cursor-pointer transition-colors border border-transparent">
              <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#0EA5E9]" />
              <div className="text-sm text-[#E5E5E5]">Restore last session on app start</div>
            </label>
            
            <button className="w-full px-4 py-2.5 bg-[#0A0A0A] hover:bg-[#1A1A1A] rounded-md text-sm text-[#E5E5E5] transition-colors border border-[#1A1A1A]">
              Start Fresh Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ModsView() {
  return (
    <div className="bg-[#000000] rounded-xl overflow-hidden shadow-2xl border border-[#1A1A1A]">
      {/* Window Chrome */}
      <div className="bg-[#0A0A0A] border-b border-[#1A1A1A] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
        </div>
        <div className="text-xs text-[#666666] font-mono">dotAi — Mods & Personas</div>
        <div className="w-12" />
      </div>

      {/* Header */}
      <div className="bg-[#0A0A0A] border-b border-[#1A1A1A] px-6 py-4">
        <div className="text-lg font-medium flex items-center gap-2">
          <Wrench className="w-5 h-5 text-[#0EA5E9]" />
          Select Active Mod / Persona
        </div>
      </div>

      {/* Mods List */}
      <div className="p-8 space-y-4 max-h-[600px] overflow-y-auto">
        {/* Standard Chatbot */}
        <label className="block p-5 rounded-lg border-2 border-[#0EA5E9] bg-[#0EA5E9]/10 cursor-pointer transition-all">
          <div className="flex items-start gap-4">
            <input type="radio" name="persona" defaultChecked className="mt-1 w-5 h-5 accent-[#0EA5E9]" />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Terminal className="w-5 h-5 text-[#0EA5E9]" />
                <div className="font-medium text-[#E5E5E5]">Standard Chatbot</div>
                <span className="px-2 py-0.5 bg-[#1A1A1A] rounded text-xs text-[#666666] font-mono border border-[#333333]">Default</span>
              </div>
              <div className="text-sm text-[#999999]">
                Lightweight, general assistance and project navigation.
              </div>
            </div>
          </div>
        </label>

        {/* SWE Developer */}
        <label className="block p-5 rounded-lg border-2 border-[#1A1A1A] hover:border-[#333333] bg-[#0A0A0A] hover:bg-[#0F0F0F] cursor-pointer transition-all">
          <div className="flex items-start gap-4">
            <input type="radio" name="persona" className="mt-1 w-5 h-5 accent-[#0EA5E9]" />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-[#10B981]" />
                <div className="font-medium text-[#E5E5E5]">SWE Developer (Orchestrator)</div>
              </div>
              <div className="text-sm text-[#999999] mb-3">
                Full access to jj commits, Docker management, and file creation.
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-[#000000] rounded text-xs text-[#666666] font-mono border border-[#1A1A1A]">jj commits</span>
                <span className="px-2 py-1 bg-[#000000] rounded text-xs text-[#666666] font-mono border border-[#1A1A1A]">Docker</span>
                <span className="px-2 py-1 bg-[#000000] rounded text-xs text-[#666666] font-mono border border-[#1A1A1A]">File creation</span>
              </div>
            </div>
          </div>
        </label>

        {/* Tech Lead */}
        <label className="block p-5 rounded-lg border-2 border-[#1A1A1A] hover:border-[#333333] bg-[#0A0A0A] hover:bg-[#0F0F0F] cursor-pointer transition-all">
          <div className="flex items-start gap-4">
            <input type="radio" name="persona" className="mt-1 w-5 h-5 accent-[#0EA5E9]" />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Bug className="w-5 h-5 text-[#F59E0B]" />
                <div className="font-medium text-[#E5E5E5]">Tech Lead / Reviewer</div>
                <span className="px-2 py-0.5 bg-[#F59E0B]/10 rounded text-xs text-[#F59E0B] font-mono border border-[#F59E0B]/30">Read-only</span>
              </div>
              <div className="text-sm text-[#999999]">
                Read-only mode. Criticizes code quality and checks against base repo guidelines.
              </div>
            </div>
          </div>
        </label>

        {/* Load Custom */}
        <button className="w-full p-5 rounded-lg border-2 border-dashed border-[#333333] hover:border-[#666666] bg-transparent hover:bg-[#0A0A0A] transition-all">
          <div className="flex items-center justify-center gap-2 text-[#666666] hover:text-[#E5E5E5] transition-colors">
            <span className="text-2xl">+</span>
            <div className="text-sm font-medium font-mono">Load custom persona from Orchestration/Agents/Personas/</div>
          </div>
        </button>
      </div>
    </div>
  );
}