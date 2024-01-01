import { Flex } from '@chakra-ui/react';
import UserDetail from './UserDetail';
import profile1 from '../assets/elia.png'
import profile2 from '../assets/firza.png'
import profile3 from '../assets/ria.png'
import profile4 from '../assets/vandi.png'

// eslint-disable-next-line react/prop-types
const UserTest = () => {
    return (
        <Flex flexWrap={'wrap'} mt={'40px'} gap={'20px'}>
            <Flex gap={'20px'} flexBasis={0}>
                <UserDetail name={'Alice'} img={profile1} role={'Anytown, USA'} desc={'Arkamarts is user-friendly. Finding what I need is a breeze, and the checkout process is quick and hassle-free'} />
                <UserDetail name={'Michael'} img={profile2} role={'Sometown, USA'} desc={'The variety of products available on Arkamart is impressive. They have got it all covered. I keep coming for more!'} />
            </Flex>
            <Flex gap={'20px'} flexBasis={0}>
                <UserDetail name={'Sophie'} img={profile3} role={'Othertown, USA'} desc={'Arkamarts service is exceptional. I had a query about my order, and they were incredibly responsive.'} />
                <UserDetail name={'Robert'} img={profile4} role={'Sometown, USA'} desc={'The variety of products available on Arkamart is impressive. They have got it all covered. I keep coming for more!'} />
            </Flex>
        </Flex>
    )
}

export default UserTest