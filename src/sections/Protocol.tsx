import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Protocol() {
  const days = [
    { day: '1', title: 'Il Reset Mentale', desc: 'Scegliere cosa ignorare' },
    { day: '2', title: 'Micro-Obiettivo', desc: 'Il primo passo visibile' },
    { day: '3', title: 'Setup Sandbox (Pt. 1)', desc: 'Node, Git, repo starter' },
    { day: '4', title: 'Setup Sandbox (Pt. 2)', desc: 'Localhost e prime modifiche' },
    { day: '5', title: "Scolpire l'Atmosfera", desc: 'Luce, materia, nebbia' },
    { day: '6', title: 'Launch Protocol', desc: 'GitHub → Vercel → URL pubblico' },
    { day: '7', title: 'Chiusura Trasformativa', desc: 'Presenza, non perfezione' }
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 bg-brand-void" id="protocol">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold gradient-lyra-text mb-6">7 Giorni verso la <span className="text-brand-magenta">Presenza Digitale</span></h2>
          <p className="text-lg text-brand-silver">Da cartella disordinata a URL immersivo in una settimana.</p>
        </motion.div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Static background line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-brand-cyan/10 transform md:-translate-x-1/2" />

          {/* Animated fill line */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 w-px bg-gradient-to-b from-brand-cyan via-brand-magenta to-brand-cyan origin-top transform md:-translate-x-1/2"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12">
            {days.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  <div className="hidden md:block w-1/2" />

                  {/* Pulse dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 transform -translate-x-1/2 z-10">
                    <div className="w-4 h-4 rounded-full bg-brand-cyan shadow-[0_0_10px_#00E5FF]" />
                    <motion.div
                      className="absolute inset-0 rounded-full bg-brand-cyan"
                      animate={{ scale: [1, 2, 2], opacity: [0.5, 0.2, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    />
                  </div>

                  <motion.div
                    className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
                  >
                    <motion.div
                      className="glass-card p-6 rounded-xl border border-brand-silver/10"
                      whileHover={{ borderColor: 'rgba(255, 47, 214, 0.4)', scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-brand-magenta font-display font-bold text-sm tracking-wider mb-2">GIORNO {item.day}</div>
                      <h3 className="text-xl font-display font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-brand-silver">{item.desc}</p>
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
