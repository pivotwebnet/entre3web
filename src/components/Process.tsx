import { PenTool, Rocket, Search } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Analizamos',
    description: 'Nos contás dónde estás y qué querés destrabar. Miramos tu tienda, tus productos y el recorrido de tus clientes.',
    deliverables: ['Lectura clara de tu situación', 'Prioridades para empezar'],
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Creamos',
    description: 'Elegimos prioridades, armamos las piezas y las probamos con vos antes de ponerlas a rodar.',
    deliverables: ['Catálogo y fotos listos', 'Contenido aprobado por ti'],
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Escalamos',
    description: 'Observamos qué pasa, aprendemos de los resultados y ajustamos sin perder de vista el objetivo.',
    deliverables: ['Informe semanal de resultados', 'Ajustes continuos'],
  },
];

export default function Process() {
  return (
    <section id="proceso" className="border-y border-sand-200/10 bg-brand-950/20 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl leading-[1.15] tracking-tight text-sand-50 sm:text-5xl">
            De la primera charla a lo que sigue.
          </h2>
        </div>

        <div className="relative mt-12 grid gap-5 md:grid-cols-3">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[3.25rem] hidden h-px bg-gradient-to-r from-transparent via-sand-200/40 to-transparent md:block"
          />

          {steps.map((step) => (
            <article key={step.number} className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-sand-200/10 bg-brand-950/40 p-6 transition-all duration-300 hover:border-sand-200/25 hover:bg-brand-900/40 lg:p-8">
              <span
                className={`pointer-events-none absolute -top-8 -right-4 font-display text-[120px] font-bold leading-none text-sand-200/[0.04] transition-colors duration-500 group-hover:text-sand-200/[0.07]`}
              >
                {step.number}
              </span>

              <div className="relative flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-sand-200/40 bg-brand-900 text-sand-200 transition-all duration-500 group-hover:bg-sand-200 group-hover:text-brand-900">
                  <step.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span className="font-display text-sm font-semibold tracking-[0.2em] text-sand-300/80">
                  Paso {step.number}
                </span>
              </div>

              <h3 className="relative mt-6 text-2xl text-sand-50 transition-colors duration-300 group-hover:text-sand-300">
                {step.title}
              </h3>
              <p className="relative mt-3 text-base leading-relaxed text-sand-100/75">{step.description}</p>

              <ul className="relative mt-5 space-y-3 border-t border-sand-200/15 pt-5">
                {step.deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-sand-100/85">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-300 transition-colors duration-300 group-hover:bg-brand-200" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
