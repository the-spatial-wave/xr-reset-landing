import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

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
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="glass-card rounded-xl overflow-hidden border border-brand-cyan/30 glow-cyan">
            {/* Browser bar */}
            <div className="bg-brand-deep/80 px-4 py-3 border-b border-brand-cyan/20 flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="flex-1 bg-brand-void/50 rounded-md px-4 py-1.5 text-center">
                <span className="text-brand-cyan font-mono text-sm">tuonome</span>
                <span className="text-brand-silver font-mono text-sm">.vercel.app</span>
              </div>
            </div>

            {/* Content preview */}
            <div className="p-8 bg-gradient-to-b from-brand-void to-brand-deep/50 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-brand-cyan to-brand-magenta flex items-center justify-center">
                <ExternalLink className="text-white" size={32} />
              </div>
              <p className="text-2xl font-display font-bold text-white mb-2">
                La tua scena XR
              </p>
              <p className="text-brand-silver">
                Live. Pubblica. Tua.
              </p>
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
