import React from "react";
import {
    Box,
    Stack,
    Text,
    Container,
    Heading,
} from "@chakra-ui/react";

export default function Price() {

    const items = [
        { plan: "Membership Purchase Price", features: "$0", cashback: "$19", price: "$59" },
        { plan: "Super winning money", features: "$87", cashback: "$445", price: "$4500" },
        { plan: "Transaction history", features: "Release", cashback: "Private", price: "Private" },
        { plan: "Pre-draw number", features: "1", cashback: "5", price: "20" },
        { plan: "Can bet", features: "Tier A", cashback: "Tier A, B", price: "Tier A, B, C" },
        { plan: "Daily withdrawal amount", features: "$100", cashback: "$10000", price: "Unlimited" },
        { plan: "Number of raffle tickets available for purchase", features: "5 tickets", cashback: "50 tickets", price: "100 tickets" },
        { plan: "Medal", features: "None", cashback: "Plus Medal", price: "Pro Medal" },
        { plan: "Withdrawal fee", features: "Any", cashback: "Any", price: "None" },
        { plan: "Lottery period", features: "30s", cashback: "30s", price: "30s" }
    ];
    
    return (
        <Box as="section" bg="#000000" aria-labelledby="pricing-heading">
        <Container id="Price" maxW="7xl" py={24}>
            {/* PRICE SECTION */}
            <Stack spacing={8}>
                <Heading as="h2" id="pricing-heading" size="lg" color="white">Pricing</Heading>
                <Text as="p" color="whiteAlpha.800">
                    The service offers three levels: Free, Plus, and Pro.
                </Text>

                <Box
                    bg="#0b1116"
                    borderRadius="2xl"
                    overflow="hidden"
                    border="1px solid #1b2a33"
                    boxShadow="0 18px 32px rgba(0,0,0,0.45)"
                >
                    <Box overflowX="auto">
                        <Box as="table" w="100%">
                            <Box as="thead" bg="#0f1b2a">
                                <Box as="tr">
                                    <Box as="th" px={6} py={4} textAlign="left" fontSize="sm"></Box>
                                    <Box as="th" px={6} py={4} textAlign="left" fontSize="sm" color="#00d4ff">Free</Box>
                                    <Box as="th" px={6} py={4} textAlign="left" fontSize="sm" color="#00d4ff">Plus</Box>
                                    <Box as="th" px={6} py={4} textAlign="left" fontSize="sm" color="#00d4ff">Pro</Box>
                                </Box>
                            </Box>

                            <Box as="tbody">
                                {items.map((row) => (
                                    <Box
                                        as="tr"
                                        key={row.plan}
                                        borderTop="1px solid"
                                        borderColor="#1b2a33"
                                        _hover={{ bg: "#0f1b2a" }}
                                        transition="background 0.2s ease"
                                    >
                                        <Box as="td" px={6} py={4} fontWeight="bold" color="whiteAlpha.900">
                                            {row.plan}
                                        </Box>
                                        <Box as="td" px={6} py={4} fontSize="sm" opacity={0.9} color="whiteAlpha.800">
                                            {row.features}
                                        </Box>
                                        <Box as="td" px={6} py={4} fontSize="sm" color="whiteAlpha.800">
                                            {row.cashback}
                                        </Box>
                                        <Box as="td" px={6} py={4} fontSize="sm" color="whiteAlpha.800">
                                            {row.price}
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Stack>
        </Container>
        </Box>
    );
}
