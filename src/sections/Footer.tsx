import { Github, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 bg-brand-void border-t border-[rgba(0,229,255,0.05)] relative overflow-hidden" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="text-3xl font-display font-black gradient-lyra-text mb-2">
              XR RESET
            </div>
            <p className="text-brand-silver text-sm max-w-xs leading-relaxed">
              Pubblica la tua prima esperienza XR nel browser.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.instagram.com/thespatialwave?igsh=MWV4dWd6dXVrdzViag%3D%3D&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon-wrapper text-brand-silver/50 hover-glow-instagram transition-all"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61567490505269" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon-wrapper text-brand-silver/50 hover-glow-facebook transition-all"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="https://github.com/the-spatial-wave" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon-wrapper text-brand-silver/50 hover-glow-github transition-all"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col items-center border-t border-brand-silver/5 pt-10">
          <div className="flex flex-col items-center mb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-silver/30 mb-1">
              &copy; 2026 The Spatial Wave
            </span>
            <span className="text-[10px] font-medium text-brand-silver/20 italic">
              XR experiences in the browser
            </span>
          </div>

          <div className="flex space-x-8 mb-8 text-[10px] font-black uppercase tracking-widest text-brand-silver/40">
            <a href="#" className="hover:text-brand-silver transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-silver transition-colors">Termini e Condizioni</a>
          </div>

          <div className="text-center">
            <span className="text-[9px] font-black uppercase tracking-[0.35em] text-brand-silver/20">
              Built for the open immersive web
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
