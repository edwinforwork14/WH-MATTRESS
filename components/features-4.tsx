import { Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap } from 'lucide-react'

export default function Features() {
    return (
        <section className="pt-0 pb-4 md:pt-2 md:pb-12">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">Tecnología de descanso de última generación</h2>
                    <p>Elegir WH MATTRESS es invertir en tu salud postural y bienestar. Redefinimos el estándar del sueño reparador en América con colchones de ingeniería avanzada, diseñados para durar décadas.</p>
                </div>

                <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-6 sm:*:p-8 lg:*:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="text-sm font-medium">Muelles ensacados de alto rendimiento</h3>
                        </div>
                        <p className="text-sm">Cada muelle trabaja de forma independiente para adaptarse con precisión a las curvas de tu cuerpo, eliminando los puntos de presión.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4" />
                            <h3 className="text-sm font-medium">Espuma viscoelástica termosensible</h3>
                        </div>
                        <p className="text-sm">Se moldea al calor corporal para ofrecer un soporte personalizado que alivia la tensión lumbar y articular.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Fingerprint className="size-4" />

                            <h3 className="text-sm font-medium">Independencia de lechos</h3>
                        </div>
                        <p className="text-sm">El movimiento de tu compañero no te interrumpe: cada zona del colchón absorbe y aísla el movimiento de forma independiente.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Pencil className="size-4" />

                            <h3 className="text-sm font-medium">Soporte lumbar diferenciado</h3>
                        </div>
                        <p className="text-sm">Zonas de firmeza progresiva que mantienen la columna en posición neutral toda la noche, previniendo el dolor de espalda.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Settings2 className="size-4" />

                            <h3 className="text-sm font-medium">Transpirabilidad y regulación térmica</h3>
                        </div>
                        <p className="text-sm">Tejidos de alta transpirabilidad y espumas de célula abierta que mantienen la temperatura ideal durante toda la noche.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />

                            <h3 className="text-sm font-medium">Firmeza media-alta certificada</h3>
                        </div>
                        <p className="text-sm">Firmeza optimizada para la mayoría de posiciones de sueño, avalada por pruebas ergónomicas y estándares internacionales de calidad.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
