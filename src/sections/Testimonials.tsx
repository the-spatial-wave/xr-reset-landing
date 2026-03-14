import { motion } from 'framer-motion';
import AnimatedCard from '../components/AnimatedCard';

export default function Testimonials() {
  const reviews = [
    {
      name: "Elisa C.",
      role: "Digital Creator",
      quote: "Avevo 1000 tab aperti su WebGL e Three.js e non avevo mai scritto una riga sensata. In due giorni con XR Reset avevo la scena online. Sollievo totale.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%230F1C2E'/%3E%3Ccircle cx='50' cy='50' r='40' fill='%2300E5FF' opacity='0.2'/%3E%3Cpath d='M30,70 Q50,40 70,70' stroke='%23C8CCD6' stroke-width='4' fill='none'/%3E%3Ccircle cx='50' cy='40' r='15' fill='%23C8CCD6'/%3E%3C/svg%3E"
    },
    {
      name: "Marco D.",
      role: "Designer UI/UX",
      quote: "L'idea di programmare da zero mi dava ansia paralizzante. Il protocollo lavora solo sui parametri visivi essenziali (Luce, Materia). Veder comparire il link Vercel è stata un'emozione pazzesca.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%230F1C2E'/%3E%3Ccircle cx='50' cy='50' r='40' fill='%23FF2FD6' opacity='0.2'/%3E%3Cpath d='M30,70 Q50,40 70,70' stroke='%23C8CCD6' stroke-width='4' fill='none'/%3E%3Ccircle cx='50' cy='35' r='18' fill='%23C8CCD6'/%3E%3C/svg%3E"
    }
  ];

  return (
    <section className="py-24 bg-brand-deep/30 border-y border-[rgba(0,229,255,0.05)]" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold gradient-lyra-text mb-4">Meno Frustrazione. <span className="text-brand-cyan">Più Presenza.</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reviews.map((rev, i) => (
            <AnimatedCard key={i} index={i} glowColor="magenta">
              <div className="text-brand-cyan text-4xl font-display mb-4 opacity-50">"</div>
              <p className="text-brand-silver md:text-lg mb-8 italic">{rev.quote}</p>
              <div className="flex items-center">
                <img src={rev.image} alt={rev.name} className="w-12 h-12 rounded-full border-2 border-brand-deep mr-4" />
                <div>
                  <h4 className="text-white font-bold">{rev.name}</h4>
                  <div className="text-sm font-medium text-brand-magenta">{rev.role}</div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
