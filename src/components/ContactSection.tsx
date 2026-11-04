import { Instagram, MessageCircle } from 'lucide-react';
import { AnimatedText, Reveal } from '@/components/AnimatedText';
import { INSTAGRAM_URL, WHATSAPP_URL } from '@/lib/contact';

export default function ContactSection() {
  return (
    <section id="contacto" className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/20 blur-3xl" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center lg:px-8">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-sand-300">Contacto</p>
        </Reveal>
        <AnimatedText
          text="Forma parte de la historia de tu marca."
          className="mt-4 text-4xl leading-[1.15] tracking-tight text-sand-50 sm:text-5xl"
        />
        <Reveal delay={400}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-sand-100/80">
            Escríbenos por WhatsApp o sigue nuestro trabajo en Instagram. Te respondemos con una propuesta inicial,
            sin compromiso.
          </p>
        </Reveal>

        <Reveal delay={600}>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-sand-200 px-8 py-4 text-base font-semibold text-brand-900 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              Escribir por WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-sand-200/40 px-8 py-4 text-base font-semibold text-sand-50 transition-all duration-300 hover:-translate-y-1 hover:border-sand-200 hover:bg-sand-200/10"
            >
              <Instagram className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
              @entre3.club
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
