import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"
import brand from "../assets/brand.png"
import { NavLink } from "react-router-dom";
import { navItems } from "../lib/data"
import './Navbar.css'
import { IoChatbubbleOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <Box w={'100vw'}>
            <Flex justifyContent={'space-between'} alignItems={'center'} mx={'auto'} w={'80%'} p={'20px'}>
                <Box>
                    <Image src={brand} />
                </Box>
                <Box display={'flex'} gap={'30px'} textColor={'#6C87AE'} fontSize={'18px'}>
                    {
                        navItems.map((data, index) => (
                            <NavLink
                                key={index}
                                to={data.nav}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                <Text transition={'0.1s all ease-out'} _hover={{ cursor: 'pointer', color: '#3A8EF6', transform: 'scale(1.2)' }}>{data.item}</Text>
                            </NavLink>
                        ))
                    }
                </Box>
                <Box>
                    <Button bgColor='#3A8EF6' color={'white'} colorScheme="teal" w={'175px'} h={'55px'} rounded={'100px'}><IoChatbubbleOutline fontSize={'25px'} /> <Text fontSize={'18px'} ml={'6px'}>BUY NOW</Text></Button>
                </Box>
            </Flex>
        </Box>
    )
}

export default Navbar