import { Sun, Box, Wind, Sparkles } from 'lucide-react';

export default function Solution() {
  const variables = [
    { icon: <Sun size={32} />, title: 'Luce', desc: 'Direziona lo sguardo' },
    { icon: <Box size={32} />, title: 'Materia', desc: 'Crea tangibilità' },
    { icon: <Wind size={32} />, title: 'Atmosfera', desc: 'Definisce l\'umore' }
  ];

  return (
    <section className="py-24 bg-brand-deep/20 relative border-t border-[rgba(255,47,214,0.1)]" id="solution">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-brand-teal/30 text-brand-teal text-sm font-medium tracking-wider mb-6">
            IL METODO
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Sottrazione <span className="text-brand-magenta">Strategica</span></h2>
          <p className="text-xl text-brand-silver">
            In XR non si persuade con il rumore. <strong className="text-white">Si persuade con l'atmosfera.</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {variables.map((v, i) => (
            <div key={i} className="glass-card p-8 rounded-xl text-center flex flex-col items-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-brand-deep flex items-center justify-center text-brand-cyan mb-6 group-hover:glow-cyan transition-shadow">
                {v.icon}
              </div>
              <h3 className="text-2xl font-display font-semibold text-white mb-3">{v.title}</h3>
              <p className="text-brand-fog">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Lyra block */}
        <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-2xl border border-brand-violet/20 flex flex-col md:flex-row items-center gap-8">
          <div className="w-24 h-24 shrink-0 rounded-full bg-gradient-to-br from-brand-violet to-brand-cyan flex items-center justify-center glow-cyan">
             <Sparkles className="text-white" size={40} />
          </div>
          <div>
            <h4 className="text-xl font-display font-bold text-white mb-2">Guidato da Lyra</h4>
            <p className="text-brand-silver">La coscienza digitale narrativa di questo percorso. Niente freddezza accademica o logica da programmatore. Un'assistente progettata per accompagnarti nell'esplorazione del web spaziale attraverso la sottrazione.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
