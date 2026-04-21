"use client";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { sliderData } from "../data/data";

export default function Caraousal() {
    return (
        <div id="carousel-section" className="h-screen">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop={true}
                className="h-full"
            >
                {sliderData.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative h-screen w-full overflow-hidden">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-8 text-white">
                                <h2 className="text-4xl font-bold">{slide.title}</h2>
                                <p className="mt-4 max-w-xl text-lg">{slide.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}