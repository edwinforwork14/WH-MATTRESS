import { Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap } from 'lucide-react'

export default function Features() {
    return (
        <div className="relative overflow-hidden">
            <section className="relative pt-24 pb-32 md:pt-32 md:pb-48">

                {/* --- CAPA DE FONDO ATMOSFÉRICA --- */}
                <div className="absolute inset-0 -z-10">

                    {/* 1. Fondo base muy suave */}
                    <div className="absolute inset-0 bg-blue-50/40 dark:bg-blue-950/20"></div>

                    {/* 2. GRADIENTE TOP: Fusión perfecta con la sección superior */}
                    <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-background via-background/70 to-transparent"></div>

                    {/* 3. GRADIENTE BOTTOM: Desvanecimiento suave hacia abajo */}
                    <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-background via-background/60 to-transparent"></div>

                    {/* 4. ESFERAS DE LUZ: Azul aclarado (Opacidad aumentada) */}
                    <div className="absolute -right-[5%] top-[5%] h-[600px] w-[600px] rounded-full bg-primary/25 blur-[120px] dark:bg-primary/15"></div>
                    <div className="absolute -left-[10%] bottom-[15%] h-[500px] w-[500px] rounded-full bg-secondary/20 blur-[100px] dark:bg-secondary/10"></div>

                    {/* 5. TEXTURA TÉCNICA: Ondas de confort sutiles */}
                    <svg className="absolute inset-0 h-full w-full opacity-[0.15] dark:opacity-[0.2]" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="soft-waves" width="100" height="24" patternUnits="userSpaceOnUse">
                                <path
                                    d="M0 12 Q 25 2, 50 12 T 100 12"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    className="text-primary/30"
                                />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#soft-waves)" />
                    </svg>
                </div>
                {/* --------------------------------------------- */}

                <div className="mx-auto max-w-5xl space-y-12 px-6 md:space-y-20">
                    <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
                        <h2 className="text-balance text-4xl font-bold tracking-tight lg:text-6xl text-foreground">
                            Tecnología de descanso <br />
                            <span className="text-[#0095a8] font-extrabold">de última generación</span>
                        </h2>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            Elegir WH MATTRESS es invertir en tu salud postural. Redefinimos el estándar del sueño reparador con ingeniería avanzada.
                        </p>
                    </div>

                    {/* Grid con Glassmorphism suave que deja pasar el fondo */}
                    <div className="relative mx-auto grid max-w-4xl divide-x divide-y border border-border/50 bg-card/25 shadow-2xl shadow-primary/5 backdrop-blur-sm dark:border-border/30 dark:bg-card/10 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            { icon: Zap, title: "Muelles Ensacados", desc: "Adaptación precisa a las curvas de tu cuerpo, eliminando puntos de presión." },
                            { icon: Cpu, title: "Espuma Visco", desc: "Soporte personalizado que alivia la tensión lumbar y articular." },
                            { icon: Fingerprint, title: "Independencia", desc: "Aísla el movimiento: el descanso de tu pareja no te interrumpirá." },
                            { icon: Pencil, title: "Soporte Lumbar", desc: "Firmeza progresiva para mantener la columna en posición neutral." },
                            { icon: Settings2, title: "Regulación Térmica", desc: "Células abiertas que mantienen la temperatura ideal toda la noche." },
                            { icon: Sparkles, title: "Calidad Certificada", desc: "Avalado por estándares internacionales y pruebas ergonómicas." }
                        ].map((item, idx) => (
                            <div key={idx} className="group p-8 transition-all hover:bg-primary/5">
                                <div className="flex items-center gap-3 text-[#0095a8] mb-4">
                                    <item.icon className="size-5" />
                                    <h3 className="text-sm font-bold uppercase tracking-widest">{item.title}</h3>
                                </div>
                                <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}