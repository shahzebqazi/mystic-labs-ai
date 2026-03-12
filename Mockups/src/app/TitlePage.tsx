import { motion } from 'motion/react';

const TITLE_STORAGE_KEY = 'dotai-title-seen';

export function hasSeenTitle(): boolean {
  try {
    return sessionStorage.getItem(TITLE_STORAGE_KEY) === '1';
  } catch {
    return false;
  }
}

export function markTitleSeen(): void {
  try {
    sessionStorage.setItem(TITLE_STORAGE_KEY, '1');
  } catch {
    // ignore
  }
}

type TitlePageProps = {
  onStart: () => void;
};

export function TitlePage({ onStart }: TitlePageProps) {
  return (
    <div className="min-h-screen overflow-hidden relative bg-[#0a0a0a] flex items-center justify-center p-6 sm:p-12">
      {/* Subtle gradient backdrop */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, #1a1a2e 0%, transparent 60%)',
        }}
      />

      <motion.main
        className="relative z-10 max-w-xl w-full text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.h1
          className="text-2xl sm:text-3xl font-semibold text-[#e6edf3] tracking-tight mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          dotAi
        </motion.h1>

        <motion.div
          className="space-y-5 text-[#8b949e] text-sm sm:text-base leading-relaxed text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p>
            Major AI labs—Google, OpenAI, and Anthropic—are involved in military and mass surveillance contracts. Their systems are increasingly used for targeting, monitoring, and control at scale.
          </p>
          <p>
            We believe machines need human beings to know what is true and what is wrong. Please use AI responsibly and with a conscience.
          </p>
          <p className="text-[#e6edf3] font-medium flex items-center justify-center gap-1.5 sm:justify-start">
            <span aria-hidden>❤️</span>
            Use AI with a conscience.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <button
            type="button"
            onClick={() => {
              markTitleSeen();
              onStart();
            }}
            className="px-8 py-3 rounded-lg bg-[#238636] hover:bg-[#2ea043] text-white font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#238636] focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
          >
            Start
          </button>
        </motion.div>
      </motion.main>
    </div>
  );
}
