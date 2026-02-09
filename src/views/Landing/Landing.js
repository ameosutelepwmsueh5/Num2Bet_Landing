// Landing.js
import React from "react";
import { Box } from "@chakra-ui/react";
import AnimatedSection from "components/AnimatedSection";

// items
import Navbar from "./Items/Navbar";
import Concept from "./Items/Concept";
import Hero from "./Items/Hero";
import Slide from "./Items/Slide.";
import Card from "./Items/Card";
import Price from "./Items/Price";
import FAQs from "./Items/FAQs";
import Footer from "./Items/Footer";
import ScrollToTop from "./Items/ScrollToTop";



export default function LandingPage() {
    const topCurveH = 180;
    return (
        <Box as="main" minH="100vh" bg="#ffffff" color="#0b1f3a">
            {/* HERO */}
            <Box bg="#ffffff">
                <AnimatedSection duration={0.8}><Navbar /></AnimatedSection>
                <Box
                    bg="black"
                    color="white"
                    position="relative"
                    overflow="hidden"
                    pb={{ base: 6, md: 10 }}
                    clipPath="ellipse(120% 100% at 10% 0%)"
                >
                    <AnimatedSection duration={0.8}><Hero /></AnimatedSection>
                </Box>
            </Box>
            
            {/* FEATURES / TILES */}
            <Box bg="#ffffff">
                <AnimatedSection y={160} duration={0.6}><Slide /></AnimatedSection>
            </Box>

            {/* CONCEPT / ADVANTAGE */}
            <Box>
                <AnimatedSection y={160} duration={0.6}><Concept /></AnimatedSection>
                <AnimatedSection y={160} duration={0.6}><Card /></AnimatedSection>
            </Box>

            {/* PRICE */}
            <Box 
                bg="#000000"
                color="white"
                position="relative"
                overflow="hidden"
                pt={{ base: topCurveH - 12, md: topCurveH - 14 }}
                // pb={{ base: -12, md: -20 }}
                _before={{
                    content: '""',
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    height: `${topCurveH}px`,
                    // White curve "cut-in" over black background
                    background: "#ffffff",
                    // Invert curve direction: curve sits on TOP edge
                    clipPath: "ellipse(60% 75% at 50% 0%)",
                    pointerEvents: "none",
                    zIndex: 0,
                }}
            >
                <AnimatedSection y={160} duration={0.6}><Price /></AnimatedSection>
            </Box>

            {/* FAQ */}
            <Box bg="#ffffff"
                pt={{ base: topCurveH - 12, md: topCurveH - 14 }}
                color="white"
                position="relative"
                overflow="hidden"
                // pb={{ base: 72, md: 88 }}
                _before={{
                    content: '""',
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: "0px",
                    height: `${topCurveH}px`,
                    // White curve "cut-in" over black background
                    background: "black",
                    // Invert curve direction: curve sits on TOP edge
                    clipPath: "ellipse(60% 75% at 50% 0%)",
                    pointerEvents: "none",
                    zIndex: 0,
                }}
            >
                <AnimatedSection y={160} duration={0.8}><FAQs /></AnimatedSection>
            </Box>

            {/* FOOTER */}
            <Box bg="#ffffff">
                <AnimatedSection duration={0.7}><Footer /></AnimatedSection>
            </Box>

            <ScrollToTop />
        </Box>
    );
}
