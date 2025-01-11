'use client';

import { portfolioData } from '@/lib/siteData';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Portfolio() {
    const sliderRef = useRef<any>(null);
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    const updateNavigation = (swiper: any) => {
        if (prevRef.current && nextRef.current) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.update();
        }
    };

    useEffect(() => {
        if (sliderRef.current) {
            updateNavigation(sliderRef.current);
        }
    }, []);

    // Limit the number of projects to 8
    const projects = portfolioData.projects.slice(0, 8);

    return (
        <div className="container-fluid section-spacing">
            <div className="section-spacing bg-charcoal border-radius">
                <div className="container">
                    <div className="row g-3 align-items-end">
                        <div className="col-12 col-lg-9">
                            <h2 className="display-2 font-family-tertiary fw-semi-bold stroke-text text-fade mb-0">
                                {portfolioData.title}
                            </h2>
                        </div>
                        <div className="col-12 col-lg-3 text-lg-end">
                            <button className="button-circle button-circle-gradient me-2 portfolio-prev" onClick={() => sliderRef.current?.slidePrev()} aria-label="Prev Slide">
                                <i className="bi bi-caret-left"></i>
                            </button>
                            <button className="button-circle button-circle-gradient portfolio-next" onClick={() => sliderRef.current?.slideNext()} aria-label="Next Slide">
                                <i className="bi bi-caret-right"></i>
                            </button>
                        </div>
                    </div>

                    <Swiper
                        onSwiper={(swiper) => {
                            sliderRef.current = swiper;
                            swiper.on('init', () => {
                                updateNavigation(swiper);
                            });
                        }}
                        slidesPerView={1}
                        spaceBetween={30}
                        breakpoints={{
                            // when window width is >= 640px
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            // when window width is >= 992px
                            992: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            // when window width is >= 1024px
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        className="portfolio-slider mt-5"
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide key={index}>
                                <div className="portfolio-box">
                                    <Link href={`/portfolio/${project.slug}`}>
                                        <div className="portfolio-img">
                                            <Image src={project.thumbnail} alt={project.title} loading="lazy" width={400} height={300} />
                                        </div>
                                        <div className="portfolio-category">{project.category}</div>
                                        <div className="portfolio-caption">
                                            <h2 className="fw-semi-bold">{project.title}</h2>
                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}