import { Camera, Clapperboard, LayoutList, Share2, ShoppingBag, Target } from 'lucide-react';
import { AnimatedText, Reveal } from '@/components/AnimatedText';
import TiltCard from '@/components/TiltCard';

const services = [
  {
    icon: ShoppingBag,
    title: 'Manejo y actualización de ecommerce',
    description: 'Administramos tu tienda online con altas de productos, precios, promociones y mejoras constantes.',
    points: ['Altas y edición de productos', 'Promociones y precios', 'Mejoras continuas de la tienda'],
  },
  {
    icon: LayoutList,
    title: 'Actualización de catálogos digitales',
    description: 'Mantenemos tus catálogos al día para que tus clientes siempre vean lo que tienes disponible.',
    points: ['Catálogos en PDF y en línea', 'Precios y stock actualizados', 'Diseño acorde a tu marca'],
  },
  {
    icon: Clapperboard,
    title: 'Contenido y media',
    description: 'Creamos piezas de foto y video para que tu marca se vea bien en cada canal.',
    points: ['Videos cortos para redes', 'Edición y formatos por plataforma', 'Piezas gráficas para campañas'],
  },
  {
    icon: Share2,
    title: 'Gestión de redes sociales',
    description: 'Planificamos, publicamos y respondemos para mantener a tu comunidad activa y en crecimiento.',
    points: ['Calendario editorial mensual', 'Publicación y programación', 'Respuesta a comentarios y mensajes'],
  },
  {
    icon: Target,
    title: 'Estrategia digital',
    description: 'Definimos hacia dónde va tu marca y qué pasos dar para llegar a tus metas de venta.',
    points: ['Análisis de mercado y competencia', 'Plan de acción con metas claras', 'Ajustes semanales según resultados'],
  },
  {
    icon: Camera,
    title: 'Fotografía para comercios',
    description: 'Fotografiamos tus productos y tu espacio con un estilo cuidado que genera confianza y deseo de compra.',
    points: ['Fotos de productos y local', 'Fondos y encuadres consistentes', 'Retoque para tienda y redes'],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-sand-300">Servicios</p>
          </Reveal>
          <AnimatedText
            text="Todo lo que tu ecommerce y tu marca necesitan para vender más."
            className="mt-4 text-4xl leading-[1.15] tracking-tight text-sand-50 sm:text-5xl"
          />
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 100} className="h-full">
              <TiltCard {...service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
