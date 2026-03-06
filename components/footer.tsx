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
        <footer className="border-t pt-20 relative z-20">
            <div className="mb-8 border-b md:mb-12">
                <div className="mx-auto flex max-w-5xl flex-wrap items-end justify-between gap-6 px-6 pb-6">
                    <Link
                        href="/"
                        aria-label="go home"
                        className="block size-fit">
                        <Image src="/Logo.png" alt="WH Mattress Logo" width={150} height={40} className="object-contain" />
                    </Link>
                    <div className="flex flex-wrap justify-center gap-6 text-sm">




                        <Link
                            href="https://wa.me/50769889415"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className="text-muted-foreground hover:text-primary block">
                            <svg
                                className="size-6"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52c.149-.174.198-.298.298-.497c.099-.198.05-.371-.025-.52c-.075-.149-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51c-.173-.008-.371-.01-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413c.248-.694.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-5xl px-6 pb-12">
                <div className="grid gap-12 md:grid-cols-5 md:gap-0 lg:grid-cols-4">
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:col-span-5 md:row-start-1 lg:col-span-3">
                        {links.map((link, index) => (
                            <div
                                key={index}
                                className="space-y-4 text-sm">
                                <span className="block font-medium">{link.group}</span>
                                {link.items.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className="text-muted-foreground hover:text-primary block duration-150">
                                        <span>{item.title}</span>
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </footer>
    )
}
