import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ForWho() {
  const forYou = [
    "Creator che vogliono distinguersi",
    "Designer curiosi del 3D e del web immersivo",
    "Chiunque voglia pubblicare, non solo studiare"
  ];

  const notForYou = [
    "Developer che già conoscono Three.js",
    "Chi cerca teoria infinita senza pratica",
    "Chi non ha 45 min/giorno per 7 giorni"
  ];

  return (
    <section className="py-24 bg-brand-void" id="for-who">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold gradient-lyra-text mb-6">
            Per chi è XR Reset
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* È per te */}
          <motion.div
            className="glass-card p-8 rounded-xl border border-brand-cyan/20"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-display font-bold text-brand-cyan mb-6">
              ✓ È per te se
            </h3>
            <ul className="space-y-4">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="text-brand-cyan shrink-0 mt-1" size={20} />
                  <span className="text-brand-silver">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Non è per te */}
          <motion.div
            className="glass-card p-8 rounded-xl border border-brand-magenta/20"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-display font-bold text-brand-magenta mb-6">
              ✗ Non è per te se
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X className="text-brand-magenta shrink-0 mt-1" size={20} />
                  <span className="text-brand-silver">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
