// components/BlueCurvyScroll.tsx
"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function BlueCurvyScroll({ children }: { children: React.ReactNode }) {
    const { scrollYProgress } = useScroll();
    const pathLength = useSpring(scrollYProgress, { stiffness: 40, damping: 25 });
    const strokeColor = useTransform(scrollYProgress, [0, 1], ["#38bdf8", "#1d4ed8"]);
    const curvePath = "M 50 0 C 130 150, -30 450, 50 600";

    return (
        <div className="relative w-full bg-background text-foreground isolate">
            {/* Capa SVG Fija en el fondo real de esta capa aislda */}
            <div className="fixed inset-0 w-full h-full flex justify-center pointer-events-none -z-10">
                <svg viewBox="0 0 100 600" preserveAspectRatio="none" className="h-full w-full max-w-7xl opacity-60 mix-blend-screen dark:mix-blend-plus-lighter pointer-events-none">
                    <path d={curvePath} fill="none" className="stroke-primary/20" strokeWidth="0.5" />
                    <motion.path
                        d={curvePath}
                        fill="none"
                        strokeWidth="3"
                        strokeLinecap="round"
                        style={{
                            pathLength,
                            stroke: strokeColor,
                            filter: "drop-shadow(0px 0px 8px rgba(56,189,248,0.6))"
                        }}
                    />
                </svg>
            </div>

            {/* Tus secciones reales se renderizan aquí de forma natural */}
            <div className="w-full flex flex-col">
                {children}
            </div>
        </div>
    );
}