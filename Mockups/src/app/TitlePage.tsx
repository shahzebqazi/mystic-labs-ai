import { useState, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';

const TITLE_STORAGE_KEY = 'mystic-title-seen';

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

// -- Star field faithful to ZenMoonRenderer.STAR_PALETTE & brand.yaml stars config --

const STAR_PALETTE = [
  '#FAD075', // moon gold
  '#FDE8B0', // moon gold light
  '#FFFFFF', // white
  '#CCDDFF', // cool blue-white
  '#FFEECC', // warm peach
  '#E8D0FF', // lavender
];

// Deterministic PRNG matching Kotlin's Random(seed) — simple xorshift
function mulberry32(seed: number) {
  let s = seed | 0;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type StarDot = {
  nx: number;
  ny: number;
  size: number;
  alpha: number;
  colorIdx: number;
  twinkleDelay: number;
  twinkleDuration: number;
};

type Sparkle = {
  nx: number;
  ny: number;
  colorIdx: number;
  rayLength: number;
};

function generateStarLayout(seed: number, density: number, sparkleCount: number) {
  const rng = mulberry32(seed);
  const totalDots = Math.round(density * 1.2);

  const dots: StarDot[] = [];
  for (let i = 0; i < totalDots; i++) {
    dots.push({
      nx: rng(),
      ny: rng(),
      size: 0.5 + rng() * 1.5,
      alpha: 0.15 + rng() * 0.55,
      colorIdx: Math.floor(rng() * STAR_PALETTE.length),
      twinkleDelay: rng() * 6,
      twinkleDuration: 2 + rng() * 4,
    });
  }

  const sparkles: Sparkle[] = [];
  for (let i = 0; i < sparkleCount; i++) {
    sparkles.push({
      nx: rng(),
      ny: rng(),
      colorIdx: Math.floor(rng() * STAR_PALETTE.length),
      rayLength: 2 + Math.floor(rng() * 3),
    });
  }

  return { dots, sparkles };
}

function useStarField() {
  return useMemo(() => generateStarLayout(42, 120, 8), []);
}

function StarField({ dots, sparkles }: { dots: StarDot[]; sparkles: Sparkle[] }) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {dots.map((star, i) => (
        <motion.div
          key={`d${i}`}
          className="absolute rounded-full"
          style={{
            left: `${star.nx * 100}%`,
            top: `${star.ny * 100}%`,
            width: star.size,
            height: star.size,
            backgroundColor: STAR_PALETTE[star.colorIdx],
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, star.alpha, 0] }}
          transition={{
            delay: star.twinkleDelay,
            duration: star.twinkleDuration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      {sparkles.map((sp, i) => (
        <SparkleIcon key={`s${i}`} sparkle={sp} />
      ))}
    </div>
  );
}

function SparkleIcon({ sparkle }: { sparkle: Sparkle }) {
  const color = STAR_PALETTE[sparkle.colorIdx];
  const ps = 3;
  const rl = sparkle.rayLength;
  const size = (rl * 2 + 1) * ps;
  const center = rl * ps;

  const rects: { x: number; y: number; opacity: number }[] = [];

  rects.push({ x: center, y: center, opacity: 0.85 });

  for (let r = 1; r <= rl; r++) {
    const fade = (1 - r / (rl + 1)) * 0.85;
    rects.push({ x: center, y: center - r * ps, opacity: fade });
    rects.push({ x: center, y: center + r * ps, opacity: fade });
    rects.push({ x: center - r * ps, y: center, opacity: fade });
    rects.push({ x: center + r * ps, y: center, opacity: fade });
  }

  const diagLen = Math.max(1, Math.floor(rl / 2));
  for (let r = 1; r <= diagLen; r++) {
    const fade = (1 - r / (diagLen + 1)) * 0.85 * 0.5;
    rects.push({ x: center - r * ps, y: center - r * ps, opacity: fade });
    rects.push({ x: center + r * ps, y: center - r * ps, opacity: fade });
    rects.push({ x: center - r * ps, y: center + r * ps, opacity: fade });
    rects.push({ x: center + r * ps, y: center + r * ps, opacity: fade });
  }

  return (
    <motion.svg
      className="absolute"
      style={{
        left: `calc(${sparkle.nx * 100}% - ${size / 2}px)`,
        top: `calc(${sparkle.ny * 100}% - ${size / 2}px)`,
      }}
      width={size}
      height={size}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{
        delay: 1 + sparkle.nx * 3,
        duration: 3 + sparkle.ny * 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {rects.map((r, j) => (
        <rect
          key={j}
          x={r.x}
          y={r.y}
          width={ps}
          height={ps}
          fill={color}
          opacity={r.opacity}
        />
      ))}
    </motion.svg>
  );
}

// -- Title Page --

type TitlePageProps = {
  onStart: () => void;
};

export function TitlePage({ onStart }: TitlePageProps) {
  const { dots, sparkles } = useStarField();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  const basePath = (import.meta as Record<string, unknown>).env &&
    typeof (import.meta as Record<string, Record<string, string>>).env?.BASE_URL === 'string'
    ? (import.meta as Record<string, Record<string, string>>).env.BASE_URL
    : '/';

  if (!ready) return <div className="min-h-screen bg-[#0A0A0B]" />;

  return (
    <div className="min-h-screen overflow-hidden relative bg-[#0A0A0B] flex items-center justify-center p-6 sm:p-12">
      <StarField dots={dots} sparkles={sparkles} />

      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 45%, rgba(212,168,67,0.15) 0%, transparent 70%)',
        }}
      />

      <motion.main
        className="relative z-10 max-w-lg w-full flex flex-col items-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <img
            src={`${basePath}brand/pixel-icon-128.png`}
            alt="Mystic — crescent moon"
            width={96}
            height={96}
            style={{ imageRendering: 'pixelated' }}
          />
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl font-medium tracking-tight mb-2"
          style={{ color: '#FAFAFA', letterSpacing: '0.03em' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Mystic
        </motion.h1>

        <motion.p
          className="text-sm tracking-widest uppercase mb-10"
          style={{ color: '#D4A843' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Notes &middot; Code &middot; Design
        </motion.p>

        <motion.div
          className="space-y-4 text-sm sm:text-base leading-relaxed text-left max-w-md"
          style={{ color: '#A1A1AA' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.6 }}
        >
          <p>
            Major AI labs—Google, OpenAI, and Anthropic—are involved in military
            and mass surveillance contracts. Their systems are increasingly used
            for targeting, monitoring, and control at scale.
          </p>
          <p>
            We believe machines need human beings to know what is true and what
            is wrong. Please use AI responsibly and with a conscience.{' '}
            <span
              className="font-medium cursor-pointer"
              style={{ color: '#5EC4AB' }}
              onClick={() => {
                markTitleSeen();
                onStart();
              }}
            >
              Enter Mystic.
            </span>
          </p>
        </motion.div>
      </motion.main>
    </div>
  );
}
