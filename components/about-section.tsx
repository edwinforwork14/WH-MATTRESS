"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Target, Eye, Clock, Users, Package, CheckCircle2, TrendingUp, BookOpen, Leaf, Zap, Shield, RefreshCw, Award, Lightbulb, Heart, Handshake, Gem } from "lucide-react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    CarouselApi,
} from "@/components/ui/carousel"


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

const commitmentIcons = [
    <CheckCircle2 className="size-5" />,
    <TrendingUp className="size-5" />,
    <BookOpen className="size-5" />,
    <Target className="size-5" />,
    <Leaf className="size-5" />,
    <Zap className="size-5" />,
    <Shield className="size-5" />,
    <Users className="size-5" />,
    <RefreshCw className="size-5" />,
    <Award className="size-5" />,
]

const commitments = [
    { text: "Implementar y mantener procesos productivos que garanticen la calidad de nuestros colchones y sus derivados." },
    { text: "Fomentar la mejora continua de nuestros productos y del sistema de gestión integrado." },
    { text: "Proveer formación y recursos adecuados para asegurar la competencia de nuestros colaboradores." },
    { text: "Establecer objetivos claros y medibles de calidad, revisados regularmente para su adecuación y efectividad." },
    { text: "Uso responsable de los recursos naturales, minimizando los impactos ambientales de nuestras operaciones; promoviendo el reciclaje y el manejo adecuado de la disposición final." },
    { text: "Utilizar materiales y recursos de manera eficiente, promoviendo la reducción del consumo de energía, agua y otros insumos." },
    { text: "Proporcionar un ambiente de trabajo seguro, controlando los riesgos laborales en todos los procesos de fabricación, minimizando los accidentes y enfermedades laborales." },
    { text: "Fomentar la participación y consulta de los colaboradores en nuestras actividades." },
    { text: "Mantener una cultura de mejora continua en todos los niveles de la organización." },
    { text: "Nos enfocamos en la eficacia de nuestro sistema de gestión integrado para asegurar el cumplimiento de los requisitos legales, otros requisitos y del cliente." },
].map((item, index) => ({ ...item, icon: commitmentIcons[index] }))

const values = [
    { name: "Innovación", icon: <Lightbulb className="size-5" /> },
    { name: "Calidad", icon: <Shield className="size-5" /> },
    { name: "Pasión", icon: <Heart className="size-5" /> },
    { name: "Responsabilidad", icon: <Handshake className="size-5" /> },
    { name: "Integridad", icon: <Gem className="size-5" /> },
]

const stats = [
    { value: "10+", label: "Años fabricando colchones", icon: <Clock className="size-5" /> },
    { value: "5,000+", label: "Clientes que duermen mejor", icon: <Users className="size-5" /> },
    { value: "200+", label: "Modelos disponibles", icon: <Package className="size-5" /> },
]

