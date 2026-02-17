'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import { usePathname } from 'next/navigation';

const getThemeConfig = (pathname: string) => {
    if (pathname.startsWith('/home2')) {
        return {
            effects: ['zoom-in-up', 'fade-up', 'fade-left', 'fade-right'],
            duration: 900,
            delayStep: 55,
            offset: 80,
        };
    }

    if (pathname.startsWith('/about')) {
        return {
            effects: ['fade-up', 'fade-right', 'fade-left'],
            duration: 780,
            delayStep: 40,
            offset: 70,
        };
    }

    if (pathname.startsWith('/project')) {
        return {
            effects: ['zoom-in', 'flip-left', 'fade-up'],
            duration: 860,
            delayStep: 50,
            offset: 85,
        };
    }

    return {
        effects: ['fade-up', 'fade-left', 'fade-right', 'zoom-in-up'],
        duration: 820,
        delayStep: 45,
        offset: 80,
    };
};

const AosInit = () => {
    const pathname = usePathname();

    useEffect(() => {
        const theme = getThemeConfig(pathname || '');

        const applyGlobalAos = () => {
            const targets = document.querySelectorAll(
                [
                    'section',
                    '.pf_fadeup',
                    '.pf_zoomIn',
                    '.section-title',
                    '.agenko-iconic-box',
                    '.agenko-project-item',
                    '.agenko-team-item',
                    '.agenko-blog-item',
                    '.video-card',
                    '.agenko-client-item',
                    '.theme-btn',
                    '.footer-modern-top > div',
                ].join(',')
            );

            targets.forEach((el, index) => {
                const element = el as HTMLElement;
                if (!element.getAttribute('data-aos')) {
                    element.setAttribute('data-aos', theme.effects[index % theme.effects.length]);
                }
                if (!element.getAttribute('data-aos-duration')) {
                    element.setAttribute('data-aos-duration', String(theme.duration));
                }
                if (!element.getAttribute('data-aos-delay')) {
                    element.setAttribute('data-aos-delay', String((index % 8) * theme.delayStep));
                }
            });
        };

        AOS.init({
            duration: theme.duration,
            once: true,
            easing: 'ease-out-cubic',
            offset: theme.offset,
            mirror: false,
        });

        // Ensure applyGlobalAos runs after hydration is stable
        const handle = requestAnimationFrame(() => {
            applyGlobalAos();
            AOS.refreshHard();
        });

        const observer = new MutationObserver(() => {
            applyGlobalAos();
            AOS.refresh();
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });

        return () => {
            cancelAnimationFrame(handle);
            observer.disconnect();
        };
    }, [pathname]);

    return null;
};

export default AosInit;
