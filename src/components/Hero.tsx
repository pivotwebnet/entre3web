import { ArrowUpRight } from 'lucide-react';
import { AnimatedText, Reveal } from '@/components/AnimatedText';
import PhotoCarousel from '@/components/PhotoCarousel';
import { useSpotlight } from '@/hooks/useSpotlight';

export default function Hero() {
  const spotlightRef = useSpotlight<HTMLElement>();

  return (
    <section
      ref={spotlightRef}
      id="inicio"
      className="relative overflow-hidden pb-16 pt-28 lg:pb-20 lg:pt-36 [--spotlight-x:50%] [--spotlight-y:50%]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 [background:radial-gradient(400px_at_var(--spotlight-x)_var(--spotlight-y),rgba(133,202,214,0.08),transparent)] hover:opacity-100"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <AnimatedText
            as="h1"
            text="Tu tienda, tu contenido y tu estrategia en tres manos."
            className="text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl"
          />

          <Reveal delay={500}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-sand-100/80 sm:text-lg">
              Administramos tu ecommerce, producimos tu contenido y fotografía, y definimos tu estrategia digital con una mirada puesta en el negocio completo.
            </p>
            <a
              href="#contacto"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-sand-200 px-7 py-4 text-sm font-semibold text-brand-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-xl hover:shadow-black/20 active:scale-[0.98]"
            >
              Contanos qué necesitás
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        <Reveal delay={250}>
          <PhotoCarousel />
        </Reveal>
      </div>
    </section>
  );
}
