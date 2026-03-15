import { motion } from 'framer-motion';

export default function Result() {
  return (
    <section className="py-24 bg-brand-deep/20 border-y border-brand-cyan/10" id="result">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold gradient-lyra-text mb-6">
            Il tuo Risultato
          </h2>
          <p className="text-xl text-brand-silver">
            Non un certificato. <span className="text-white font-medium">Un link pubblico.</span>
          </p>
        </motion.div>

        {/* Browser mockup */}
        <motion.div
          className="max-w-2xl mx-auto relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {/* Information Badge */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-30">
            <motion.div 
              className="bg-brand-cyan text-brand-void text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(0,229,255,0.5)] flex items-center gap-2 whitespace-nowrap"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-void opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-void"></span>
              </span>
              XR Demo — prova a muoverti
            </motion.div>
          </div>

          <div className="glass-card rounded-xl overflow-hidden border border-brand-cyan/30 glow-cyan">
            {/* Browser bar */}
            <div className="bg-brand-deep/80 px-4 py-3 border-b border-brand-cyan/20 flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="flex-1 bg-brand-void/50 rounded-md px-4 py-1.5 text-center">
                <span className="text-brand-cyan font-mono text-sm">xr-reset-starter</span>
                <span className="text-brand-silver font-mono text-sm">.vercel.app</span>
              </div>
            </div>

            {/* Content preview - WebXR Iframe */}
            <div className="aspect-video bg-brand-void/20 relative">
              <iframe
                src="https://xr-reset-starter.vercel.app/"
                className="absolute inset-0 w-full h-full border-none shadow-inner"
                title="WebXR Starter Scene"
                loading="lazy"
                allow="xr-spatial-tracking; accelerometer; gyroscope; magnetometer"
              ></iframe>
            </div>
          </div>

          {/* Caption */}
          <motion.p
            className="text-center mt-8 text-brand-fog"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Alla fine dei 7 giorni, avrai un URL reale.<br />
            <span className="text-brand-cyan">Qualcosa da mostrare. Non solo da raccontare.</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
