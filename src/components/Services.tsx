import { Clapperboard, Share2, ShoppingBag, Target } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

const services = [
  {
    icon: ShoppingBag,
    title: 'Una tienda lista para vender',
    description: 'Ordenamos el lugar donde ocurre la venta para que comprar sea fácil y tu propuesta se entienda rápido.',
    points: ['Productos, precios y promociones', 'Catálogos y stock actualizados', 'Mejoras continuas de la experiencia'],
  },
  {
    icon: Clapperboard,
    title: 'Contenido que se reconoce',
    description: 'Creamos imágenes, videos y piezas con una dirección visual consistente, no publicaciones sueltas.',
    points: ['Foto y video para cada canal', 'Piezas gráficas para campañas', 'Retoque y formatos listos para publicar'],
  },
  {
    icon: Share2,
    title: 'Una presencia que se sostiene',
    description: 'Damos continuidad a tus redes para que tu marca esté presente sin depender de la improvisación.',
    points: ['Calendario editorial mensual', 'Publicación y programación', 'Respuesta a comentarios y mensajes'],
  },
  {
    icon: Target,
    title: 'Decisiones con dirección',
    description: 'Miramos el negocio completo y elegimos qué hacer primero para que cada esfuerzo tenga sentido.',
    points: ['Análisis de mercado y competencia', 'Plan de acción con metas claras', 'Ajustes según lo que muestran los resultados'],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl leading-[1.15] tracking-tight text-sand-50 sm:text-5xl">
            Cuatro formas de hacer que tu marca avance.
          </h2>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden border border-sand-200/10 bg-sand-200/10 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
