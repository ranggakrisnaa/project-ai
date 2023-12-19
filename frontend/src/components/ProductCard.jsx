import { Box, Button, Image, Text } from "@chakra-ui/react"
// import product1 from '../assets/product1.png'

// eslint-disable-next-line react/prop-types
const ProductCard = ({ title, desc, image }) => {
    return (
        <Box w={'346px'} h={'464px'} rounded={'24px'} display={'flex'} justifyContent={'center'} flexDir={'column'} bgColor={'#FFFFFF'} padding={'28px'}>
            <Image src={`${image}`} w={'230px'} h={'180px'} mx={'auto'} />
            <Text textAlign={'left'} fontWeight={'bold'} fontSize={'22px'} mt={'20px'}>{title}</Text>
            <Text textAlign={'left'} fontSize={'22px'} color={'#6C87AE'} maxH={'100px'} overflow="hidden" textOverflow="ellipsis">{desc}</Text>
            <Button bgColor='#3A8EF6' w={'full'} h={'56px'} color={'white'} colorScheme="teal" mt={'13px'} mx={'auto'} rounded={'100px'}>Book Now</Button>
        </Box>
    )
}

export default ProductCard