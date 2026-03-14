export default function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-void border-y border-[rgba(255,47,214,0.1)]">
      <div className="absolute inset-0 bg-brand-gradient opacity-10 blur-3xl mix-blend-screen pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-display font-black gradient-lyra-text mb-6 uppercase tracking-tight">Smetti di guardare. <br/><span className="text-brand-magenta text-gradient">Inizia a costruire.</span></h2>
        
        <p className="text-xl text-brand-silver max-w-2xl mx-auto mb-12 font-sans leading-relaxed">
          Il futuro non si rincorre. Si prototipa.<br />
          <strong className="text-white">La tua prima scena immersiva ti aspetta.</strong>
        </p>

        <a href="#pricing" className="inline-flex items-center justify-center px-10 py-5 gradient-cta glow-lyra text-white font-bold text-lg rounded-sm overflow-hidden transition-transform hover:scale-105">
          Inizia il tuo XR Reset — €29
        </a>
      </div>
    </section>
  );
}
