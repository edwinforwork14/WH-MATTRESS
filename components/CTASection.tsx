"use client"

import { TextEffect } from '@/components/ui/text-effect'
import { WhatsAppButton } from '@/components/WhatsAppButton'

export default function CTASection() {
    return (
        <div >
            <section
                className="relative w-full min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat bg-cta-section p-6 font-sans"
            >
                {/* Overlay azul oscuro sobre la imagen de fondo */}
                <div className="absolute inset-0 bg-blue-950/55 mix-blend-multiply" aria-hidden />

                {/* Contenido con efecto Glassmorphism para que el texto sea legible y adapte al tema sin lavar la imagen completa */}
                <div className="relative z-10 text-center px-8 py-12 max-w-3xl shadow-2xl">
                    <TextEffect
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        as="h2"
                        className="text-2xl font-semibold mb-4 text-white dark:text-title sm:text-3xl md:text-4xl text-balance">
                        Transforma tus noches. Recupera tu energía.
                    </TextEffect>
                    <TextEffect
                        per="line"
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        delay={0.5}
                        as="p"
                        className="text-base w-full mb-10 text-white dark:text-white sm:text-lg md:text-xl">
                        Descubre WH: el descanso que tu cuerpo va a notar desde la primera noche.
                    </TextEffect>
                    <div className="flex justify-center">
                        <WhatsAppButton phoneNumber="50769889415" />
                    </div>
                </div>
            </section>
        </div>
    )
}