import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect, useMemo } from 'react';

const letterContent = `i carry your heart with me (i carry it in
my heart) i am never without it (anywhere
i go you go, my dear; and whatever is done
by only me is your doing, my darling)

i fear no fate (for you are my fate, my sweet)
i want no world (for beautiful you are my world, my true)
and it's you are whatever a moon has always meant
and whatever a sun will always sing is you

here is the deepest secret nobody knows
(here is the root of the root and the bud of the bud
and the sky of the sky of a tree called life; which grows
higher than soul can hope or mind can hide)
and this is the wonder that's keeping the stars apart

i carry your heart (i carry it in my heart)

- e.e. cummings`;

const LoveLetter = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [displayedText, setDisplayedText] = useState('');
  const hasStartedTyping = useRef(false);

  // Memoize petal positions to prevent flickering during typing
  const petals = useMemo(() =>
    [...Array(8)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      xOffset: Math.random() * 100 - 50,
      rotateDir: Math.random() > 0.5 ? 1 : -1,
      duration: 15 + Math.random() * 10,
    })), []);

  useEffect(() => {
    if (isInView && !hasStartedTyping.current) {
      hasStartedTyping.current = true;
      let index = 0;
      const interval = setInterval(() => {
        if (index < letterContent.length) {
          setDisplayedText(letterContent.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 30);

      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <motion.section
      ref={containerRef}
      className="relative py-24 md:py-32 px-4 md:px-8 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FDF2F4] via-[#FFFAF0] to-[#F7E7CE] opacity-50" />

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 text-6xl opacity-20"
        animate={{
          rotate: [0, 10, -10, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        🌹
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-6xl opacity-20"
        animate={{
          rotate: [0, -10, 10, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        💌
      </motion.div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <motion.span
          className="font-modern text-sm tracking-[0.3em] uppercase text-[#D4AF37]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Words of Love
        </motion.span>
        <h2 className="font-script text-5xl md:text-7xl text-[#8B2252] mt-4 mb-6">
          Udit & Simran Forever
        </h2>
        <div className="ornament-divider max-w-md mx-auto">
          <motion.span
            className="text-2xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💝
          </motion.span>
        </div>
      </motion.div>

      {/* Letter Container */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: 10 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="max-w-3xl mx-auto relative z-10"
      >
        {/* Paper Effect */}
        <div className="relative">
          {/* Shadow Layers */}
          <div className="absolute inset-0 bg-[#E8B4B8] rounded-lg transform rotate-1 translate-x-2 translate-y-2 opacity-30" />
          <div className="absolute inset-0 bg-[#D4AF37] rounded-lg transform -rotate-1 -translate-x-1 translate-y-1 opacity-20" />

          {/* Main Letter */}
          <motion.div
            className="relative bg-[#FFFAF0] rounded-lg p-8 md:p-12 shadow-2xl border border-[#E8B4B8]/30"
            whileHover={{
              boxShadow: '0 25px 50px rgba(139, 34, 82, 0.25), 0 0 60px rgba(212, 175, 55, 0.2)',
            }}
          >
            {/* Decorative Corner */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#D4AF37] opacity-50" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#D4AF37] opacity-50" />

            {/* Wax Seal */}
            <motion.div
              className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#C41E3A] to-[#8B2252] flex items-center justify-center shadow-lg"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <span className="text-2xl">💕</span>
            </motion.div>

            {/* Letter Content */}
            <div className="mt-8 font-elegant text-lg md:text-xl leading-relaxed text-[#722F37] whitespace-pre-line min-h-[400px]">
              {displayedText}
              {displayedText.length > 0 && displayedText.length < letterContent.length && (
                <motion.span
                  className="inline-block w-0.5 h-6 bg-[#8B2252] ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              )}
            </div>

            {/* Signature Decoration */}
            {displayedText.length === letterContent.length && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-8 flex justify-center"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-4xl"
                >
                  💕
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Petals */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {petals.map((petal) => (
          <motion.div
            key={petal.id}
            className="absolute text-2xl opacity-40"
            style={{
              left: `${petal.left}%`,
              top: '-10%',
            }}
            animate={{
              y: ['0vh', '120vh'],
              x: [0, petal.xOffset],
              rotate: [0, 360 * petal.rotateDir],
            }}
            transition={{
              duration: petal.duration,
              delay: petal.id * 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            🌸
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default LoveLetter;
