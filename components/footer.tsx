"use client"

import Image from 'next/image'
import Link from 'next/link'

const links = [
    {
        group: 'Navegación',
        items: [
            {
                title: 'Inicio',
                href: '#hero',
            },
            {
                title: 'Características',
                href: '#features',
            },
            {
                title: 'Beneficios',
                href: '#content',
            },
            {
                title: 'Productos',
                href: '#products',
            },
            {
                title: 'Nosotros',
                href: '#about',
            },
            {
                title: 'Contacto',
                href: '#cta',
            },
        ],
    },
    {
        group: 'Productos',
        items: [
            {
                title: 'Colchones Visco-elásticos',
                href: '#products',
            },
            {
                title: 'Colchones de Resortes',
                href: '#products',
            },
            {
                title: 'Colchones Ortopédicos',
                href: '#products',
            },
            {
                title: 'Colchones Híbridos',
                href: '#products',
            },
            {
                title: 'Almohadas y Accesorios',
                href: '#products',
            },
        ],
    },
    {
        group: 'Empresa',
        items: [
            {
                title: 'Nuestra Historia',
                href: '#about',
            },
            {
                title: 'Misión y Visión',
                href: '#about',
            },
            {
                title: 'Calidad y Certificaciones',
                href: '#features',
            },
            {
                title: 'Garantías',
                href: '#cta',
            },
        ],
    },
    {
        group: 'Contacto',
        items: [
            {
                title: 'WhatsApp',
                href: '#cta',
            },
            {
                title: 'Solicitar Cotización',
                href: '#cta',
            },
            {
                title: 'Política de Privacidad',
                href: '#',
            },
            {
                title: 'Términos y Condiciones',
                href: '#',
            },
        ],
    },
]

export default function FooterSection() {
    return (
        <footer className="border-t pt-50 relative z-20 font-sans" aria-label="Pie de página de WH Mattress">
            <div className="mb-8 border-b md:mb-12">
                <div className="mx-auto flex max-w-5xl flex-wrap items-end justify-between gap-6 px-6 pb-6">
                    <Link
                        href="/"
                        aria-label="WH Mattress – ir al inicio"
                        className="block size-fit">
                        <Image src="/Logo.png" alt="WH Mattress – logotipo oficial" width={150} height={40} className="object-contain" />
                    </Link>
                </div>
            </div>
            <div className='bg-transparent pt-12 pb-17'>
                <div className="mx-auto max-w-5xl px-6 pb-12 flex flex-col items-center">
                    <div className="w-full grid grid-cols-2 gap-8 sm:grid-cols-4 text-center">
                        {links.map((link, index) => (
                            <div
                                key={index}
                                className="space-y-4 text-sm">
                                <span className="block font-medium text-white/80">{link.group}</span>
                                {link.items.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className="text-white/80 hover:text-white block duration-150">
                                        <span>{item.title}</span>
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col justify-center mt-12 items-center text-center">
                    {/* Agregamos whitespace-nowrap para evitar el salto de línea */}
                            <p className="text-white/80 text-muted-foreground whitespace-nowrap">
                                Hecho con 💜 por{' '}
                                <Link
                                    href="https://untitledtechcompany.io"
                                    className="text-purple-400 hover:text-purple-600 font-medium transition-colors">
                                    Untitled Tech Company
                                </Link>
                            </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
