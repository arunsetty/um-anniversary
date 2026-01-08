import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface Milestone {
  label: string;
  title: string;
  description: string;
  icon: string;
}

const milestones: Milestone[] = [
  {
    label: 'Where It Began',
    title: 'The Wedding Day',
    description: 'The day two souls became one. A promise made, a journey started, and a love story written in the stars forever.',
    icon: '💒',
  },
  {
    label: 'Today',
    title: '2 Years of Love',
    description: 'Two beautiful years of laughter, growth, and unconditional love. Every moment together has been a blessing.',
    icon: '💕',
  },
  {
    label: 'Tomorrow',
    title: 'Dreams & Adventures',
    description: 'A lifetime of adventures awaits. New places to explore, dreams to chase, and memories yet to be made together.',
    icon: '🌟',
  },
  {
    label: 'Forever',
    title: 'Building Your Home',
    description: 'A family to nurture, a home filled with love, and a legacy of happiness to pass on through generations.',
    icon: '🏡',
  },
  {
    label: '∞ Infinity',
    title: 'Eternal Love',
    description: 'Beyond time, beyond forever. Your love transcends all boundaries. Two hearts beating as one, for all eternity.',
    icon: '💫',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const LoveStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <motion.section
      ref={containerRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
      className="relative py-24 md:py-32 px-4 md:px-8 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#FDF2F4] to-transparent" />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <motion.span
          className="font-modern text-sm tracking-[0.3em] uppercase text-[#D4AF37]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          From Here To Eternity
        </motion.span>
        <h2 className="font-script text-5xl md:text-7xl text-[#8B2252] mt-4 mb-6">
          Your Forever Journey
        </h2>
        <div className="ornament-divider max-w-md mx-auto">
          <motion.span
            className="text-2xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💕
          </motion.span>
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Animated Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#E8B4B8]">
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#D4AF37] to-[#C41E3A]"
            style={{ height: lineHeight }}
          />
        </div>

        {/* Milestones */}
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`relative flex items-center mb-16 md:mb-24 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Timeline Dot */}
            <motion.div
              className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10"
              whileInView={{
                scale: [0, 1.2, 1],
                rotate: [0, 360],
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8860B] flex items-center justify-center shadow-lg">
                <span className="text-xl">{milestone.icon}</span>
              </div>
            </motion.div>

            {/* Content Card */}
            <motion.div
              className={`ml-20 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
              }`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="glass-romantic p-6 md:p-8 rounded-2xl">
                <motion.span
                  className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white text-sm font-modern tracking-wider mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  {milestone.label}
                </motion.span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-[#8B2252] mb-3">
                  {milestone.title}
                </h3>
                <p className="font-elegant text-lg text-[#722F37] leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </motion.div>

            {/* Spacer for alternating layout */}
            <div className="hidden md:block md:w-5/12" />
          </motion.div>
        ))}
      </div>

      {/* Bottom Decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mt-16"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="inline-block"
        >
          <span className="font-script text-4xl md:text-5xl text-[#D4AF37]">
            Together, Forever, To Infinity... ∞
          </span>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default LoveStory;
