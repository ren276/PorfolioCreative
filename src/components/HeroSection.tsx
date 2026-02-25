import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const HeroSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const lines = containerRef.current.querySelectorAll('.hero-line');

        gsap.fromTo(
            lines,
            { y: 100, opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
            {
                y: 0,
                opacity: 1,
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                duration: 1,
                stagger: 0.08,
                ease: 'power4.out',
                delay: 0.2
            }
        );
    }, []);

    return (
        <section className="w-full flex flex-col justify-center px-6 pt-32 lg:pt-36 pb-8 md:pb-12" ref={containerRef}>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between w-full gap-8">
                <div className="font-display font-black uppercase text-[15vw] sm:text-[12vw] md:text-[min(11vw,13.5vh)] leading-[0.85] tracking-tight">
                    <div className="overflow-hidden mb-2 hero-line-container">
                        <div className="hero-line block text-secondary">GOOD</div>
                    </div>
                    <div className="overflow-hidden mb-2 hero-line-container">
                        <div className="hero-line block text-secondary">CONTENT</div>
                    </div>
                    <div className="overflow-hidden mb-2 hero-line-container">
                        <div className="hero-line block text-secondary">STARTS</div>
                    </div>
                    <div className="overflow-hidden mb-2 hero-line-container">
                        <div className="hero-line block">
                            <span className="text-secondary tracking-normal">WITH <span className="text-accent-amber italic tracking-widest pl-[1vw]">EMPATHY.</span></span>
                        </div>
                    </div>
                    <div className="overflow-hidden mb-2 hero-line-container">
                        <div className="hero-line block text-secondary">
                            NOT <span className="text-accent-red">SLIDES.</span>
                        </div>
                    </div>
                    <div className="overflow-hidden mb-2 hero-line-container">
                        <div className="hero-line block text-secondary">
                            NOT <span className="text-accent-red">NOISE.</span>
                        </div>
                    </div>
                </div>

                <div className="max-w-xs md:max-w-md border-l-2 border-accent-amber pl-6 py-2 mb-[1vw]">
                    <h2 className="mb-4">
                        <span className="text-accent-amber font-display tracking-widest text-lg italic mr-2">hey,</span>
                        <span className="text-secondary font-display tracking-widest text-3xl md:text-4xl uppercase font-bold">NIKITA</span>
                    </h2>
                    <p className="text-secondary/80 font-body text-xs md:text-sm leading-relaxed max-w-[280px]">
                        Content designer & copywriter focused on human, instinct-level interactions. I build bridges between complex systems and simple human needs.
                    </p>
                </div>
            </div>
        </section>
    );
};
