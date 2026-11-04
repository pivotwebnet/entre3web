const items = [
  'Manejo de ecommerce',
  'Contenido y media',
  'Estrategia digital',
  'Fotografía para comercios',
  'Catálogos digitales',
  'Gestión de redes sociales',
];

export default function TrustStrip() {
  const track = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-sand-200/10 bg-brand-950/40 py-6" aria-label="Áreas de trabajo">
      <div className="flex w-max motion-safe:animate-marquee">
        {track.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-10 pr-10">
            <span className="whitespace-nowrap font-display text-2xl font-semibold text-sand-100/80">{item}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-brand-300" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
}
