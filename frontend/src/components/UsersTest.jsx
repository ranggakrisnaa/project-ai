import { Flex, } from '@chakra-ui/react';
import profile1 from '../assets/mia.png'
import profile2 from '../assets/kevin.png'
import profile3 from '../assets/ethan.png'
import profile4 from '../assets/amanda.png'
import UserDetail from './UserDetail';

// eslint-disable-next-line react/prop-types
const UsersTest = () => {
    return (
        <Flex flexWrap={'wrap'} mt={'40px'} gap={'20px'}>
            <Flex gap={'20px'} flexBasis={0}>
                <UserDetail name={'Emma'} img={profile1} role={'Anothertown, USA'} desc={'As a frequent shopper, I appreciate how Arkamart introduces new items regularly. It keeps things fresh,'} />
                <UserDetail name={'Liam'} img={profile2} role={'Yetanothertown, USA'} desc={'Arkamart has simplified my life. I can find everything I need in one place. Its like a treasure trove of convenience!'} />
            </Flex>
            <Flex gap={'20px'} flexBasis={0}>
                <UserDetail name={'Olivia'} img={profile4} role={'Lasttown, USA'} desc={'Im a stickler for quality, and Arkamart never disappoints. Their commitment to offering top products is commendable.'} />
                <UserDetail name={'Aiden'} img={profile3} role={'Finaltown, USA'} desc={'The 24/7 support is a game-changer! Having assistance at any hour takes the stress out of online shopping'} />
            </Flex>
        </Flex>
    )
}

export default UsersTest