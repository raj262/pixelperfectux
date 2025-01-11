'use client';

import { slidingTextData } from '@/lib/siteData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";

export default function SlidingText() {
    return (
        <div className="py-5">
            <Swiper
                slidesPerView="auto"
                spaceBetween={70}
                speed={20000}
                loop={true}
                allowTouchMove={false}
                autoplay={{
                    delay: 0,
                    pauseOnMouseEnter: false,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="sliding-text">
                {slidingTextData.map((text, index) => (
                    <SwiperSlide key={index}>
                        <h2 className="display-2 font-family-tertiary fw-semi-bold stroke-text line-height-130 opacity-25 mb-0">
                            {text}
                        </h2>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}