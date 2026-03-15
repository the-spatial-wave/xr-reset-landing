export default function HowItWorks() {
  const steps = [
    { num: '01', title: 'Reset & Setup', desc: 'Isoliamo l\'ambiente. Installazione pulita, zero distrazioni. Solo Node e il repo starter.' },
    { num: '02', title: 'Scolpisci lo Spazio', desc: 'Lavoriamo solo su Luce, Materia e Atmosfera. Modifichiamo il codice senza doverlo scrivere da zero.' },
    { num: '03', title: 'Lancia & Esisti', desc: 'Deploy automatico. Il tuo link live Vercel. Sei online, nel web spaziale.' }
  ];

  return (
    <section className="py-24 bg-brand-void" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold gradient-lyra-text mb-6">Cosa succede dopo</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-cyan to-brand-magenta mx-auto rounded-full opacity-50"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative mb-16">
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-brand-cyan/30 to-transparent z-0"></div>
          
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 glass-card p-8 rounded-xl flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-brand-deep border-4 border-brand-void flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,229,255,0.15)] text-3xl font-display font-black text-brand-cyan">
                {step.num}
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">{step.title}</h3>
              <p className="text-brand-silver font-medium">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl md:text-2xl text-brand-silver/50 font-medium italic">
            In meno di 7 giorni puoi passare<br />
            da spettatore a <span className="text-brand-cyan">creatore XR.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
