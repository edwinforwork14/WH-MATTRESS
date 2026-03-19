"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

// ─── Types ──────────────────────────────────────────────────────────────────

interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
    badge?: string;
}

// ─── Mock Data ───────────────────────────────────────────────────────────────

const PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Colchón Cloud Luxe",
        description: "Tecnología de espuma viscoelástica de alta densidad para un descanso celestial. Diseñado para adaptarse a la forma de tu cuerpo y aliviar puntos de presión.",
        image: "/mattress_cloud_luxe.png",
        badge: "Más Confortable",
    },
    {
        id: 2,
        name: "Colchón Ortho Firm",
        description: "Soporte ortopédico superior con muelles ensacados de última generación. La opción ideal para quienes buscan firmeza y cuidado de la postura lumbar.",
        image: "/mattress_ortho_firm.png",
    },
    {
        id: 3,
        name: "Colchón AirCool Plus",
        description: "Sistema de ventilación avanzado que regula la temperatura toda la noche. Mantente fresco incluso en las noches más calurosas del verano.",
        image: "/mattress_aircool_plus.png",
        badge: "Tecnología Fresh",
    },
    {
        id: 4,
        name: "Colchón Hybrid Elite",
        description: "La fusión perfecta entre muelles de acero y capas de memory foam premium. Lo mejor de ambos mundos en un solo producto de alta gama.",
        image: "/mattress_hybrid_elite.png",
    }
];

// ─── Componente Principal ───────────────────────────────────────────────────

export default function ProductGridContainer() {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    return (
        <section className="py-12 md:py-24 bg-transparent font-sans" aria-labelledby="products-heading">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-16 text-center">
                    <h2 id="products-heading" className="text-4xl font-semibold text-balance text-title sm:text-5xl">
                        Nuestra Colección Premium
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                        Explora la ingeniería detrás de tu descanso.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {PRODUCTS.map((product) => (
                        <motion.div
                            key={product.id}
                            layoutId={`card-${product.id}`}
                            onClick={() => setSelectedProduct(product)}
                            className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-sm transition-all hover:shadow-xl"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden">
                                <motion.img
                                    layoutId={`image-${product.id}`}
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity group-hover:opacity-100" />
                            </div>
                            <div className="p-5">
                                <h3 className="text-xl font-semibold text-title">{product.name}</h3>
                                <p className="mt-2 text-sm text-primary font-medium">Ver detalles →</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ── Modal con Expansión Lateral ── */}
            <AnimatePresence>
                {selectedProduct && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProduct(null)}
                            className="absolute inset-0 bg-background/90 backdrop-blur-md"
                        />

                        {/* Modal Container */}
                        <motion.div
                            className="relative flex w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-card shadow-2xl md:flex-row"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                        >
                            {/* Imagen (Lado Izquierdo) */}
                            <div className="relative w-full md:w-1/2">
                                <motion.img
                                    layoutId={`image-${selectedProduct.id}`}
                                    src={selectedProduct.image}
                                    alt={selectedProduct.name}
                                    className="h-full min-h-[300px] w-full object-cover md:h-[600px]"
                                />
                                <button
                                    onClick={() => setSelectedProduct(null)}
                                    aria-label="Cerrar detalle de producto"
                                    className="absolute left-4 top-4 rounded-full bg-background/80 p-2 text-foreground md:hidden"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Info (Lado Derecho / Despliegue) */}
                            <motion.div
                                initial={{ x: 30, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="flex w-full flex-col justify-center p-8 md:w-1/2 md:p-12"
                            >
                                <div className="flex items-center justify-between">
                                    {selectedProduct.badge && (
                                        <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                                            {selectedProduct.badge}
                                        </span>
                                    )}
                                    <button
                                        onClick={() => setSelectedProduct(null)}
                                        aria-label="Cerrar detalle de producto"
                                        className="hidden text-muted-foreground hover:text-foreground md:block"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                <h2 className="mt-4 text-3xl font-semibold text-balance text-title md:text-4xl">
                                    {selectedProduct.name}
                                </h2>

                                <div className="mt-6 h-1 w-12 bg-primary/40" />

                                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                                    {selectedProduct.description}
                                </p>

                                <button
                                    onClick={() => {
                                        const phone = "50769889415";
                                        const message = `Hola, estoy interesado en el ${selectedProduct.name}. Me gustaría consultar disponibilidad.`;
                                        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
                                    }}
                                    className="mt-10 flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 font-bold text-background transition-transform hover:scale-105 active:scale-95"
                                >
                                    Consultar Disponibilidad
                                    <ArrowRight size={18} />
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}