export default function AboutSection() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [api, setApi] = useState<CarouselApi>()

    useEffect(() => {
        if (!api) return
        setCurrentSlide(api.selectedScrollSnap())

        let interval: ReturnType<typeof setInterval>
        const startInterval = () => {
            clearInterval(interval)
            interval = setInterval(() => api.scrollNext(), 3000)
        }
        startInterval()

        api.on("select", () => {
            setCurrentSlide(api.selectedScrollSnap())
            startInterval()
        })

        return () => {
            clearInterval(interval)
        }
    }, [api])

    return (
        <section className="relative py-12 md:py-12 overflow-hidden font-sans">
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
                        <span className="glass inline-flex items-center rounded-full border border-primary/20 bg-primary/8 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-title">
                            Sobre Nosotros
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={transitionVariants.item}
                        className="mx-auto max-w-3xl text-title text-4xl font-semibold md:text-5xl lg:text-6xl"
                    >
                        Diseñamos el descanso que tu cuerpo merece
                    </motion.h2>

                    <motion.p
                        variants={transitionVariants.item}
                        className="mx-auto mt-6 max-w-4xl text-balance text-[1.18125rem] text-title"
                    >
                        En WH MATTRESS S.A., nos comprometemos a ofrecer colchones como soluciones de descanso para satisfacer las expectativas de nuestros clientes, asegurando la calidad de nuestros productos y la mejora continua en nuestros procesos.<br />
                        <br />
                        Para alcanzar estos objetivos, nos comprometemos a:
                    </motion.p>

                    {/* Commitments Carousel */}
                    <style>{`
                        .carousel-mask [data-slot="carousel-content"] {
                            -webkit-mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
                            mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
                        }

                    `}</style>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-40px" }}
                        className="mt-12 pb-4"
                    >
                        <motion.div variants={transitionVariants.item}>
                            <Carousel
                                setApi={setApi}
                                opts={{
                                    align: "center",
                                    loop: true,
                                    skipSnaps: false,
                                }}
                                className="w-full relative carousel-mask"
                            >
                                <CarouselContent>
                                    {commitments.map((item, index) => (
                                        <CarouselItem key={index} className="basis-[78%] sm:basis-[50%] md:basis-[30%] lg:basis-[27%] pt-2 pb-10">
                                            <div className={`glass shadow-sm group flex flex-col justify-center h-full rounded-[2rem] px-4 py-4 sm:p-5 min-h-[120px] sm:min-h-44 transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-[0_8px_28px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.09)] dark:hover:shadow-[0_12px_36px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.10)] hover:border-border dark:hover:border-white/20 ${
                                                index === currentSlide ? 'opacity-100 scale-100 blur-none' : 'opacity-60 scale-95 blur-[2px]'
                                            }`}>
                                                <div className="sm:hidden">
                                                    <div className="float-left mr-3 mb-1 flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-colors duration-300 group-hover:bg-primary/15">
                                                        {item.icon}
                                                    </div>
                                                    <p className="text-title text-[15px] leading-6 text-left text-pretty">
                                                        {item.text}
                                                    </p>
                                                    <div className="clear-both" />
                                                </div>

                                                <div className="hidden sm:block">
                                                    <div className="mb-3 flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-colors duration-300 group-hover:bg-primary/15">
                                                        {item.icon}
                                                    </div>
                                                    <p className="text-title text-base leading-relaxed text-left text-pretty">
                                                        {item.text}
                                                    </p>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 size-11 rounded-full border-primary/20 bg-background/80 backdrop-blur-sm text-primary shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200" />
                                <CarouselNext className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 size-11 rounded-full border-primary/20 bg-background/80 backdrop-blur-sm text-primary shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200" />
                            </Carousel>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Mission & Vision cards in two columns */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2"
                >
                    {/* Mission */}
                    <motion.div variants={transitionVariants.item}>
                        <div className="glass shadow group relative h-full overflow-hidden rounded-[2.5rem] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_28px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.09)] dark:hover:shadow-[0_12px_36px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.10)] hover:border-border dark:hover:border-white/20">
                            <div className="p-8">
                                <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-colors duration-300 group-hover:bg-primary/15">
                                    <Target className="size-6" />
                                </div>
                                <h3 className="mb-3 text-xl font-semibold text-title">
                                    Nuestra Misión
                                </h3>
                                <p className="text-title text-base leading-relaxed">
                                    Nuestra misión es transformar el descanso de las personas, diseñando y fabricando productos de alta calidad, que se adapten a las necesidades únicas de cada cliente. Nos comprometemos a utilizar tecnología innovadora y materiales superiores para garantizar no solo el confort, sino también la salud y el bienestar. Buscamos ser el pilar de un descanso reparador que impulse la vida diaria de nuestros clientes.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Vision */}
                    <motion.div variants={transitionVariants.item}>
                        <div className="glass shadow group relative h-full overflow-hidden rounded-[2.5rem] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_28px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.09)] dark:hover:shadow-[0_12px_36px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.10)] hover:border-border dark:hover:border-white/20">
                            <div className="p-8">
                                <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary ring-1 ring-secondary/20 transition-colors duration-300 group-hover:bg-secondary/15">
                                    <Eye className="size-6" />
                                </div>
                                <h3 className="mb-3 text-xl font-semibold text-title">
                                    Nuestra Visión
                                </h3>
                                <p className="text-title text-base leading-relaxed">
                                    Aspiramos a ser la marca líder en el mercado de soluciones de descanso, reconocida por nuestra excelencia en la innovación, la calidad de nuestros productos y nuestro servicio al cliente excepcional. Queremos expandir nuestra presencia en toda América, estableciendo un nuevo estándar de lo que significa descansar bien. Visualizamos un futuro donde cada hogar pueda acceder a un descanso de lujo, diseñado para revitalizar el cuerpo y la mente.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Values Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    className="mt-8 text-center"
                >
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-40px" }}
                        className="grid grid-cols-2 gap-4 md:grid-cols-5"
                    >
                        {values.map((v, i) => (
                            <motion.div
                                key={v.name}
                                variants={transitionVariants.item}
                                className={`glass group flex flex-col items-center justify-center gap-3 rounded-[2.5rem] px-4 py-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_28px_rgba(0,0,0,0.16)] dark:hover:shadow-[0_12px_36px_rgba(0,0,0,0.4)] hover:border-border dark:hover:border-white/20 shadow-lg ${i === 4 ? 'hidden md:flex' : ''}`}
                            >
                                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-colors duration-300 group-hover:bg-primary/15">
                                    {v.icon}
                                </div>
                                <span className="text-lg font-semibold text-title">{v.name}</span>
                            </motion.div>
                        ))}
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
                            className="glass group flex flex-col items-center justify-center gap-2 rounded-[2.5rem] px-6 py-8 sm:p-8 md:p-14 text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_28px_rgba(0,0,0,0.16)] dark:hover:shadow-[0_12px_36px_rgba(0,0,0,0.4)] hover:border-border dark:hover:border-white/20 shadow-lg last:col-span-2 md:last:col-span-1"
                        >
                            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-colors duration-300 group-hover:bg-primary/15">
                                {stat.icon}
                            </div>
                            <span className="text-3xl font-semibold text-title md:text-4xl">{stat.value}</span>
                            <span className="text-sm text-title">{stat.label}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
