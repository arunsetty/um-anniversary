import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative py-16 md:py-24 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-[#FFFAF0] to-[#FDF2F4]"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C41E3A' fill-opacity='1'%3E%3Cpath d='M30 30L15 45L0 30L15 15L30 30ZM45 15L60 30L45 45L30 30L45 15Z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Names with Heartbeat */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="font-script text-4xl md:text-6xl text-[#8B2252] mb-4">
            Udit
            <motion.span
              className="inline-block mx-4 text-[#C41E3A]"
              animate={{
                scale: [1, 1.3, 1, 1.3, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              ❤️
            </motion.span>
            Simran
          </h3>
        </motion.div>

        {/* Anniversary Badge */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-block mb-8"
        >
          <div className="glass-romantic px-8 py-4 rounded-full">
            <span className="font-display text-xl md:text-2xl font-semibold text-gold-gradient">
              4 Years of Beautiful Love
            </span>
          </div>
        </motion.div>

        {/* Romantic Quote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="font-elegant text-xl md:text-2xl text-[#722F37] italic max-w-2xl mx-auto mb-8"
        >
          "May your love story continue to inspire everyone around you.
          <br />
          Wishing you endless happiness together."
        </motion.p>

        {/* Decorative Divider */}
        <div className="ornament-divider max-w-sm mx-auto mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <svg
              className="w-6 h-6 text-[#D4AF37]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </motion.div>
        </div>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <span className="font-modern text-sm tracking-[0.3em] uppercase text-[#D4AF37]">
            Est. {currentYear - 4}
          </span>
        </motion.div>

        {/* Floating Hearts Animation */}
        <div className="flex justify-center gap-8 mb-8">
          {[...Array(5)].map((_, i) => (
            <motion.span
              key={i}
              className="text-2xl text-[#C41E3A]"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              💕
            </motion.span>
          ))}
        </div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="font-modern text-xs tracking-wider text-[#8B2252]/60"
        >
          Made with 💖 as a gift for Udit & Simran's 4th Anniversary
        </motion.p>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-8"
        >
          <motion.span
            className="font-script text-3xl md:text-4xl text-[#D4AF37]"
            animate={{
              textShadow: [
                '0 0 10px rgba(212, 175, 55, 0.3)',
                '0 0 30px rgba(212, 175, 55, 0.6)',
                '0 0 10px rgba(212, 175, 55, 0.3)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Forever & Always
          </motion.span>
        </motion.div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 50C240 90 480 10 720 50C960 90 1200 10 1440 50V100H0V50Z"
            fill="#D4AF37"
            fillOpacity="0.1"
          />
        </svg>
      </div>
    </motion.footer>
  );
};

export default Footer;
