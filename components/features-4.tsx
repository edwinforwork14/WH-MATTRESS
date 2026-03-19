import {
    Codesandbox,
    Layers,
    BadgeCheck,
    Wind,
    BedDouble,
    PersonStanding,
} from 'lucide-react'

type FeatureCard = {
    icon: React.ReactNode
    title: string
    description: string
}

const features: FeatureCard[] = [
    {
        icon: <Codesandbox className="size-10 shrink-0" strokeWidth={1.25} />,
        title: 'MUELLES ENSACADOS INDIVIDUALES',
        description:
            'Muelles embolsados de forma independiente para una adaptación precisa a tu contorno corporal, eliminando los puntos de presión.',
    },
    {
        icon: <Layers className="size-10 shrink-0" strokeWidth={1.25} />,
        title: 'ESPUMA VISCOELÁSTICA TERMOSENSIBLE',
        description:
            'Se amolda a tu calor corporal, proporcionando un soporte lumbar diferenciado que alivia la tensión articular.',
    },
    {
        icon: <BedDouble className="size-10 shrink-0" strokeWidth={1.25} />,
        title: 'INDEPENDENCIA DE LECHOS TOTAL',
        description:
            'Absorbe el movimiento de tu pareja para que puedas dormir sin interrupciones, aislando cada zona del colchón.',
    },
    {
        icon: <PersonStanding className="size-10 shrink-0" strokeWidth={1.25} />,
        title: 'SOPORTE LUMBAR DIFERENCIADO',
        description:
            'Zonas de firmeza progresiva que mantienen tu columna en posición neutral, previniendo los dolores de espalda.',
    },
    {
        icon: <Wind className="size-10 shrink-0" strokeWidth={1.25} />,
        title: 'TRANSPIRABILIDAD Y REGULACIÓN TÉRMICA',
        description:
            'Telas de alta transpirabilidad y espumas de célula abierta que mantienen una temperatura ideal durante toda la noche.',
    },
    {
        icon: <BadgeCheck className="size-10 shrink-0" strokeWidth={1.25} />,
        title: 'FIRMEZA MEDIA-ALTA CERTIFICADA',
        description:
            'Firmeza óptima para la mayoría de las posiciones de sueño, validada por rigurosos estándares internacionales de calidad.',
    },
]

function FeatureCard({ icon, title, description }: FeatureCard) {
    return (
        <div className="flex gap-4 p-6 sm:p-8">
            <div className="mt-1">{icon}</div>
            <div className="space-y-2">
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
        </div>
    )
}

export default function Features() {
    return (
        <div className="pt-12 font-sans">
            <section className="pb-4 md:pb-12" aria-labelledby="features-heading">
                <div className="mx-auto max-w-5xl space-y-10 px-6 md:space-y-14">
                    {/* Header */}
                    <div className="mx-auto max-w-2xl space-y-4 text-center">
                        <h2 id="features-heading" className="text-title text-4xl font-semibold text-balance lg:text-5xl lg:leading-tight">
                            Ingeniería avanzada<br />para tu descanso
                        </h2>
                        <p className="text-muted-foreground">
                            Elegir un colchón WH MATTRESS es una inversión en tu bienestar y salud postural.
                            Redefinimos los estándares del sueño reparador con ingeniería avanzada y
                            materiales premium, diseñados para durar décadas.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid divide-x divide-y border sm:grid-cols-2 lg:grid-cols-3 bg-primary-foreground/50">
                        {features.map((feature) => (
                            <FeatureCard key={feature.title} {...feature} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
