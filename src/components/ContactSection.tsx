import { Instagram, MessageCircle } from 'lucide-react';
import { INSTAGRAM_URL, WHATSAPP_URL } from '@/lib/contact';
import { useSpotlight } from '@/hooks/useSpotlight';

export default function ContactSection() {
  const spotlightRef = useSpotlight<HTMLElement>();

  return (
    <section
      ref={spotlightRef}
      id="contacto"
      className="relative overflow-hidden py-20 lg:py-28 [--spotlight-x:50%] [--spotlight-y:50%]"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/20 blur-3xl" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 [background:radial-gradient(400px_at_var(--spotlight-x)_var(--spotlight-y),rgba(233,216,192,0.06),transparent)] hover:opacity-100"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sand-200/30 to-transparent" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center lg:px-8">
        <h2 className="text-5xl font-extrabold leading-[1.1] tracking-tight text-sand-50 sm:text-6xl">¿Hablamos?</h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-sand-100/80">
          Contanos qué necesita tu tienda. Te respondemos el mismo día con una propuesta inicial, sin compromiso y sin paquetes prearmados.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-sand-200 px-8 py-4 text-base font-semibold text-brand-900 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-white active:scale-[0.98]"
          >
            <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            Escribir por WhatsApp
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-full border border-sand-200/40 px-8 py-4 text-base font-semibold text-sand-50 transition-all duration-300 hover:-translate-y-1 hover:border-sand-200 hover:bg-sand-200/10 active:scale-[0.98]"
          >
            <Instagram className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
            @entre3.club
          </a>
        </div>
      </div>
    </section>
  );
}
