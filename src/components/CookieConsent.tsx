import { useEffect, useState } from 'react';

const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID as string | undefined;
const TIKTOK_PIXEL_ID = import.meta.env.VITE_TIKTOK_PIXEL_ID as string | undefined;

const STORAGE_KEY = 'xr_consent';
const hasPixels = Boolean(META_PIXEL_ID || TIKTOK_PIXEL_ID);

function loadMetaPixel(id: string) {
  if ((window as never as { fbq?: unknown }).fbq) return;
  const w = window as never as Record<string, unknown>;
  const fbq = function (...args: unknown[]) {
    const q = (fbq as unknown as { queue: unknown[][]; callMethod?: (...a: unknown[]) => void });
    if (q.callMethod) { q.callMethod(...args); } else { q.queue.push(args); }
  };
  (fbq as unknown as { queue: unknown[]; loaded: boolean; version: string; push: unknown }).queue = [];
  (fbq as unknown as { loaded: boolean }).loaded = true;
  (fbq as unknown as { version: string }).version = '2.0';
  w.fbq = fbq;
  if (!w._fbq) w._fbq = fbq;
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://connect.facebook.net/en_US/fbevents.js';
  document.head.appendChild(s);
  (w.fbq as (...a: unknown[]) => void)('init', id);
  (w.fbq as (...a: unknown[]) => void)('track', 'PageView');
}

function loadTikTokPixel(id: string) {
  const w = window as never as Record<string, unknown>;
  if (w.ttq) return;
  const methods = ['page', 'track', 'identify', 'instances', 'debug', 'on', 'off', 'once', 'ready', 'alias', 'group', 'enableCookie', 'disableCookie'];
  const ttq = [] as unknown as Record<string, unknown> & { push: (a: unknown) => void };
  for (const m of methods) {
    ttq[m] = (...args: unknown[]) => ttq.push([m, ...args]);
  }
  w.ttq = ttq;
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://analytics.tiktok.com/i18n/pixel/events.js?sdkid=${id}&lib=ttq`;
  document.head.appendChild(s);
  (ttq.page as () => void)();
}

function activatePixels() {
  if (META_PIXEL_ID) loadMetaPixel(META_PIXEL_ID);
  if (TIKTOK_PIXEL_ID) loadTikTokPixel(TIKTOK_PIXEL_ID);
}

export default function CookieConsent() {
  const [choice, setChoice] = useState<string | null>(() => localStorage.getItem(STORAGE_KEY));

  useEffect(() => {
    if (hasPixels && choice === 'granted') activatePixels();
  }, [choice]);

  if (!hasPixels || choice !== null) return null;

  const decide = (value: 'granted' | 'denied') => {
    localStorage.setItem(STORAGE_KEY, value);
    setChoice(value);
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4">
      <div className="max-w-3xl mx-auto glass-card rounded-xl border border-brand-cyan/20 bg-brand-void/95 backdrop-blur-md p-5 md:p-6 shadow-[0_0_30px_rgba(0,0,0,0.6)]">
        <p className="text-brand-silver text-sm leading-relaxed mb-4">
          Usiamo cookie di misurazione (Meta, TikTok) solo se accetti, per capire se le nostre
          campagne funzionano. Nessun cookie di profilazione senza il tuo ok.{' '}
          <a href="/privacy.html" className="text-brand-cyan underline hover:no-underline">Privacy</a>
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => decide('granted')}
            className="flex-1 py-3 rounded-sm bg-brand-gradient text-white font-bold text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            Accetta
          </button>
          <button
            onClick={() => decide('denied')}
            className="flex-1 py-3 rounded-sm border border-brand-silver/30 text-brand-silver font-bold text-sm tracking-wide hover:border-brand-silver/60 transition-colors"
          >
            Rifiuta
          </button>
        </div>
      </div>
    </div>
  );
}
