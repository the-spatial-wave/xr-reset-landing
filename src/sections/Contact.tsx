import { useState } from 'react';

const ML_ACCOUNT = import.meta.env.VITE_MAILERLITE_ACCOUNT_ID as string | undefined;
const ML_FORM = import.meta.env.VITE_MAILERLITE_FORM_ID as string | undefined;
const SKOOL_URL = 'https://www.skool.com/spatial-wave-6263/classroom';

const configured = Boolean(ML_ACCOUNT && ML_FORM);

type Status = 'idle' | 'sending' | 'ok' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!configured || status === 'sending') return;
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus('sending');
    try {
      const res = await fetch(
        `https://assets.mailerlite.com/jsonp/${ML_ACCOUNT}/forms/${ML_FORM}/subscribe`,
        { method: 'POST', body: data }
      );
      const json = await res.json();
      if (json?.success) {
        setStatus('ok');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="py-24 bg-brand-void relative" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto glass-card p-8 md:p-12 rounded-2xl border border-brand-cyan/20">
          {configured ? (
            <>
              <div className="text-center mb-10">
                <h2 className="text-3xl font-display font-bold gradient-lyra-text mb-4">Non sei pronto oggi?</h2>
                <p className="text-brand-silver">
                  Lascia la tua email: ti mando subito il <strong className="text-white">Confusion Reset</strong>,
                  il PDF gratuito per uscire dal rumore dei tutorial. Poi decidi tu.
                </p>
              </div>

              {status === 'ok' ? (
                <div className="text-center py-8">
                  <p className="text-brand-cyan text-xl font-display font-bold mb-2">Controlla la tua inbox.</p>
                  <p className="text-brand-silver text-sm">Conferma l'iscrizione e il PDF è tuo.</p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="ml-name" className="block text-sm font-medium text-brand-silver mb-2">Nome</label>
                      <input
                        type="text"
                        id="ml-name"
                        name="fields[name]"
                        autoComplete="name"
                        className="w-full bg-brand-deep/50 border border-brand-silver/20 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/50 transition-colors"
                        placeholder="Il tuo nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="ml-email" className="block text-sm font-medium text-brand-silver mb-2">Email</label>
                      <input
                        type="email"
                        id="ml-email"
                        name="fields[email]"
                        autoComplete="email"
                        required
                        className="w-full bg-brand-deep/50 border border-brand-silver/20 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/50 transition-colors"
                        placeholder="nome@email.com"
                      />
                    </div>
                  </div>

                  {status === 'error' && (
                    <p className="text-brand-magenta text-sm text-center">
                      Qualcosa è andato storto. Riprova tra un momento.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-4 rounded-sm bg-brand-magenta text-white font-medium glow-magenta hover:bg-opacity-90 transition-opacity flex items-center justify-center disabled:opacity-60"
                  >
                    {status === 'sending' ? 'Invio…' : 'Inviami il PDF gratuito'}
                  </button>

                  <p className="text-brand-silver/50 text-xs text-center">
                    Zero spam. Iscrivendoti accetti la{' '}
                    <a href="/privacy.html" className="underline hover:text-brand-silver">Privacy Policy</a>.
                    Puoi cancellarti con un click.
                  </p>
                </form>
              )}
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-3xl font-display font-bold gradient-lyra-text mb-4">Pronto quando lo sei tu</h2>
              <p className="text-brand-silver mb-8">
                Nessun form, nessuna lista d'attesa: il protocollo è già aperto.
              </p>
              <a
                href={SKOOL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 rounded-sm bg-brand-magenta text-white font-medium glow-magenta hover:bg-opacity-90 transition-opacity"
              >
                Inizia il Reset — €29
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
