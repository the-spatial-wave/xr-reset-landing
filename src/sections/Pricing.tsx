import { motion } from 'framer-motion';

export default function Pricing() {
  const tiers = [
    {
      name: 'Starter', price: 'Free',
      desc: 'Esplora il mindset.',
      features: ['Newsletter base', 'Community Read-only'],
      cta: 'Coming Soon', highlight: false, disabled: true
    },
    {
      name: 'XR Reset Bundle', price: '€29',
      priceLabel: 'Prezzo di lancio',
      priceNote: '(per i primi 50 creators)',
      badge: 'FOUNDING CREATORS',
      desc: 'Il pacchetto completo di attivazione in 7 giorni.',
      groups: [
        { title: 'COSA OTTIENI', items: ['Corso XR Reset', 'Repository starter', 'Protocollo di lancio'] },
        { title: 'ASSET INCLUSI', items: ['Audio ambienti Lyra', 'Link Vercel personale'] }
      ],
      features: [], // Fallback if needed
      cta: 'Crea la tua scena XR →', highlight: true, disabled: false,
      footer: 'Accesso immediato'
    },
    {
      name: 'Lyra Hub', price: "TBA",
      desc: "Accesso continuo all'ecosistema The Spatial Wave.",
      features: ['Materiali mensili', 'Template Premium', 'Supporto diretto'],
      cta: 'Join Waitlist', highlight: false, disabled: true
    }
  ];

  return (
    <section className="py-24 bg-brand-void relative" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold gradient-lyra-text mb-6">Prodotto di <span className="text-brand-magenta">Attivazione</span></h2>
          <p className="text-lg text-brand-silver">Entra nell'ecosistema The Spatial Wave e sblocca la tua prima scena immersiva.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              className={`p-8 rounded-2xl relative ${tier.highlight ? 'bg-brand-deep transform md:-translate-y-4 glow-lyra border-gradient-lyra' : 'glass-card border border-brand-silver/10'}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: tier.highlight ? -16 : 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              whileHover={{ scale: tier.highlight ? 1.03 : 1.02 }}
            >
              {tier.badge && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-cyan text-brand-void text-[10px] font-black uppercase tracking-[0.2em] px-6 py-1.5 rounded-full shadow-[0_0_20px_#00E5FF] whitespace-nowrap">
                  {tier.badge}
                </div>
              )}
              <h3 className="text-2xl font-display font-bold text-white mb-2">{tier.name}</h3>
              <p className="text-brand-silver text-sm mb-6">{tier.desc}</p>
              
              {tier.priceLabel && (
                <div className="text-brand-cyan text-xs font-bold uppercase tracking-widest mb-1">{tier.priceLabel}</div>
              )}
              <div className="flex items-baseline gap-2 mb-8">
                <div className="text-6xl font-display font-black text-white">{tier.price}</div>
                {tier.priceNote && (
                  <div className="text-brand-silver/60 text-[10px] font-medium max-w-[100px] leading-tight mt-1">{tier.priceNote}</div>
                )}
              </div>

              {tier.highlight && (
                <div className="flex flex-col gap-2 mb-8 -mt-4">
                  <div className="flex items-center text-[10px] sm:text-xs uppercase tracking-widest font-bold text-brand-silver/80">
                    <span className="text-brand-cyan mr-2">✔</span> Nessun software da installare
                  </div>
                  <div className="flex items-center text-[10px] sm:text-xs uppercase tracking-widest font-bold text-brand-silver/80">
                    <span className="text-brand-cyan mr-2">✔</span> Funziona nel browser
                  </div>
                  <div className="flex items-center text-[10px] sm:text-xs uppercase tracking-widest font-bold text-brand-silver/80">
                    <span className="text-brand-cyan mr-2">✔</span> Deploy pubblico su Vercel
                  </div>
                </div>
              )}

              {tier.groups ? (
                <div className="space-y-6 mb-8">
                  {tier.groups.map((group, groupIdx) => (
                    <div key={groupIdx}>
                      <h4 className="text-brand-magenta text-[10px] font-black tracking-[0.2em] uppercase mb-3">{group.title}</h4>
                      <ul className="space-y-3">
                        {group.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex font-semibold text-brand-fog text-sm items-start">
                            <span className="text-brand-magenta mr-2 opacity-50">•</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-4 mb-8">
                  {tier.features.map((f, j) => (
                    <motion.li
                      key={j}
                      className="flex font-medium text-brand-fog items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 + j * 0.06 }}
                    >
                      <span className="text-brand-magenta mr-2">•</span> {f}
                    </motion.li>
                  ))}
                </ul>
              )}

              <a
                href={tier.disabled ? '#' : 'https://www.skool.com/spatial-wave-6263/classroom'}
                className={`relative block w-full text-center py-4 rounded-sm font-display font-black tracking-wide transition-all overflow-hidden ${tier.highlight ? 'bg-brand-magenta text-white hover:bg-opacity-90 glow-magenta shadow-[0_0_25px_rgba(255,47,214,0.4)]' : 'bg-brand-silver/10 text-brand-silver hover:bg-brand-silver/20 cursor-not-allowed'}`}
              >
                {tier.highlight && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tier.cta}</span>
              </a>
              {tier.footer && (
                <div className="text-center mt-4 text-[10px] uppercase tracking-widest font-bold text-brand-silver/40">
                  {tier.footer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
