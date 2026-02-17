import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Slide } from "react-awesome-reveal";

const Hero = () => {
    const heroSlides = [
        {
            image: "https://i.ibb.co.com/0yb4j5R1/ash-amplifies-NQ6-Lh81-BTRs-unsplash.jpg",
            title: "Bring Nature Indoors",
            slogan: "Transform your living space into a calm, refreshing green sanctuary."
        },
        {
            image: "https://i.ibb.co.com/xrRWf69/runze-shi-1k-Iyf-Rd-LMx-I-unsplash.jpg",
            title: "Healthy Plants, Healthy Life",
            slogan: "Discover indoor plants that purify air and elevate your wellbeing."
        },
        {
            image: "https://i.ibb.co.com/Kx6DJbkf/nils-leonhardt-Tss1u-OMcz-Dg-unsplash.jpg",
            title: "Grow Smarter, Grow Greener",
            slogan: "Expert care guidance and premium plants for every season."
        }
    ];

    return (
        <div className="w-full h-75 sm:h-100 lg:h-137.5 my-4 rounded-xl overflow-hidden">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={true}
                loop={true}
                className="w-full h-full"
            >
                {
                    heroSlides.map((slide,index) => <SwiperSlide key={index}>
                    <div className="relative w-full h-full">
                        <img
                            src={slide.image}
                            className="w-full h-full object-cover"
                            alt="Garbage Pollution"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center p-4 text-center">
                            <Slide direction="down" triggerOnce>
                                <h2 className="text-white text-xl sm:text-3xl lg:text-4xl font-bold drop-shadow-md">
                                    {slide.title}
                                </h2>
                                <p className="text-white text-sm sm:text-lg mt-2 max-w-[90%]">
                                    {slide.slogan}
                                </p>
                            </Slide>
                        </div>
                    </div>
                </SwiperSlide>)
                }
                {/* === SLIDE 1 === */}
                

                {/* === SLIDE 2 === */}
                {/* <SwiperSlide>
                    <div className="relative w-full h-full">
                        <img
                            src={image3}
                            className="w-full h-full object-cover"
                            alt="Community Cleaning"
                        /> */}

                        {/* Overlay */}
                        {/* <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center p-4 text-center">
                            <Slide direction="up" triggerOnce>
                                <h2 className="text-white text-xl sm:text-3xl lg:text-4xl font-bold drop-shadow-md">
                                    Community Cleaning
                                </h2>
                                <p className="text-white text-sm sm:text-lg mt-2 max-w-[90%]">
                                    A cleaner environment starts with us.
                                </p>
                            </Slide>

                        </div>
                    </div>
                </SwiperSlide> */}

                {/* === SLIDE 3 === */}
                {/* <SwiperSlide>
                    <div className="relative w-full h-full">
                        <img
                            src={image2}
                            className="w-full h-full object-cover"
                            alt="Sustainable Action"
                        /> */}

                        {/* Overlay */}
                        {/* <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center p-4 text-center">
                            <Slide direction="down" triggerOnce>
                                <h2 className="text-white text-xl sm:text-3xl lg:text-4xl font-bold drop-shadow-md">
                                    Sustainable Future
                                </h2>
                                <p className="text-white text-sm sm:text-lg mt-2 max-w-[90%]">
                                    Small actions today, a greener world tomorrow.
                                </p>
                            </Slide>
                        </div>
                    </div>
                </SwiperSlide> */}
            </Swiper>
        </div>
    );
};

export default Hero;