// Hero.js
import React from "react";
import {
    Flex,
    Text,
    Button,
    Stack,
    Container,
    Heading,
    Box,
    Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import ClickButton from "components/Input/ClickButton";
import manImage from "assets/img/man.png";

const MotionStack = motion(Stack);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const MotionBox = motion(Box);

const containerVariant = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } };
const itemVariant = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const imageVariant = { hidden: { opacity: 0, y: 40, scale: 0.96 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } } };

export default function Hero() {
    return (
        <Container maxW="7xl" pt={64} pb={52} position="relative">
            <MotionStack spacing={6} maxW="xl" zIndex={10} variants={containerVariant} initial="hidden" animate="show">
                <MotionText variants={itemVariant} letterSpacing="widest" fontSize="sm" opacity={0.8}>
                    Where Numbers Beat Luck
                </MotionText>

                <MotionHeading variants={itemVariant} fontSize="5xl" lineHeight={1.1} bgGradient="linear(to-r, cyan.400, blue.500)" bgClip="text">
                    Bet With Clarity.<br />Win With Confidence.
                </MotionHeading>

                <MotionText variants={itemVariant} opacity={0.85}>
                    Enjoy the best betting anytime, anywhere.
                </MotionText>

                <Flex variants={itemVariant} gap={4}>
                    <ClickButton
                        width="200px"
                        mt="0px"
                        borderColor="cyan.500"
                        mb="0"
                        bg="cyan.500"
                        onClick={() => { document.getElementById("Footer")?.scrollIntoView({ behavior: "smooth" }); }}
                        label="Contact Us"
                    />
                    <Button
                        variant="solid"
                        fontSize='15px'
                        type='button'
                        maxW='350px'
                        alignSelf="center"
                        width="200px"
                        h='45'
                        color="white"
                        mt='20px'
                        mb='20px'
                        bgGradient="linear(to-r, cyan.400, blue.500)"
                        colorScheme="blue"
                        boxShadow="0 8px 24px rgba(0,170,255,0.35)"
                        _hover={{ bgGradient: "linear(to-r, cyan.500, blue.600)", transform: "translateY(-2px)", boxShadow: "0 12px 32px rgba(0,170,255,0.45)" }}
                        _active={{ transform: "translateY(0px)", boxShadow: "md" }}
                        onClick={() => { document.getElementById("FAQs")?.scrollIntoView({ behavior: "smooth" }); }}
                    >
                        FAQs
                    </Button>
                </Flex>
            </MotionStack>

            <MotionBox position="absolute" bottom="-100" right="0" transformOrigin="bottom right" zIndex={1} variants={imageVariant} initial="hidden" animate="show">
                <Image src={manImage} zIndex={0} alt="Celebrating man" boxSize={["320px", "500px", "620px"]} objectFit="contain" />
            </MotionBox>
        </Container>
    );
}
