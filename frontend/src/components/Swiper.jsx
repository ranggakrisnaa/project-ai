import { register } from "swiper/element/bundle";

import "swiper/css";
// import { Image } from '@chakra-ui/react';
import UserTest from "./UserTest";
import { useEffect, useRef } from "react";
import UsersTest from "./UsersTest";
// import { Box } from '@chakra-ui/react';

const Swiper = () => {

    const swiperRef = useRef(null);

    useEffect(() => {
        register();

        const params = {
            slidesPerView: 1.6,
            breakpoints: {
                200: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                300: {
                    slidesPerView: 2.4,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 4,
                },
                800: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                },
            },
            pagination: true,
            navigation: true,
            spaceBetween: 20,
        };

        Object.assign(swiperRef.current, params);

        swiperRef.current.initialize();
    }, []);
    return (
        <swiper-container
            ref={swiperRef}
        >
            <swiper-slide>
                <UserTest />
            </swiper-slide>
            <swiper-slide>
                <UsersTest />
            </swiper-slide>
        </swiper-container>
    );
};

export default Swiper;
