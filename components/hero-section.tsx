"use client"

import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from './header'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
} as const

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden font-sans">
                <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section className="mt-24 sm:mt-0 lg:mt-30 flex flex-col-reverse lg:flex-row justify-between items-center mx-2 sm:mx-4 lg:mx-10 relative overflow-hidden rounded-3xl p-4 sm:p-8 md:p-14 border border-white/20 bg-background/20 backdrop-blur-lg dark:bg-white/5 dark:border-white/10 dark:backdrop-blur-2xl dark:shadow-[0_8px_32px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.07)] dark:ring-1 dark:ring-inset dark:ring-white/5">
                    <div className="w-full lg:w-[60%]">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="relative mt-6 lg:mt-8 overflow-hidden px-2 sm:px-4 lg:px-6">
                                <div className="">
                                    <Image
                                        className="w-full h-auto rounded-2xl border border-white/20 bg-border-primary"
                                        src="/3.jpg"
                                        alt="Colchón viscoelástico WH Mattress con muelles ensacados – vista superior"
                                        width={2600}
                                        height={1340}
                                        priority
                                        style={{ aspectRatio: '15/8', objectFit: 'cover' }}
                                    />
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>

                    <div className="w-full lg:w-[40%] max-w-7xl px-4 sm:px-6 lg:pl-10 mt-10 lg:mt-0 lg:py-10">
                        <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">

                            <TextEffect
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                as="h1"
                                className="text-white/80 mx-auto mt-8 max-w-9xl text-balance text-2xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl lg:mt-12 xl:text-[4.5rem]">
                                El futuro del descanso, hoy
                            </TextEffect>
                            <TextEffect
                                per="line"
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                delay={0.5}
                                as="p"
                                className="text-white/90 mx-auto mt-6 max-w-4xl text-balance text-base sm:text-lg md:text-xl px-2 sm:px-0">
                                Redefinimos el descanso con sistemas viscoelásticos, muelles ensacados y soporte lumbar diseñados para recuperar tu cuerpo cada noche.
                            </TextEffect>

                            <AnimatedGroup
                                variants={{
                                    container: {
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.05,
                                                delayChildren: 0.75,
                                            },
                                        },
                                    },
                                    ...transitionVariants,
                                }}
                                className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 text-white">
                                <div
                                    key={1}
                                    className="bg-foreground/10 rounded-full border p-0.5 w-full sm:w-auto">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="rounded-full px-8 py-4 text-base sm:text-lg font-semibold w-full sm:w-auto">
                                        <a
                                            href="#cta"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                const el = document.getElementById('cta');
                                                if (el) {
                                                    const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
                                                    window.scrollTo({ top, behavior: 'smooth' });
                                                }
                                            }}
                                        >
                                            <span className="text-white">Contáctanos</span>
                                        </a>
                                    </Button>
                                </div>
                                <Button
                                    key={2}
                                    asChild
                                    size="lg"
                                    variant="ghost"
                                    className="rounded-full px-6 py-4 text-base sm:text-lg font-semibold w-full sm:w-auto">
                                    <a
                                        href="#products"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const el = document.getElementById('products');
                                            if (el) {
                                                const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
                                                window.scrollTo({ top, behavior: 'smooth' });
                                            }
                                        }}
                                    >
                                        <span className="text-nowrap text-white">Ver Productos</span>
                                    </a>
                                </Button>
                            </AnimatedGroup>
                        </div>
                    </div>
                </section>

                <section className="hidden sm:block pb-4 pt-4 md:pb-8">
                    <div className="group relative m-auto max-w-5xl px-6">
                        <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                            <Link
                                href="/"
                                className="block text-sm duration-150 hover:opacity-75">
                                <span> Conoce</span>

                                <ChevronRight className="ml-1 inline-block size-3" />
                            </Link>
                        </div>

                    </div>
                </section>
            </main>
        </>
    )
}
