import React from "react";
import {
  Flex,
  Text,
  Grid,
  Avatar,
  Tooltip,
} from "@chakra-ui/react";

import { useSelector } from "react-redux";
function WinThree({ logo, value, price = null }) {
  const user = useSelector((state) => state.user.userInfo);
  const newValue = Array.isArray(value) ? value : [];
  
  return (
    <Flex pb="20px">
      {/* Avatar */}
      <Flex direction="column" h="100%" align="center" mr="10px" mt="-10px">
        <Avatar src={logo} alt="place" bg="transparent" width="60px" height="60px" ml="-15px"/>
      </Flex>

      {/* Winners */}
      <Flex direction="column" justifyContent="flex-start" h="100%" >
        <Grid display="ruby" fontSize="sm" color="gray.400" fontWeight="normal">
        {newValue.map((username, index) => (
            <Flex key={index} align="center" mr="12px" mb="6px">
                {/* Win Number */}
                <Tooltip label="Winning number" placement="top" >
                  <Text fontSize="sm" color="gray.400" mr="6px">
                    {username.winNum}
                  </Text>
                </Tooltip>

                {/* Username */}
                    {username ? (
                    username.userId == user.userId ? (
                        <Text fontSize="sm" color="#fff" fontWeight="700" borderRadius="25px" padding="6px"  style={{textShadow: "0 0 0px #00D4FF, 0 0 0px #00D4FF, 0 0 20px #00D4FF"}}>
                
                            {username.username + "  "}
                            {!price && (
                              <Tooltip label={`${username.username} purchased ${username.ticketCnt} tickets`} placement="top">
                                  {username?.ticketCnt ? ("(" + username?.ticketCnt + ")") : "" }
                              </Tooltip>
                            )}
                        </Text>
                    ) : (
                        <Text fontSize="sm" color="#fff" fontWeight="400">
                        
                            {username.username+"  "}
                            {!price && (
                              <Tooltip label={`${username.username} purchased ${username.ticketCnt} tickets`} placement="top">
                                  {username.ticketCnt ? ("(" + username.ticketCnt + ")") : "" }
                              </Tooltip>
                            )}
                        </Text>
                    )
                    ) : (
                    <Text></Text>
                    )}
            </Flex>
        ))}
        </Grid>
    </Flex>
      {price ? <Text color="white" position="fixed" mt="-30px" right="30px" fontSize="20px">{price}$</Text>: <Text></Text>}
    </Flex>
  );
}

export default WinThree;