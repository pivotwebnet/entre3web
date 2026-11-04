import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    src: 'https://images.pexels.com/photos/9900796/pexels-photo-9900796.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Estudio con cosméticos preparados para una sesión de fotografía de producto',
    caption: 'Fotografía de producto',
  },
  {
    src: 'https://images.pexels.com/photos/7289719/pexels-photo-7289719.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Mujer preparando cajas de pedidos para su tienda online',
    caption: 'Gestión de pedidos',
  },
  {
    src: 'https://images.pexels.com/photos/18880006/pexels-photo-18880006.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Equipo de cámara profesional y luces en un estudio',
    caption: 'Producción creativa',
  },
  {
    src: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Portátil rodeado de bolsas de compra y cajas',
    caption: 'Tienda online en crecimiento',
  },
  {
    src: 'https://images.pexels.com/photos/7857540/pexels-photo-7857540.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Emprendedoras gestionando su negocio entre cajas de envío',
    caption: 'Tu marca, en buenas manos',
  },
];

const AUTOPLAY_MS = 5000;

export default function PhotoCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [paused]);

  const goTo = (next: number) => setIndex((next + slides.length) % slides.length);

  return (
    <div
      className="group relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-brand-800 shadow-2xl shadow-black/30 sm:aspect-[5/4] lg:aspect-[4/5]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="carrusel"
      aria-label="Galería de trabajos"
    >
      {slides.map((slide, slideIndex) => {
        const active = slideIndex === index;
        return (
          <figure
            key={slide.src}
            aria-hidden={!active}
            className={`absolute inset-0 transition-all duration-[1200ms] ease-out ${
              active ? 'z-10 opacity-100' : 'z-0 opacity-0'
            }`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className={`h-full w-full object-cover transition-transform duration-[6000ms] ease-out ${
                active ? 'scale-110' : 'scale-100'
              }`}
            />
            <figcaption
              className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-950/90 via-brand-950/40 to-transparent px-8 pb-20 pt-24 transition-all duration-700 ${
                active ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-sand-300">
                {String(slideIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </p>
              <p className="mt-2 font-display text-2xl font-semibold text-sand-50">{slide.caption}</p>
            </figcaption>
          </figure>
        );
      })}

      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Foto anterior"
        className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-sand-50/90 text-brand-900 opacity-100 shadow-lg transition-all duration-300 hover:scale-110 md:opacity-0 md:group-hover:opacity-100"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Foto siguiente"
        className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-sand-50/90 text-brand-900 opacity-100 shadow-lg transition-all duration-300 hover:scale-110 md:opacity-0 md:group-hover:opacity-100"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute right-8 top-8 z-20 flex gap-2">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => goTo(slideIndex)}
            aria-label={`Ver foto ${slideIndex + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              slideIndex === index ? 'w-8 bg-sand-200' : 'w-3 bg-sand-50/50 hover:bg-sand-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
