'use client'
import { Menu, X } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { ThemeButton } from './themebutton'
import { AnimatePresence, motion } from 'framer-motion'

const menuItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Productos', href: '#products' },
    { name: 'Contacto', href: '#cta' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    // Función de scroll suave — usa doble RAF para esperar el ciclo de React
    const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        e.stopPropagation();

        const targetId = href.replace('#', '');
        setMenuState(false); // Cerrar menú móvil primero

        // Doble requestAnimationFrame: garantiza que el scroll ocurra
        // DESPUÉS de que React termine su ciclo de renderizado
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                const elem = document.getElementById(targetId);
                if (!elem) return;

                const headerHeight = 90;
                const top = elem.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({ top, behavior: 'smooth' });

                // Actualizar URL sin recargar
                window.history.pushState(null, '', href);
            });
        });
    };

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header>
            <nav className="fixed z-50 w-full px-2 font-sans" aria-label="Navegación principal de WH Mattress">
                <div className={cn(
                    'mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12',
                    isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5'
                )}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <a href="/" className="flex items-center space-x-2" aria-label="WH Mattress – ir al inicio">
                                <Image src="/4- (WH) 1.png" alt="WH Mattress – logotipo oficial" width={80} height={32} priority className='pt-2' />
                            </a>

                            {/* Botón hamburguesa con ícono animado */}
                            <button
                                onClick={() => setMenuState(!menuState)}
                                className="relative z-50 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <AnimatePresence mode="wait" initial={false}>
                                    <motion.span
                                        key={menuState ? 'close' : 'open'}
                                        initial={{ opacity: 0, rotate: -90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: 90 }}
                                        transition={{ duration: 0.18 }}
                                        style={{ display: 'block' }}
                                    >
                                        {menuState ? <X /> : <Menu />}
                                    </motion.span>
                                </AnimatePresence>
                            </button>
                        </div>

                        {/* Menú Escritorio — dinámico con scroll */}
                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            onClick={(e) => handleScrollClick(e, item.href)}
                                            className={cn(
                                                "cursor-pointer block duration-150 hover:text-destructive",
                                                isScrolled ? "text-foreground" : "text-white/90"
                                            )}>
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Menú Móvil — animado con Framer Motion */}
                        <AnimatePresence>
                            {menuState && (
                                <motion.div
                                    key="mobile-menu"
                                    initial={{ opacity: 0, y: -12, scale: 0.97 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -12, scale: 0.97 }}
                                    transition={{ duration: 0.22, ease: 'easeInOut' }}
                                    className="bg-background mb-6 w-full flex flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl lg:hidden"
                                >
                                    <ul className="space-y-6 text-base w-full">
                                        {menuItems.map((item, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, x: -8 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.05, duration: 0.18 }}
                                            >
                                                <a
                                                    href={item.href}
                                                    onClick={(e) => handleScrollClick(e, item.href)}
                                                    className="text-muted-foreground hover:text-blue-400 block duration-150">
                                                    {item.name}
                                                </a>
                                            </motion.li>
                                        ))}
                                    </ul>
                                    <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                        <ThemeButton />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* ThemeButton en escritorio */}
                        <div className="hidden lg:flex items-center">
                            <ThemeButton />
                        </div>

                    </div>
                </div>
            </nav>
        </header>
    )
}