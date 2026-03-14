import { Sun, Box, Wind, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedCard from '../components/AnimatedCard';

export default function Solution() {
  const variables = [
    { icon: <Sun size={32} />, title: 'Luce', desc: 'Direziona lo sguardo' },
    { icon: <Box size={32} />, title: 'Materia', desc: 'Crea tangibilità' },
    { icon: <Wind size={32} />, title: 'Atmosfera', desc: "Definisce l'umore" }
  ];

  return (
    <section className="py-24 bg-brand-deep/20 relative border-t border-[rgba(255,47,214,0.1)]" id="solution">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-brand-teal/30 text-brand-teal text-sm font-medium tracking-wider mb-6">
            IL METODO
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold gradient-lyra-text mb-6">Sottrazione <span className="text-brand-magenta">Strategica</span></h2>
          <p className="text-xl text-brand-silver">
            In XR non si persuade con il rumore. <strong className="text-white">Si persuade con l'atmosfera.</strong>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {variables.map((v, i) => (
            <AnimatedCard key={i} index={i} glowColor="cyan">
              <div className="text-center flex flex-col items-center">
                <div className="relative w-16 h-16 mb-6">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-brand-deep flex items-center justify-center text-brand-cyan"
                    animate={{ y: [-5, 5, -5], rotateZ: [-2, 2, -2] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                    whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(0, 229, 255, 0.4)" }}
                  >
                    <motion.div
                      className="absolute inset-[-4px] rounded-full border border-brand-cyan/30"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                    {v.icon}
                  </motion.div>
                </div>
                <h3 className="text-2xl font-display font-semibold text-white mb-3">{v.title}</h3>
                <p className="text-brand-fog">{v.desc}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Lyra block */}
        <motion.div
          className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-2xl border border-brand-violet/20 flex flex-col md:flex-row items-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <motion.div
            className="w-24 h-24 shrink-0 rounded-full bg-gradient-to-br from-brand-violet to-brand-cyan flex items-center justify-center glow-cyan"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="text-white" size={40} />
          </motion.div>
          <div>
            <h4 className="text-xl font-display font-bold text-white mb-2">Guidato da Lyra</h4>
            <p className="text-brand-silver">La coscienza digitale narrativa di questo percorso. Niente freddezza accademica o logica da programmatore. Un'assistente progettata per accompagnarti nell'esplorazione del web spaziale attraverso la sottrazione.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
