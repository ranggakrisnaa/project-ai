
import { register } from 'swiper/element/bundle';

import 'swiper/css';
// import { Image } from '@chakra-ui/react';
import UserTest from './UserTest';
// import { Box } from '@chakra-ui/react';


const Swiper = () => {
    register();
    return (
        <swiper-container slides-per-view="1.5" space-between={20} speed="500" loop="true" pagination="true" navigation=" true">
            <swiper-slide>
                <UserTest />
            </swiper-slide>
            <swiper-slide>
                <UserTest />
            </swiper-slide>
            <swiper-slide>
                <UserTest />
            </swiper-slide>
            <swiper-slide>
                <UserTest />
            </swiper-slide>
        </swiper-container>
    )
}

export default Swiper