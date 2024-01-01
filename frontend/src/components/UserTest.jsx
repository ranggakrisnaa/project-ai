import { Box, Flex, Text } from '@chakra-ui/react';
import profile from '../assets/mia.png'
import { Image } from '@chakra-ui/image'

const UserTest = () => {
    return (
        <Flex flexWrap={'wrap'} mt={'40px'} gap={'20px'}>
            <Box display={'flex'} gap={'20px'}>
                <Box w={'370px'} h={'164px'} bgColor={'#FFFFFF'} p={'16px'} rounded={'32px'}>
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
                <Box w={'370px'} h={'164px'} bgColor={'#FFFFFF'} p={'16px'} rounded={'32px'}>
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
            <Flex gap={'20px'}>
                <Box w={'370px'} h={'164px'} bgColor={'#FFFFFF'} p={'16px'} rounded={'32px'}>
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
                <Box w={'370px'} h={'164px'} bgColor={'#FFFFFF'} p={'16px'} rounded={'32px'}>
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
            </Flex>
        </Flex>
    )
}

export default UserTest