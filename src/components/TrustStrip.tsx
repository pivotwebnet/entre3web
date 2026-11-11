const items = [
  'Ecommerce',
  'Contenido y media',
  'Estrategia digital',
  'Fotografía',
  'Catálogos',
  'Redes sociales',
];

export default function TrustStrip() {
  return (
    <div className="overflow-hidden border-y border-sand-200/10 bg-brand-950/40 py-4" aria-label="Áreas de trabajo">
      <div className="flex animate-marquee motion-reduce:animate-none">
        {[...items, ...items].map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-6 whitespace-nowrap px-3 text-sm font-medium text-sand-100/70">
            {item}
            <span className="h-1 w-1 shrink-0 rounded-full bg-brand-300/60" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
