"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Clock, Users, Package } from "lucide-react"


const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: "blur(12px)",
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
} as const

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
}

const stats = [
    { value: "10+", label: "Años fabricando colchones", icon: <Clock className="size-5" /> },
    { value: "5,000+", label: "Clientes que duermen mejor", icon: <Users className="size-5" /> },
    { value: "200+", label: "Modelos disponibles", icon: <Package className="size-5" /> },
]

export default function AboutSection() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden font-sans">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 size-full [background:radial-gradient(80%_60%_at_50%_0%,var(--color-primary)/8%,transparent_70%)]"
            />

            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="text-center"
                >
                    {/* Badge */}
                    <motion.div variants={transitionVariants.item} className="mb-5">
                        <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/8 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                            Sobre Nosotros
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={transitionVariants.item}
                        className="mx-auto max-w-3xl text-foreground text-4xl font-semibold md:text-5xl lg:text-6xl"
                    >
                        Damos forma al descanso que tu cuerpo merece
                    </motion.h2>

                    <motion.p
                        variants={transitionVariants.item}
                        className="mx-auto mt-6 max-w-2xl text-foreground text-lg text-muted-foreground"
                    >
                        Somos una empresa especializada en tecnología del descanso: colchones de muelles ensacados,
                        espumas viscoelásticas y sistemas de soporte lumbar que transforman cada noche en recuperación total.
                        Más de una década de experiencia nos respalda en cada colchón que fabricamos, combinando
                        ergónomia, transpirabilidad y firmeza en perfecta armonía.
                    </motion.p>
                </motion.div>

                {/* Mission & Vision cards in two columns */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2"
                >
                    {/* Mission Card */}
                    <motion.div variants={transitionVariants.item}>
                        <Card className="group relative h-full overflow-hidden border-border/50 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
                            {/* Accent gradient top bar */}
                            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/60 via-primary to-secondary/60 transition-all duration-300 group-hover:from-primary/80 group-hover:to-secondary/80" />
                            <CardContent className="p-8">
                                <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-colors duration-300 group-hover:bg-primary/15">
                                    <Target className="size-6" />
                                </div>
                                <h3 className="mb-3 text-xl font-semibold text-foreground">
                                    Nuestra Misión
                                </h3>
                                <p className="text-foreground text-base leading-relaxed">
                                    Democratizar el acceso a colchones de tecnología premium en América Latina.
                                    Nos comprometemos a mejorar la salud postural y la calidad del sueño de nuestros clientes
                                    mediante colchones con muelles ensacados, espumas viscoelásticas e independencia de lechos
                                    — porque un sueño reparador lo cambia todo.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div variants={transitionVariants.item}>
                        <Card className="group relative h-full overflow-hidden border-border/50 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-secondary/30 hover:shadow-lg">
                            {/* Accent gradient top bar */}
                            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-secondary/60 via-secondary to-primary/60 transition-all duration-300 group-hover:from-secondary/80 group-hover:to-primary/80" />
                            <CardContent className="p-8">
                                <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary ring-1 ring-secondary/20 transition-colors duration-300 group-hover:bg-secondary/15">
                                    <Eye className="size-6" />
                                </div>
                                <h3 className="mb-3 text-xl font-semibold text-foreground">
                                    Nuestra Visión
                                </h3>
                                <p className="text-foreground leading-relaxed">
                                    Liderar el mercado latinoamericano de colchones de tecnología avanzada,
                                    reconocidos por nuestra ingeniería del sueño, soporte lumbar diferenciado y firmeza
                                    certificada. Aspiramos a ser el colchón que elige cada familia que prioriza
                                    su salud y bienestar, construyendo relaciones basadas en la confianza y el descanso real.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>

                {/* Bottom stats strip */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3"
                >
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.label}
                            variants={transitionVariants.item}
                            className="group flex flex-col items-center justify-center gap-2 rounded-2xl border border-border/50 bg-background/50 px-6 py-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-background/70 hover:shadow-md last:col-span-2 md:last:col-span-1"
                        >
                            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-colors duration-300 group-hover:bg-primary/15">
                                {stat.icon}
                            </div>
                            <span className="text-3xl font-semibold text-about md:text-4xl">{stat.value}</span>
                            <span className="text-sm text-muted-foreground">{stat.label}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
