import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass-panel border-b border-[rgba(0,229,255,0.1)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex flex-col font-display font-bold tracking-wider hover:opacity-80 transition-opacity">
              <span className="text-lg md:text-xl gradient-lyra-text leading-tight">THE SPATIAL WAVE</span>
              <span className="text-xs md:text-sm text-brand-magenta tracking-[0.2em] uppercase">XR RESET</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#reset" className="text-sm font-medium hover:text-brand-cyan transition-colors">Il Reset</a>
            <a href="#protocol" className="text-sm font-medium hover:text-brand-cyan transition-colors">Come funziona</a>
            <a href="#bundle" className="text-sm font-medium hover:text-brand-cyan transition-colors">Bundle</a>
            <a href="#pricing" className="text-sm font-medium hover:text-brand-cyan transition-colors">Prezzo</a>
            <a href="#faq" className="text-sm font-medium hover:text-brand-cyan transition-colors">FAQ</a>
            <motion.a 
              href="https://www.skool.com/spatial-wave-6263/classroom" 
              className="px-5 py-2.5 rounded-sm bg-brand-magenta text-white font-bold hover:bg-opacity-90 transition-all shadow-[0_0_20px_rgba(255,47,214,0.4)] text-sm text-center"
              animate={{ 
                boxShadow: ["0 0 20px rgba(255,47,214,0.4)", "0 0 35px rgba(255,47,214,0.7)", "0 0 20px rgba(255,47,214,0.4)"],
                scale: [1, 1.02, 1]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Crea la tua scena XR
            </motion.a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-silver hover:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass-panel border-t border-[rgba(0,229,255,0.1)]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#reset" className="block px-3 py-2 text-base font-medium hover:text-brand-cyan">Il Reset</a>
            <a href="#protocol" className="block px-3 py-2 text-base font-medium hover:text-brand-cyan">Come funziona</a>
            <a href="#bundle" className="block px-3 py-2 text-base font-medium hover:text-brand-cyan">Bundle</a>
            <a href="#pricing" className="block px-3 py-2 text-base font-medium hover:text-brand-cyan">Prezzo</a>
            <a href="#faq" className="block px-3 py-2 text-base font-medium hover:text-brand-cyan">FAQ</a>
            <a href="https://www.skool.com/spatial-wave-6263/classroom" className="block px-3 py-2 mt-4 text-center rounded-sm bg-brand-magenta text-white font-medium glow-magenta">
              Crea la tua scena XR
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
