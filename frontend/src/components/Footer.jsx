import { Box, Flex, Image, Text } from "@chakra-ui/react"
import brand from "../assets/arkamart.png"
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
    return (
        <Box w={'100%'} bg={'#1678F2'} pb={'20px'}>
            <Flex w={'80%'} mx={'auto'} flexDirection={{ base: "column", md: "row" }} p={'3rem'} color={'#FFFFFF'} justify={'center'} align={'start'} gap={{ base: "60px", md: '250px' }} borderBottom={'2px solid #00BFA5'}>
                <Box display={'flex'} flexDir={'column'} gap={'20px'}>
                    <Image src={brand} />
                    <Text>Blitar Jawa Timur Indonesia</Text>
                    <Box display={'flex'} gap={'20px'} fontSize={'22px'}>
                        <BsInstagram />
                        <BsFacebook />
                        <BsWhatsapp />
                    </Box>
                </Box>
                <Box display={'flex'} flexDir={'column'} gap={'20px'}>
                    <Text fontSize={'22px'} fontWeight={'bold'}>Check Now</Text>
                    <Text>Items Rank</Text>
                    <Text>About</Text>
                    <Text>Blog</Text>
                </Box>
                <Box display={'flex'} flexDir={'column'} gap={'20px'}>
                    <Text fontSize={'22px'} fontWeight={'bold'}>Buy Now</Text>
                    <Text>Items Order</Text>
                </Box>
                <Box display={'flex'} flexDir={'column'} gap={'20px'}>
                    <Text fontSize={'22px'} fontWeight={'bold'}>Contact</Text>
                    <Text>Items Order</Text>
                    <Text>+1 123456789</Text>
                    <Text>kelompoksatu@mail.com</Text>
                </Box>
            </Flex>
            <Text align={'center'} color={'#FFFFFF'} mt={'30px'}>© ARKAMART all rights 2023 - Designed by kelompok1</Text>
        </Box>
    )
}

export default Footer