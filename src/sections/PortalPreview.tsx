import { ExternalLink } from 'lucide-react';

export default function PortalPreview() {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-void" id="reset">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold gradient-lyra-text mb-6">Non devi immaginarlo. <span className="text-brand-magenta">Puoi già entrarci.</span></h2>
          <p className="text-lg text-brand-silver font-sans leading-relaxed">
            Questa è una scena reale pubblicata nel browser. XR Reset ti accompagna esattamente verso questo risultato: una presenza digitale viva, accessibile, tua.
          </p>
        </div>

        {/* Portal Frame */}
        <div className="relative mx-auto max-w-5xl aspect-[4/3] md:aspect-video rounded-xl overflow-hidden glass-card glow-cyan mb-12">
          {/* Finto Header Mac/Window */}
          <div className="absolute top-0 w-full h-8 bg-brand-deep/80 border-b border-brand-cyan/20 flex items-center px-4 z-20">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="mx-auto text-xs text-brand-fog font-medium tracking-wider">xr-immersive-web-v1.vercel.app</div>
          </div>
          
          <div className="w-full h-full pt-8 overflow-hidden">
            <iframe
              src="https://xr-immersive-web-v1.vercel.app/"
              className="border-none md:w-full md:h-full md:scale-100 w-[200%] h-[200%] scale-50 origin-top-left"
              title="Preview Scena XR"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="flex justify-center space-x-6">
          <a href="https://xr-immersive-web-v1.vercel.app/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-sm bg-brand-magenta text-white font-medium glow-magenta hover:opacity-90 transition-opacity flex items-center">
            Apri la scena XR <ExternalLink size={18} className="ml-2" />
          </a>
          <a href="https://www.skool.com/spatial-wave-6263/classroom" className="flex items-center px-6 py-3 rounded-sm bg-brand-deep/50 border border-brand-cyan/30 text-brand-cyan font-medium hover:bg-brand-cyan/10 transition-colors">
            Crea la tua scena
          </a>
        </div>
      </div>
    </section>
  );
}
