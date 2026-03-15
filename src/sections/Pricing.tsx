import { motion } from 'framer-motion';

interface Tier {
  name: string;
  price: string;
  desc: string;
  priceLabel?: string;
  priceNote?: string;
  badge?: string;
  groups?: {
    title: string;
    items: string[];
    note?: string;
  }[];
  features: string[];
  cta: string;
  highlight: boolean;
  disabled: boolean;
  link?: string;
  footer?: string;
}

export default function Pricing() {
  const tiers: Tier[] = [
    {
      name: 'Starter', price: 'Free',
      desc: 'Entra nello spazio XR\ne scopri il tuo percorso.',
      groups: [
        { 
          title: 'ESPERIENZA XR', 
          items: ['Demo scena XR nel browser', 'Esperienza XR Reset interattiva', 'Aggiornamenti Spatial Wave'],
          note: 'Entra → esplora → scopri il tuo percorso'
        }
      ],
      features: [], 
      cta: 'Inizia l’esperienza XR', highlight: false, disabled: false,
      link: 'https://xr-immersive-web-v1.vercel.app',
      footer: 'Accesso gratuito · Funziona nel browser'
    },
    {
      name: 'XR Reset Bundle', price: '€29',
      priceLabel: 'Prezzo di lancio',
      priceNote: 'Early access\nper i primi 50 creators',
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
      name: 'Lyra Hub', price: "In arrivo",
      desc: "La presenza immersiva di Lyra\nnell’ecosistema Spatial Wave.",
      priceNote: "Lyra vive nello spazio XR\ne ti accompagna tra scene immersive,\ntutorial e nuovi workflow creativi.",
      groups: [
        { title: 'IN ARRIVO', items: ['Tutorial XR e AI', 'Workflow 3D (Blender · Daz)', 'Nuove esperienze immersive'] }
      ],
      features: [],
      cta: 'Unisciti alla waitlist', highlight: false, disabled: true,
      footer: 'Early access per i primi creator XR'
    }
  ];

  return (
    <section className="py-24 bg-brand-void relative" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold gradient-lyra-text mb-6">Prodotto di <span className="text-brand-magenta">Attivazione</span></h2>
          <p className="text-lg text-brand-silver mb-8">Entra nell'ecosistema The Spatial Wave e sblocca la tua prima scena immersiva.</p>
          <div className="inline-block px-6 py-2 bg-brand-deep border border-brand-cyan/20 rounded-full text-xs font-bold uppercase tracking-[0.3em] text-brand-cyan mb-8">
             Il tuo percorso XR inizia qui
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 items-start max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              className={`p-8 rounded-2xl relative flex flex-col ${
                tier.highlight 
                  ? 'bg-brand-deep border border-brand-magenta/70 shadow-[0_0_80px_rgba(255,47,214,0.35)]' 
                  : 'bg-[#0a121e]/80 border border-brand-silver/20 opacity-90'
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              whileHover={{ scale: 1.02 }}
            >
              {tier.badge && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-cyan text-brand-void text-[10px] font-black uppercase tracking-[0.2em] px-6 py-1.5 rounded-full shadow-[0_0_20px_#00E5FF] whitespace-nowrap">
                  {tier.badge}
                </div>
              )}
              
              <div className="flex-grow">
                <h3 className="text-2xl font-display font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-brand-silver text-sm mb-6 whitespace-pre-line">{tier.desc}</p>
                
                {tier.priceLabel && (
                  <div className="text-brand-cyan text-xs font-bold uppercase tracking-widest mb-1">{tier.priceLabel}</div>
                )}
                <div className="flex items-baseline gap-2 mb-8">
                  <div className="text-6xl font-display font-black text-white">{tier.price}</div>
                  {tier.priceNote && (
                    <div className="text-brand-silver/60 text-[10px] font-medium max-w-[150px] leading-tight mt-1 whitespace-pre-line">{tier.priceNote}</div>
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
                        {group.note && (
                          <p className="text-brand-silver/60 text-[10px] font-medium mb-3 italic">{group.note}</p>
                        )}
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
              </div>

              <div className="mt-auto pt-4">
                <a
                  href={tier.disabled ? '#' : (tier.link || 'https://www.skool.com/spatial-wave-6263/classroom')}
                  target={tier.link ? "_blank" : undefined}
                  rel={tier.link ? "noopener noreferrer" : undefined}
                  className={`relative flex items-center justify-center w-full h-[48px] px-6 rounded-[10px] font-display font-black tracking-wide transition-all overflow-hidden ${
                    tier.highlight 
                      ? 'bg-brand-magenta text-white hover:bg-opacity-90 glow-magenta shadow-[0_0_25px_rgba(255,47,214,0.4)]' 
                      : 'bg-brand-silver/10 text-brand-silver hover:bg-brand-silver/20'
                  }`}
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* Journey Line - Desktop/lg Only */}
        <motion.div 
          className="hidden lg:block mt-32 relative max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="text-center mb-10">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-silver/30 bg-brand-void px-4 relative z-10">
              Il tuo percorso XR
            </span>
            <div className="absolute top-1.5 left-0 w-full h-px bg-brand-silver/5 -z-0" />
          </div>

          <div className="relative h-0.5 w-full bg-brand-silver/10">
            {/* Base Line with Subtle Flow */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-brand-cyan/40 via-brand-magenta/40 to-brand-magenta/20 opacity-50"
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Connecting Nodes with GRID logic for perfect alignment */}
            <div className="absolute inset-0 grid grid-cols-3 items-center">
              {/* Node 1: Starter */}
              <div className="flex flex-col items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-cyan/20 border border-brand-cyan/40" />
                <span className="mt-3 text-[9px] font-black text-brand-silver/30 uppercase tracking-widest">Esperienza</span>
              </div>

              {/* Node 2: Bundle (Focus) */}
              <div className="flex flex-col items-center">
                <motion.div 
                  className="w-3 h-3 rounded-full bg-brand-magenta shadow-[0_0_20px_#ff2fd6] z-10 border border-white/20"
                  animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="mt-3 text-[9px] font-black text-brand-magenta uppercase tracking-widest">Creazione</span>
              </div>

              {/* Node 3: Lyra Hub */}
              <div className="flex flex-col items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-magenta/10 border border-brand-magenta/30" />
                <span className="mt-3 text-[9px] font-black text-brand-silver/30 uppercase tracking-widest">Ecosistema</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
