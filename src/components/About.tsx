import { Handshake, MessageCircle, UserRound } from 'lucide-react';
import { AnimatedText, Reveal } from '@/components/AnimatedText';
import { useInView } from '@/hooks/useInView';

const pillars = [
  {
    icon: UserRound,
    title: 'Trato directo',
    description: 'Tendrás una persona de contacto que conoce tu tienda y tus productos, sin intermediarios ni vueltas.',
  },
  {
    icon: Handshake,
    title: 'Honestos con los resultados',
    description: 'Te decimos qué funciona y qué no. Si algo no avanza como esperamos, lo revisamos juntos y ajustamos.',
  },
  {
    icon: MessageCircle,
    title: 'Claros y a tiempo',
    description: 'Respondemos en el día y explicamos cada avance con palabras sencillas, para que siempre sepas en qué va tu proyecto.',
  },
];

export default function About() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="quienes-somos" className="py-24 lg:py-32">
      <div className="mx-6 grid max-w-6xl items-start gap-12 border border-sand-200/10 bg-brand-950/40 p-6 sm:p-10 lg:mx-auto lg:grid-cols-2 lg:gap-20 lg:p-16">
        <div ref={ref} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden bg-brand-800 shadow-2xl shadow-black/30">
            <img
              src="https://images.pexels.com/photos/33919352/pexels-photo-33919352.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Grupo de amigos del equipo posando con buena vibra en un estudio"
              className={`h-full w-full object-cover transition-transform duration-[2000ms] ease-out ${
                inView ? 'scale-100' : 'scale-110'
              }`}
            />
          </div>
          <div className="absolute -bottom-6 -right-4 border border-white/10 bg-brand-900/90 px-6 py-4 shadow-xl backdrop-blur-md sm:-right-6">
            <p className="font-display text-lg font-semibold text-sand-50">Un equipo de amigos</p>
            <p className="text-xs text-sand-200/80">Con criterio profesional</p>
          </div>
        </div>

        <div>
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-sand-300">Quiénes somos</p>
          </Reveal>
          <AnimatedText
            text="Un estudio que hace crecer tu marca."
            className="mt-4 text-4xl leading-[1.15] tracking-tight text-sand-50 sm:text-5xl"
          />
          <Reveal delay={400}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-sand-100/80">
              Escuchamos antes de proponer y te explicamos cada paso, para que sepas en qué se usa tu tiempo y tu
              inversión.
            </p>
          </Reveal>

          <ul className="mt-10 divide-y divide-sand-200/10 border-y border-sand-200/10">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={500 + index * 150}>
                <li className="group flex gap-5 py-6">
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
              </Reveal>
            ))}
          </ul>

          <Reveal delay={1000}>
            <figure className="mt-10 border-l-2 border-sand-300 pl-6">
              <blockquote className="text-[22px] font-bold italic leading-relaxed text-sand-100/90">
                "Hagámoslo entre tres."
              </blockquote>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
