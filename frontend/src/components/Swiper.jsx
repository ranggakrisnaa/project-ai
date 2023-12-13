import { Image } from '@chakra-ui/image'
import { register } from 'swiper/element/bundle';
// import profile from '../assets/mia.png'
import 'swiper/css';

const Swiper = () => {
    register();
    return (
        <swiper-container slides-per-view="3" space-between={20} pagination="true" navigation=" true">
            {/* <swiper-slide>
                    <Flex mt={'40px'} flexWrap={'wrap'} gap={'20px'}>
                        <Box>
                            <Box w={'470px'} h={'164px'} bgColor={'#FFFFFF'} p={'16px'} rounded={'32px'} mb={'20px'}>
                                <Text fontWeight={'light'} fontSize={'18px'} ml={'10px'} fontStyle={'italic'}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                </Text>
                                <Flex ml={'10px'} gap={'10px'}>
                                    <Image src={profile} />
                                    <Box color={'#00BFA5'}>
                                        <Text fontSize={'18px'}>Samy White</Text>
                                        <Text fontSize={'12px'}>Cardiology Patient</Text>
                                    </Box>
                                </Flex>
                            </Box>
                            <Box w={'470px'} h={'164px'} bgColor={'#FFFFFF'} p={'16px'} rounded={'32px'}>
                                <Text fontWeight={'light'} fontSize={'18px'} ml={'10px'} fontStyle={'italic'}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                </Text>
                                <Flex ml={'10px'} gap={'10px'}>
                                    <Image src={profile} />
                                    <Box color={'#00BFA5'}>
                                        <Text fontSize={'18px'}>Samy White</Text>
                                        <Text fontSize={'12px'}>Cardiology Patient</Text>
                                    </Box>
                                </Flex>
                            </Box>
                        </Box>
                        <Box>
                            <Box w={'470px'} h={'164px'} bgColor={'#FFFFFF'} p={'16px'} rounded={'32px'} mb={'20px'}>
                                <Text fontWeight={'light'} fontSize={'18px'} ml={'10px'} fontStyle={'italic'}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                </Text>
                                <Flex ml={'10px'} gap={'10px'}>
                                    <Image src={profile} />
                                    <Box color={'#00BFA5'}>
                                        <Text fontSize={'18px'}>Samy White</Text>
                                        <Text fontSize={'12px'}>Cardiology Patient</Text>
                                    </Box>
                                </Flex>
                            </Box>
                            <Box w={'470px'} h={'164px'} bgColor={'#FFFFFF'} p={'16px'} rounded={'32px'}>
                                <Text fontWeight={'light'} fontSize={'18px'} ml={'10px'} fontStyle={'italic'}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                </Text>
                                <Flex ml={'10px'} gap={'10px'}>
                                    <Image src={profile} />
                                    <Box color={'#00BFA5'}>
                                        <Text fontSize={'18px'}>Samy White</Text>
                                        <Text fontSize={'12px'}>Cardiology Patient</Text>
                                    </Box>
                                </Flex>
                            </Box>
                        </Box>
                    </Flex>
                </swiper-slide> */}
            <swiper-slide><Image src="https://img.freepik.com/free-photo/beautiful-trees-winter-landscape-early-morning-snowfall_181624-29247.jpg?w=1380&t=st=1702207778~exp=1702208378~hmac=ea9ecb5191577d46b3d24d4f89163981ba163a68c2578f92dc3302c99005ff2e" /></swiper-slide>
            <swiper-slide><Image src="https://img.freepik.com/free-photo/beautiful-trees-winter-landscape-early-morning-snowfall_181624-29247.jpg?w=1380&t=st=1702207778~exp=1702208378~hmac=ea9ecb5191577d46b3d24d4f89163981ba163a68c2578f92dc3302c99005ff2e" /></swiper-slide>
            <swiper-slide><Image src="https://img.freepik.com/free-photo/beautiful-trees-winter-landscape-early-morning-snowfall_181624-29247.jpg?w=1380&t=st=1702207778~exp=1702208378~hmac=ea9ecb5191577d46b3d24d4f89163981ba163a68c2578f92dc3302c99005ff2e" /></swiper-slide>
            <swiper-slide><Image src="https://img.freepik.com/free-photo/beautiful-trees-winter-landscape-early-morning-snowfall_181624-29247.jpg?w=1380&t=st=1702207778~exp=1702208378~hmac=ea9ecb5191577d46b3d24d4f89163981ba163a68c2578f92dc3302c99005ff2e" /></swiper-slide>



        </swiper-container>
    )
}

export default Swiper