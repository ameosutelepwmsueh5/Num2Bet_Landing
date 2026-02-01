import React, { useState } from 'react'
import {
    Box,
    Flex,
    Text,
    Avatar,
    HStack,
    VStack,
    Icon,
    Button,
    IconButton,
} from '@chakra-ui/react'
import { NavLink } from "react-router-dom";
import {
    StarIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons'
import { motion } from 'framer-motion'
const itemVariant = {
    hidden: {
        opacity: 0,
        y: 24,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

// Motion wrappers

const userAvatar1 = '/avatars/pfp39.png' // <-- your avatar image
const userAvatar2 = '/avatars/pfp51.png' // <-- your avatar image
const userAvatar3 = '/avatars/pfp52.png' // <-- your avatar image
const userAvatar4 = '/avatars/pfp33.png' // <-- your avatar image
const userAvatar5 = '/avatars/pfp44.png' // <-- your avatar image
const userAvatar6 = '/avatars/pfp25.png' // <-- your avatar image

const MotionFlex = motion(Flex)
const MotionBox = motion(Box)

/* ===================== DATA ===================== */

const feedbacks = [
    {
        name: 'LuckyWolf88',
        country: 'United States',
        flag: '🇺🇸',
        rating: 5,
        tag: 'Fast Payout',
        text:
        'Withdrawals were instant and gameplay feels extremely fair. I tested multiple games and every result felt transparent and balanced.',
        avatar: userAvatar1,
    },
    {
        name: 'AceDragon',
        country: 'Canada',
        flag: '🇨🇦',
        rating: 5,
        tag: 'Big Win',
        text:
        'Won big on my first session and the payout arrived faster than expected. The UI is clean and modern.',
        avatar: userAvatar2,
    },
    {
        name: 'ShadowKing',
        country: 'United Kingdom',
        flag: '🇬🇧',
        rating: 4,
        tag: 'Trusted',
        text:
        'Very transparent system with clear rules and fair odds. After weeks of playing, I feel confident recommending it.',
        avatar: userAvatar3
    },
    {
        name: 'GoldenTiger',
        country: 'Australia',
        flag: '🇦🇺',
        rating: 5,
        tag: 'Smooth UI',
        text:
        'The interface feels premium and polished. Navigation is intuitive and games load quickly.',
        avatar: userAvatar4,
    },
    {
        name: 'NightAce',
        country: 'Singapore',
        flag: '🇸🇬',
        rating: 4,
        tag: 'Fair Game',
        text:
        'Odds feel fair and results are consistent across sessions.',
        avatar: userAvatar5,
    },
    {
        name: 'StormRider',
        country: 'Germany',
        flag: '🇩🇪',
        rating: 5,
        tag: 'Reliable',
        text:
        'Payments are reliable, support is responsive, and the experience remains stable and trustworthy.',
        avatar: userAvatar6,
    },
]

/* ===================== CONSTANTS ===================== */

const CARD_WIDTH = 370
const CARD_GAP = 40
const VISIBLE_CARDS = 3

/* ===================== COMPONENT ===================== */

export default function UserFeedbackSlider() {
    const [index, setIndex] = useState(0)

    const maxIndex = Math.ceil(feedbacks.length / VISIBLE_CARDS) - 1;

    const [page, setPage] = useState(0)

    const prev = () => setPage((p) => (p === 0 ? 1 : 0))
    const next = () => setPage((p) => (p === 1 ? 0 : 1))

    const visibleFeedbacks = feedbacks.slice(page * 3, page * 3 + 3)


    return (
        <Box py={{ base: 24, md: 32 }}>
            {/* ===== HEADER ===== */}
            <VStack spacing={4} mb={16} textAlign="center">
                <Text
                fontSize={{ base: '3xl', md: '5xl' }}
                fontWeight="bold"
                color="white"
                >
                What Our Players Say
                </Text>
                <Text
                color="whiteAlpha.700"
                fontSize="lg"
                maxW="720px"
                >
                Trusted by thousands of confident bettors worldwide who value fairness,
                transparency, and fast payouts
                </Text>
            </VStack>

            {/* ===== SLIDER ===== */}
            <Flex justify="center" align="center" gap={4} px={6}>
                <IconButton
                aria-label="Previous"
                icon={<ChevronLeftIcon boxSize={8} />}
                onClick={prev}
                bg="whiteAlpha.200"
                color="white"
                _hover={{ bg: 'purple.500' }}
                rounded="full"
                />

                {/* ===== VIEWPORT (LOCKS 3 CARDS) ===== */}
                <Box
                overflow="hidden"
                width={`${CARD_WIDTH * VISIBLE_CARDS +
                    CARD_GAP * (VISIBLE_CARDS - 1)}px`}
                >
                <MotionFlex
                    gap={`${CARD_GAP}px`}
                    key={page}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                >
                    {visibleFeedbacks.map((item, i) => (
                        <MotionBox
                            key={i}
                            w={`${CARD_WIDTH}px`}
                            minH="380px"
                            p={10}
                            bg="whiteAlpha.100"
                            border="1px solid"
                            borderColor="whiteAlpha.300"
                            borderRadius="3xl"
                            backdropFilter="blur(14px)"
                            color="white"
                            display="flex"
                            flexDirection="column"
                            justifyContent="space-between"
                            whileHover={{ scale: 1.04 }}
                            transition="0.3s ease"
                        >
                            {/* card content */}
                            <Box>
                                <HStack spacing={1} mb={5}>
                                    {Array(5)
                                    .fill('')
                                    .map((_, idx) => (
                                        <Icon
                                        key={idx}
                                        as={StarIcon}
                                        color={
                                            idx < item.rating
                                            ? 'yellow.400'
                                            : 'whiteAlpha.300'
                                        }
                                        />
                                    ))}
                                </HStack>

                                <Text
                                    fontSize="lg"
                                    lineHeight="tall"
                                    color="whiteAlpha.800"
                                >
                                    “{item.text}”
                                </Text>
                            </Box>

                            <HStack mt={8}>
                                <Avatar size="md" src={item.avatar} />
                                <Box>
                                    <Text fontWeight="bold">{item.name}</Text>
                                    <Text fontSize="sm" color="#00d4ff">
                                    {item.country} 
                                    </Text>
                                </Box>
                            </HStack>
                        </MotionBox>
                    ))}
                </MotionFlex>

                </Box>

                <IconButton
                    aria-label="Next"
                    icon={<ChevronRightIcon boxSize={8} />}
                    onClick={next}
                    bg="whiteAlpha.200"
                    color="white"
                    _hover={{ bg: 'purple.500' }}
                    rounded="full"
                />
            </Flex>

            {/* ===== CTA ===== */}
            <MotionFlex justify="center" variants={itemVariant} gap={4}>
                    
                <Button
                    as={NavLink}
                    to="/auth/signin"
                    p={7}
                    h="40px"
                    mt={20}
                    fontSize="lg"
                    width="500px"
                    fontWeight="semibold"
                    letterSpacing="0.4px"
                    color="cyan.400"
                    bg="transparent"
                    border="2px solid"
                    borderColor="cyan.400"
                    // borderRadius="full"
                    boxShadow="0 8px 24px rgba(0,255,255,0.2)"
                    _hover={{
                        color: "white",
                        transform: "translateY(-2px)",
                        boxShadow: "0 12px 32px rgba(0,255,255,0.3)",
                    }}
                    _active={{
                        transform: "translateY(0)",
                        boxShadow: "0 6px 18px rgba(0,255,255,0.25)",
                    }}
                    transition="all 0.25s ease"
                >
                    Get Started
                </Button>

            </MotionFlex>
        </Box>
    )
}
