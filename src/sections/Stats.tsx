import { motion } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';

const colors = ['text-brand-cyan', 'text-brand-violet', 'text-brand-pink', 'text-brand-magenta'];

function StatItem({ value, label, index }: { value: string; label: string; highlight?: boolean; index: number }) {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const isNumeric = !isNaN(numericValue) && value.replace(/[^0-9]/g, '') !== '';
  const prefix = value.match(/^[^0-9]*/)?.[0] ?? '';
  const { count, ref, isInView } = useCountUp(isNumeric ? numericValue : 0);

  return (
    <motion.div
      ref={ref}
      className={`text-center px-4 ${colors[index % colors.length]}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="relative text-4xl md:text-5xl font-display font-black mb-2 inline-block">
        <motion.span
          className="absolute inset-0 blur-xl opacity-50"
          animate={isInView ? { opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
          aria-hidden
        >
          {isNumeric ? `${prefix}${count}` : value}
        </motion.span>
        <span className="relative">
          {isNumeric ? `${prefix}${count}` : value}
        </span>
      </div>
      <div className="text-sm font-medium text-brand-silver uppercase tracking-wider">{label}</div>
    </motion.div>
  );
}

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
            <StatItem key={i} value={stat.value} label={stat.label} highlight={stat.highlight} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
