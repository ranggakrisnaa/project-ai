import { Box, Image, Text } from "@chakra-ui/react"
import { IoIosStarOutline, IoIosStar } from "react-icons/io";
import Rating from "react-rating"

const ProductDetailCard = ({title, desc, image, rating}) => {
    const rate = parseFloat(rating.toFixed(2));
    return (
        <Box w={'100%'} display={'flex'}  gap={'20px'} p={'12px'} alignItems={'center'} h={'200px'} rounded={'20px'} bgColor={'#FFFFFF'} mb={'20px'} shadow={'md'}>
            <Image src={`${image}`} w={'180px'} h={'180px'} />
            <Box w={'600px'}>
                <Text fontWeight={'bold'} fontSize={'21px'} mb={'10px'}>{title}</Text>
                <Text fontSize={'18px'} color={'#363636'}>{desc}</Text>
            </Box>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                <Text fontSize={'22px'} fontWeight={'bold'}>{rate}</Text>
                <Rating placeholderRating={rate} emptySymbol={<IoIosStarOutline fontSize={'22px'} />} placeholderSymbol={<IoIosStar fontSize={'22px'} />} fullSymbol={<IoIosStar fontSize={'22px'} />} />
            </Box>
        </Box>
    )
}

export default ProductDetailCard