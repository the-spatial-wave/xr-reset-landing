import { CheckCircle2, Link2 } from 'lucide-react';

export default function Features() {
  const items = [
    'Corso completo su Skool',
    'Repository Starter prototipato',
    'PDF Step-by-Step Setup e Launch Protocol',
    'Modulo di Reset e Ignoranza Strategica',
    'Accesso Lab / Community',
    'Audio atmosferici di Lyra',
    'Starter path 30 giorni (Post-lancio)'
  ];

  return (
    <section className="py-24 bg-brand-deep/10 border-t border-[rgba(0,229,255,0.1)] relative" id="bundle">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-brand-magenta/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Tutto quello che ottieni</h2>
          <p className="text-lg text-brand-silver">L'intero arsenale per entrare nel Web Spaziale senza farti male.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass-panel p-8 md:p-12 rounded-2xl">
            <h3 className="text-2xl font-display font-semibold text-white mb-8 border-b border-[rgba(255,255,255,0.1)] pb-4">XR Reset Bundle</h3>
            <ul className="space-y-4 mb-8">
              {items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 size={24} className="text-brand-teal mr-4 shrink-0 flex-none" />
                  <span className="text-brand-silver text-lg font-sans font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 md:p-12 border border-brand-cyan/20 rounded-2xl relative overflow-hidden bg-brand-deep/40 shadow-[0_0_30px_rgba(0,229,255,0.05)]">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-cyan/20 rounded-full blur-xl"></div>
            <div className="flex flex-col h-full justify-center text-center p-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-brand-void border border-brand-cyan/50 flex items-center justify-center mb-6 glow-cyan">
                <Link2 className="text-brand-cyan" size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">La tua Vittoria:<br /><span className="text-brand-magenta">Il Link Vercel Pubblico</span></h3>
              <p className="text-brand-silver text-lg leading-relaxed">
                Alla fine dei 7 giorni, non avrai un certificato virtuale.<br />
                Avrai <strong>un vero link condivisibile.</strong><br />
                Questa è la prova concreta della trasformazione.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
