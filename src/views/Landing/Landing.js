// Landing.js
import React from "react";
import { Box } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "components/AnimatedSection";

import backgroundImage from "assets/img/backgournd.jpg";

// items
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
        <>
        {/* ===== SEO HEAD ===== */}
        <Helmet>
            <title>Num2Bet – Secure Online Sports Betting Platform</title>

            <meta
            name="description"
            content="Num2Bet is a secure online sports betting platform offering live odds, fast payouts, and a modern betting experience."
            />

            <link rel="canonical" href="https://YOUR_SITE.netlify.app/" />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Num2Bet – Secure Online Sports Betting" />
            <meta
            property="og:description"
            content="Bet live on sports with fast payouts, secure wallets, and real-time odds."
            />
            <meta property="og:image" content="https://YOUR_SITE.netlify.app/og-image.jpg" />
            <meta property="og:url" content="https://YOUR_SITE.netlify.app/" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />

            {/* Structured Data */}
            <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Num2Bet",
                url: "https://YOUR_SITE.netlify.app/",
                description:
                "Secure online sports betting platform with live odds and fast payouts",
            })}
            </script>
        </Helmet>

        {/* ===== PAGE CONTENT ===== */}
        <Box
            as="main"
            minH="100vh"
            bgGradient="linear(to-b, #00122f, #002266, #00122f)"
            color="white"
        >
            {/* HERO SECTION */}
            <Box
            as="section"
            position="relative"
            bgImage={`url(${backgroundImage})`}
            bgSize="cover"
            bgPosition="center"
            aria-label="Hero section"
            >
                <Box bgColor="rgba(0,34,85,0.65)">
                    <AnimatedSection duration={0.8}>
                    <Navbar />
                    </AnimatedSection>

                    {/* Make sure Hero contains EXACTLY ONE <h1> */}
                    <AnimatedSection duration={0.8}>
                    <Hero />
                    </AnimatedSection>
                </Box>
            </Box>

            {/* CONTENT SECTIONS */}
            <AnimatedSection y={160} duration={0.6}>
                <section>
                    <Slide />
                </section>
            </AnimatedSection>

            <AnimatedSection y={160} duration={0.6}>
                <section>
                    <Concept />
                </section>
            </AnimatedSection>

            <AnimatedSection y={160} duration={0.6}>
                <section>
                    <Price />
                </section>
            </AnimatedSection>

            <AnimatedSection y={160} duration={0.8}>
                <section>
                    <FAQs />
                </section>
            </AnimatedSection>

            <AnimatedSection duration={0.7}>
                <Footer />
            </AnimatedSection>

            <ScrollToTop />
        </Box>
        </>
    );
}
