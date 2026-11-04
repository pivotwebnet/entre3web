import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Logo from '@/components/Logo';

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Resultados', href: '#crecimiento' },
  { label: 'Proceso', href: '#proceso' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? 'border-b border-sand-200/10 bg-brand-900/95 py-3 shadow-lg shadow-brand-950/20 backdrop-blur-md'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 lg:px-8">
        <a href="#inicio" aria-label="entre, ir al inicio" className="transition-transform duration-300 hover:scale-105">
          <Logo className="h-11 w-11" />
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm font-medium text-sand-100/85 transition-colors duration-200 hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-sand-200 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="hidden items-center rounded-full bg-sand-200 px-5 py-2.5 text-sm font-semibold text-brand-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg hover:shadow-black/20 md:inline-flex"
        >
          Hablemos
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center text-sand-50 md:hidden"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${
          menuOpen ? 'max-h-80 border-t border-sand-200/10' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-base font-medium text-sand-100/90 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full bg-sand-200 px-5 py-3 text-sm font-semibold text-brand-900 transition-colors hover:bg-white"
            >
              Hablemos
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
