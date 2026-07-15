import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Faq() {
  const faqs = [
    { q: 'Devo essere un programmatore?', a: 'No. Il protocollo è basato sull\'ignoranza strategica. Imparerai solo le 3 variabili che contano (Luce, Materia, Atmosfera) manipolando codice già pronto. Nessuna base richiesta.' },
    { q: 'Serve un visore VR per seguire il corso?', a: 'No. Tutto il lavoro avviene nel browser del tuo computer. Se hai un visore (Meta Quest, Vision Pro) potrai testarlo direttamente, ma non è obbligatorio per costruire la scena.' },
    { q: 'Quanto tempo richiede?', a: 'Il protocollo dura 7 giorni. È concepito per essere seguito dedicando circa 45-60 minuti al giorno. L\'obiettivo è chiudere e pubblicare, non studiare per mesi.' },
    { q: 'Perché costa €29?', a: 'Perché è un Prodotto di Attivazione. Serve per farti oltrepassare la soglia d\'ingresso, farti ottenere un risultato reale (il link Vercel) e introdurti nell\'ecosistema Lyra Hub.' },
    { q: 'Cosa succede dopo i 7 giorni?', a: 'La tua scena rimarrà online sul tuo account Vercel gratuito. Inoltre avrai accesso al "Starter path 30 giorni" per capire come scalare e migliorare i tuoi ambienti nel Web Spaziale.' },
    { q: 'E se non fa per me?', a: 'Scrivici entro 7 giorni dall\'acquisto: valutiamo insieme la tua situazione e, se il protocollo davvero non fa per te, concordiamo il rimborso. Nessun modulo, una semplice email.' }
  ];

  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpen(open === i ? null : i);
  };

  return (
    <section className="py-24 bg-brand-deep/20 border-t border-[rgba(255,255,255,0.05)]" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold gradient-lyra-text mb-6">FAQ</h2>
          <p className="text-brand-silver text-lg">Chiarezza assoluta. Nessun attrito tecnico.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className={`glass-card rounded-lg overflow-hidden transition-all duration-300 ${open === i ? 'border-brand-cyan/40 shadow-[0_0_15px_rgba(0,229,255,0.1)]' : 'border-brand-silver/10'}`}>
              <button 
                onClick={() => toggle(i)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-display font-bold text-white pr-8">{faq.q}</span>
                {open === i ? <ChevronUp className="text-brand-cyan shrink-0" /> : <ChevronDown className="text-brand-silver shrink-0" />}
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${open === i ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-brand-silver/90 font-sans leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
