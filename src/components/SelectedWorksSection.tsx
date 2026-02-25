import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CARDS = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?q=80&w=2070&auto=format&fit=crop',
        category: 'FINANCE / CASE STUDY',
        title: 'THE HUMANIZATION OF WEALTH',
        description: 'Redefining how a global bank speaks to its first-generation investors through empathetic copy.',
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop',
        category: 'WELLNESS / BRAND STORY',
        title: 'VOCALIZING THE VOID',
        description: 'A campaign built on silence and negative space to help shape digital wellness for a meditation app.',
        offset: true,
    }
];

export const SelectedWorksSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (!sectionRef.current || !headingRef.current) return;

        gsap.fromTo(
            headingRef.current,
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
            }
        );

        cardsRef.current.forEach((card) => {
            if (!card) return;
            gsap.fromTo(
                card,
                { scale: 0.95, opacity: 0, y: 50 },
                {
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                    },
                }
            );
        });
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full bg-white text-primary px-6 py-24 md:py-32"
            id="work"
        >
            <div className="max-w-[1400px] mx-auto">
                <h2
                    ref={headingRef}
                    className="font-display text-5xl md:text-[6rem] leading-[0.85] uppercase tracking-tight mb-20 md:mb-32"
                >
                    SELECTED<br />WORKS
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
                    {CARDS.map((card, index) => (
                        <div
                            key={card.id}
                            ref={(el) => { cardsRef.current[index] = el; }}
                            className={`group flex flex-col ${card.offset ? 'md:mt-32' : ''}`}
                        >
                            <div className="relative aspect-[4/5] bg-gray-100 mb-8 overflow-hidden">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                />
                            </div>

                            <div className="flex flex-col">
                                <span className="text-accent-amber font-body text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                                    {card.category}
                                </span>
                                <h3 className="font-display text-3xl md:text-4xl uppercase mb-3">
                                    {card.title}
                                </h3>
                                <p className="font-body text-sm text-primary/70 mb-6 max-w-sm">
                                    {card.description}
                                </p>
                                <a
                                    href="#"
                                    className="font-body text-xs font-bold tracking-widest uppercase inline-flex items-center group/link w-fit"
                                >
                                    VIEW CASE STUDY
                                    <span className="ml-2 transition-transform duration-300 group-hover/link:translate-x-2">→</span>
                                    <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary scale-x-0 origin-left transition-transform duration-300 group-hover/link:scale-x-100"></div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
