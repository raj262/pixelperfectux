'use client';

import { useEffect } from 'react';

export default function CursorGradient() {
    useEffect(() => {
        const cursor = document.querySelector<HTMLDivElement>('.cursor-gradient');

        if (cursor) {
            const handleMouseMove = (e: MouseEvent) => {
                cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
            };

            document.addEventListener('mousemove', handleMouseMove);

            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
            };
        }
    }, []);

    return (
        <></>
    );
};