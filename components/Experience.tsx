'use client';

import { experienceData, clientsData, testimonialsData } from '@/lib/siteData';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Experience() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const sliderRef = useRef(null);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

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

        // Check the body class for theme
        const bodyClassList = document.body.classList;
        setIsDarkTheme(bodyClassList.contains('theme-dark'));
    }, []);

    return (
        <section className="section-spacing">
            <div className="container">
                <div className="row g-4 g-xl-5">
                    <div className="col-12 col-xl-3 col-xxl-2 text-xl-end">
                        <div className="h1 display-1 fw-medium text-charcoal">
                            {experienceData.yearsOfExperience}
                        </div>
                        <p>Years of Experience</p>
                    </div>
                    <div className="col-12 col-xl-9 col-xxl-10">
                        <h2 className="display-6 fw-medium mb-0">
                            {experienceData.description}
                        </h2>
                    </div>
                </div>

                <div className="row g-4 g-xl-5 align-items-center mt-5">
                    <div className="col-12 col-xl-7">
                        <div className="row g-3">
                            {clientsData.map((client, index) => (
                                <div key={index} className="col-6 col-md-4">
                                    <div className="client-box bg-lighter-30 border-dashed border-radius p-4 px-lg-5">
                                        <Link href={client.url}>
                                            <Image
                                                src={isDarkTheme ? client.logoDark : client.logoLight}
                                                alt="Client Logo"
                                                loading="lazy"
                                                width={150}
                                                height={50}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-12 col-xl-5">
                        <div className="bg-lighter border-radius box-shadow p-4 p-md-5 position-relative">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={30}
                                loop={true}
                                pagination={{
                                    el: '.testimonial-pagination',
                                    clickable: true,
                                }}
                                autoplay={{
                                    delay: 3000
                                }}
                                modules={[Pagination, Autoplay]}
                                className="testimonial-slider"
                            >
                                {testimonialsData.map((testimonial, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="mb-2 icon-sm">
                                            <i className="bi bi-star-fill text-golden-yellow"></i>
                                            <i className="bi bi-star-fill text-golden-yellow"></i>
                                            <i className="bi bi-star-fill text-golden-yellow"></i>
                                            <i className="bi bi-star-fill text-golden-yellow"></i>
                                            <i className="bi bi-star-fill text-golden-yellow"></i>
                                        </div>
                                        <p>{testimonial.quote}</p>
                                        <h5 className="fw-medium mb-0 mt-2">{testimonial.author}</h5>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="testimonial-pagination-wrapper">
                                <div className="testimonial-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}