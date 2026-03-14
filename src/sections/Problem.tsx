import { AlertTriangle, Layers, ZapOff, BookmarkX, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedCard from '../components/AnimatedCard';

export default function Problem() {
  const problems = [
    { icon: <Layers size={24} />, text: 'Troppi tool sovrapposti' },
    { icon: <BookmarkX size={24} />, text: 'Centinaia di tutorial salvati e mai aperti' },
    { icon: <ZapOff size={24} />, text: 'Overload informativo e rumore costante' },
    { icon: <AlertTriangle size={24} />, text: 'Senso di inadeguatezza tecnica' },
    { icon: <Clock size={24} />, text: 'Progetti iniziati con entusiasmo e abbandonati' }
  ];

  return (
    <section className="py-24 bg-brand-void relative" id="problem">
      <div className="absolute left-0 top-1/2 w-[300px] h-[300px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="md:w-2/3 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold gradient-lyra-text mb-6">La trappola del <span className="text-brand-cyan text-gradient">rumore digitale</span></h2>
          <p className="text-lg md:text-xl text-brand-silver font-sans leading-relaxed border-l-2 border-brand-cyan/50 pl-6 py-2 glass-panel">
            Il senso di inadeguatezza non è un limite personale.<br />
            <span className="text-white font-medium">È il sottoprodotto di un ecosistema che vende complessità.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((prob, i) => (
            <AnimatedCard key={i} index={i} glowColor="magenta">
              <div className="flex items-start space-x-4">
                <div className="text-brand-magenta mt-1 shrink-0">{prob.icon}</div>
                <div className="text-brand-silver font-medium">{prob.text}</div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
