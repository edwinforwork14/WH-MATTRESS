"use client"

export default function CTASection() {
    return (
        <section
            className="relative w-full min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/ctasection.png')" }}
        >
            {/* Overlay oscuro para mejorar legibilidad del texto */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Contenido encima del fondo */}
            <div className="relative z-10 text-center text-white px-6 max-w-3xl">
                <h2 className="text-4xl font-bold mb-4">Tu título aquí</h2>
                <p className="text-lg mb-6">
                    Descripción o subtítulo que acompaña al llamado a la acción.
                </p>
                <button className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition">
                    Llamado a la acción
                </button>
            </div>
        </section>
    )
}