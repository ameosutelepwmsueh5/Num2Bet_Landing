import React from "react";
import { Link } from "@chakra-ui/react";
import { NavLink as RouterLink } from "react-router-dom";

import {
    Box,
    Container,
    SimpleGrid,
    Stack,
    Text,
    Image,
    Heading,
    Input,
    Button,
    Flex,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import tronIcon from "assets/img/tron.png"
import bscIcon from "assets/img/bsc.png"
import ethereumIcon from "assets/img/ethereum.png"
import Logo from "assets/img/logo_Landing.png"

export default function Footer() {
    return (
        <Box bg="#00122f" color="white" pt={20} pb={10}>
            <Container id="Footer" maxW="7xl">
                <SimpleGrid columns={{ base: 1, xl: 5 }} spacing={10}>
  
                    {/* LOGO — stays as-is */}
                    <Stack spacing={4}>
                        <Image src={Logo} alt="NumBanco" />
                        <Text fontSize="sm" opacity={0.7} color="whiteAlpha.800">
                        Smart betting powered by data, fairness, and transparency.
                        </Text>
                    </Stack>

                    {/* RIGHT SIDE — responsive sections */}
                    <SimpleGrid
                        columns={{ base: 1, sm: 1, md: 4 }}
                        spacing={10}
                        gridColumn={{ base: "1 / -1", xl: "2 / -1" }}
                    >
                        {/* BET CONCEPT */}
                        <Stack spacing={3}>
                            <Heading size="sm" color="cyan.400">Bet Concept</Heading>
                            {["Fairness", "Bet Method", "Reward", "Affiliation"].map((item) => (
                                <Text
                                key={item}
                                fontSize="sm"
                                opacity={0.75}
                                cursor="pointer"
                                _hover={{ opacity: 1, color: "cyan.300" }}
                                onClick={() =>
                                    document.getElementById("bet-concept")?.scrollIntoView({ behavior: "smooth" })
                                }
                                >
                                {item}
                                </Text>
                            ))}
                        </Stack>

                        {/* HELP */}
                        <Stack spacing={3}>
                        <Heading size="sm" color="cyan.400">Help</Heading>
                        <Text
                            fontSize="sm"
                            opacity={0.75}
                            cursor="pointer"
                            _hover={{ opacity: 1, color: "cyan.300" }}
                            onClick={() =>
                            document.getElementById("FAQs")?.scrollIntoView({ behavior: "smooth" })
                            }
                        >
                            FAQs
                        </Text>
                        <Link
                            as={RouterLink}
                            to="/auth/privacy-policy"
                            target="_blank"
                            fontSize="sm"
                            opacity={0.75}
                            _hover={{ opacity: 1, color: "cyan.300" }}
                        >
                            Terms & Policy
                        </Link>
                        <Text fontSize="sm" opacity={0.75} _hover={{ opacity: 1, color: "cyan.300" }}>
                            Contact Us
                        </Text>
                        </Stack>

                        {/* CONTACT US */}
                        <Stack spacing={3}>
                        <Heading size="sm" color="cyan.400">Contact Us</Heading>
                        {[
                            "Telegram: @Num2Bet_Provider",
                            "Email: glavasandrej5@gmail.com",
                            "Zangi: 15-8363-9905",
                            "WhatsApp: +1 820 201 2952",
                        ].map((item) => (
                            <Text
                            key={item}
                            fontSize="sm"
                            opacity={0.75}
                            _hover={{ opacity: 1, color: "cyan.300" }}
                            >
                            {item}
                            </Text>
                        ))}
                        </Stack>

                        {/* SUPPORT TO EMAIL */}
                        <Stack spacing={4}>
                        <Heading size="sm" color="cyan.400">Support to Email</Heading>
                        <Text fontSize="sm" opacity={0.7} color="whiteAlpha.800">
                            Receive betting insights, updates, and exclusive rewards directly in your inbox.
                        </Text>

                        <Box bg="whiteAlpha.100" p={3} borderRadius="xl">
                            <Flex gap={2}>
                            <Input
                                placeholder="Enter your email"
                                bg="transparent"
                                border="none"
                                fontSize="sm"
                                _focus={{ outline: "none" }}
                            />
                            <Button
                                bgGradient="linear(to-r, cyan.400, blue.500)"
                                _hover={{
                                bgGradient: "linear(to-r, cyan.500, blue.600)",
                                transform: "translateY(-2px)",
                                }}
                                transition="all 0.25s ease"
                                px={4}
                                borderRadius="lg"
                            >
                                <ArrowForwardIcon boxSize={5} color="white" />
                            </Button>
                            </Flex>
                        </Box>
                        </Stack>

                    </SimpleGrid>
                </SimpleGrid>


                {/* BOTTOM BAR */}
                <Flex
                    mt={16}
                    pt={6}
                    borderTop="1px solid"
                    borderColor="whiteAlpha.200"
                    justify="space-between"
                    flexWrap="wrap"
                    align="center"
                >
                    {/* LEFT SIDE */}
                    <Flex align="center" gap={3} flexWrap="wrap">
                        <Text fontSize="xs" opacity={0.6}>
                            © {new Date().getFullYear()} Num2Bet. All rights reserved.
                        </Text>

                        {/* NETWORK ICONS */}
                        <Flex align="center" ml={2}>
                            <Image src={tronIcon} alt="Tron" h="26px" zIndex={3} />
                            <Image src={ethereumIcon} alt="Ethereum" h="30px" ml="-10px" zIndex={4} />
                            <Image src={bscIcon} alt="BSC" h="26px" ml="-10px" zIndex={5} />
                        </Flex>
                    </Flex>

                    {/* RIGHT SIDE */}
                    <Flex gap={6}>
                        <Link
                            as={RouterLink}
                            target="_blank"
                            to="/auth/privacy-policy"
                            fontSize="xs"
                            opacity={0.6}
                            _hover={{ opacity: 1, color: "cyan.300" }}
                            cursor="pointer"
                        >
                            Terms & Policy
                        </Link>
                        <Text
                            fontSize="xs"
                            opacity={0.6}
                            _hover={{ opacity: 1, color: "cyan.300" }}
                            cursor="pointer"
                        >
                            Responsible Gaming
                        </Text>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
}
