import React from 'react';
import Image from 'next/image';
import { heroData } from '@/lib/siteData';
import Link from 'next/link';

export default function Hero() {
    return (
        <section id="about" className="section-spacing pb-0">
            <div className="container">
                <div className="row g-4 g-xxl-5">
                    <div className="col-12 col-md-4 col-xxl-3 order-md-2 text-lg-end">
                        <div className="hero-avatar">
                            <Image src={heroData.avatarSrc} alt="Avatar" loading="lazy" width={300} height={300} />
                            <div className="avatar-icon">
                                <ul className="list-inline-sm">
                                    {heroData.socialLinks.map((item, index) => (
                                        <li key={index}>
                                            <Link href={item.href}>
                                                <i className={item.bootstrapIcons}></i>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-xxl-9 order-md-1">
                        <h1 className="display-3 fw-medium">{heroData.title}</h1>
                        <div className="hire-status mt-3">
                            <span className="dot-available"></span> {heroData.hireStatus}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};