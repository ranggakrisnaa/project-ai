import { Box, Button, Flex, IconButton, Image, Link, Text, VStack, useDisclosure } from "@chakra-ui/react"
import brand from "../assets/brand.png"
// import { NavLink } from "react-router-dom";
// import { navItems } from "../lib/data"
import './Navbar.css'
import { IoChatbubbleOutline, IoCloseCircleOutline } from "react-icons/io5";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";

const Navbar = () => {
    const [activeItem, setActiveItem] = useState('')
    const navigate = useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    const handlePage = (item) => {
        setActiveItem(item);
        navigate('/items')
    }


    return (
        <Box w={'100vw'}>
            <Flex justifyContent={'space-between'} alignItems={'center'} mx={'auto'} w={{ base: "100%", sm: '80%' }} p={'20px'}>
                <Box w={{ base: "100px", md: "200px" }}>
                    <Image src={brand} />
                </Box>
                <Box display={{ base: 'none', md: "flex" }} gap={'30px'} textColor={'#6C87AE'}>
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
                    <Button bgColor='#3A8EF6' display={{ base: "none", md: "flex" }} color={'white'} colorScheme="teal" w={{ base: "80px", md: '175px' }} h={{ base: "30px", md: '55px' }} rounded={'100px'} fontSize={{ base: "10px", md: '25px' }}><IoChatbubbleOutline /><Text fontSize={{ base: "10px", md: '18px' }} ml={'6px'}>BUY NOW</Text></Button>
                </Box>
                <Box display={{ base: 'flex', md: 'none' }} alignItems="center" w="10%">
                    {isOpen ? (
                        <IconButton
                            aria-label="Close Mobile Menu"
                            icon={<IoCloseCircleOutline />}
                            onClick={onClose}
                            bg="transparent"
                            _hover={{ bg: 'transparent' }}
                            _focus={{ outline: 'none' }}
                        />
                    ) : (
                        <IconButton
                            aria-label="Open Mobile Menu"
                            icon={<FaAlignJustify />}
                            onClick={onOpen}
                            bg="transparent"
                            _hover={{ bg: 'transparent' }}
                            _focus={{ outline: 'none' }}
                        />
                    )}

                    {isOpen && (
                        <VStack spacing="10px" align="stretch" mt="10px" w="100%" bg="#FFFFFF" h={'auto'} rounded={'20px'} p={'20px'} position="absolute" top="64px" left="0" zIndex="10">
                            <Flex justifyContent={'center'} flexDirection={'column'} alignItems={'center'} gap={'50px'}>
                                <Link
                                    href="/"
                                    onClick={() => handleItemClick('home')}
                                    color={activeItem === 'home' ? '#3A8EF6' : '#6C87AE'}
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/#about"
                                    onClick={() => handleItemClick('about')}
                                    color={activeItem === 'about' ? '#3A8EF6' : '#6C87AE'}
                                >
                                    About
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
                                <Button
                                    bgColor='#3A8EF6'
                                    color={'white'}
                                    colorScheme="teal"
                                    rounded={'100px'}
                                    onClick={() => handlePage('items')}
                                >
                                    <Text fontSize={'18px'}>BUY NOW</Text>
                                </Button>
                            </Flex>

                        </VStack>
                    )}
                </Box>
            </Flex>
        </Box>
    )
}

export default Navbar