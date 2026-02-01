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
        { plan: "Daily withdrawal amount", features: "$1000", cashback: "$10000", price: "Unlimited" },
        { plan: "Number of raffle tickets available for purchase", features: "5 tickets", cashback: "50 tickets", price: "100 tickets" },
        { plan: "Medal", features: "None", cashback: "Plus Medal", price: "Pro Medal" },
        { plan: "Withdrawal fee", features: "Any", cashback: "Any", price: "None" },
        { plan: "Lottery period", features: "30s", cashback: "30s", price: "30s" }
    ];

    return (
        <Container id="Price" maxW="7xl" py={24}>
            {/* PRICE SECTION */}
            <Stack spacing={8}>
                <Heading size="lg" color="White">Pricing</Heading>
                <Text color="whiteAlpha.800">
                    The service offers three levels: Free, Plus, and Pro.
                </Text>

                <Box
                    bg="#001d3d"
                    borderRadius="2xl"
                    overflow="hidden"
                    // boxShadow="
                    //     0 0 25px rgba(0,255,255,0.35),
                    //     0 0 60px rgba(0,255,255,0.25),
                    //     0 20px 40px rgba(0,0,0,0.6)
                    // "
                >
                    <Box overflowX="auto">
                        <Box as="table" w="100%">
                            <Box as="thead" bg="cyan.900Alpha.400">
                                <Box as="tr">
                                    <Box as="th" px={6} py={4} textAlign="left" fontSize="sm"></Box>
                                    <Box as="th" px={6} py={4} textAlign="left" fontSize="sm" color="cyan.300">Free</Box>
                                    <Box as="th" px={6} py={4} textAlign="left" fontSize="sm" color="cyan.300">Plus</Box>
                                    <Box as="th" px={6} py={4} textAlign="left" fontSize="sm" color="cyan.300">Pro</Box>
                                </Box>
                            </Box>

                            <Box as="tbody">
                                {items.map((row) => (
                                    <Box
                                        as="tr"
                                        key={row.plan}
                                        borderTop="1px solid"
                                        borderColor="whiteAlpha.100"
                                        _hover={{ bg: "cyan.900Alpha.200" }}
                                        transition="background 0.2s ease"
                                    >
                                        <Box as="td" px={6} py={4} fontWeight="bold" color="cyan.300">
                                            {row.plan}
                                        </Box>
                                        <Box as="td" px={6} py={4} fontSize="sm" opacity={0.9} color="whiteAlpha.900">
                                            {row.features}
                                        </Box>
                                        <Box as="td" px={6} py={4} fontSize="sm" color="whiteAlpha.900">
                                            {row.cashback}
                                        </Box>
                                        <Box as="td" px={6} py={4} fontSize="sm" color="whiteAlpha.900">
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
    );
}
