import { ArrowRight, Box } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-cyan/20 rounded-full blur-[120px] mix-blend-screen opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-magenta/10 rounded-full blur-[150px] mix-blend-screen opacity-50 pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center flex flex-col items-center">
        <div className="inline-flex items-center space-x-2 bg-brand-deep/80 border border-brand-cyan/30 px-4 py-2 rounded-full backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
          <span className="text-sm font-medium tracking-wide text-brand-silver">Nuovo Protocollo XR Attivo</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight text-white mb-6 uppercase max-w-5xl leading-tight text-gradient">
          Non stai costruendo un sito.<br className="hidden md:block" /> Stai aprendo uno spazio.
        </h1>
        
        <p className="mt-4 text-xl md:text-2xl text-brand-silver max-w-3xl mb-12 font-sans font-light leading-relaxed">
          Esci dal caos dei tutorial. Pubblica la tua <strong className="text-white font-medium">prima scena WebXR nel browser in 7 giorni.</strong> Senza diventare una developer hardcore.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mt-4">
          <a href="#pricing" className="group relative px-8 py-4 bg-brand-magenta text-white font-bold rounded-sm overflow-hidden glow-magenta flex items-center justify-center transition-transform hover:scale-105">
            <span className="relative z-10 flex items-center">
              Inizia il tuo XR Reset — €29
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </span>
          </a>
          <a href="#reset" className="px-8 py-4 bg-brand-deep border border-brand-silver/20 text-white font-medium rounded-sm hover:border-brand-cyan/50 hover:bg-brand-deep/80 transition-all flex items-center justify-center glass-card">
            Scopri il protocollo
          </a>
        </div>
        
        <div className="mt-16 flex items-center gap-6 text-sm text-brand-fog font-medium">
          <span className="flex items-center"><Box size={16} className="mr-2 text-brand-teal" /> Accesso immediato</span>
          <span className="flex items-center"><Box size={16} className="mr-2 text-brand-teal" /> Pagamento sicuro</span>
          <span className="flex items-center"><Box size={16} className="mr-2 text-brand-teal" /> Risultato in 7 giorni</span>
        </div>
      </div>
    </section>
  );
}
