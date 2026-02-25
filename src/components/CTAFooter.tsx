import React from 'react';

export const CTAFooter = () => {
    return (
        <footer
            className="w-full bg-primary flex flex-col items-center px-6 pt-32 pb-8 overflow-hidden relative"
            id="contact"
        >
            <span className="font-body text-[10px] font-bold tracking-[0.3em] uppercase text-secondary/50 mb-12">
                GET IN TOUCH
            </span>

            <a
                href="mailto:HELLO@NIKITA.DESIGN"
                className="font-display text-[15vw] leading-[0.8] uppercase text-secondary hover:text-accent-amber transition-colors duration-500 break-all text-center max-w-full px-4"
            >
                HELLO@NIKIT<br />A.DESIGN
            </a>

            <div className="mt-24 mb-32 z-10">
                <button className="px-10 py-4 bg-accent-amber text-primary font-body text-sm font-bold tracking-[0.2em] uppercase rounded-full hover:bg-primary hover:text-secondary border-2 border-transparent hover:border-accent-amber transition-all duration-300">
                    START A PROJECT
                </button>
            </div>

            <div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-secondary/10 pt-8 mt-16 text-[10px] md:text-xs text-secondary/50 font-body uppercase tracking-widest gap-6 md:gap-0">
                <div className="flex space-x-8">
                    <a href="#" className="hover:text-secondary hover:underline underline-offset-4 decoration-accent-amber transition-all">LINKEDIN</a>
                    <a href="#" className="hover:text-secondary hover:underline underline-offset-4 decoration-accent-amber transition-all">INSTAGRAM</a>
                    <a href="#" className="hover:text-secondary hover:underline underline-offset-4 decoration-accent-amber transition-all">BEHANCE</a>
                </div>

                <p>© 2026 NIKITA DESIGN. ALL RIGHTS RESERVED.</p>
            </div>
        </footer>
    );
};
