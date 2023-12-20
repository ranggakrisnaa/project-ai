import { Box, Button, Image, Text } from "@chakra-ui/react"
import { IoIosStarOutline, IoIosStar } from "react-icons/io";
import Rating from "react-rating"

// eslint-disable-next-line react/prop-types
const ProductDetailCard = ({ title, desc, image, rating }) => {
    // eslint-disable-next-line react/prop-types
    const rate = parseFloat(rating.toFixed(2));
    return (
        <Box w={'100%'} display={'flex'} flexWrap={'wrap'} gap={'18px'} justifyContent={'center'} alignItems={'center'} h={'200px'} rounded={'20px'} bgColor={'#FFFFFF'} mb={'20px'} shadow={'md'}>
            <Image src={`${image}`} w={'180px'} h={'180px'} m={'10px'} />
            <Box w={'580px'} h={'full'} borderRight={'2px solid #E8E8E8'} pr={'15px'}>
                <Text fontWeight={'bold'} fontSize={'21px'} mb={'10px'} mt={'18px'}>{title}</Text>
                <Text fontSize={'16px'} color={'#363636'} textOverflow={'ellipsis'}>{desc}</Text>
            </Box>
            <Box display={'flex'} color={'#3A8EF6'} justifyContent={'center'} gap={'10px'} h={'full'} alignItems={'center'} flexDirection={'column'}>
                <Text fontSize={'22px'} fontWeight={'bold'}>Rate: {rate}</Text>
                <Rating placeholderRating={rate} emptySymbol={<IoIosStarOutline fontSize={'22px'} />} placeholderSymbol={<IoIosStar fontSize={'22px'} />} fullSymbol={<IoIosStar fontSize={'22px'} />} />
                <Button bg={'#3A8EF6'} color={'white'}>More Info</Button>
            </Box>
        </Box>
    )
}

export default ProductDetailCard