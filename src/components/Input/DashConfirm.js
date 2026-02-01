import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Grid,
  Button,
  Flex,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import IconBox from "components/Icons/IconBox";
import DailyDialog from "components/Dialog/DailyDialog";
import DailyLoot from "views/Lottery/DailyLoot";
import Reward from "views/Lottery/Reward";

export default function DashConfirm(prop) {
  const { value, key, onClick } = prop;
  let variantChange = "0.2s linear";

  let activeBg = "#1A1F37";
  let inactiveColor = "white";

  const { isOpen, onOpen, onClose } = useDisclosure();
  const onConfirm = () => {
    onClose();
  };

  return (
    <Grid key={key}>
      <Button
        variant='simple'
        type='button'
        maxW='350px'
        alignSelf="center"
        fontSize={{ sm: 'md', lg: 'lg' }}
        color='#fff'
        fontWeight='bold'
        w="100%"
        onClick={() => {
          onOpen();
          if (onClick) onClick();
        }}>
        {value.name}
      </Button>
      <DailyDialog
        content={value.component=="DailyLoot"? <DailyLoot />:<Reward />}
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={onConfirm}
      />
    </Grid>
  );
}
