import type { CSSProperties, ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

type AnimatedTextProps = {
  text: string;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
};

export function AnimatedText({ text, as: Tag = 'h2', className = '' }: AnimatedTextProps) {
  const { ref, inView } = useInView<HTMLHeadingElement>();
  const words = text.split(' ');

  return (
    <Tag ref={ref} className={`[perspective:800px] ${className}`}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className={`mr-[0.25em] inline-block whitespace-nowrap ${inView ? 'animate-word-in' : 'opacity-0'}`}
          style={{ animationDelay: `${index * 90}ms` }}
        >
          <span className="inline-block cursor-default transition-[transform,color] duration-300 ease-out hover:-translate-y-1 hover:text-sand-300">
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const style: CSSProperties = { animationDelay: `${delay}ms` };

  return (
    <div ref={ref} style={style} className={`${inView ? 'animate-fade-up' : 'opacity-0'} ${className}`}>
      {children}
    </div>
  );
}
