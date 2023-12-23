import { Box, Button, Flex, Image, Skeleton, Text } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import martImage from '../assets/toko.jpg'
import doc from '../assets/dokumen.png'
import visual from '../assets/Visual.png'
// import product1 from '../assets/product1.png'
import Swiper from "../components/Swiper"
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaLuggageCart, FaRegCheckCircle, FaRegClock } from "react-icons/fa";
import { BsChatQuote } from "react-icons/bs";
import { AiOutlineRead } from "react-icons/ai";
import ProductCard from "../components/ProductCard"
import ServiceCard from "../components/ServiceCard"
import { useEffect, useState } from "react"
import { getAllProduct } from "../fetch/product"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const [product, setProduct] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        fetchProduct()
    }, [])

    const fetchProduct = async () => {
        try {
            const data = await getAllProduct()
            setProduct(data)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Box bgColor={'#F2F7FF'} w={'100vw'} h={'100vh'}>
                <Navbar />
                {/* home */}
                <Box display={'flex'} w={'80%'} mx={"auto"} justifyContent={'center'} flexDirection={{ base: "column-reverse", md: "row" }} alignItems={'center'} mt={{ base: "2rem", md: '4rem' }} gap={{ base: "2rem", md: '7rem' }}>
                    <Box w={{ base: "340px", md: '680px' }}>
                        <Text color={'#00BFA5'} fontSize={{ base: "22px", md: '32px' }}>Group 1</Text>
                        <Text fontSize={{ base: "28px", md: '52px' }} fontWeight={'bold'} mt={'10px'}>SEARCH TOP SELLER ITEMS</Text>
                        <Text color={'#6C87AE'} fontSize={{ base: "17px", md: '22px' }} mt={'14px'}>Supplier recommendation in sales using Item based collaborative filtering method</Text>
                        <Button bgColor='#3A8EF6' color={'white'} colorScheme="teal" mt={'30px'} w={{ base: "135px", md: '215px' }} h={'55px'} rounded={'100px'}><IoChatbubbleOutline fontSize={'25px'} /> <Text fontSize={{ base: "10px", md: '18px' }} ml={'6px'}>GET STARTED</Text></Button>
                    </Box>
                    <Box>
                        <Image src={martImage} border={'4px solid #3A8EF6'} rounded={'80%'} w={{ base: "240px", md: '580px' }} h={{ base: "240px", md: "530px" }} />
                    </Box>
                </Box>
                <Flex color={'white'} mx={'auto'} gap={{ base: "25px", md: '35px' }} justifyContent={'center'} alignItems={'center'} mt={{ base: '4rem', xl: "7rem" }}>
                    <ServiceCard title={'4 hour service'} width={{ base: "120px", md: '380px' }}>
                        <Box fontSize={{ base: "30px", md: '120px' }}>
                            <FaRegClock />
                        </Box>
                    </ServiceCard>
                    <ServiceCard title={'15 years of experience'} width={{ base: "120px", md: '400px' }}>
                        <Box fontSize={{ base: "30px", md: '120px' }}>
                            <FaRegCheckCircle />
                        </Box>
                    </ServiceCard>
                    <ServiceCard title={'High quality items'} width={{ base: "120px", md: '380px' }}>
                        <Box fontSize={{ base: "30px", md: '120px' }}>
                            <FaLuggageCart />
                        </Box>
                    </ServiceCard>
                </Flex>
            </Box>
            {/* about */}
            <Box w={'100vw'} h={'100vh'} id="about">
                <Box display={'flex'} w={'80%'} mx={"auto"} flexDirection={{ base: "column", md: "row" }} justifyContent={'center'} alignItems={'center'} pt={{ base: "10rem", md: '16rem' }} gap={{ base: "4rem", md: '8rem' }}>
                    <Box>
                        <Image src={doc} w={{ base: "280px", md: '526px' }} border={'4px solid #3A8EF6'} rounded={'30px'} h={{ base: "220px", md: '371.55px' }} />
                    </Box>
                    <Box w={{ base: "348px", md: '580px' }}>
                        <Text color={'#00BFA5'} fontSize={{ base: "22px", md: '32px' }}>About Arkamart</Text>
                        <Text fontSize={{ base: "22px", md: '38px' }} fontWeight={'bold'} mt={'10px'}>BUDGET SHOPPING SOLUTION AT AFFORDABLE PRICES</Text>
                        <Text color={'#6C87AE'} fontSize={{ base: "16px", md: '22px' }} mt={'10px'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin nibh cursus at sed sagittis amet, sed. Tristique id nibh lobortis
                        </Text>
                        <Button bgColor='#3A8EF6' color={'white'} colorScheme="teal" mt={'30px'} w={{ base: "155px", md: '215px' }} h={'55px'} rounded={'100px'}><BsChatQuote fontSize={'25px'} /> <Text fontSize={{ base: "14px", md: '18px' }} ml={'8px'}>Contact Us</Text></Button>
                    </Box>
                </Box>
            </Box>
            {/* method */}
            <Box w={'100vw'} h={'80vh'} bgColor={'#F2F7FF'} id="method">
                <Box display={'flex'} w={'80%'} mx={"auto"} flexDirection={{ base: "column-reverse", md: "row" }} justifyContent={'center'} alignItems={'center'} gap={{ base: "3rem", md: '7rem' }} pt={'7rem'}>
                    <Box w={{ base: "348px", md: '580px' }}>
                        <Text color={'#00BFA5'} fontSize={{ base: "22px", md: '32px' }}>Method</Text>
                        <Text fontSize={{ base: "22px", md: '38px' }} fontWeight={'bold'} mt={'10px'} >COLLABORATIVE FILTERING ALGORITHM BY ITEM</Text>
                        <Text color={'#6C87AE'} fontSize={{ base: "16px", md: '22px' }} mt={'10px'}>Collaborative filtering by item is a collaborative filtering technique that uses similarities between items to recommend items to users.
                        </Text>
                        <Button bgColor='#3A8EF6' color={'white'} colorScheme="teal" mt={'30px'} w={{ base: "155px", md: '215px' }} h={'55px'} rounded={'100px'}><AiOutlineRead fontSize={'25px'} /> <Text fontSize={{ base: "14px", md: '18px' }} ml={'8px'}>Read More</Text></Button>
                    </Box>
                    <Box>
                        <Image src={visual} w={{ base: "333.5px", md: '633.5px' }} rounded={'30px'} h={{ base: "250px", md: '541.71px' }} />
                    </Box>
                </Box>
            </Box>
            <Box w={'100vw'} h={'auto'} bgColor={'#F2F7FF'}>
                <Box display={'flex'} w={'80%'} mx={"auto"} justifyContent={'space-between'} alignItems={'center'} flexDir={'column'} pt={{ base: '12rem', md: "8rem" }}>
                    <Flex w={'80%'} mx={'auto'} justifyContent={'space-between'}>
                        <Text fontWeight={'semibold'} fontSize={{ base: "22px", md: '32px' }}>Top Seller</Text>
                        <Text fontWeight={'semibold'} fontSize={{ base: "22px", md: '32px' }} _hover={{ cursor: 'pointer' }} onClick={() => navigate('/items')}>view all</Text>
                    </Flex>
                    <Flex w={'80%'} mx={'auto'} mt={'30px'} gap={'60px'} flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'}>
                        {

                            product.productDetail && product.productRecomendation ?
                                product.productRecomendation.slice(0, 6).map((recommendation, index) => {
                                    const detail = product.productDetail.find(detail => detail.product_name == recommendation.id);

                                    if (detail) {
                                        return (
                                            <ProductCard key={index} rating={recommendation.rating} title={recommendation?.id} image={detail?.img_product} desc={detail?.description_product} />
                                        );
                                    }

                                }
                                ) :
                                Array.from({ length: 6 }, (_, index) => (
                                    <Box w={'346px'} key={index} h={'524px'} rounded={'24px'} display={'flex'} shadow={'md'} justifyContent={'center'} flexDir={'column'} bgColor={'#FFFFFF'} padding={'28px'}>
                                        <Skeleton w={'full'} h={'180px'} rounded={'10px'} />
                                        <Box mt={'10px'} display={'flex'} alignItems={'center'}>
                                            <Skeleton w={'full'} h={'30px'} rounded={'10px'} mb={'10px'} />
                                        </Box>
                                        <Skeleton w={'full'} h={'80px'} mb={'20px'} rounded={'10px'} />
                                        <Skeleton w={'full'} h={'80px'} mb={'20px'} rounded={'10px'} />
                                        <Skeleton w={'full'} h={'56px'} rounded={'100px'} />
                                    </Box>
                                ))

                        }


                    </Flex>
                </Box>
            </Box >
            <Box w={'100vw'} h={'auto'} pb={'50px'} bgColor={'#F2F7FF'} id="contact">
                <Box display={'flex'} w={'80%'} mx={"auto"} justifyContent={'center'} flexDirection={'column'} alignItems={'center'} pt={'12rem'}>
                    <Box w={{ base: "348px", md: "678px" }}>
                        <Text fontSize={{ base: "22px", md: '32px' }} fontWeight={'bold'} mt={'10px'} textAlign={'center'}>What our great customers say about ARKAMART</Text>
                        <Text color={'#6C87AE'} fontSize={{ base: "22px", md: '32px' }} mt={'10px'} textAlign={'center'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</Text>
                        {/* <Flex w={'980px'}>
                    </Flex> */}
                    </Box>
                    <Box w={{ base: "100%", md: '80%' }} mt={'50px'} mx={'auto'}>
                        <Swiper />
                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default Home