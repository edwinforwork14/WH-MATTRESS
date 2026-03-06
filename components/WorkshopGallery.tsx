'use client'; // Importante para usar hooks y animaciones
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Tipo para la imagen seleccionada en el modal
interface SelectedImage {
  src: string;
  alt: string;
  title: string;
  desc: string;
  grid: string;
  id: number;
}

const WorkshopGallery = () => {
  // Estado para la imagen seleccionada (null si ninguna está abierta)
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);

  const images = [
    {
      src: '/maquina1.jpeg',
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
        {/* Cabecera */}
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
            No somos intermediarios. Contamos con instalaciones propias.
          </p>
        </div>

        {/* Grid de Imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[300px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              layoutId={`img-${index}`} // Conecta la miniatura con el modal
              onClick={() => setSelectedImage({ ...img, id: index })}
              className={`group relative overflow-hidden rounded-xl border border-border bg-card cursor-zoom-in ${img.grid}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-6">
                <h4 className="text-white text-xl font-bold">{img.title}</h4>
                <p className="text-gray-300 text-sm transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {img.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL ANIMADO */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12">
            {/* Fondo oscuro con fade-in */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />

            {/* Contenedor de la imagen con escala y suavizado */}
            <motion.div
              layoutId={`img-${selectedImage.id}`} // Animación de "salida" desde la miniatura
              className="relative w-full max-w-5xl h-full max-h-[80vh] z-10"
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                priority
              />

              {/* Info adicional en el modal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute -bottom-12 left-0 right-0 text-center"
              >
                <h4 className="text-white text-lg font-bold">{selectedImage.title}</h4>
                <p className="text-gray-400 text-sm">{selectedImage.desc}</p>
              </motion.div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WorkshopGallery;
