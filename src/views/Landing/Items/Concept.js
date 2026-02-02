import React, { useState, useEffect } from "react";
import {
    Box,
    Flex,
    Text,
    Button,
    Stack,
    Container,
    Heading,
    Image,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { concepts } from "../../../variables/Concepts.js";

const MotionBox = motion(Box);

export default function Concept() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            const tempIndex = (index + 1) % concepts.length;
            setIndex(tempIndex);
        }, 10000);
        return () => clearInterval(interval);
    }, [concepts, index]);

    const handleNext = () => {
        setDirection(1);
        const tempIndex = (index + 1) % concepts.length;
        setIndex(tempIndex);
    };

    const handlePrev = () => {
        setDirection(-1);
        const tempIndex = index === 0 ? concepts.length - 1 : index - 1;
        setIndex(tempIndex);
    };

    const active = concepts[index];

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 80 : -80,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.45, ease: "easeOut" },
        },
        exit: (direction) => ({
            x: direction > 0 ? -80 : 80,
            opacity: 0,
            transition: { duration: 0.35, ease: "easeIn" },
        }),
    };

    return (
        <Container id="bet-concept" maxW="7xl" py={28}>
            <Heading letterSpacing="widest" mb={4} color="#fff">
                BETTING CONCEPT
            </Heading>

            <Flex
                direction={{ base: "column-reverse", md: "row" }}
                align="center"
                gap={{ base: 8, md: 12 }}
            >
                {/* TEXT SECTION */}
                <Box flex="1" position="relative">
                    <Box
                        position={{ base: "static", md: "relative" }}
                        minH={{ base: "auto", md: "220px" }}
                        overflow={{ base: "visible", md: "hidden" }}
                    >
                        <AnimatePresence custom={direction} mode="wait">
                            <MotionBox
                                key={index}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                position={{ base: "relative", md: "absolute" }}
                                top={0}
                                left={0}
                                w="100%"
                            >
                                <Stack
                                    spacing={6}
                                    maxW="xl"
                                    w="100%"
                                    textAlign={{ base: "center", md: "left" }}
                                >
                                    <Heading fontSize="4xl" color="cyan.400" lineHeight={1.2}>
                                        {active.title}
                                    </Heading>

                                    <Text fontSize="md" opacity={0.85} lineHeight={1.9} color="whiteAlpha.900">
                                        {active.desc}
                                    </Text>
                                </Stack>
                            </MotionBox>
                        </AnimatePresence>
                    </Box>
                </Box>

                {/* IMAGE SECTION */}
                <Box
                    flex="1"
                    w="100%"
                    maxW={{ base: "100%", md: "490px" }}
                    bg="#001d3d"
                    borderRadius="2xl"
                    p={1}
                    boxShadow="
                        0 0 25px rgba(0, 255, 255, 0.55),
                        0 0 60px rgba(0, 255, 255, 0.35),
                        0 0 120px rgba(0, 255, 255, 0.25),
                        0 20px 40px rgba(0, 0, 0, 0.6),
                        inset 0 0 25px rgba(0, 255, 255, 0.15)
                    "
                >
                    <Box
                        position="relative"
                        h={{ base: "240px", sm: "280px", md: "320px" }}
                        overflow="hidden"
                    >
                        <AnimatePresence custom={direction} mode="wait">
                            <MotionBox
                                key={active.image}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate={{ ...slideVariants.center }}
                                exit="exit"
                                position="absolute"
                                top={0}
                                left={0}
                                w="100%"
                                h="100%"
                            >
                                <Image
                                    src={active.image}
                                    alt="Lottery betting concept illustration"
                                    w="100%"
                                    h="100%"
                                    objectFit="contain"
                                    draggable={true}
                                />
                            </MotionBox>
                        </AnimatePresence>
                    </Box>
                </Box>
            </Flex>

            {/* CONTROLS */}
            <Flex justify="center" gap={6} pt={6}>
                <Button
                    onClick={handlePrev}
                    w="48px"
                    h="48px"
                    borderRadius="full"
                    bg="rgba(255,255,255,0.1)"
                    backdropFilter="blur(12px)"
                    fontSize="lg"
                    _hover={{ bg: "cyan.400Alpha.300", transform: "translateY(-2px)" }}
                    transition="all 0.2s ease"
                >
                    ‹
                </Button>

                <Button
                    onClick={handleNext}
                    w="48px"
                    h="48px"
                    borderRadius="full"                    
                    bg="rgba(255,255,255,0.1)"
                    backdropFilter="blur(12px)"
                    fontSize="lg"
                    _hover={{ bg: "cyan.400Alpha.300", transform: "translateY(-2px)" }}
                    transition="all 0.2s ease"
                >
                    ›
                </Button>
            </Flex>
        </Container>
    );
}
