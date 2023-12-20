import { Box, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { getAllProduct } from "../fetch/product";
import { useEffect, useState } from "react";
import ProductDetailCard from "../components/ProductDetailCard";

const Items = () => {
  const [product, setProduct] = useState({});

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
            {product.productDetail && product.productRecomendation ? (
              product.productRecomendation
                .map((recommendation, index) => {
                  const detail = product.productDetail.find(
                    (detail) => detail.product_name == recommendation.id
                  );
                  console.log("Recommendation:", recommendation);
                  console.log("Detail:", detail);
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
              <div>Loading...</div>
            )}
          </Box>
          <Box
            w={"430px"}
            h={"1900px"}
            bgColor={"#F2F7FF"}
            rounded={"30px"}
          ></Box>
        </Flex>
      </Box>
    </>
  );
};

export default Items;
