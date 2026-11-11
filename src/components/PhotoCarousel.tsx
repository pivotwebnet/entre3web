import { Carousel } from 'antd';

const slides = [
  {
    src: 'https://images.pexels.com/photos/9900796/pexels-photo-9900796.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Estudio con cosméticos preparados para una sesión de fotografía de producto',
    caption: 'Fotografía de producto',
  },
  {
    src: 'https://images.pexels.com/photos/7289719/pexels-photo-7289719.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Mujer preparando cajas de pedidos para su tienda online',
    caption: 'Gestión de pedidos',
  },
  {
    src: 'https://images.pexels.com/photos/18880006/pexels-photo-18880006.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Equipo de cámara profesional y luces en un estudio',
    caption: 'Producción creativa',
  },
  {
    src: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Portátil rodeado de bolsas de compra y cajas',
    caption: 'Tienda online en crecimiento',
  },
  {
    src: 'https://images.pexels.com/photos/7857540/pexels-photo-7857540.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Emprendedoras gestionando su negocio entre cajas de envío',
    caption: 'Tu marca, en buenas manos',
  },
];

export default function PhotoCarousel() {
  return (
    <div
      className="entre-carousel mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] bg-brand-800 shadow-2xl shadow-black/30 sm:max-w-md"
      role="region"
      aria-roledescription="carrusel"
      aria-label="Galería de trabajos"
    >
      <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
        {slides.map((slide) => (
          <div key={slide.src}>
            <div className="relative h-72 w-full sm:h-80">
              <img src={slide.src} alt={slide.alt} className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-950/90 via-brand-950/40 to-transparent px-6 pb-9 pt-16">
                <p className="font-display text-lg font-semibold text-sand-50">{slide.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
