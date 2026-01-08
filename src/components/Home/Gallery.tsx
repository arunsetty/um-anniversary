import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface MemoryCard {
  id: number;
  title: string;
  subtitle: string;
  gradient: string;
  icon: string;
}

const memories: MemoryCard[] = [
  {
    id: 1,
    title: 'First Date',
    subtitle: 'Where it all began',
    gradient: 'from-[#E8B4B8] to-[#C41E3A]',
    icon: '🥂',
  },
  {
    id: 2,
    title: 'Adventures',
    subtitle: 'Exploring together',
    gradient: 'from-[#D4AF37] to-[#B8860B]',
    icon: '✈️',
  },
  {
    id: 3,
    title: 'Celebrations',
    subtitle: 'Every moment special',
    gradient: 'from-[#C41E3A] to-[#8B2252]',
    icon: '🎉',
  },
  {
    id: 4,
    title: 'Quiet Moments',
    subtitle: 'Peace in togetherness',
    gradient: 'from-[#E6E6FA] to-[#DA70D6]',
    icon: '🌙',
  },
  {
    id: 5,
    title: 'Dreams',
    subtitle: 'Building a future',
    gradient: 'from-[#F5DEB3] to-[#D4AF37]',
    icon: '🏠',
  },
  {
    id: 6,
    title: 'Forever',
    subtitle: 'Always & forever',
    gradient: 'from-[#8B2252] to-[#4A0E2E]',
    icon: '💍',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const Gallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <motion.section
      ref={containerRef}
      className="relative py-24 md:py-32 px-4 md:px-8 overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNDNDFFM0EiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzAgMzBjMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMHMxMCA0LjQ3NyAxMCAxMC00LjQ3NyAxMC0xMCAxMC0xMC00LjQ3Ny0xMC0xMHptMTAgOGMtNC40MTggMC04LTMuNTgyLTgtOHMzLjU4Mi04IDgtOCA4IDMuNTgyIDggOC0zLjU4MiA4LTggOHoiLz48L2c+PC9nPjwvc3ZnPg==')] bg-repeat" />
      </motion.div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 relative z-10"
      >
        <motion.span
          className="font-modern text-sm tracking-[0.3em] uppercase text-[#D4AF37]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Precious Moments
        </motion.span>
        <h2 className="font-script text-5xl md:text-7xl text-[#8B2252] mt-4 mb-6">
          Memory Lane
        </h2>
        <p className="font-elegant text-xl text-[#722F37] max-w-2xl mx-auto">
          A collection of cherished moments that define your beautiful journey together
        </p>
      </motion.div>

      {/* Gallery Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto relative z-10"
      >
        {memories.map((memory, index) => (
          <motion.div
            key={memory.id}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              z: 50,
            }}
            className="group perspective-1000"
          >
            <div
              className={`relative h-64 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br ${memory.gradient} p-6 md:p-8 flex flex-col justify-between cursor-pointer`}
            >
              {/* Animated Background Pattern */}
              <motion.div
                className="absolute inset-0 opacity-20"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                style={{
                  backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%),
                                    radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)`,
                }}
              />

              {/* Icon */}
              <motion.div
                className="text-5xl md:text-6xl"
                initial={{ scale: 1, rotate: 0 }}
                whileHover={{
                  scale: 1.2,
                  rotate: [0, -10, 10, 0],
                }}
                transition={{ duration: 0.5 }}
              >
                {memory.icon}
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <motion.h3
                  className="font-display text-2xl md:text-3xl font-bold text-white mb-2"
                  initial={{ x: 0 }}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {memory.title}
                </motion.h3>
                <p className="font-elegant text-lg text-white/80">
                  {memory.subtitle}
                </p>
              </div>

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              {/* Corner Decoration */}
              <motion.div
                className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30"
                whileHover={{ scale: 1.2, rotate: 45 }}
              />
              <motion.div
                className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/30"
                whileHover={{ scale: 1.2, rotate: 45 }}
              />

              {/* Index Number */}
              <span className="absolute top-4 left-4 font-modern text-xs tracking-widest text-white/50">
                0{index + 1}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Quote */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center mt-20 relative z-10"
      >
        <p className="font-elegant text-2xl md:text-3xl text-[#722F37] italic max-w-3xl mx-auto">
          "Every moment with you is a memory I treasure forever"
        </p>
      </motion.div>
    </motion.section>
  );
};

export default Gallery;
