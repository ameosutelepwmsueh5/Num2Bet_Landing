// Navbar.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { NavLink as RouterLink } from "react-router-dom";
import {
    Box,
    Flex,
    Button,
    Image
} from "@chakra-ui/react";

import logo from "../../../assets/img/logo_Landing.png";

export default function Navbar() {
    const dispatch = useDispatch();
    const [scrolled, setScrolled] = useState(false);

    function changeIndex(index) {
        if (index >= 0) {
            dispatch({ type: "SET_SLIDE_INDEX", payload: index });
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Flex
            px={12}
            py={scrolled ? 8 : 6}
            align="center"
            justify="space-between"
            bg={scrolled ? "rgba(0, 34, 85, 0.6)" : "rgba(0, 34, 85, 0.3)"}
            backdropFilter="blur(10px)"
            position="fixed"
            top={0}
            left={0}
            w="100%"
            zIndex={10}
            transition="all 0.3s ease"
        >
            <Image
                src={logo}
                width={scrolled ? "150px" : "140px"}
                transition="width 0.3s ease"
                cursor="pointer"
                alt="NumBanco"
            />

            <Flex gap={6} align="center">
                <Box position="relative" role="group">
                    <Button variant="ghost" color="white" fontSize="sm" _hover={{ bg: "transparent" }}>
                        BET
                    </Button>
                    <Box
                        position="absolute"
                        top="100%"
                        left={0}
                        w="150px"
                        bg="#001d3d"
                        borderRadius="md"
                        boxShadow="xl"
                        py={2}
                        opacity={0}
                        cursor="pointer"
                        visibility="hidden"
                        transition="opacity 0.15s ease"
                        _groupHover={{ opacity: 1, visibility: "visible" }}
                    >
                        {["Concept", "Fairness", "Bet Method", "Reward", "Affiliation"].map(
                            (item, index) => (
                                <Box
                                    key={item}
                                    px={4}
                                    py={2}
                                    fontSize="sm"
                                    _hover={{ bg: "whiteAlpha.100" }}
                                    onClick={() => {
                                        document.getElementById("bet-concept")?.scrollIntoView({ behavior: "smooth" });
                                        changeIndex(index - 1);
                                    }}
                                >
                                    {item}
                                </Box>
                            )
                        )}
                    </Box>
                </Box>

                <Button
                    variant="ghost"
                    _hover={{ bg: "transparent" }}
                    onClick={() =>
                        document.getElementById("Price")?.scrollIntoView({ behavior: "smooth" })
                    }
                >
                    Price
                </Button>

                <Box position="relative" role="group">
                    <Button variant="ghost" color="white" fontSize="sm" _hover={{ bg: "transparent" }}>
                        Help
                    </Button>
                    <Box
                        position="absolute"
                        top="100%"
                        left={0}
                        w="150px"
                        bg="#001d3d"
                        borderRadius="md"
                        boxShadow="xl"
                        py={2}
                        cursor="pointer"
                        opacity={0}
                        visibility="hidden"
                        transition="opacity 0.15s ease"
                        _groupHover={{ opacity: 1, visibility: "visible" }}
                    >
                        <Box
                            px={4}
                            py={2}
                            fontSize="sm"
                            _hover={{ bg: "whiteAlpha.100" }}
                            onClick={() =>
                                document.getElementById("FAQs")?.scrollIntoView({ behavior: "smooth" })
                            }
                        >
                            FAQs
                        </Box>
                        <Box px={4} py={2} fontSize="sm" _hover={{ bg: "whiteAlpha.100" }}>
                            <Link as={RouterLink} target="_blank" to="/auth/privacy-policy">
                                Terms & Policy
                            </Link>
                        </Box>
                        <Box
                            px={4}
                            py={2}
                            fontSize="sm"
                            _hover={{ bg: "whiteAlpha.100" }}
                            onClick={() =>
                                document.getElementById("Footer")?.scrollIntoView({ behavior: "smooth" })
                            }
                        >
                            Contact Us
                        </Box>
                    </Box>
                </Box>
                <Button
                    as={NavLink}
                    to="/auth/signin"
                    variant="solid"
                    fontSize='15px'
                    type='button'
                    maxW='350px'
                    alignSelf="center"
                    h='45'
                    color="white"
                    w={"100%"}
                    bgGradient="linear(to-r, cyan.400, blue.500)"
                    colorScheme="blue"
                    boxShadow="0 8px 24px rgba(0,170,255,0.35)"
                    _hover={{
                        bgGradient: "linear(to-r, cyan.500, blue.600)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 12px 32px rgba(0,170,255,0.45)"
                    }}
                    _active={{ transform: "translateY(0px)", boxShadow: "md" }}
                >
                    Sign In
                </Button>
            </Flex>
        </Flex>
    );
}
