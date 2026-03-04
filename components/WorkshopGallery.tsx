import React from 'react';
import Image from 'next/image';

const WorkshopGallery = () => {
  const images = [
    {
      src: '/maquina1.jpeg', // Cambia por tus rutas reales
      alt: 'Vista general de la planta de producción',
      title: 'Capacidad Industrial',
      desc: 'Nave central con procesos optimizados.',
      grid: 'md:col-span-8 md:row-span-2'
    },
    {
      src: '/maquina2.jpeg',
      alt: 'Maquinaria de precisión Dingfan',
      title: 'Tecnología de Punta',
      desc: 'Sistemas Dingfan Serie 2.',
      grid: 'md:col-span-4 md:row-span-1'
    },
    {
      src: '/maquina3.jpeg',
      alt: 'Línea de ensamblaje de colchones',
      title: 'Control de Calidad',
      desc: 'Supervisión en cada etapa.',
      grid: 'md:col-span-4 md:row-span-1'
    }
  ];

  return (
    <section className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        {/* Cabecera con estilo shadcn */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-2">
              Infraestructura
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Donde nace el descanso real.
            </h3>
          </div>
          <p className="text-muted-foreground max-w-sm border-l-2 border-primary pl-4">
            No somos intermediarios. Contamos con instalaciones propias para asegurar 
            que cada colchón cumpla con estándares internacionales.
          </p>
        </div>

        {/* Grid de Imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[300px]">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-xl border border-border bg-card ${img.grid}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              {/* Overlay Gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
              
              <div className="absolute bottom-0 left-0 p-6">
                <h4 className="text-white text-xl font-bold">{img.title}</h4>
                <p className="text-gray-300 text-sm transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {img.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopGallery;