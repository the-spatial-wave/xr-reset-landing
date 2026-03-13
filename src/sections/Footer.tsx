import { Github, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 bg-brand-void border-t border-[rgba(0,229,255,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-2xl font-display font-bold text-white mb-6 md:mb-0">
            <span className="text-brand-cyan">Lyra</span> Hub
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-brand-silver hover:text-brand-cyan transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-brand-silver hover:text-brand-cyan transition-colors">
              <Youtube size={20} />
            </a>
            <a href="#" className="text-brand-silver hover:text-brand-cyan transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-brand-fog border-t border-brand-silver/10 pt-8">
          <p>&copy; {new Date().getFullYear()} The Spatial Wave. Tutti i diritti riservati.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-silver transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-silver transition-colors">Termini e Condizioni</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
