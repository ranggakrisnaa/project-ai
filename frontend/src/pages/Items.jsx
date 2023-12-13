import { Box, Flex } from '@chakra-ui/react'
import Navbar from '../components/Navbar'

const Items = () => {
    return (
        <>
            <Box w={'100vw'} h={'auto'} bgColor={'#FFFFF'}>
                <Navbar />
                <Flex justifyContent={'center'} alignItems={'center'} gap={'30px'}>
                    <Box w={'1000px'} h={'1100px'} bgColor={'#F2F7FF'} rounded={'30px'}>

                    </Box>
                    <Box w={'430px'} h={'1100px'} bgColor={'#F2F7FF'} rounded={'30px'}>

                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default Items