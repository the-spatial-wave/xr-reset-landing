export default function Protocol() {
  const days = [
    { day: '1', title: 'Il Reset Mentale', desc: 'Scegliere cosa ignorare' },
    { day: '2', title: 'Micro-Obiettivo', desc: 'Il primo passo visibile' },
    { day: '3', title: 'Setup Sandbox (Pt. 1)', desc: 'Node, Git, repo starter' },
    { day: '4', title: 'Setup Sandbox (Pt. 2)', desc: 'Localhost e prime modifiche' },
    { day: '5', title: 'Scolpire l\'Atmosfera', desc: 'Luce, materia, nebbia' },
    { day: '6', title: 'Launch Protocol', desc: 'GitHub → Vercel → URL pubblico' },
    { day: '7', title: 'Chiusura Trasformativa', desc: 'Presenza, non perfezione' }
  ];

  return (
    <section className="py-24 bg-brand-void" id="protocol">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">7 Giorni verso la <span className="text-brand-magenta">Presenza Digitale</span></h2>
          <p className="text-lg text-brand-silver">Da cartella disordinata a URL immersivo in una settimana.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-brand-cyan/20 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {days.map((item, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block w-1/2"></div>
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-brand-cyan shadow-[0_0_10px_#00E5FF] transform -translate-x-1/2 z-10"></div>
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                  <div className="glass-card p-6 rounded-xl hover:border-brand-magenta/40 transition-colors">
                    <div className="text-brand-magenta font-display font-bold text-sm tracking-wider mb-2">GIORNO {item.day}</div>
                    <h3 className="text-xl font-display font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-brand-silver">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
