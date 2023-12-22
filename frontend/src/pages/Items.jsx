import { Box, Flex, FormControl, FormLabel, Input, Select, Skeleton } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { getAllProduct } from "../fetch/product";
import { useEffect, useState } from "react";
import ProductDetailCard from "../components/ProductDetailCard";
import { BsSearch } from "react-icons/bs";

const Items = () => {
  const [product, setProduct] = useState({});
  const [formData, setFormData] = useState({
    search: '',
    title: '',
    rate: '',
  });

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

  const handleChangeForm = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const renderProduct = () => {
    if (product.productDetail && product.productRecomendation) {
      const { search, title, rate } = formData;
      let filteredRecommendations = product.productRecomendation;

      if (search) {
        filteredRecommendations = filteredRecommendations.filter((item) =>
          item.id.toLowerCase().includes(search.toLowerCase())
        );
      }

      if (title === 'ASC') {
        filteredRecommendations.sort((a, b) => a.id.localeCompare(b.id));
      } else if (title === 'DESC') {
        filteredRecommendations.sort((a, b) => b.id.localeCompare(a.id));
      }

      if (rate === 'ASC') {
        filteredRecommendations.sort((a, b) => a.rating - b.rating);
      } else if (rate === 'DESC') {
        filteredRecommendations.sort((a, b) => b.rating - a.rating);
      }

      return filteredRecommendations.map((recommendation, index) => {
        const detail = product.productDetail.find(
          (detail) => detail.product_name === recommendation.id
        );

        if (detail) {
          return (
            <ProductDetailCard
              key={index}
              rating={recommendation.rating}
              title={recommendation.id}
              image={detail.img_product}
              desc={detail.description_product}
            />
          );
        }
        return null;
      });
    } else {
      return Array.from({ length: 10 }, (_, index) => (
        <Box
          w={"100%"}
          key={index}
          display={"flex"}
          flexWrap={"wrap"}
          gap={"20px"}
          alignItems={"center"}
          h={"200px"}
          rounded={"20px"}
          bgColor={"#FFFFFF"}
          mb={"20px"}
          shadow={"md"}
        >
          <Skeleton w={"180px"} h={"180px"} m={"12px"} rounded={"10px"} />
          <Box w={"600px"} h={"full"} borderRight={"2px solid #E8E8E8"} pr={"20px"}>
            <Skeleton w={"full"} h={"60px"} mb={"22px"} mt={"12px"} rounded={"10px"} />
            <Skeleton w={"full"} h={"60px"} rounded={"10px"} />
          </Box>
          <Box
            display={"flex"}
            color={"#3A8EF6"}
            justifyContent={"center"}
            gap={"12px"}
            h={"full"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Skeleton w={"80px"} h={"30px"} mb={"12px"} rounded={"10px"} />
            <Skeleton w={"80px"} h={"30px"} mb={"12px"} rounded={"10px"} />
            <Skeleton w={"80px"} h={"30px"} mb={"12px"} rounded={"10px"} />
          </Box>
        </Box>
      ));
    }
  };

  return (
    <>
      <Box w={"100vw"} h={"auto"} bgColor={"#FFFFF"} pb={"20px"}>
        <Navbar />
        <Flex justifyContent={"center"} alignItems={{ base: "center", md: "start" }} gap={"30px"} flexDirection={{ base: "column-reverse", md: "row" }}>
          <Box
            w={{ base: "300px", md: "1000px" }}
            h={"auto"}
            bgColor={"#F2F7FF"}
            rounded={"30px"}
            p={"20px"}
          >
            {
              renderProduct()
            }
          </Box>
          <Box
            w={"430px"}
            h={"360px"}
            bgColor={"#F2F7FF"}
            rounded={"30px"}
          >
            <Box p={'18px'} mt={'18px'} position={'relative'}>
              <Box position={'absolute'} top={'40%'} zIndex={'9'} left={'30px'} boxSizing="border-box" transform={'translateY(-50%'}>
                <BsSearch />
              </Box>
              {/* <BsSearch  position={'absolute'}/> */}
              <Input placeholder='Search Your Product' name="search" pl={'38px'} bg={'#FFFFFF'} h={'50px'} onChange={(e) => handleChangeForm(e)} />
            </Box>
            <Box p={'18px'}>
              <FormControl>
                <FormLabel>Filter by Title</FormLabel>
                <Select placeholder='Select Option' bg={'#FFFFFF'} h={'50px'} name="title" onChange={(e) => handleChangeForm(e)}>
                  <option value={'ASC'}>Ascending</option>
                  <option value={'DESC'}>Descending</option>
                </Select>
              </FormControl>
            </Box>
            <Box p={'18px'}>
              <FormControl>
                <FormLabel>Filter by Rate</FormLabel>
                <Select placeholder='Select Option' bg={'#FFFFFF'} h={'50px'} name="rate" onChange={(e) => handleChangeForm(e)}>
                  <option value={'ASC'}>Ascending</option>
                  <option value={'DESC'}>Descending</option>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Items;
