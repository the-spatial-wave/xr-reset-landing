export default function Stats() {
  const stats = [
    { value: '7', label: 'Giorni di protocollo' },
    { value: '3', label: 'Variabili da padroneggiare' },
    { value: '1', label: 'URL pubblico Vercel' },
    { value: '€29', label: 'Prodotto di attivazione', highlight: true }
  ];

  return (
    <section className="py-12 border-y border-[rgba(0,229,255,0.1)] bg-brand-deep/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-[rgba(255,255,255,0.05)]">
          {stats.map((stat, i) => (
            <div key={i} className={`text-center px-4 ${typeof stat.highlight !== 'undefined' ? 'text-brand-magenta' : 'text-brand-cyan'}`}>
              <div className="text-4xl md:text-5xl font-display font-black mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-brand-silver uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
