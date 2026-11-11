import { Handshake, MessageCircle, UserRound } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { useParallax } from '@/hooks/useParallax';

const pillars = [
  {
    icon: UserRound,
    title: 'Mirada de negocio',
    description: 'Nos involucramos en lo que pasa detrás de cada venta: tus productos, tus clientes y las decisiones que hacen avanzar la tienda.',
  },
  {
    icon: Handshake,
    title: 'Criterio compartido',
    description: 'Te contamos qué vemos, qué priorizaríamos y por qué. Las decisiones importantes se conversan, no se esconden detrás de métricas.',
  },
  {
    icon: MessageCircle,
    title: 'Trabajo que permanece',
    description: 'Construimos sistemas, criterios y contenido que puedas seguir usando cuando el proyecto crece y cambian las prioridades.',
  },
];

export default function About() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const { ref: parallaxRef, offset } = useParallax<HTMLImageElement>(20);

  return (
    <section id="quienes-somos" className="py-16 lg:py-20">
      <div className="mx-6 grid max-w-6xl items-start gap-10 border border-sand-200/10 bg-brand-950/40 p-5 sm:p-8 lg:mx-auto lg:grid-cols-2 lg:gap-16 lg:p-12">
        <div ref={ref} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden bg-brand-800 shadow-2xl shadow-black/30">
            <img
              src="https://images.pexels.com/photos/33919352/pexels-photo-33919352.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="El equipo del estudio, tres personas que trabajan codo a codo"
              className={`h-full w-full object-cover transition-transform duration-[2000ms] ease-out ${
                inView ? 'scale-100' : 'scale-110'
              }`}
              ref={parallaxRef}
              style={{ transform: `translateY(${offset}px) scale(1.1)` }}
            />
          </div>
          <div className="absolute -bottom-6 -right-4 border border-white/10 bg-brand-900/90 px-6 py-4 shadow-xl backdrop-blur-md sm:-right-6">
            <p className="font-display text-base font-semibold text-sand-50">entre3</p>
            <p className="text-xs text-sand-200/80">Estudio digital</p>
          </div>
        </div>

        <div>
          <h2 className="text-4xl leading-[1.15] tracking-tight text-sand-50 sm:text-5xl">
            Una mirada compartida para tu marca.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-sand-100/80">
            Entre nace de una idea simple: una buena marca se construye entendiendo el negocio completo. Por eso combinamos sensibilidad creativa con criterio comercial, sin separar una cosa de la otra.
          </p>

          <ul className="mt-8 divide-y divide-sand-200/10 border-y border-sand-200/10">
            {pillars.map((pillar) => (
              <li key={pillar.title} className="group flex gap-4 py-5">
                <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center border border-sand-200/30 text-sand-200 transition-colors duration-300 group-hover:bg-sand-200 group-hover:text-brand-900">
                  <pillar.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-xl text-sand-50 transition-colors duration-300 group-hover:text-sand-300">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-sand-100/75">{pillar.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <figure className="mt-10 border-l-2 border-ember-500 pl-6">
            <blockquote className="font-display text-[22px] font-bold leading-relaxed tracking-tight text-sand-100/90">
              "Hagámoslo entre 3."
            </blockquote>
          </figure>
        </div>
      </div>
    </section>
  );
}
