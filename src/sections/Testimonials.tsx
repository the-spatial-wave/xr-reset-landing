import { motion } from 'framer-motion';
import { Users, MessageCircle, Lock } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';

export default function Testimonials() {
  const perks = [
    {
      icon: <Users size={28} />,
      title: 'Founding Member',
      desc: 'Il protocollo è appena uscito. Chi entra ora non è uno studente tra mille: è tra i primi, e il suo feedback plasma le prossime versioni.'
    },
    {
      icon: <MessageCircle size={28} />,
      title: 'Accesso diretto',
      desc: 'Nessun tutor anonimo, nessun bot. Rispondo io, la persona che ha costruito ogni scena che hai visto in questa pagina.'
    },
    {
      icon: <Lock size={28} />,
      title: 'Prezzo bloccato',
      desc: 'I founding member entrano a €29, per sempre. Quando arriveranno le testimonianze, arriverà anche il prezzo pieno.'
    }
  ];

  return (
    <section className="py-24 bg-brand-deep/30 border-y border-[rgba(0,229,255,0.05)]" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold gradient-lyra-text mb-4">Nessuna recensione <span className="text-brand-cyan">gonfiata.</span></h2>
          <p className="text-brand-silver text-lg">
            Questa pagina ti promette sottrazione del rumore. Sarebbe strano iniziare con
            testimonianze inventate. La prova è la demo che hai già toccato — il resto lo scrivi tu.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {perks.map((p, i) => (
            <AnimatedCard key={i} index={i} glowColor="magenta">
              <div className="text-brand-cyan mb-5">{p.icon}</div>
              <h4 className="text-white font-display font-bold text-xl mb-3">{p.title}</h4>
              <p className="text-brand-silver leading-relaxed">{p.desc}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
