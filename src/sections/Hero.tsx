import { ArrowRight, Box } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import type { Variants } from 'framer-motion';

const easing: [number, number, number, number] = [0.25, 0.4, 0.25, 1];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: easing }
  }
};

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Parallax Glow Effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-cyan/20 rounded-full blur-[120px] mix-blend-screen opacity-50 pointer-events-none"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-magenta/10 rounded-full blur-[150px] mix-blend-screen opacity-50 pointer-events-none"
        style={{ y: y2 }}
      />

      {/* Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-brand-cyan/40 rounded-full pointer-events-none"
          style={{ top: `${20 + i * 15}%`, left: `${10 + i * 20}%` }}
          animate={{ y: [-20, 20, -20], opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}

      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center flex flex-col items-center"
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center space-x-2 bg-brand-deep/80 border-gradient-lyra px-4 py-2 rounded-full backdrop-blur-md mb-8"
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-brand-teal"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-sm font-medium tracking-wide text-brand-silver">Nuovo Protocollo XR Attivo</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-display font-black tracking-tight text-white mb-6 uppercase max-w-5xl leading-tight gradient-lyra-text"
        >
          Non stai costruendo un sito.<br className="hidden md:block" /> Stai aprendo uno spazio.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-4 text-xl md:text-2xl text-brand-silver max-w-3xl mb-12 font-sans font-light leading-relaxed"
        >
          Esci dal caos dei tutorial. Pubblica la tua <strong className="text-white font-medium">prima scena WebXR nel browser in 7 giorni.</strong> Senza diventare una developer hardcore.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mt-4">
          <a href="https://www.skool.com/spatial-wave-6263/classroom" className="group relative px-8 py-4 gradient-cta glow-lyra text-white font-bold rounded-sm overflow-hidden flex items-center justify-center transition-transform hover:scale-105">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10 flex items-center">
              Inizia il tuo XR Reset — €29
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </span>
          </a>
          <a href="#reset" className="px-8 py-4 bg-brand-deep border border-brand-silver/20 text-white font-medium rounded-sm hover:border-brand-cyan/50 hover:bg-brand-deep/80 transition-all flex items-center justify-center glass-card">
            Scopri il protocollo
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 flex items-center gap-6 text-sm text-brand-fog font-medium"
        >
          <span className="flex items-center"><Box size={16} className="mr-2 text-brand-teal" /> Accesso immediato</span>
          <span className="flex items-center"><Box size={16} className="mr-2 text-brand-teal" /> Pagamento sicuro</span>
          <span className="flex items-center"><Box size={16} className="mr-2 text-brand-teal" /> Risultato in 7 giorni</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
