import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (!cursor || !follower) return;

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;

        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            gsap.to(cursor, {
                x: mouseX,
                y: mouseY,
                duration: 0.1,
                ease: 'power2.out',
            });

            gsap.to(follower, {
                x: mouseX,
                y: mouseY,
                duration: 0.3,
                ease: 'power2.out',
            });
        };

        window.addEventListener('mousemove', onMouseMove);

        // Hover effect on links and buttons
        const linkHoverables = document.querySelectorAll('a, button');

        const onMouseEnter = () => {
            gsap.to(cursor, { scale: 0, duration: 0.2 });
            gsap.to(follower, { scale: 1.5, borderColor: '#f5a623', duration: 0.2 });
        };

        const onMouseLeave = () => {
            gsap.to(cursor, { scale: 1, duration: 0.2 });
            gsap.to(follower, { scale: 1, borderColor: '#ffffff', duration: 0.2 });
        };

        linkHoverables.forEach((el) => {
            el.addEventListener('mouseenter', onMouseEnter);
            el.addEventListener('mouseleave', onMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            linkHoverables.forEach((el) => {
                el.removeEventListener('mouseenter', onMouseEnter);
                el.removeEventListener('mouseleave', onMouseLeave);
            });
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-2 h-2 bg-secondary rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
            />
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-8 h-8 border border-secondary rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
            />
        </>
    );
};
