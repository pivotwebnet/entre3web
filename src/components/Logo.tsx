type LogoProps = {
  className?: string;
};

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`group relative inline-block cursor-pointer [perspective:600px] ${className}`}>
      <img
        src="/assets/image.png"
        alt="Logotipo de entre"
        className="h-full w-full rounded-xl object-cover shadow-lg shadow-black/20 transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl"
      >
        <span className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-700 ease-out group-hover:left-[150%]" />
      </span>
    </div>
  );
}
