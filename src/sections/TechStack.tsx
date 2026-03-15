import { motion } from 'framer-motion';
import { Globe, Layers, Zap, Cpu, Sparkles, Box } from 'lucide-react';

export default function TechStack() {
  const techs = [
    { 
      name: "WebXR", 
      icon: <Globe size={24} className="text-[#00E5FF]" />, 
      desc: "Standard nativo per il web spaziale." 
    },
    { 
      name: "Three.js", 
      icon: <Box size={24} className="text-white" />, 
      desc: "Il motore 3D più potente del web." 
    },
    { 
      name: "React", 
      icon: <Cpu size={24} className="text-[#61DAFB]" />, 
      desc: "Componenti moderni e scalabili." 
    },
    { 
      name: "Vercel", 
      icon: <Zap size={24} className="text-white" />, 
      desc: "Performance e deploy istantaneo." 
    },
    { 
      name: "TypeScript", 
      icon: <Layers size={24} className="text-[#3178C6]" />, 
      desc: "Codice solido e privo di errori." 
    }
  ];

  // Raddoppiamo l'array per l'effetto infinito
  const marqueeTechs = [...techs, ...techs];

  return (
    <section className="py-24 bg-brand-void border-t border-white/5 relative overflow-hidden" id="tech">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold gradient-lyra-text mb-8">
            Tecnologia dietro XR Reset
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-brand-silver/40">
            <span className="flex items-center gap-2"><Sparkles size={14} className="text-brand-cyan" /> Esperienze XR nel browser</span>
            <span className="flex items-center gap-2"><Sparkles size={14} className="text-brand-magenta" /> Grafica 3D in tempo reale</span>
            <span className="flex items-center gap-2"><Sparkles size={14} className="text-brand-violet" /> Interattività moderna</span>
            <span className="flex items-center gap-2"><Sparkles size={14} className="text-brand-silver" /> Pubblicazione immediata</span>
          </div>
        </div>

        {/* Marquee Container */}
        <div className="relative py-12 flex overflow-hidden group">
          <motion.div 
            className="flex whitespace-nowrap gap-8"
            animate={{ x: [0, -1000] }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {marqueeTechs.map((tech, i) => (
              <div 
                key={i} 
                className="inline-flex items-center gap-6 glass-card px-8 py-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors pointer-events-none"
              >
                <div className="p-3 bg-brand-deep/50 rounded-lg">
                  {tech.icon}
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-white mb-1 uppercase tracking-wider">{tech.name}</h3>
                  <p className="text-xs text-brand-silver/50 font-medium">{tech.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
          
          {/* Gradient Overlays per il fade ai bordi */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-void to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-void to-transparent z-20 pointer-events-none" />
        </div>

        <div className="text-center mt-12">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-silver/20">
            Powered by WebXR · Three.js · React · Vercel
          </p>
        </div>
      </div>
    </section>
  );
}
