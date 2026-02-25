import React from 'react';

export const IntroStrip = () => {
    return (
        <section className="w-full flex justify-end px-6 py-8 border-t border-secondary/10 relative z-10 bg-primary">
            <div className="max-w-md border-l-2 border-accent-amber pl-6 py-2">
                <h2 className="mb-4">
                    <span className="text-accent-amber font-display tracking-widest text-lg italic mr-2">hey,</span>
                    <span className="text-secondary font-display tracking-widest text-4xl uppercase font-bold">NIKITA</span>
                </h2>
                <p className="text-secondary/80 font-body text-sm leading-relaxed max-w-[280px]">
                    Content designer & copywriter focused on human, instinct-level interactions. I build bridges between complex systems and simple human needs.
                </p>
            </div>
        </section>
    );
};
