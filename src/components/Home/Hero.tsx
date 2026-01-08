import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const floatVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  },
};

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <motion.section
      ref={containerRef}
      initial="hidden"
      animate="visible"
      variants={heroVariants}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ opacity, scale }}
    >
      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #E8B4B8 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/4 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center px-4 md:px-8"
        style={{ y }}
      >
        {/* Decorative Top Element */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.div
            variants={floatVariants}
            animate="animate"
            className="inline-block"
          >
            <svg
              className="w-16 h-16 md:w-24 md:h-24 mx-auto text-[#D4AF37]"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <path d="M50 90C50 90 10 55 10 35C10 20 22 10 35 10C42 10 48 14 50 20C52 14 58 10 65 10C78 10 90 20 90 35C90 55 50 90 50 90Z" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Pre-title */}
        <motion.p
          variants={itemVariants}
          className="font-modern text-sm md:text-base tracking-[0.3em] uppercase text-[#8B2252] mb-4"
        >
          Celebrating Two Beautiful Years
        </motion.p>

        {/* Main Names */}
        <motion.h1
          variants={itemVariants}
          className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#8B2252] mb-4 text-romantic-shadow"
        >
          Udit
          <motion.span
            className="inline-block mx-4 md:mx-8 text-[#D4AF37]"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            &
          </motion.span>
          Simran
        </motion.h1>

        {/* Anniversary Badge */}
        <motion.div
          variants={itemVariants}
          className="relative inline-block mb-8"
        >
          <motion.div
            className="glass-romantic px-8 py-4 rounded-full"
            whileHover={{ scale: 1.05 }}
            animate={{
              boxShadow: [
                '0 0 20px rgba(212, 175, 55, 0.3)',
                '0 0 40px rgba(212, 175, 55, 0.5)',
                '0 0 20px rgba(212, 175, 55, 0.3)',
              ],
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          >
            <span className="font-display text-2xl md:text-4xl font-bold text-gold-gradient">
              2nd Anniversary
            </span>
          </motion.div>
        </motion.div>

        {/* Romantic Quote */}
        <motion.p
          variants={itemVariants}
          className="font-elegant text-xl md:text-2xl lg:text-3xl text-[#722F37] max-w-3xl mx-auto leading-relaxed italic"
        >
          "Two years of love, laughter, and beautiful memories together.
          <br />
          Here's to your forever and always."
        </motion.p>

        {/* Decorative Divider */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <div className="w-20 md:w-32 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          >
            <svg className="w-6 h-6 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </motion.div>
          <div className="w-20 md:w-32 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        </motion.div>

      </motion.div>
    </motion.section>
  );
};

export default Hero;
