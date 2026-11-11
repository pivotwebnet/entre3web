import type { LucideIcon } from 'lucide-react';

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
};

export default function ServiceCard({ icon: Icon, title, description, points }: ServiceCardProps) {
  return (
    <div className="group relative flex h-full flex-col bg-brand-950/40 p-6 transition-colors duration-300 hover:bg-brand-900/40 lg:p-8">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-sand-200/40 bg-brand-900 text-sand-200 transition-colors duration-300 group-hover:bg-sand-200 group-hover:text-brand-900">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <h3 className="mt-6 text-xl text-sand-50 transition-colors duration-300 group-hover:text-sand-300">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-sand-100/75">{description}</p>

      <ul className="mt-5 space-y-3 border-t border-sand-200/15 pt-5">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-3 text-sm text-sand-100/85">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-300" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
