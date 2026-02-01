import React from "react";
import { 
    DarkMode,
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter, 
    Box,
    Avatar
} from "@chakra-ui/react";

import ClickButton from "components/Input/ClickButton";
import CancelButton from "components/Input/CancelButton";

import promedal from "assets/badge/GOLDEN_MEDAL.png";
import plusmedal from "assets/badge/BLUE_MEDAL.png";

function Dialog(props) {

    const {isOpen, onClose, onConfirm, title, status, content, width,isFooter, bottom, top, yesButton, yesButtonWidth, noButton, addcontent, amountcontent, image, membership, disable } = props;
        
        return (
        <AlertDialog isOpen={isOpen} onClose={onClose}>
            <DarkMode>
                <AlertDialogOverlay>
                    <AlertDialogContent
                        background="#0A0F29"
                        maxWidth={width ? width : "500px"}
                        borderRadius="20px"
                        margin="auto"
                        position="absolute"
                        top={top ? top : '20%'}
                        // left="calc(50% - 250px)"
                        transform="translate(-50%, -50%)"
                        color="#fff"
                    >
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            {status} {title}
                        </AlertDialogHeader>
                        <AlertDialogBody>
                            {content}
                        </AlertDialogBody>
                        <AlertDialogBody>
                            {amountcontent}
                        </AlertDialogBody>
                        <AlertDialogBody>
                            {addcontent}
                        </AlertDialogBody>
                        {image && (
                            <Box 
                            alignSelf="center"
                            position="relative" 
                            w='380px' 
                            h='380px' 
                            display="inline-block"
                            me="18px" 
                            mb="20px"
                            >
                                <Box
                                position="absolute"
                                top="-79px"
                                left="-78px"
                                w="530px"
                                h="530px"
                                backgroundImage={`url(${membership === 2 && promedal || membership === 1 && plusmedal})`}
                                backgroundSize="contain"
                                backgroundRepeat="no-repeat"
                                backgroundPosition="center"
                                zIndex="3"
                                />
                                
                                <Box
                                w="380px"
                                h="380px"
                                backgroundImage={image}
                                backgroundSize="cover"
                                borderRadius='50px' 
                                backgroundRepeat="no-repeat"
                                backgroundPosition="center"
                                />
                            </Box>
                        )}
                        {isFooter ? ("") : (<AlertDialogFooter gap="20px" zIndex={10000}>
                            <ClickButton onClick={onConfirm} width={yesButtonWidth ? yesButtonWidth : "100px"} label={yesButton} disabled={disable} />
                            <CancelButton onClick={onClose} label={noButton} />
                        </AlertDialogFooter>) }
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </ DarkMode>
        </AlertDialog>
    );
}

export default Dialog;