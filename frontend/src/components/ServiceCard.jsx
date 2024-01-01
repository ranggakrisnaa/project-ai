import { Box, Flex, Text } from "@chakra-ui/react"

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ children, title, width, desc }) => {
    return (
        <Box bg={'#1678F2'} p={{ base: '8px', md: '10px' }} rounded={'12px'} shadow={'lg'} w={width}>
            <Flex justifyContent={'center'} flexDirection={{ base: "column", md: "row" }} alignItems={'center'} gap={'10px'}>
                {children}
                <Box>
                    <Text fontWeight={'semibold'} fontSize={{ base: "15px", md: '23px' }}>{title}</Text>
                    <Text fontSize={{ base: "10px", md: '18px' }}>{desc}</Text>
                </Box>
            </Flex>
        </Box>
    )
}

export default ServiceCard