import { Cpu, Zap } from 'lucide-react'
import Image from 'next/image'

export default function ContentSection() {
    return (
        <div className='pb-35'>
        <section className="mx-2 sm:mx-4 lg:mx-10 py-12 md:py-16 font-sans glass rounded-[2.5rem] shadow-2xl">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 pb-12">
                <h2 className="text-center z-10 text-4xl font-semibold text-title lg:text-5xl">El ecosistema WH:<br />Ingeniería al servicio de tu sueño.</h2>
                <div className="relative">
                    <div className="relative z-10 space-y-4 md:w-1/2">
                    <p> — Desde el colchón hasta la almohada ergónomica, todo conectado para maximizar tu recuperación.</p>
                        <p>WH MATTRESS S.A. evoluciona más allá del colchón convencional. Creamos un ecosistema integral del sueño que fusiona tecnología de muelles ensacados y espuma viscoelástica con materiales de alta gama, para revitalizar tu cuerpo y mente noche tras noche.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 sm:gap-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Zap className="size-4" />
                                    <h3 className="text-sm font-medium">Tecnología aplicada al sueño</h3>
                                </div>
                                <p className="text-muted-foreground text-sm dark:text-white">Sistemas de muelles y espumas de última generación que responden a cada movimiento para un descanso profundo y reparador.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Cpu className="size-4" />
                                    <h3 className="text-sm font-medium">Materiales premium certificados</h3>
                                </div>
                                <p className="text-muted-foreground text-sm dark:text-white">Espumas viscoelásticas, látex natural y tejidos antiacáros que garantizan higiene, durabilidad y un rendimiento óptimo año tras año.</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:mask-l-from-35% md:mask-l-to-55% mt-12 h-fit md:absolute md:-inset-y-12 md:inset-x-0 md:mt-0">
                        <div className="border-border/50 relative w-full sm:w-[85%] mx-auto md:ml-auto md:mr-0 md:w-[70%] lg:w-[60%] rounded-2xl border border-dotted p-2">
                            <Image
                                src="/osito-2.jpg"
                                className="hidden w-full h-auto rounded-[12px] dark:block"
                                alt="Colchón Hybrid Elite – capas viscoelásticas y muelles"
                                width={1207}
                                height={929}
                            />
                            <Image
                                src="/osito-2.jpg"
                                className="w-full h-auto rounded-[12px] shadow dark:hidden"
                                alt="Colchón Hybrid Elite – capas viscoelásticas y muelles"
                                width={1207}
                                height={929}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}
