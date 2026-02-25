import { Cpu, Zap } from 'lucide-react'
import Image from 'next/image'

export default function ContentSection() {
    return (
        <section className="pt-16 pb-24 md:pt-32 md:pb-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">El ecosistema WH: Diseñado para tu descanso.</h2>
                <div className="relative">
                    <div className="relative z-10 space-y-4 md:w-1/2">
                        <p>
                            El ecosistema WH: Diseñado para tu descanso. <span className="font-medium">It supports an entire ecosystem</span> — from products innovate.
                        </p>
                        <p>WH MATTRESS S.A. evoluciona más allá del mobiliario convencional. Creamos un sistema integral de descanso que fusiona tecnología innovadora con materiales de alta gama para revitalizar tu cuerpo y mente.</p>

                        <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Zap className="size-4" />
                                    <h3 className="text-sm font-medium">Innovación</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Tecnología avanzada aplicada para alcanzar el siguiente nivel de confort.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Cpu className="size-4" />
                                    <h3 className="text-sm font-medium">Sostenibilidad</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Materiales superiores que garantizan durabilidad y un rendimiento excepcional.</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:mask-l-from-35% md:mask-l-to-55% mt-12 h-fit md:absolute md:-inset-y-12 md:inset-x-0 md:mt-0">
                        <div className="border-border/50 relative rounded-2xl border border-dotted p-2">
                            <Image
                                src="/2.png"
                                className="hidden rounded-[12px] dark:block"
                                alt="payments illustration dark"
                                width={1207}
                                height={929}
                            />
                            <Image
                                src="/2.png"
                                className="rounded-[12px] shadow dark:hidden"
                                alt="payments illustration light"
                                width={1207}
                                height={929}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
