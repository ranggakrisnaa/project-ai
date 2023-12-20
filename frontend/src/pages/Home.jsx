import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import martImage from '../assets/toko.jpg'
import doc from '../assets/dokumen.png'
import visual from '../assets/Visual.png'
// import product1 from '../assets/product1.png'
import Swiper from "../components/Swiper"
import { IoChatbubbleOutline, IoTimeOutline } from "react-icons/io5";
import { BsChatQuote } from "react-icons/bs";
import { AiOutlineRead } from "react-icons/ai";
import ProductCard from "../components/ProductCard"
import ServiceCard from "../components/ServiceCard"
import { useEffect, useState } from "react"
import { getAllProduct } from "../fetch/product"

const Home = () => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getAllProduct()
                setProduct(data)

            } catch (error) {
                console.log(error);
            }
        }

        fetchProduct()
    }, [])
    console.log(product);

    return (
        <>
            <Box bgColor={'#F2F7FF'} w={'100vw'} h={'100vh'}>
                <Navbar />
                {/* home */}
                <Box display={'flex'} w={'80%'} mx={"auto"} justifyContent={'center'} alignItems={'center'} mt={'8rem'} gap={'7rem'}>
                    <Box w={'680px'}>
                        <Text color={'#00BFA5'} fontSize={'32px'}>Group 1</Text>
                        <Text fontSize={'52px'} fontWeight={'bold'} mt={'10px'}>SEARCH TOP SELLER ITEMS</Text>
                        <Text color={'#6C87AE'} fontSize={'22px'} mt={'14px'}>Supplier recommendation in sales using Item based collaborative filtering method</Text>
                        <Button bgColor='#3A8EF6' color={'white'} colorScheme="teal" mt={'30px'} w={'215px'} h={'55px'} rounded={'100px'}><IoChatbubbleOutline fontSize={'25px'} /> <Text fontSize={'18px'} ml={'6px'}>GET STARTED</Text></Button>
                    </Box>
                    <Box>
                        <Image src={martImage} border={'4px solid #3A8EF6'} rounded={'80%'} w={'580px'} h={'450px'} />
                    </Box>
                </Box>
                <Flex color={'white'} mx={'auto'} gap={'35px'} justifyContent={'center'} alignItems={'center'} mt={{lg:'6rem',xl:"8rem"}}>
                    {/* <Box bg={'#1678F2'} px={'10px'} rounded={'12px'} shadow={'lg'}>
                        <Flex justifyContent={'center'} alignItems={'center'} gap={'10px'}>
                            <IoTimeOutline fontSize={'120px'} />
                            <Box>
                                <Text fontWeight={'semibold'} fontSize={'23px'}>4 hour service</Text>
                                <Text fontSize={'18px'}>lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                            </Box>
                        </Flex>
                    </Box> */}
                    {/* <Box bg={'#1678F2'} p={'16px'} rounded={'12px'} shadow={'lg'}>
                        <Text fontWeight={'semibold'} fontSize={'23px'}>15 years of experience</Text>
                        <Text fontSize={'18px'}>lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                    </Box> */}
                    {/* <Box bg={'#1678F2'} p={'16px'} rounded={'12px'} shadow={'lg'}>
                        <Text fontWeight={'semibold'} fontSize={'23px'}>High quality items</Text>
                        <Text fontSize={'18px'}>lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                    </Box> */}
                    <ServiceCard title={'4 hour service'} width={'380px'}>
                        <IoTimeOutline fontSize={'120px'} />
                    </ServiceCard>
                    <ServiceCard title={'15 years of experience'} width={'400px'}>
                        <IoTimeOutline fontSize={'120px'} />
                    </ServiceCard>
                    <ServiceCard title={'High quality items'} width={'380px'}>
                        <IoTimeOutline fontSize={'120px'} />
                    </ServiceCard>
                </Flex>
            </Box>
            {/* about */}
            <Box w={'100vw'} h={'100vh'}>
                <Box display={'flex'} w={'90%'} mx={"auto"} justifyContent={'center'} alignItems={'center'} pt={'16rem'} gap={'8rem'}>
                    <Box>
                        <Image src={doc} w={'526px'} border={'4px solid #3A8EF6'} rounded={'30px'} h={'371.55px'} />
                    </Box>
                    <Box w={'580px'}>
                        <Text color={'#00BFA5'} fontSize={'28px'}>About Arkamart</Text>
                        <Text fontSize={'32px'} fontWeight={'bold'} mt={'10px'}>BUDGET SHOPPING SOLUTION AT AFFORDABLE PRICES</Text>
                        <Text color={'#6C87AE'} fontSize={'22px'} mt={'10px'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin nibh cursus at sed sagittis amet, sed. Tristique id nibh lobortis
                        </Text>
                        <Button bgColor='#3A8EF6' color={'white'} colorScheme="teal" mt={'30px'} w={'215px'} h={'55px'} rounded={'100px'}><BsChatQuote fontSize={'25px'} /> <Text fontSize={'18px'} ml={'8px'}>Contact Us</Text></Button>
                    </Box>
                </Box>
            </Box>
            {/* method */}
            <Box w={'100vw'} h={'80vh'} bgColor={'#F2F7FF'}>
                <Box display={'flex'} w={'80%'} mx={"auto"} justifyContent={'center'} alignItems={'center'} gap={'7rem'} pt={'7rem'}>
                    <Box>
                        <Text color={'#00BFA5'} fontSize={'28px'}>Method</Text>
                        <Text fontSize={'32px'} fontWeight={'bold'} mt={'10px'} w={'456px'}>COLLABORATIVE FILTERING ALGORITHM BY ITEM</Text>
                        <Text color={'#6C87AE'} w={'456px'} fontSize={'22px'} mt={'10px'}>Collaborative filtering by item is a collaborative filtering technique that uses similarities between items to recommend items to users.
                        </Text>
                        <Button bgColor='#3A8EF6' color={'white'} colorScheme="teal" mt={'30px'} w={'215px'} h={'55px'} rounded={'100px'}><AiOutlineRead fontSize={'25px'} /> <Text fontSize={'18px'} ml={'8px'}>Read More</Text></Button>
                    </Box>
                    <Box>
                        <Image src={visual} w={'633.5px'} rounded={'30px'} h={'541.71px'} />
                    </Box>
                </Box>
            </Box>
            <Box w={'100vw'} h={'auto'} bgColor={'#F2F7FF'}>
                <Box display={'flex'} w={'80%'} mx={"auto"} justifyContent={'space-between'} alignItems={'center'} flexDir={'column'}>
                    <Flex w={'80%'} mx={'auto'} justifyContent={'space-between'}>
                        <Text fontWeight={'semibold'} fontSize={'32px'}>Top Seller</Text>
                        <Text fontWeight={'semibold'} fontSize={'32px'}>view all</Text>
                    </Flex>
                    <Flex w={'80%'} mx={'auto'} mt={'30px'} gap={'60px'} flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'}>

                        {/* <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard /> */}
                        {/* {dataProduct.slice(0, 6).map((data, index) => (
                            <ProductCard key={index} title={data.product} desc={data.description} image={data.imageUrl} />
                        ))} */}

                        {/* {
                            product.productDetail ?
                                product.productDetail.map((recommendation, index) =>
                                    // const detail = product.productDetail.find(detail => detail.id == recommendation.id);
                                    // console.log('Recommendation:', recommendation);
                                    // console.log('Detail:', detail);
                                    // if (detail) {
                                    //     return (
                                    //         <ProductCard key={index} title={recommendation?.id} image={detail?.img_product} desc={detail?.description_product} />
                                    //     );
                                    // }


                                    <ProductCard key={index} title={recommendation.product_name} image={recommendation.img_product} desc={recommendation.description_product} />

                                ) :
                                <div>Loading...</div>
                        } */}
                        {

                            product.productDetail && product.productRecomendation ?
                                product.productRecomendation.map((recommendation, index) => {
                                    const detail = product.productDetail.find(detail => detail.product_name == recommendation.id);
                                    console.log('Recommendation:', recommendation);
                                    console.log('Detail:', detail);
                                    if (detail) {
                                        return (
                                            <ProductCard key={index} rating={recommendation.rating} title={recommendation?.id} image={detail?.img_product} desc={detail?.description_product} />
                                        );
                                    }

                                }
                                ) :
                                <div>Loading...</div>

                        }


                    </Flex>
                </Box>
            </Box>
            <Box w={'100vw'} h={'auto'} pb={'50px'} bgColor={'#F2F7FF'}>
                <Box display={'flex'} w={'80%'} mx={"auto"} justifyContent={'center'} flexDirection={'column'} alignItems={'center'} pt={'12rem'}>
                    <Text fontSize={'32px'} fontWeight={'bold'} mt={'10px'} w={'676px'} textAlign={'center'}>What our great customers say about ARKAMART</Text>
                    <Text color={'#6C87AE'} fontSize={'22px'} mt={'10px'} w={'676px'} textAlign={'center'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</Text>
                    {/* <Flex w={'980px'}>
                    </Flex> */}
                    <Box w={'80%'} mt={'50px'} mx={'auto'}>
                        <Swiper />
                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default Home