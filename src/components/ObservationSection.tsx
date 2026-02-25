import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const ObservationSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (!sectionRef.current || !textRef.current || !imageRef.current) return;

        gsap.fromTo(
            textRef.current,
            { x: -50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
            }
        );

        gsap.fromTo(
            imageRef.current,
            { scale: 0.95, opacity: 0, filter: 'grayscale(100%) brightness(0.5)' },
            {
                scale: 1,
                opacity: 1,
                filter: 'grayscale(100%) brightness(0.8)',
                duration: 1.5,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
            }
        );
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-6 py-24 md:py-32 gap-12"
            id="about"
        >
            <div className="w-full md:w-1/2 flex flex-col" ref={textRef}>
                <span className="text-accent-amber font-body text-xs font-bold tracking-[0.2em] uppercase mb-8">
                    Observation
                </span>
                <h2 className="text-secondary font-display text-5xl md:text-7xl lg:text-[6rem] leading-[0.9] uppercase mb-8 max-w-[800px]">
                    I OBSERVE MORE<br />THAN I SPEAK.
                </h2>
                <p className="text-secondary/70 font-body text-sm md:text-base leading-relaxed max-w-md">
                    True strategy isn't found in a deck. It's found in the quiet moments between user actions, in the hesitation before a click, and in the language people use when they think no one is listening.
                </p>
            </div>

            <div className="w-full md:w-1/2 flex justify-end">
                <div className="relative w-full max-w-[500px] aspect-square overflow-hidden bg-white/5">
                    <img
                        ref={imageRef}
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop"
                        alt="Person at desk"
                        className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 hover:scale-105 hover:brightness-100"
                    />
                </div>
            </div>
        </section>
    );
};
