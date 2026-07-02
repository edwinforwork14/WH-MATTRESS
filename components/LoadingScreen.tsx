"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LogoStroke } from "@/components/logo"

export default function LoadingScreen() {
    const [show, setShow] = useState(true)

    useEffect(() => {
        const removeLoading = () => {
            document.documentElement.classList.remove("loading")
            // Small delay so the fade-out animation plays
            setTimeout(() => setShow(false), 500)
        }

        if (document.readyState === "complete") {
            removeLoading()
        } else {
            window.addEventListener("load", removeLoading)
        }

        // Fallback: remove loading after 4s max
        const fallback = setTimeout(removeLoading, 4000)

        return () => {
            window.removeEventListener("load", removeLoading)
            clearTimeout(fallback)
        }
    }, [])

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    id="loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
                >
                    {/* Background gradient glow */}
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 -z-10 size-full [background:radial-gradient(80%_60%_at_50%_0%,var(--color-primary)/8%,transparent_70%)]"
                    />

                    {/* Animated stroke logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, filter: "blur(8px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8"
                    >
                        <LogoStroke className="size-16 w-16 text-primary opacity-60" />
                    </motion.div>

                    {/* WH Mattress text */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        className="text-center"
                    >
                        <h1 className="text-2xl font-semibold tracking-tight text-title">
                            WH Mattress
                        </h1>
                        <p className="mt-1 text-sm text-title/50">
                            Tecnología del descanso
                        </p>
                    </motion.div>

                    {/* Loading dots */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                        className="mt-10"
                    >
                        <div className="flex items-center gap-1.5">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        opacity: [0.2, 1, 0.2],
                                        scale: [0.8, 1, 0.8],
                                    }}
                                    transition={{
                                        duration: 1.2,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                        ease: "easeInOut",
                                    }}
                                    className="size-2 rounded-full bg-primary"
                                />
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
