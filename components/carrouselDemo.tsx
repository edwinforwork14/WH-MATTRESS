import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselDemo() {
    return (
        <div className="flex flex-row items-center gap-8 px-8">
            {/* Title section */}
            <section className="flex-1 flex flex-col items-center justify-center py-12">
                <h1 className="text-4xl font-semibold">Carousel</h1>
                <div className="flex flex-col items-center justify-center pt-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                </div>
            </section>

            {/* Carousel section */}
            <section className="flex-1 flex items-left justify-left py-12">
                <Carousel className="w-full max-w-xl">
                    <CarouselContent>
                        {Array.from({ length: 8 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-4xl font-semibold">{index + 1}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section>
        </div>
    )
}
