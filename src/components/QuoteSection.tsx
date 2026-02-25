import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const QuoteSection = () => {
    const containerRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !textRef.current) return;

        gsap.fromTo(
            textRef.current,
            { scale: 0.9, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 1.5,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 75%',
                },
            }
        );
    }, []);

    return (
        <section
            ref={containerRef}
            className="w-full bg-accent-amber px-6 py-32 md:py-48 flex flex-col items-center justify-center text-center"
            id="philosophy"
        >
            <div className="max-w-4xl flex flex-col items-center" ref={textRef}>
                <span className="font-display text-4xl md:text-6xl text-primary mb-8 leading-none">
                    "
                </span>
                <h2 className="font-display text-3xl md:text-5xl lg:text-7xl !font-medium tracking-tight text-primary leading-tight">
                    I care about what moves<br />people.<br />
                    And where the{' '}
                    <span className="text-accent-red relative inline-block group whitespace-nowrap">
                        line breaks
                        <span className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-1 md:h-2 bg-accent-red transform origin-left"></span>
                    </span>.
                </h2>
                <div className="w-12 h-1 bg-primary/20 flex mt-16 md:mt-24"></div>
            </div>
        </section>
    );
};
