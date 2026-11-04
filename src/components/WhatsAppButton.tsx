import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/contact';

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-sand-200 text-brand-900 shadow-xl shadow-black/30 transition-all duration-300 hover:scale-110 hover:bg-white"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-sand-200/40" aria-hidden="true" />
      <MessageCircle className="relative h-6 w-6 transition-transform duration-300 group-hover:-rotate-12" />
    </a>
  );
}
