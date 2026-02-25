import { Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap } from 'lucide-react'

export default function Features() {
    return (
        <section className="pt-0 pb-4 md:pt-2 md:pb-12">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">Diseñados para tu descanso perfecto</h2>
                    <p>Elegirnos es apostar por la excelencia y la innovación. Establecemos el nuevo estándar del confort en América con productos sostenibles diseñados para durar toda la vida.</p>
                </div>

                <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="text-sm font-medium">Materiales de alta calidad</h3>
                        </div>
                        <p className="text-sm">Utilizamos materias primas premium que garantizan durabilidad, soporte y confort superior.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4" />
                            <h3 className="text-sm font-medium">Diseño moderno</h3>
                        </div>
                        <p className="text-sm">Creamos muebles y colchones que combinan elegancia, innovación y funcionalidad.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Fingerprint className="size-4" />

                            <h3 className="text-sm font-medium">Envíos rápidos</h3>
                        </div>
                        <p className="text-sm">Llevamos tu descanso hasta la puerta de tu hogar en el menor tiempo posible.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Pencil className="size-4" />

                            <h3 className="text-sm font-medium">Garantía de fábrica</h3>
                        </div>
                        <p className="text-sm">Nuestros productos están respaldados por procesos de fabricación de alto nivel.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Settings2 className="size-4" />

                            <h3 className="text-sm font-medium">Personalización de muebles</h3>
                        </div>
                        <p className="text-sm">Diseñamos soluciones que se adaptan a tu espacio y estilo de vida.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />

                            <h3 className="text-sm font-medium">Comodidad maxima</h3>
                        </div>
                        <p className="text-sm">Cada producto está pensado para mejorar tu descanso y bienestar.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
