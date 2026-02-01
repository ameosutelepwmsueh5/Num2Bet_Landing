import React from "react";
import { 
    DarkMode,
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogBody,
} from "@chakra-ui/react";

function DailyDialog(props) {

    const {isOpen, onClose, bgImage, content} = props;

    return (
        <AlertDialog bgImage={bgImage} isOpen={isOpen} onClose={onClose}>
            <DarkMode>
                <AlertDialogOverlay>
                    <AlertDialogContent
                        // background="linear-gradient(127.09deg, rgb(3 7 63 / 94%) 19.41%, rgb(31 34 151) 76.65%);"
                        background="linear-gradient(127.09deg, rgba(0, 212, 255, 0.94) 19.41%, rgba(0, 212, 255, 0.9) 76.65%);"
                        maxWidth="500px"
                        borderRadius="20px"
                        margin="auto"
                        position="absolute"
                        top="calc(50% - 200px)"
                        left="calc(50% - 250px)"
                        transform="translate(-50%, -50%)"
                        color="#fff"
                    >
                        <AlertDialogBody>
                            {content}
                        </AlertDialogBody>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </ DarkMode>
        </AlertDialog>
    );
}

export default DailyDialog;