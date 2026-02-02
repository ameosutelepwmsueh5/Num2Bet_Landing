import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Image,
  Container,
  Heading,
} from "@chakra-ui/react";

import slideImage1 from "assets/img/Ad/time.png";
import slideImage2 from "assets/img/Ad/rate.png";
import slideImage3 from "assets/img/Ad/dailyloot.png";
import slideImage4 from "assets/img/Ad/reward.png";
import slideImage5 from "assets/img/Ad/protect.png";
import slideImage6 from "assets/img/Ad/partnership.png";
import slideImage7 from "assets/img/Ad/betting.png";
import slideImage8 from "assets/img/Ad/Casino.png";

export default function Slide() {
    const slideWidth = 360;
    const transitionMs = 500;

    const baseSlides = [
        { title: "Fast draw period and fair draw", desc: "Our site's betting time is very short at 30 seconds and we use a fair draw method.", image: slideImage1 },
        { title: "Very high winning rate", desc: "Our site's winning rate is 66%, which is much higher than other sites.", image: slideImage2 },
        { title: "Up to $100 Daily Loot", desc: "You can farm up to $100 in daily loot.", image: slideImage3 },
        { title: "Reward", desc: "You can get back 1% of the money you put into betting as a reward.", image: slideImage4 },
        { title: "Secure Privacy and Earning", desc: "The site strictly protects users' personal information and earnings.", image: slideImage5 },
        { title: "Anonymity Betting Game", desc: "Our site is a thorough Anonymity betting game site.", image: slideImage7 },
        { title: "GBO license with Casino BIC operation", desc: "Play with confidence on a licensed platform designed for fairness and reliability.", image: slideImage8 },
        { title: "Up to 5% affiliate Earning", desc: "With our affiliation program, you earn 1–5% of your referrals’ deposits automatically — at no cost to them.", image: slideImage6 },
    ];

    /* 🔁 Repeat slides to form an endless strip */
    const REPEAT = 5; // more = safer
    const slides = Array(REPEAT).fill(baseSlides).flat();

    const middleCopyStart = Math.floor(REPEAT / 2) * baseSlides.length;

    const [index, setIndex] = useState(middleCopyStart);
    const [animate, setAnimate] = useState(true);

    /* ---------------- Navigation ---------------- */
    const next = () => {
        setAnimate(true);
        setIndex((i) => i + 1);
    };

    const prev = () => {
        setAnimate(true);
        setIndex((i) => i - 1);
    };

    /* ---------------- Recenter Logic ---------------- */
    useEffect(() => {
        const buffer = baseSlides.length;

        if (index < buffer) {
        setTimeout(() => {
            setAnimate(false);
            setIndex(index + baseSlides.length * (REPEAT - 2));
        }, transitionMs);
        }

        if (index > slides.length - buffer) {
        setTimeout(() => {
            setAnimate(false);
            setIndex(index - baseSlides.length * (REPEAT - 2));
        }, transitionMs);
        }
    }, [index, slides.length, baseSlides.length]);

    /* ---------------- Drag Support ---------------- */
    const [dragStart, setDragStart] = useState(null);

    const handleDragStart = (x) => setDragStart(x);
    const handleDragEnd = (x) => {
        if (dragStart === null) return;
        const diff = dragStart - x;

        if (diff > 80) next();
        if (diff < -80) prev();

        setDragStart(null);
  };

    return (
        <Container maxW="7xl" py={20}>
            {/* HEADER */}
            <Flex justify="space-between" align="center" mb={8}>
                <Heading>Why Bet With Num2Bet</Heading>
                <Flex gap={3}>
                    <Button
                        onClick={prev}
                        borderRadius="full"
                        bg="whiteAlpha.100"
                        backdropFilter="blur(10px)"
                        _hover={{ bg: "whiteAlpha.200", transform: "translateY(-2px)" }}
                    >
                        ◀
                    </Button>
                    <Button
                        onClick={next}
                        borderRadius="full"
                        bg="whiteAlpha.100"
                        backdropFilter="blur(10px)"
                        _hover={{ bg: "whiteAlpha.200", transform: "translateY(-2px)" }}
                    >
                        ▶
                    </Button>
                </Flex>
            </Flex>

            {/* SLIDER */}
            <Box overflow="hidden">
                <Flex
                    gap={6}
                    cursor="grab"
                    transform={`translateX(-${index * slideWidth}px)`}
                    transition={
                        animate
                        ? `transform ${transitionMs}ms cubic-bezier(0.4,0,0.2,1)`
                        : "none"
                    }
                    onMouseDown={(e) => handleDragStart(e.clientX)}
                    onMouseUp={(e) => handleDragEnd(e.clientX)}
                    onMouseLeave={(e) => dragStart && handleDragEnd(e.clientX)}
                    onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
                    onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientX)}
                >
                {slides.map((slide, i) => (
                    <Box
                        key={i}
                        minW={`${slideWidth}px`}
                        bg="rgba(0,0,0,0.4)"
                        borderRadius="2xl"
                        overflow="hidden"
                        _hover={{ transform: "translateY(-6px)" }}
                        transition="all 0.25s ease"
                    >
                        <Image
                            src={slide.image}
                            h="240px"
                            w="100%"
                            objectFit="cover"
                            draggable={false}
                            alt="NumBanco Slide"
                        />
                        <Box p={6}>
                            <Heading size="md" mb={2}>
                            {slide.title}
                            </Heading>
                            <Text fontSize="sm" opacity={0.8}>
                            {slide.desc}
                            </Text>
                        </Box>
                    </Box>
                ))}
                </Flex>
            </Box>
        </Container>
    );
}
