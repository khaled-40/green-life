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
            image: "v1771749972/ash-amplifies-NQ6Lh81BTRs-unsplash_yroheb.jpg",
            title: "Bring Nature Indoors",
            slogan: "Transform your living space into a calm, refreshing green sanctuary."
        },
        {
            image: "v1771749975/runze-shi-1kIyfRdLMxI-unsplash_u8ybix.jpg",
            title: "Healthy Plants, Healthy Life",
            slogan: "Discover indoor plants that purify air and elevate your wellbeing."
        },
        {
            image: "v1771749980/nils-leonhardt-Tss1uOMczDg-unsplash_qnklr7.jpg",
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
                    heroSlides.map((slide, index) => <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                            <img
                                src={`https://res.cloudinary.com/dfji3qdsk/image/upload/w_800,c_scale,q_auto,f_auto/${slide.image}`}
                                srcSet={`
    https://res.cloudinary.com/dfji3qdsk/image/upload/w_400,c_scale,q_auto,f_auto/${slide.image} 400w,
    https://res.cloudinary.com/dfji3qdsk/image/upload/w_800,c_scale,q_auto,f_auto/${slide.image} 800w,
    https://res.cloudinary.com/dfji3qdsk/image/upload/w_1200,c_scale,q_auto,f_auto/${slide.image} 1200w
  `}
                                sizes="(max-width: 640px) 400px,
         (max-width: 1024px) 800px,
         1200px"
                                className="w-full h-full object-cover"
                                alt={slide.title}
                                loading={index === 0 ? "eager" : "lazy"}
                                fetchPriority={index === 0 ? "high" : "auto"}
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