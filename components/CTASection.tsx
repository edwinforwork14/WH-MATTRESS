"use client"

import { useState } from "react"
import { TextEffect } from "@/components/ui/text-effect"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send, CheckCircle2, ChevronDown } from "lucide-react"

const subjects = [
    { value: "", label: "Selecciona un motivo..." },
    { value: "servicio-al-cliente", label: "Servicio al Cliente" },
    { value: "quejas", label: "Quejas" },
    { value: "reclamos", label: "Reclamos" },
    { value: "sugerencias", label: "Sugerencias" },
    { value: "otros", label: "Otros" },
]

export default function CTASection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        setSubmitted(true)
        setFormData({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setSubmitted(false), 5000)
    }

    return (
        <section
            className="relative w-full min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat bg-cta-section p-6 font-sans"
        >
            {/* Overlay azul oscuro sobre la imagen de fondo */}
            <div className="absolute inset-0 bg-blue-950/55 mix-blend-multiply" aria-hidden />

            {/* Contenido */}
            <div className="relative z-10 w-full max-w-3xl text-center px-8 py-12 shadow-2xl">
                <TextEffect
                    preset="fade-in-blur"
                    speedSegment={0.3}
                    as="h2"
                    className="text-2xl font-semibold mb-4 text-white dark:text-title sm:text-3xl md:text-4xl text-balance">
                    Transforma tus noches. Recupera tu energía.
                </TextEffect>
                <TextEffect
                    per="line"
                    preset="fade-in-blur"
                    speedSegment={0.3}
                    delay={0.5}
                    as="p"
                    className="text-base w-full mb-8 text-white dark:text-white sm:text-lg md:text-xl">
                    Descubre WH: el descanso que tu cuerpo va a notar desde la primera noche.
                </TextEffect>

                {submitted ? (
                    <div className="flex flex-col items-center justify-center gap-3 py-6">
                        <CheckCircle2 className="size-12 text-green-400" />
                        <p className="text-white text-lg font-medium">Mensaje enviado con éxito</p>
                        <p className="text-white/70 text-sm">Te responderemos a la brevedad posible.</p>
                    </div>
                ) : (
                    <div className="glass relative overflow-hidden rounded-[2.5rem] p-8 md:p-10 shadow-2xl max-w-4xl mx-auto">
                        {/* Capa extra de brillo glass */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/5 dark:from-white/10 dark:via-transparent dark:to-transparent" aria-hidden />
                        <div className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-primary/5 blur-3xl dark:bg-primary/10" aria-hidden />
                        <div className="pointer-events-none absolute -bottom-16 -left-16 size-48 rounded-full bg-blue-400/5 blur-3xl dark:bg-blue-400/10" aria-hidden />

                        <form onSubmit={handleSubmit} className="relative z-10 space-y-6 text-left">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                {/* Columna izquierda: Nombre, Email, Dropdown */}
                                <div className="space-y-4">
                                    <Input
                                        name="name"
                                        placeholder="Nombre completo"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="bg-white/60 dark:bg-white/10 border-white/40 dark:border-white/20 text-foreground dark:text-white placeholder:text-muted-foreground/60 dark:placeholder:text-white/50 focus:border-primary rounded-xl transition-all duration-200"
                                    />
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="Correo electrónico"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="bg-white/60 dark:bg-white/10 border-white/40 dark:border-white/20 text-foreground dark:text-white placeholder:text-muted-foreground/60 dark:placeholder:text-white/50 focus:border-primary rounded-xl transition-all duration-200"
                                    />
                                    <div className="relative">
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="flex h-12 w-full appearance-none rounded-xl bg-white/60 dark:bg-white/10 border border-white/40 dark:border-white/20 px-4 pr-12 py-2 text-sm text-foreground dark:text-white placeholder:text-muted-foreground/60 dark:placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 cursor-pointer [\u0026>option]:bg-white dark:[\u0026>option]:bg-blue-950"
                                        >
                                            {subjects.map((s) => (
                                                <option key={s.value} value={s.value} disabled={s.value === ""}>
                                                    {s.label}
                                                </option>
                                            ))}
                                        </select>
                                        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground/60 dark:text-white/50" />
                                    </div>
                                </div>

                                {/* Columna derecha: Mensaje */}
                                <div>
                                    <textarea
                                        name="message"
                                        placeholder="Escribe tu mensaje..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="flex w-full h-full min-h-[152px] rounded-xl bg-white/60 dark:bg-white/10 border border-white/40 dark:border-white/20 px-4 py-3 text-sm text-foreground dark:text-white placeholder:text-muted-foreground/60 dark:placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-all duration-200"
                                    />
                                </div>
                            </div>
                            <Button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium gap-2 shadow-lg rounded-xl h-12"
                            >
                                <Send className="size-4" />
                                Enviar mensaje
                            </Button>
                        </form>
                    </div>
                )}
            </div>
        </section>
    )
}
