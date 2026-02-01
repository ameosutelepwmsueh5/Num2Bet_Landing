import React from "react";
import {
    Box,
    Text,
    Container,
    Heading,
    Accordion,
    Stack,
    Flex,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react";
import { faqs } from 'variables/Faq';

export default function FAQs() {
    return (
        <Container id="FAQs" maxW="6xl" py={24}>
            <Heading
                mb={10}
                color={"white"}
                // bgClip="text"
            >
                FREQUENTLY ASKED QUESTIONS
            </Heading>

            <Accordion allowToggle>
                {faqs.map((item, i) => (
                    <AccordionItem
                        key={i}
                        border="none"
                        mb={4}
                        bg="#001d3d"
                        borderRadius="xl"
                        overflow="hidden"
                        // boxShadow="0 0 25px rgba(0,255,255,0.15)"
                    >
                        <h2>
                            <AccordionButton
                                px={6}
                                py={5}
                                _hover={{ bg: "cyan.900Alpha.200" }}
                            >
                                <Box flex="1" textAlign="left" fontWeight="semibold" color="white">
                                    {item.q}
                                </Box>
                                <AccordionIcon color="cyan.400" />
                            </AccordionButton>
                        </h2>

                        <AccordionPanel px={6} pb={6} fontSize="sm" opacity={0.9} color="whiteAlpha.900">
                            <Stack spacing={3}>
                                {Array.isArray(item.a) ? (
                                    item.a.map((step, index) => (
                                        <Flex key={index} align="flex-start" gap={3}>
                                            <Text>{step}</Text>
                                        </Flex>
                                    ))
                                ) : (
                                    <Text>{item.a}</Text>
                                )}
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </Container>
    );
}
