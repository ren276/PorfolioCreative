import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../utils/cn';

export const StickyNav = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-6 transition-all duration-300',
                isScrolled ? 'bg-primary/80 backdrop-blur-md py-4 border-b border-primary/20' : 'bg-transparent'
            )}
        >
            {/* Logo */}
            <div className="flex-1">
                <a href="#" className="font-display text-2xl tracking-widest text-secondary hover:text-accent-amber transition-colors">
                    NIKITA
                </a>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex flex-1 justify-center space-x-10">
                {['WORK', 'ABOUT', 'PHILOSOPHY', 'CONTACT'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="group relative font-body text-xs font-medium tracking-widest text-secondary uppercase"
                    >
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-amber transition-all duration-300 group-hover:w-full"></span>
                    </a>
                ))}
            </div>

            {/* CTA Button */}
            <div className="flex-1 flex justify-end">
                <a
                    href="#contact"
                    className="px-6 py-2 bg-accent-amber text-primary font-body text-xs font-bold tracking-wider uppercase rounded-full hover:bg-transparent hover:text-secondary hover:border-accent-amber border border-transparent transition-all duration-300"
                >
                    LET'S TALK
                </a>
            </div>
        </nav>
    );
};
