import { Instagram, Mail } from 'lucide-react';
import Logo from '@/components/Logo';
import { INSTAGRAM_URL } from '@/lib/contact';

export default function Footer() {
  return (
    <footer className="border-t border-sand-200/10 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex items-center gap-4">
          <Logo className="h-10 w-10" />
          <p className="text-sm text-sand-100/75">Ecommerce, contenido, estrategia digital y fotografía para comercios.</p>
        </div>

        <nav className="flex items-center gap-8" aria-label="Pie de página">
          <a href="#servicios" className="text-sm font-medium text-sand-100/85 transition-colors hover:text-white">
            Servicios
          </a>
          <a href="#proceso" className="text-sm font-medium text-sand-100/85 transition-colors hover:text-white">
            Proceso
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-sm font-medium text-sand-100/85 transition-colors hover:text-white"
          >
            <Mail className="h-4 w-4" />
            Contacto
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de entre"
            className="text-sand-100/85 transition-colors hover:text-white"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </nav>

        <p className="text-xs text-sand-200/60">© {new Date().getFullYear()} entre. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
