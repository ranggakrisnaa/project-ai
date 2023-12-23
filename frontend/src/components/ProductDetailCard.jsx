import { Box, Button, Image, Text } from "@chakra-ui/react";
import { IoIosStarOutline, IoIosStar } from "react-icons/io";
import Rating from "react-rating";

// eslint-disable-next-line react/prop-types
const ProductDetailCard = ({ title, desc, image, rating }) => {
    // eslint-disable-next-line react/prop-types
    const rate = parseFloat(rating.toFixed(2));

    return (
        <Box
            w={['100%', '100%', '50%', '100%']}
            display={'flex'}
            flexWrap={'wrap'}
            gap={['10px', '18px']}
            justifyContent={['center', 'center']}
            alignItems={['center', 'start']}
            h={'100%'}
            rounded={'20px'}
            bgColor={'#FFFFFF'}
            mb={'20px'}
            shadow={'md'}

            p={['10px', '0px']}
        >
            <Image src={`${image}`} w={'180px'} h={'180px'} m={'10px'} />
            <Box
                w={['100%', '100%', '70%', '60%']}
                h={['auto', '100%']}
                pr={['0', '0', '15px', '15px']}
                mb={['10px', '10px', '0', '0']}
            >
                <Text fontWeight={'bold'} fontSize={['18px', '21px']} mb={'10px'} mt={['10px', '18px']}>{title}</Text>
                <Text fontSize={['14px', '16px']} color={'#363636'}>{desc}</Text>
            </Box>
            <Box
                display={'flex'}
                color={'#3A8EF6'}
                justifyContent={'center'}
                gap={'10px'}
                h={'full'}
                pt={['60px', '20px']}
                alignItems={'center'}
                flexDirection={'column'}
                w={['100%', '100%', '30%', '10%']}
            >
                <Text fontSize={['18px', '22px']} fontWeight={'bold'}>Rate: {rate}</Text>
                <Rating
                    placeholderRating={rate}
                    emptySymbol={<IoIosStarOutline fontSize={['18px', '22px']} />}
                    placeholderSymbol={<IoIosStar fontSize={['18px', '22px']} />}
                    fullSymbol={<IoIosStar fontSize={['18px', '22px']} />}
                />
                <Button bg={'#3A8EF6'} color={'white'} mt={'10px'}>More Info</Button>
            </Box>
        </Box >
    )
}

export default ProductDetailCard;
