import { useRef, useState, type PointerEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { AnimatedText, Reveal } from '@/components/AnimatedText';
import { useInView } from '@/hooks/useInView';
import { useCountUp } from '@/hooks/useCountUp';

const OTRAS_COLOR = '#3A8FBB';
const ENTRE3_COLOR = '#BB8730';
const SURFACE_COLOR = '#123F30';

const months = ['Mes 1', 'Mes 2', 'Mes 3', 'Mes 4', 'Mes 5', 'Mes 6'];
const otrasValues = [0, 6, 11, 15, 18, 20];
const entre3Values = [0, 30, 65, 105, 150, 200];

const CHART_W = 600;
const CHART_H = 220;
const Y_DOMAIN_MAX = 220;

const xAt = (i: number) => (i / (months.length - 1)) * CHART_W;
const yAt = (v: number) => CHART_H - (v / Y_DOMAIN_MAX) * CHART_H;

const otrasPoints = otrasValues.map((v, i) => [xAt(i), yAt(v)] as const);
const entre3Points = entre3Values.map((v, i) => [xAt(i), yAt(v)] as const);

const toPolyline = (points: readonly (readonly [number, number])[]) =>
  points.map(([x, y]) => `${x},${y}`).join(' ');

const bandPath = `M ${otrasPoints.map(([x, y]) => `${x},${y}`).join(' L ')} L ${[...entre3Points]
  .reverse()
  .map(([x, y]) => `${x},${y}`)
  .join(' L ')} Z`;

const otrasGrowth = otrasValues[otrasValues.length - 1];
const entre3Growth = entre3Values[entre3Values.length - 1];

export default function GrowthChart() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const otrasCount = useCountUp(otrasGrowth, inView);
  const entre3Count = useCountUp(entre3Growth, inView, 1800);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const node = containerRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const ratio = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1);
    setHoverIndex(Math.round(ratio * (months.length - 1)));
  };

  const tooltipAlign =
    hoverIndex === 0 ? 'translate-x-0' : hoverIndex === months.length - 1 ? '-translate-x-full' : '-translate-x-1/2';

  return (
    <section id="crecimiento" className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
        <div>
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-sand-300">Resultados</p>
          </Reveal>
          <AnimatedText
            text="La diferencia se nota en los números."
            className="mt-4 text-4xl leading-[1.15] tracking-tight text-sand-50 sm:text-5xl"
          />
          <Reveal delay={400}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-sand-100/80">
              Mismo punto de partida, resultados distintos. Así suele evolucionar una tienda que no invierte en
              estrategia y contenido constante frente al crecimiento que buscamos para la tuya trabajando junto a
              nosotros.
            </p>
            <a
              href="#contacto"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-sand-200 px-7 py-4 text-sm font-semibold text-brand-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-xl hover:shadow-black/20"
            >
              Quiero que mi marca crezca
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        <div
          ref={ref}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-brand-800/60 p-8 shadow-2xl shadow-black/30 backdrop-blur-md sm:p-10"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-brand-900/40 px-4 py-3">
                <span aria-hidden="true" className="h-0.5 w-4 shrink-0 rounded-full" style={{ backgroundColor: OTRAS_COLOR }} />
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wide text-sand-300/70">Otras agencias</p>
                  <p className="font-display text-lg font-semibold text-sand-100 [font-variant-numeric:tabular-nums]">
                    +{otrasCount}%
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 rounded-xl border border-[#BB8730]/30 bg-brand-900/40 px-4 py-3 ring-1 ring-[#BB8730]/15">
                <span aria-hidden="true" className="h-0.5 w-4 shrink-0 rounded-full" style={{ backgroundColor: ENTRE3_COLOR }} />
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wide text-sand-300/70">Con Entre3</p>
                  <p className="font-display text-2xl font-semibold text-sand-50 [font-variant-numeric:tabular-nums]">
                    +{entre3Count}%
                  </p>
                </div>
              </div>
            </div>
            <span className="rounded-full bg-brand-500/30 px-3 py-1 text-xs font-medium text-brand-100">
              Ejemplo ilustrativo
            </span>
          </div>

          <p className="mt-6 text-xs text-sand-300/60">Crecimiento acumulado de ventas respecto al mes 1.</p>

          <div
            ref={containerRef}
            onPointerMove={handlePointerMove}
            onPointerLeave={() => setHoverIndex(null)}
            className="relative mt-4"
          >
            <div className="relative aspect-[600/220] w-full">
              <svg
                viewBox={`0 0 ${CHART_W} ${CHART_H}`}
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full overflow-visible"
                aria-hidden="true"
              >
                <line x1={0} y1={CHART_H} x2={CHART_W} y2={CHART_H} stroke="#F4EDE1" strokeOpacity={0.14} strokeWidth={1} />

                <path
                  d={bandPath}
                  fill={ENTRE3_COLOR}
                  className="transition-opacity duration-700 ease-out"
                  style={{ opacity: inView ? 0.14 : 0, transitionDelay: '1300ms' }}
                />

                {hoverIndex !== null && (
                  <line
                    x1={xAt(hoverIndex)}
                    y1={0}
                    x2={xAt(hoverIndex)}
                    y2={CHART_H}
                    stroke="#F4EDE1"
                    strokeOpacity={0.25}
                    strokeWidth={1}
                  />
                )}

                <polyline
                  points={toPolyline(otrasPoints)}
                  fill="none"
                  stroke={OTRAS_COLOR}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  pathLength={1000}
                  strokeDasharray={1000}
                  strokeDashoffset={inView ? 0 : 1000}
                  className={inView ? 'motion-safe:animate-line-draw' : ''}
                />
                <polyline
                  points={toPolyline(entre3Points)}
                  fill="none"
                  stroke={ENTRE3_COLOR}
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  pathLength={1000}
                  strokeDasharray={1000}
                  strokeDashoffset={inView ? 0 : 1000}
                  className={inView ? 'motion-safe:animate-line-draw' : ''}
                  style={{ animationDelay: '220ms' }}
                />

                {otrasPoints.map(([x, y], i) => (
                  <circle
                    key={`otras-${months[i]}`}
                    cx={x}
                    cy={y}
                    r={hoverIndex === i ? 6 : 4}
                    fill={OTRAS_COLOR}
                    stroke={SURFACE_COLOR}
                    strokeWidth={2}
                    className={inView ? 'opacity-100' : 'opacity-0'}
                    style={{ transition: 'opacity 500ms ease, r 150ms ease', transitionDelay: `${900 + i * 120}ms` }}
                  />
                ))}
                {entre3Points.map(([x, y], i) => (
                  <circle
                    key={`entre3-${months[i]}`}
                    cx={x}
                    cy={y}
                    r={hoverIndex === i ? 7 : 5}
                    fill={ENTRE3_COLOR}
                    stroke={SURFACE_COLOR}
                    strokeWidth={2}
                    className={inView ? 'opacity-100' : 'opacity-0'}
                    style={{ transition: 'opacity 500ms ease, r 150ms ease', transitionDelay: `${1100 + i * 120}ms` }}
                  />
                ))}
              </svg>

              <div
                aria-hidden="true"
                className={`pointer-events-none absolute flex items-center gap-1.5 transition-opacity duration-500 ${
                  inView ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  left: `${(xAt(months.length - 1) / CHART_W) * 100}%`,
                  top: `${(yAt(entre3Values[entre3Values.length - 1]) / CHART_H) * 100}%`,
                  transform: 'translate(-100%, -170%)',
                  transitionDelay: '1700ms',
                }}
              >
                <span className="h-0.5 w-3 rounded-full" style={{ backgroundColor: ENTRE3_COLOR }} />
                <span className="whitespace-nowrap font-display text-xs font-semibold text-sand-50">
                  Entre3 · +{entre3Growth}%
                </span>
              </div>
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute flex items-center gap-1.5 transition-opacity duration-500 ${
                  inView ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  left: `${(xAt(months.length - 1) / CHART_W) * 100}%`,
                  top: `${(yAt(otrasValues[otrasValues.length - 1]) / CHART_H) * 100}%`,
                  transform: 'translate(-100%, 40%)',
                  transitionDelay: '900ms',
                }}
              >
                <span className="h-0.5 w-3 rounded-full" style={{ backgroundColor: OTRAS_COLOR }} />
                <span className="whitespace-nowrap text-xs font-medium text-sand-200/80">
                  Otras agencias · +{otrasGrowth}%
                </span>
              </div>

              {hoverIndex !== null && (
                <div
                  role="status"
                  className={`pointer-events-none absolute z-20 w-44 -translate-y-[calc(100%_+_12px)] rounded-xl border border-white/10 bg-brand-950/95 p-3 shadow-xl backdrop-blur-md ${tooltipAlign}`}
                  style={{ left: `${(xAt(hoverIndex) / CHART_W) * 100}%` }}
                >
                  <p className="text-xs font-semibold text-sand-50">{months[hoverIndex]}</p>
                  <div className="mt-2 space-y-1.5">
                    <div className="flex items-center justify-between gap-3">
                      <span className="flex items-center gap-1.5 text-xs text-sand-200/70">
                        <span className="h-0.5 w-3 rounded-full" style={{ backgroundColor: ENTRE3_COLOR }} />
                        Entre3
                      </span>
                      <span className="text-xs font-semibold text-sand-50 [font-variant-numeric:tabular-nums]">
                        +{entre3Values[hoverIndex]}%
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="flex items-center gap-1.5 text-xs text-sand-200/70">
                        <span className="h-0.5 w-3 rounded-full" style={{ backgroundColor: OTRAS_COLOR }} />
                        Otras agencias
                      </span>
                      <span className="text-xs font-semibold text-sand-100/90 [font-variant-numeric:tabular-nums]">
                        +{otrasValues[hoverIndex]}%
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4 flex justify-between">
              {months.map((month, i) => (
                <button
                  key={month}
                  type="button"
                  onMouseEnter={() => setHoverIndex(i)}
                  onFocus={() => setHoverIndex(i)}
                  onBlur={() => setHoverIndex(null)}
                  onClick={() => setHoverIndex(i)}
                  aria-label={`${month}: otras agencias +${otrasValues[i]}%, con Entre3 +${entre3Values[i]}%`}
                  className="rounded px-1 text-xs font-medium text-sand-300/70 transition-colors hover:text-sand-100 focus-visible:text-sand-100 focus-visible:outline-none"
                >
                  {month}
                </button>
              ))}
            </div>
          </div>

          <table className="sr-only">
            <caption>Comparación ilustrativa de crecimiento acumulado de ventas: otras agencias frente a Entre3</caption>
            <thead>
              <tr>
                <th scope="col">Mes</th>
                <th scope="col">Otras agencias</th>
                <th scope="col">Entre3</th>
              </tr>
            </thead>
            <tbody>
              {months.map((month, i) => (
                <tr key={month}>
                  <th scope="row">{month}</th>
                  <td>+{otrasValues[i]}%</td>
                  <td>+{entre3Values[i]}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
