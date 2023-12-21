import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react"
import brand from "../assets/brand.png"
// import { NavLink } from "react-router-dom";
// import { navItems } from "../lib/data"
import './Navbar.css'
import { IoChatbubbleOutline } from "react-icons/io5";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [activeItem, setActiveItem] = useState('')
    const navigate = useNavigate()

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    const handlePage = (item) => {
        setActiveItem(item);
        navigate('/items')
    }


    return (
        <Box w={'100vw'}>
            <Flex justifyContent={'space-between'} alignItems={'center'} mx={'auto'} w={'80%'} p={'20px'}>
                <Box>
                    <Image src={brand} />
                </Box>
                <Box display={'flex'} gap={'30px'} textColor={'#6C87AE'}>
                    {/* {
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
                    } */}
                    {/* <NavLink
                        to={"/"}
                        onClick={() => handleItemClick('home')}
                        color={activeItem === 'home' ? '#3A8EF6' : '#6C87AE'}
                        transform={activeItem === 'home' ? 'scale(1.2)' : ''}
                    >
                        <Text fontSize={'18px'} transition={'0.1s all ease-out'} _hover={{ cursor: 'pointer', color: '#3A8EF6', transform: 'scale(1.2)' }}>Home</Text>
                    </NavLink>
                    <Link
                        href="#about"
                        onClick={() => handleItemClick('about')}
                        color={activeItem === 'about' ? '#3A8EF6' : '#6C87AE'}
                    >
                        <Text fontSize={'18px'} transition={'0.1s all ease-out'} _hover={{ cursor: 'pointer', color: '#3A8EF6', transform: 'scale(1.2)' }}>About</Text>
                    </Link> */}
                    <Link
                        href="/"
                        onClick={() => handleItemClick('home')}
                        color={activeItem === 'home' ? '#3A8EF6' : '#6C87AE'}
                    >
                        <Text fontSize={'18px'} transition={'0.1s all ease-out'} _hover={{ cursor: 'pointer', color: '#3A8EF6', transform: 'scale(1.2)' }}>Home</Text>
                    </Link>
                    <Link
                        href="/#about"
                        onClick={() => handleItemClick('about')}
                        color={activeItem === 'about' ? '#3A8EF6' : '#6C87AE'}
                    >
                        <Text fontSize={'18px'} transition={'0.1s all ease-out'} _hover={{ cursor: 'pointer', color: '#3A8EF6', transform: 'scale(1.2)' }}>About</Text>
                    </Link>
                    <Link
                        href="/#method"
                        onClick={() => handleItemClick('method')}
                        color={activeItem === 'method' ? '#3A8EF6' : '#6C87AE'}
                    >
                        <Text fontSize={'18px'} transition={'0.1s all ease-out'} _hover={{ cursor: 'pointer', color: '#3A8EF6', transform: 'scale(1.2)' }}>Method</Text>
                    </Link>
                    <Link
                        href="/#contact"
                        onClick={() => handleItemClick('contact')}
                        color={activeItem === 'contact' ? '#3A8EF6' : '#6C87AE'}
                    >
                        <Text fontSize={'18px'} transition={'0.1s all ease-out'} _hover={{ cursor: 'pointer', color: '#3A8EF6', transform: 'scale(1.2)' }}>Contact Us</Text>
                    </Link>
                    <Link
                        onClick={() => handlePage('items')}
                        color={activeItem === 'items' ? '#3A8EF6' : '#6C87AE'}
                    >
                        <Text fontSize={'18px'} transition={'0.1s all ease-out'} _hover={{ cursor: 'pointer', color: '#3A8EF6', transform: 'scale(1.2)' }}>Items</Text>
                    </Link>
                </Box>
                <Box>
                    <Button bgColor='#3A8EF6' color={'white'} colorScheme="teal" w={'175px'} h={'55px'} rounded={'100px'}><IoChatbubbleOutline fontSize={'25px'} /> <Text fontSize={'18px'} ml={'6px'}>BUY NOW</Text></Button>
                </Box>
            </Flex>
        </Box>
    )
}

export default Navbar