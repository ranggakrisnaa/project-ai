
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
            {/* <swiper-slide><Image src="https://img.freepik.com/free-photo/beautiful-trees-winter-landscape-early-morning-snowfall_181624-29247.jpg?w=1380&t=st=1702207778~exp=1702208378~hmac=ea9ecb5191577d46b3d24d4f89163981ba163a68c2578f92dc3302c99005ff2e" /></swiper-slide>
            <swiper-slide><Image src="https://img.freepik.com/free-photo/beautiful-trees-winter-landscape-early-morning-snowfall_181624-29247.jpg?w=1380&t=st=1702207778~exp=1702208378~hmac=ea9ecb5191577d46b3d24d4f89163981ba163a68c2578f92dc3302c99005ff2e" /></swiper-slide>
            <swiper-slide><Image src="https://img.freepik.com/free-photo/beautiful-trees-winter-landscape-early-morning-snowfall_181624-29247.jpg?w=1380&t=st=1702207778~exp=1702208378~hmac=ea9ecb5191577d46b3d24d4f89163981ba163a68c2578f92dc3302c99005ff2e" /></swiper-slide>
            <swiper-slide><Image src="https://img.freepik.com/free-photo/beautiful-trees-winter-landscape-early-morning-snowfall_181624-29247.jpg?w=1380&t=st=1702207778~exp=1702208378~hmac=ea9ecb5191577d46b3d24d4f89163981ba163a68c2578f92dc3302c99005ff2e" /></swiper-slide> */}



        </swiper-container>
    )
}

export default Swiper