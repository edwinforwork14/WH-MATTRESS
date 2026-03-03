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
        image: "/mattress_cloud_luxe.png",
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
        image: "/mattress_ortho_firm.png",
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
        image: "/mattress_aircool_plus.png",
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
        image: "/mattress_hybrid_elite.png",
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
        image: "/mattress_kids_dream.png",
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
        image: "/mattress_zen_balance.png",
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
