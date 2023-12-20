import { Box, Flex, Input, Skeleton } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { getAllProduct } from "../fetch/product";
import { useEffect, useState } from "react";
import ProductDetailCard from "../components/ProductDetailCard";
import { BsSearch } from "react-icons/bs";

const Items = () => {
  const [product, setProduct] = useState({});
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getAllProduct();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, []);

  console.log(search);


  return (
    <>
      <Box w={"100vw"} h={"auto"} bgColor={"#FFFFF"} pb={"20px"}>
        <Navbar />
        <Flex justifyContent={"center"} gap={"30px"}>
          <Box
            w={"1000px"}
            h={"auto"}
            bgColor={"#F2F7FF"}
            rounded={"30px"}
            p={"20px"}
          >
            {/* {

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

                        } */}
            {
              product.productDetail && product.productRecomendation ? (
                search ? product.productRecomendation.filter(item => item.id.includes(search)).
                  product.productRecomendation
                  .map((recommendation, index) => {
                    const detail = product.productDetail.find(
                      (detail) => detail.product_name == recommendation.id
                    );
                    if (detail) {
                      return (
                        <ProductDetailCard
                          key={index}
                          rating={recommendation?.rating}
                          title={recommendation?.id}
                          image={detail?.img_product}
                          desc={detail?.description_product}
                        />
                      );
                    }
                  }) :
                  product.productRecomendation
                    .map((recommendation, index) => {
                      const detail = product.productDetail.find(
                        (detail) => detail.product_name == recommendation.id
                      );
                      if (detail) {
                        return (
                          <ProductDetailCard
                            key={index}
                            rating={recommendation?.rating}
                            title={recommendation?.id}
                            image={detail?.img_product}
                            desc={detail?.description_product}
                          />
                        );
                      }
                    })
              ) : (
                Array.from({ length: 10 }, (_, index) => (
                  <Box w={'100%'} key={index} display={'flex'} flexWrap={'wrap'} gap={'20px'} alignItems={'center'} h={'200px'} rounded={'20px'} bgColor={'#FFFFFF'} mb={'20px'} shadow={'md'}>
                    <Skeleton w={'180px'} h={'180px'} m={'12px'} rounded={'10px'} />
                    <Box w={'600px'} h={'full'} borderRight={'2px solid #E8E8E8'} pr={'20px'}>
                      <Skeleton w={'full'} h={'60px'} mb={'22px'} mt={'12px'} rounded={'10px'} />
                      <Skeleton w={'full'} h={'60px'} rounded={'10px'} />
                    </Box>
                    <Box display={'flex'} color={'#3A8EF6'} justifyContent={'center'} gap={'12px'} h={'full'} alignItems={'center'} flexDirection={'column'}>
                      <Skeleton w={'80px'} h={'30px'} mb={'12px'} rounded={'10px'} />
                      <Skeleton w={'80px'} h={'30px'} mb={'12px'} rounded={'10px'} />
                      <Skeleton w={'80px'} h={'30px'} mb={'12px'} rounded={'10px'} />
                    </Box>
                  </Box>
                ))
              )
            }
          </Box>
          <Box
            w={"430px"}
            h={"1900px"}
            bgColor={"#F2F7FF"}
            rounded={"30px"}
          >
            <Box p={'16px'} mt={'20px'} position={'relative'}>
              <Box position={'absolute'} top={'40%'} zIndex={'9'} left={'30px'} boxSizing="border-box" transform={'translateY(-50%'}>
                <BsSearch />
              </Box>
              {/* <BsSearch  position={'absolute'}/> */}
              <Input placeholder='Search Your Product' name="search" pl={'38px'} bg={'#FFFFFF'} h={'50px'} onChange={(e) => handleSearch(e)} />
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Items;
