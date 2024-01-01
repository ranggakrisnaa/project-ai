import { Box, Flex, Image, Text } from '@chakra-ui/react'

// eslint-disable-next-line react/prop-types
const UserDetail = ({ name, role, desc, img }) => {
    return (
        <Box w={'370px'} h={'164px'} bgColor={'#FFFFFF'} p={'16px'} rounded={'32px'}>
            <Text fontWeight={'light'} fontSize={'18px'} ml={'10px'} fontStyle={'italic'}>
                {desc}
            </Text>
            <Flex ml={'10px'} gap={'10px'}>
                <Image src={img} />
                <Box color={'#00BFA5'}>
                    <Text fontSize={'18px'}>{name}</Text>
                    <Text fontSize={'12px'}>{role}</Text>
                </Box>
            </Flex>
        </Box>
    )
}

export default UserDetail