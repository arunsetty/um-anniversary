import { motion } from 'framer-motion';

interface Wish {
  id: number;
  message: string;
  author: string;
  color: string;
}

const wishes: Wish[] = [
  {
    id: 1,
    message: 'May your love continue to bloom like the most beautiful roses in a garden of eternal spring.',
    author: 'From the Stars',
    color: 'from-[#E8B4B8] to-[#C41E3A]',
  },
  {
    id: 2,
    message: 'Four years down, forever to go. Your love story inspires everyone around you.',
    author: 'With Love',
    color: 'from-[#D4AF37] to-[#B8860B]',
  },
  {
    id: 3,
    message: 'May every moment together be filled with the same magic you felt when you first fell in love.',
    author: 'Always & Forever',
    color: 'from-[#DA70D6] to-[#8B2252]',
  },
  {
    id: 4,
    message: 'Your partnership is a beautiful example of what true love looks like. Keep shining together!',
    author: 'Universe',
    color: 'from-[#F5DEB3] to-[#D4AF37]',
  },
  {
    id: 5,
    message: 'May your journey together be filled with endless adventures and infinite happiness.',
    author: 'Destiny',
    color: 'from-[#C41E3A] to-[#8B2252]',
  },
  {
    id: 6,
    message: 'Here\'s to the couple who proves that soulmates do exist. Happy 4th Anniversary!',
    author: 'Fate',
    color: 'from-[#E6E6FA] to-[#DA70D6]',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

const Wishes = () => {
  return (
    <motion.section className="relative py-24 md:py-32 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-[#4A0E2E] via-[#722F37] to-[#800020]">
      {/* Animated Stars Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, #C41E3A 0%, transparent 70%)',
        }}
        animate={{
          scale: [1.3, 1, 1.3],
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

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
          Blessings & Wishes
        </motion.span>
        <h2 className="font-script text-5xl md:text-7xl text-white mt-4 mb-6 text-romantic-shadow">
          Heartfelt Wishes
        </h2>
        <p className="font-elegant text-xl text-[#E8B4B8] max-w-2xl mx-auto">
          Messages of love and blessings for your beautiful journey ahead
        </p>
      </motion.div>

      {/* Wishes Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto relative z-10"
      >
        {wishes.map((wish, index) => (
          <motion.div
            key={wish.id}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              y: -10,
              rotateY: 5,
            }}
            className="group"
          >
            <div className="glass-dark rounded-2xl p-6 md:p-8 h-full relative overflow-hidden">
              {/* Gradient Top Border */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${wish.color}`} />

              {/* Quote Mark */}
              <motion.div
                className="absolute top-4 right-4 text-5xl text-[#D4AF37] opacity-20 font-serif"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 10, scale: 1.2 }}
              >
                "
              </motion.div>

              {/* Message */}
              <p className="font-elegant text-lg md:text-xl text-white/90 leading-relaxed mb-6 relative z-10">
                {wish.message}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <motion.div
                  className={`w-10 h-10 rounded-full bg-gradient-to-r ${wish.color} flex items-center justify-center`}
                  animate={{
                    boxShadow: [
                      '0 0 10px rgba(212, 175, 55, 0.3)',
                      '0 0 20px rgba(212, 175, 55, 0.5)',
                      '0 0 10px rgba(212, 175, 55, 0.3)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-white text-lg">✦</span>
                </motion.div>
                <span className="font-modern text-sm tracking-wider text-[#D4AF37]">
                  — {wish.author}
                </span>
              </div>

              {/* Hover Glow Effect */}
              <motion.div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${wish.color} transition-opacity duration-500 rounded-2xl`}
              />

              {/* Number Badge */}
              <span className="absolute bottom-4 right-4 font-modern text-xs text-white/30">
                #{String(index + 1).padStart(2, '0')}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center mt-20 relative z-10"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-flex items-center gap-4"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          <motion.span
            className="text-4xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💖
          </motion.span>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Wishes;
