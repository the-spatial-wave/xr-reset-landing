import { Users, Palette, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function IdealCategories() {
  const categories = [
    {
      icon: <Users className="text-brand-cyan" size={32} />,
      title: "Creator digitali",
      desc: "Creator curiosi di esplorare nuove forme di contenuto immersivo."
    },
    {
      icon: <Palette className="text-brand-magenta" size={32} />,
      title: "Designer / 3D artist",
      desc: "Designer e artisti 3D che vogliono pubblicare esperienze XR nel browser."
    },
    {
      icon: <Cpu className="text-brand-violet" size={32} />,
      title: "Sperimentatori AI / XR",
      desc: "Chi vuole capire e sperimentare il futuro del web immersivo."
    }
  ];

  return (
    <section className="py-24 bg-brand-void border-t border-white/5" id="ideal-profile">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold gradient-lyra-text mb-6">
            Per chi è XR Reset
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-cyan via-brand-magenta to-brand-violet mx-auto rounded-full opacity-30"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              className="glass-card p-10 rounded-xl border border-white/5 flex flex-col items-center text-center group hover:border-white/10 transition-all hover:translate-y-[-4px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="mb-8 opacity-60 group-hover:opacity-100 transition-opacity">
                {cat.icon}
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-4 uppercase tracking-[0.15em]">
                {cat.title}
              </h3>
              <p className="text-brand-silver/60 leading-relaxed font-medium text-sm">
                {cat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
