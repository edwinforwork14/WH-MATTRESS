"use client"

import { motion } from "framer-motion"
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
                        <span className="glass inline-flex items-center rounded-full border border-primary/20 bg-primary/8 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-about">
                            Sobre Nosotros
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={transitionVariants.item}
                        className="mx-auto max-w-3xl text-balance text-4xl font-semibold md:text-5xl lg:text-6xl"
                    >
                        Diseñamos el descanso que tu cuerpo merece
                    </motion.h2>

                    <motion.p
                        variants={transitionVariants.item}
                        className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground"
                    >
                        Especialistas en tecnología del descanso. Diseñamos y fabricamos colchones con muelles ensacados, espumas viscoelásticas y sistemas de soporte lumbar que convierten cada noche en un proceso real de recuperación.<br />
                        <br />
                        Con más de una década de experiencia, perfeccionamos cada detalle para lograr el equilibrio ideal entre ergonomía, transpirabilidad y firmeza, creando un descanso que se adapta a tu cuerpo y eleva tu bienestar.
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
                    {/* Mission */}
                    <motion.div variants={transitionVariants.item}>
                        <div className="glass group relative h-full overflow-hidden rounded-2xl border border-border/60 dark:border-white/10 bg-white/20 dark:bg-white/5 backdrop-blur-2xl shadow-[0_4px_20px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.06)] dark:shadow-[0_6px_24px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.07)] ring-1 ring-inset ring-black/5 dark:ring-white/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_28px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.09)] dark:hover:shadow-[0_12px_36px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.10)] hover:border-border dark:hover:border-white/20">
                            <div className="p-8">
                                <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-colors duration-300 group-hover:bg-primary/15">
                                    <Target className="size-6" />
                                </div>
                                <h3 className="mb-3 text-xl font-semibold text-about">
                                    Nuestra Misión
                                </h3>
                                <p className="text-about/80 text-base leading-relaxed">
                                    Democratizar el acceso a colchones de tecnología premium en América Latina.
                                    Nos comprometemos a mejorar la salud postural y la calidad del sueño de nuestros clientes
                                    mediante colchones con muelles ensacados, espumas viscoelásticas e independencia de lechos
                                    — porque un sueño reparador lo cambia todo.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Vision */}
                    <motion.div variants={transitionVariants.item}>
                        <div className="glass group relative h-full overflow-hidden rounded-2xl border border-border/60 dark:border-white/10 bg-white/20 dark:bg-white/5 backdrop-blur-2xl shadow-[0_4px_20px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.06)] dark:shadow-[0_6px_24px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.07)] ring-1 ring-inset ring-black/5 dark:ring-white/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_28px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.09)] dark:hover:shadow-[0_12px_36px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.10)] hover:border-border dark:hover:border-white/20">
                            <div className="p-8">
                                <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary ring-1 ring-secondary/20 transition-colors duration-300 group-hover:bg-secondary/15">
                                    <Eye className="size-6" />
                                </div>
                                <h3 className="mb-3 text-xl font-semibold text-about">
                                    Nuestra Visión
                                </h3>
                                <p className="text-about/80 text-base leading-relaxed">
                                    Liderar el mercado latinoamericano de colchones de tecnología avanzada,
                                    reconocidos por nuestra ingeniería del sueño, soporte lumbar diferenciado y firmeza
                                    certificada. Aspiramos a ser el colchón que elige cada familia que prioriza
                                    su salud y bienestar, construyendo relaciones basadas en la confianza y el descanso real.
                                </p>
                            </div>
                        </div>
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
                            className="glass group flex flex-col items-center justify-center gap-2 rounded-2xl border border-border/60 dark:border-white/10 bg-background/40 dark:bg-white/5 px-6 py-8 text-center backdrop-blur-2xl shadow-[0_4px_20px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.06)] dark:shadow-[0_6px_24px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.07)] ring-1 ring-inset ring-black/5 dark:ring-white/5 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_28px_rgba(0,0,0,0.16)] dark:hover:shadow-[0_12px_36px_rgba(0,0,0,0.4)] hover:border-border dark:hover:border-white/20 last:col-span-2 md:last:col-span-1"
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
