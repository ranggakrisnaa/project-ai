import { Box, Flex, Text } from "@chakra-ui/react"

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ children, title, width }) => {
    return (
        <Box bg={'#1678F2'} p={'10px'} rounded={'12px'} shadow={'lg'} w={width}>
            <Flex justifyContent={'center'} alignItems={'center'} gap={'10px'}>
                {children}
                <Box>
                    <Text fontWeight={'semibold'} fontSize={'23px'}>{title}</Text>
                    <Text fontSize={'18px'}>lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </Box>
            </Flex>
        </Box>
    )
}

export default ServiceCard