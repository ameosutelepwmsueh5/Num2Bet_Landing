import { Button } from "@chakra-ui/react";

import React from "react";

function ClickButton(props) {
    const { label, width, onClick, borderColor, mt, mb, disabled, color } = props;
    return (
        <Button
            variant="solid"
            fontSize='15px'
            type='button'
            maxW='350px'
            alignSelf="center"
            h='45'
            color={color ? color : "white"}
            mt={mt ? mt : '20px'}
            bg="transparent"
            mb={mb ? mb : '20px'}
            // mt='20px'
            w={width ? width : "100%"}
            border="2px solid"
            borderColor={borderColor ? borderColor: "#00d4ff"}
            boxShadow="0 8px 24px rgba(0,212,255,0.1)"
            _hover={{
                color: "white",
                transform: "translateY(-2px)",
                boxShadow: "0 12px 32px rgba(0,212,255,0.2)",
            }}
            
            _active={{
                transform: "translateY(0)",
                boxShadow: "0 6px 18px rgba(0,212,255,0.22)",
            }}
            transition="all 0.25s ease"
            disabled={disabled}
            onClick={onClick}
        >
            {label}
        </Button>
    );
}

export default ClickButton;

// import { Button } from "@chakra-ui/react";
// import React from "react";

// function ClickButton({ label, width , onClick, disabled }) {
//     return (
//         <Button
//             onClick={onClick}
//             disabled={disabled}
//             w={width}
//             h="48px"
//             fontSize="14px"
//             fontWeight="600"
//             borderRadius="12px"
//             variant="solid"
//             bgGradient="linear(to-r, purple.500, pink.500)"
//             colorScheme="blue"
//             boxShadow="0 8px 24px rgba(168,85,247,0.35)"
//             _hover={{
//                 bgGradient: "linear(to-r, purple.600, pink.600)",
//                 transform: "translateY(-2px)",
//                 boxShadow: "0 12px 32px rgba(168,85,247,0.45)",
//                 transform: "translateY(-2px)", boxShadow: "lg"
//             }}
//             _active={{ transform: "translateY(0px)", boxShadow: "md" }}
//             transition="all 0.25s ease"
//             mt="20px"
//             mb="20px"
//         >
//             {label}
//         </Button>
//     );
// }

// export default ClickButton;
