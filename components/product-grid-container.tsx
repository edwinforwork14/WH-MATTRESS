"use client";

import React from "react";

// ─── Types ──────────────────────────────────────────────────────────────────

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    image: string;
    badge?: "Nuevo" | "Descuento" | "Más Vendido";
    rating: number;
    reviews: number;
}

// ─── Mock Data ───────────────────────────────────────────────────────────────

const PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Colchón Cloud Luxe",
        description:
            "Tecnología de espuma viscoelástica de alta densidad para un descanso celestial.",
        price: 1299,
        image:
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
        badge: "Nuevo",
        rating: 4.9,
        reviews: 128,
    },
    {
        id: 2,
        name: "Colchón Ortho Firm",
        description:
            "Soporte ortopédico superior con muelles ensacados de última generación.",
        price: 849,
        originalPrice: 1099,
        image:
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
        badge: "Descuento",
        rating: 4.7,
        reviews: 256,
    },
    {
        id: 3,
        name: "Colchón AirCool Plus",
        description:
            "Sistema de ventilación avanzado que regula la temperatura toda la noche.",
        price: 999,
        image:
            "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80",
        badge: "Más Vendido",
        rating: 4.8,
        reviews: 312,
    },
    {
        id: 4,
        name: "Colchón Hybrid Elite",
        description:
            "La fusión perfecta entre muelles de acero y capas de memory foam premium.",
        price: 1599,
        originalPrice: 1899,
        image:
            "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=600&q=80",
        badge: "Descuento",
        rating: 5.0,
        reviews: 87,
    },
    {
        id: 5,
        name: "Colchón Kids Dream",
        description:
            "Diseñado especialmente para el crecimiento saludable de los más pequeños.",
        price: 549,
        image:
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80",
        badge: "Nuevo",
        rating: 4.6,
        reviews: 64,
    },
    {
        id: 6,
        name: "Colchón Zen Balance",
        description:
            "Equilibrio perfecto entre firmeza y suavidad para todo tipo de durmientes.",
        price: 729,
        image:
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
        rating: 4.5,
        reviews: 193,
    },
];



// ─── ProductCard ─────────────────────────────────────────────────────────────

function ProductCard({ product }: { product: Product }) {
    return (
        <article
            className="group flex flex-col overflow-hidden rounded-[calc(var(--radius)+6px)] border border-border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            style={{ boxShadow: "var(--shadow-md)" }}
        >
            {/* ── Image Container ── */}
            <div className="relative overflow-hidden bg-muted" style={{ aspectRatio: "4/5" }}>
                {/* Zoom on hover */}
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    loading="lazy"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            </div>

            {/* ── Content ── */}
            <div className="p-4">
                <h3 className="line-clamp-1 font-semibold leading-snug tracking-tight text-foreground">
                    {product.name}
                </h3>
            </div>
        </article>
    );
}

// ─── ProductGridContainer ─────────────────────────────────────────────────────

export default function ProductGridContainer() {
    return (
        <section id="ProductGridContainer" className="py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12 text-center pt-13">
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        Colchones de Alta Calidad
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
                        Descubre nuestra colección premium. Cada colchón está diseñado para
                        ofrecerte el descanso que mereces.
                    </p>
                </div>

                {/* Grid — 1 col mobile · 2 tablet · 3 desktop · 4 wide desktop */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {PRODUCTS.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

            </div>
        </section>
    );
}
