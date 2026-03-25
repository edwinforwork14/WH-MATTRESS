'use client'; 
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageData {
  src: string;
  alt: string;
  title: string;
  desc: string;
  grid: string;
  id: number;
}

const WorkshopGallery = () => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  const images = [
    {
      src: '/maquina2.jpeg',
      alt: 'Maquinaria de precisión Dingfan',
      title: 'Tecnología de Punta',
      desc: 'Sistemas Dingfan Serie 2.',
      // Imagen grande: ocupa la mitad (6 col) y 2 filas de alto
      grid: 'md:col-span-6 md:row-span-2'
    },
    {
      src: '/maquina5.jpeg',
      alt: 'Línea de ensamblaje de colchones',
      title: 'Control de Calidad',
      desc: 'Supervisión en cada etapa.',
      // Imagen grande: ocupa la otra mitad (6 col) y 2 filas de alto
      grid: 'md:col-span-6 md:row-span-2'
    }
  ];

  return (
    <div className='pt-15'>
      <section className="py-20 bg-transparent text-foreground font-sans">
        <div className="container mx-auto px-4 glass rounded-3xl p-3 sm:p-8 md:p-14 shadow-lg">
          {/* Flex container para alinear texto e imágenes */}
          <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-center">
            
            {/* Cabecera / Textos (Izquierda) */}
            <div className="w-full lg:w-1/3 flex flex-col gap-6">
              <div>
                <h1 className="text-2xl font-bold tracking-widest uppercase text-[#132d32] mb-2">
                  INFRAESTRUCTURA
                </h1>
                <h2 className="text-5xl font-extrabold tracking-tight leading-tight">
                  Donde nace el <br /> descanso real.
                </h2>
              </div>
              <h3 className="text-muted-foreground border-l-2 border-[#132d32] pl-4 text-xl dark:text-white">
                Diseñamos y fabricamos desde nuestras propias instalaciones en Panamá.
              </h3>
            </div>

            {/* Sección Derecha: Texto y Grid */}
            <div className="w-full lg:w-2/3 flex flex-col gap-6">

              {/* Grid de Imágenes: auto-rows-[200px] para que las grandes midan 400px */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[200px]">
                {images.map((img, index) => (
                  <motion.div
                    key={index}
                    layoutId={`img-${index}`}
                    onClick={() => setSelectedImage({ ...img, id: index })}
                    className={`group relative overflow-hidden rounded-2xl border border-white/10 shadow-lg cursor-zoom-in ${img.grid}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-95 group-hover:opacity-100"
                    />
                    
                    {/* Overlay gradiente mejorado para legibilidad */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Textos sobre la imagen */}
                    <div className="absolute bottom-0 left-0 p-6">
                      <h4 className="text-white text-xl font-bold">{img.title}</h4>
                      <p className="text-gray-300 text-sm mt-1 transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        {img.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MODAL ANIMADO */}
        <AnimatePresence>
          {selectedImage && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              />

              <motion.div
                layoutId={`img-${selectedImage.id}`}
                className="relative w-full max-w-5xl h-full max-h-[80vh] z-10"
              >
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  priority
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="absolute -bottom-16 left-0 right-0 text-center"
                >
                  <h4 className="text-white text-2xl font-bold">{selectedImage.title}</h4>
                  <p className="text-gray-400 text-lg">{selectedImage.desc}</p>
                </motion.div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default WorkshopGallery;