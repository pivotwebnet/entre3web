import { AnimatedText, Reveal } from '@/components/AnimatedText';
import PhotoCarousel from '@/components/PhotoCarousel';

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-24 pt-32 lg:pb-32 lg:pt-44">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#E8D7BE_1px,transparent_1px),linear-gradient(to_bottom,#E8D7BE_1px,transparent_1px)] [background-size:64px_64px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 border border-sand-200/20 bg-brand-950/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-sand-200">
              <span className="h-1.5 w-1.5 animate-pulse bg-brand-300" />
              Ecommerce y marca
            </span>
          </Reveal>

          <AnimatedText
            as="h1"
            text="Hacemos crecer tu tienda online y tu marca."
            className="mt-6 text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl"
          />

          <Reveal delay={500}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-sand-100/80">
              Manejamos y actualizamos tu ecommerce, creamos contenido y media, diseñamos tu estrategia digital y fotografiamos tus productos para que tu comercio venda más.
            </p>
          </Reveal>
        </div>

        <Reveal delay={250}>
          <PhotoCarousel />
        </Reveal>
      </div>
    </section>
  );
}
