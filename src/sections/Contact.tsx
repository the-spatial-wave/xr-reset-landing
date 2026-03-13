export default function Contact() {
  return (
    <section className="py-24 bg-brand-void relative" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto glass-card p-8 md:p-12 rounded-2xl border border-brand-cyan/20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-white mb-4">Contatti</h2>
            <p className="text-brand-silver">Hai dubbi sul protocollo? Lyra è in ascolto.</p>
          </div>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-silver mb-2">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-brand-deep/50 border border-brand-silver/20 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/50 transition-colors"
                  placeholder="Il tuo nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-silver mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-brand-deep/50 border border-brand-silver/20 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/50 transition-colors"
                  placeholder="nome@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-brand-silver mb-2">Messaggio</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full bg-brand-deep/50 border border-brand-silver/20 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/50 transition-colors"
                placeholder="Di cosa hai bisogno?"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full py-4 rounded-sm bg-brand-magenta text-white font-medium glow-magenta hover:bg-opacity-90 transition-opacity flex items-center justify-center"
            >
              Invia Messaggio
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
