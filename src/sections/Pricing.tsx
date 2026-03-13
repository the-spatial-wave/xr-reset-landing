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
      desc: 'Il pacchetto completo di attivazione in 7 giorni.',
      features: ['Corso Skool', 'Repository Starter', 'Protocollo Lancio', 'Audio Atmosferici Lyra', 'Link Vercel personale'],
      cta: 'Voglio la mia prima scena XR', highlight: true, disabled: false
    },
    {
      name: 'Lyra Hub', price: "TBA",
      desc: 'Accesso continuo all\'ecosistema The Spatial Wave.',
      features: ['Materiali mensili', 'Template Premium', 'Supporto diretto'],
      cta: 'Join Waitlist', highlight: false, disabled: true
    }
  ];

  return (
    <section className="py-24 bg-brand-void relative" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Prodotto di <span className="text-brand-magenta">Attivazione</span></h2>
          <p className="text-lg text-brand-silver">Entra nell'ecosistema The Spatial Wave e sblocca la tua prima scena immersiva.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <div key={i} className={`p-8 rounded-2xl relative ${tier.highlight ? 'bg-brand-deep border-2 border-brand-cyan/50 shadow-[0_0_30px_rgba(0,229,255,0.15)] transform md:-translate-y-4 glow-cyan' : 'glass-card border border-brand-silver/10'}`}>
              {tier.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-cyan text-brand-void text-sm font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-[0_0_10px_#00E5FF]">
                  Miglior Valore
                </div>
              )}
              <h3 className="text-2xl font-display font-bold text-white mb-2">{tier.name}</h3>
              <p className="text-brand-silver text-sm mb-6">{tier.desc}</p>
              <div className="text-5xl font-display font-black text-white mb-8">{tier.price}</div>
              
              <ul className="space-y-4 mb-8">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex font-medium text-brand-fog items-start">
                    <span className="text-brand-magenta mr-2">•</span> {f}
                  </li>
                ))}
              </ul>
              
              <a href={tier.disabled ? '#' : '#checkout'} className={`block w-full text-center py-4 rounded-sm font-display font-bold tracking-wide transition-all ${tier.highlight ? 'bg-brand-magenta text-white hover:bg-opacity-90 glow-magenta' : 'bg-brand-silver/10 text-brand-silver hover:bg-brand-silver/20 cursor-not-allowed'}`}>
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
