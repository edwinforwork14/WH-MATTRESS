"use client"

import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/ui/text-effect'
import AnimatedButton from '@/components/button'

export default function CTASection() {
    return (
        <div className="pb-20">
            <section
                className="relative w-full min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat bg-cta-section p-6"
            >
                {/* Overlay azul oscuro sobre la imagen de fondo */}
                <div className="absolute inset-0 bg-blue-950/55 mix-blend-multiply" aria-hidden />

                {/* Contenido con efecto Glassmorphism para que el texto sea legible y adapte al tema sin lavar la imagen completa */}
                <div className="relative z-10 text-center px-8 py-12 max-w-3xl shadow-2xl">
                    <TextEffect
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        as="h2"
                        className="text-4xl font-bold mb-4 text-white dark:text-foreground">
                        Transforma tus noches. Recupera tu energía.
                    </TextEffect>
                    <TextEffect
                        per="line"
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        delay={0.5}
                        as="p"
                        className="text-2xl w-full mb-10 text-white dark:text-white">
                        Descubre los colchones WH: tecnología viscoelástica, muelles ensacados y soporte lumbar diseñados para darte el sueño reparador que mereces.
                    </TextEffect>
                    <AnimatedButton text="Contactanos" onClick={() => { }} />
                </div>
            </section>
        </div>
    )
}