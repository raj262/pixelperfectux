'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { portfolioData } from '@/lib/siteData';
import Link from 'next/link';
import { Metadata } from 'next';
import { seoData } from '@/lib/seoData';

// export const metadata: Metadata = {
//     title: seoData.portfolio.title,
//     description: seoData.portfolio.description,
//     openGraph: {
//         title: seoData.portfolio.title,
//         description: seoData.portfolio.description,
//     },
//     keywords: seoData.portfolio.keywords,
// };

export default function PortfolioPage() {
    const portfolioRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let mixer: any;
        
        const initMixitup = async () => {
            if (typeof window !== 'undefined') {
                const mixitupModule = await import('mixitup');
                const mixitup = mixitupModule.default;
                
                if (portfolioRef.current) {
                    mixer = mixitup(portfolioRef.current, {
                        selectors: {
                            target: '.portfolio-item'
                        },
                        animation: {
                            duration: 250
                        }
                    });
                }
            }
        };

        initMixitup();

        return () => {
            if (mixer) {
                mixer.destroy();
            }
        };
    }, []);

    return (
        <section className="section-spacing">
            <div className="container">
                <div className="mb-4 mb-lg-5">
                    <div className="row align-items-end g-3">
                        <div className="col-12 col-lg-6">
                            <h1 id="latest-works" className="display-2 fw-medium mb-0">Latest Works</h1>
                        </div>
                        <div className="col-12 col-lg-6 text-lg-end">
                            <div className="filter">
                                <ul>
                                    {portfolioData.filterCategories.map((category, index) => (
                                        <li key={index} data-filter={index === 0 ? 'all' : `.${category}`}>{category}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={portfolioRef} className="row g-4 g-lg-5 portfolio-grid">
                    {portfolioData.projects.map((project) => (
                        <div key={project.slug} className={`col-12 col-lg-6 portfolio-item ${project.category}`}>
                            <div className="portfolio-box">
                                <Link href={`/portfolio/${project.slug}`}>
                                    <div className="portfolio-img">
                                        <Image src={project.thumbnail} alt={project.title} width={660} height={396} layout="responsive" />
                                    </div>
                                    <div className="portfolio-category">{project.category}</div>
                                    <div className="portfolio-caption">
                                        <h2 className="fw-semi-bold">{project.title}</h2>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}