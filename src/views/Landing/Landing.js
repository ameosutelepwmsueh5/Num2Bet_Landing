// Landing.js
import React from "react";
import { Box } from "@chakra-ui/react";
import AnimatedSection from "components/AnimatedSection";

import backgroundImage from "assets/img/backgournd.jpg";

// load items
import Navbar from "./Items/Navbar";
import Concept from "./Items/Concept";
import Hero from "./Items/Hero";
import Slide from "./Items/Slide.";
import Price from "./Items/Price";
import FAQs from "./Items/FAQs";
import Footer from "./Items/Footer";
import ScrollToTop from "./Items/ScrollToTop";

export default function LandingPage() {
    return (
        <Box minH="100vh" bgGradient="linear(to-b, #00122f, #002266, #00122f)" color="white">
            <Box position="relative" bgImage={`url(${backgroundImage})`} bgSize="cover" bgPosition="center">
                <Box bgColor="rgba(0,34,85,0.65)">
                    <AnimatedSection duration={0.8}><Navbar /></AnimatedSection>
                    <AnimatedSection duration={0.8}><Hero /></AnimatedSection>
                </Box>
            </Box>

            <AnimatedSection y={160} duration={0.6}><Slide /></AnimatedSection>
            <AnimatedSection y={160} duration={0.6}><Concept /></AnimatedSection>
            <AnimatedSection y={160} duration={0.6}><Price /></AnimatedSection>
            <AnimatedSection y={160} duration={0.8}><FAQs /></AnimatedSection>
            <AnimatedSection duration={0.7}><Footer /></AnimatedSection>
            <ScrollToTop />
        </Box>
    );
}
