import { PenTool, Rocket, Search } from 'lucide-react';
import { AnimatedText, Reveal } from '@/components/AnimatedText';
import { useInView } from '@/hooks/useInView';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Analizamos',
    description: 'Revisamos tu tienda, tus productos y a tus clientes para encontrar dónde está la oportunidad.',
    deliverables: ['Diagnóstico de tu ecommerce', 'Plan de acción claro'],
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Creamos',
    description: 'Actualizamos tu catálogo, producimos fotos y contenido, y lo validamos contigo antes de publicar.',
    deliverables: ['Catálogo y fotos listos', 'Contenido aprobado por ti'],
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Escalamos',
    description: 'Medimos cada semana qué funciona y ajustamos el plan para acercarnos a tus metas de venta.',
    deliverables: ['Informe semanal de resultados', 'Ajustes continuos'],
  },
];

export default function Process() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="proceso" className="border-y border-sand-200/10 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-sand-300">Proceso</p>
          </Reveal>
          <AnimatedText
            text="Tres pasos claros, sin sorpresas."
            className="mt-4 text-4xl leading-[1.15] tracking-tight text-sand-50 sm:text-5xl"
          />
        </div>

        <div ref={ref} className="relative mt-20 grid gap-12 md:grid-cols-3 md:gap-8">
          <div
            aria-hidden="true"
            className={`absolute left-0 right-0 top-6 hidden h-px origin-left bg-sand-200/30 transition-transform duration-[1500ms] ease-out md:block ${
              inView ? 'scale-x-100' : 'scale-x-0'
            }`}
          />

          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 200}>
              <article className="group relative flex h-full flex-col">
                <div className="relative flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center border border-sand-200/40 bg-brand-900 text-sand-200 transition-all duration-500 group-hover:bg-sand-200 group-hover:text-brand-900">
                    <step.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="font-display text-sm font-semibold tracking-[0.2em] text-sand-300/80">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl text-sand-50 transition-colors duration-300 group-hover:text-sand-300">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-sand-100/75">{step.description}</p>

                <ul className="mt-6 space-y-3 border-t border-sand-200/15 pt-6">
                  {step.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-sand-100/85">
                      <span className="h-1.5 w-1.5 shrink-0 bg-brand-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
