"use client"

import { motion } from "framer-motion"
import {
    Codesandbox,
    Layers,
    BadgeCheck,
    Wind,
    BedDouble,
    PersonStanding,
} from 'lucide-react'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: "blur(10px)",
            y: 16,
        },
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.25,
                duration: 1.4,
            },
        },
    },
} as const

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
}

type FeatureCard = {
    icon: React.ReactNode
    title: string
    description: string
}

const features: FeatureCard[] = [
    {
        icon: <Codesandbox className="size-6 shrink-0" strokeWidth={1.5} />,
        title: 'MUELLES ENSACADOS INDIVIDUALES',
        description:
            'Muelles embolsados de forma independiente para una adaptación precisa a tu contorno corporal, eliminando los puntos de presión.',
    },
    {
        icon: <Layers className="size-6 shrink-0" strokeWidth={1.5} />,
        title: 'ESPUMA VISCOELÁSTICA TERMOSENSIBLE',
        description:
            'Se amolda a tu calor corporal, proporcionando un soporte lumbar diferenciado que alivia la tensión articular.',
    },
    {
        icon: <BedDouble className="size-6 shrink-0" strokeWidth={1.5} />,
        title: 'INDEPENDENCIA DE LECHOS TOTAL',
        description:
            'Absorbe el movimiento de tu pareja para que puedas dormir sin interrupciones, aislando cada zona del colchón.',
    },
    {
        icon: <PersonStanding className="size-6 shrink-0" strokeWidth={1.5} />,
        title: 'SOPORTE LUMBAR DIFERENCIADO',
        description:
            'Zonas de firmeza progresiva que mantienen tu columna en posición neutral, previniendo los dolores de espalda.',
    },
    {
        icon: <Wind className="size-6 shrink-0" strokeWidth={1.5} />,
        title: 'TRANSPIRABILIDAD Y REGULACIÓN TÉRMICA',
        description:
            'Telas de alta transpirabilidad y espumas de célula abierta que mantienen una temperatura ideal durante toda la noche.',
    },
    {
        icon: <BadgeCheck className="size-6 shrink-0" strokeWidth={1.5} />,
        title: 'FIRMEZA MEDIA-ALTA CERTIFICADA',
        description:
            'Firmeza óptima para la mayoría de las posiciones de sueño, validada por rigurosos estándares internacionales de calidad.',
    },
]

function FeatureCard({ icon, title, description }: FeatureCard) {
    return (
        <motion.div
            variants={transitionVariants.item}
            className="glass shadow-lg group relative flex gap-5 rounded-[2.5rem] p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_28px_rgba(0,0,0,0.16)] dark:hover:shadow-[0_12px_36px_rgba(0,0,0,0.4)] sm:p-8"
        >
            {/* accent top bar */}
            <div className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-primary/40 to-transparent transition-all duration-300 group-hover:via-primary/70" />

            {/* icon */}
            <div className="mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-colors duration-300 group-hover:bg-primary/15">
                {icon}
            </div>

            <div className="space-y-2">
                <h3 className="text-sm font-semibold tracking-wide text-title">{title}</h3>
                <p className="text-sm text-title leading-relaxed">{description}</p>
            </div>
        </motion.div>
    )
}

export default function Features() {
    return (
        <div className="py-12 font-sans md:py-20">
            <section aria-labelledby="features-heading">
                <div className="mx-auto max-w-6xl space-y-12 px-6 md:space-y-16">

                    {/* Header */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="mx-auto max-w-2xl space-y-4 text-center"
                    >
                        <motion.div variants={transitionVariants.item}>
                            <span className="glass shadow-lg inline-flex items-center rounded-full border border-primary/20 bg-primary/8 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-about">
                                Tecnología de Descanso
                            </span>
                        </motion.div>

                        <motion.h2
                            id="features-heading"
                            variants={transitionVariants.item}
                            className="text-title text-4xl font-semibold text-balance lg:text-5xl lg:leading-tight"
                        >
                            Ingeniería avanzada<br />para tu descanso
                        </motion.h2>

                        <motion.p
                            variants={transitionVariants.item}
                            className="text-title text-base leading-relaxed"
                        >
                            Elegir un colchón WH MATTRESS es una inversión en tu bienestar y salud postural.
                            Redefinimos los estándares del sueño reparador con ingeniería avanzada y
                            materiales premium, diseñados para durar décadas.
                        </motion.p>
                    </motion.div>

                    {/* Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 shad"
                    >
                        {features.map((feature) => (
                            <FeatureCard key={feature.title} {...feature} />
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
