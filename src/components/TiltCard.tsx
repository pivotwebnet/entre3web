import { useRef, type MouseEvent } from 'react';
import type { LucideIcon } from 'lucide-react';

type TiltCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
};

const MAX_TILT = 8;

export default function TiltCard({ icon: Icon, title, description, points }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(900px) rotateX(${-y * MAX_TILT}deg) rotateY(${x * MAX_TILT}deg) translateY(-4px)`;
  };

  const handleLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = '';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group relative flex h-full flex-col rounded-3xl border border-white/40 bg-sand-200 p-8 shadow-xl shadow-black/10 transition-[transform,box-shadow] duration-300 ease-out hover:shadow-2xl hover:shadow-black/30 [transform-style:preserve-3d]"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-900 transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-110">
        <Icon className="h-6 w-6 text-sand-200" strokeWidth={1.75} />
      </div>
      <h3 className="mt-8 text-xl text-brand-950 transition-colors duration-300 group-hover:text-brand-700">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-brand-800/80">{description}</p>

      <div className="grid grid-rows-[1fr] transition-all duration-500 ease-out md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr]">
        <ul className="min-h-0 space-y-2 overflow-hidden">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-2 pt-4 text-sm text-brand-800/90 opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
