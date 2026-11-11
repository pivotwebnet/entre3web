const principles = [
  { value: 'Directo', label: 'Sin intermediarios', sub: 'Hablás con quien hace el trabajo' },
  { value: 'A medida', label: 'Sin paquetes cerrados', sub: 'Priorizamos lo que tu negocio necesita' },
  { value: '24hs', label: 'Tiempo de respuesta', sub: 'Te respondemos el mismo día' },
  { value: 'Mensual', label: 'Reuniones de seguimiento', sub: 'Repasamos resultados y próximos pasos' },
];

export default function GrowthChart() {
  return (
    <section id="enfoque" className="py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl leading-[1.15] tracking-tight text-sand-50 sm:text-5xl">
            Cercanía para decidir. Criterio para avanzar.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-sand-100/80">
            Trabajamos cerca de tu negocio para entender qué necesita de verdad. Hablás con quien hace el trabajo,
            recibís respuestas claras y cada decisión tiene un porqué.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-sand-200/10 bg-sand-200/10 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => (
            <div key={p.label} className="group relative h-full overflow-hidden bg-brand-950/60 p-6 transition-colors duration-300 hover:bg-brand-900/60 lg:p-8">
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-ember-500 to-sand-200" />
              <p className="font-display text-4xl font-bold tracking-tight text-sand-50">{p.value}</p>
              <p className="mt-3 text-sm font-medium text-sand-200">{p.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-sand-100/60">{p.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
