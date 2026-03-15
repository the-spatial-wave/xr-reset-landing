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

        <a href="https://www.skool.com/spatial-wave-6263/classroom" className="inline-flex items-center justify-center px-12 py-6 gradient-cta shadow-[0_0_40px_rgba(255,47,214,0.6)] text-white font-black text-xl rounded-sm overflow-hidden transition-all hover:scale-110 hover:shadow-[0_0_60px_rgba(255,47,214,0.8)]">
          Crea la tua scena XR — €29
        </a>
      </div>
    </section>
  );
}
