import React from "react";
import {
  Flex,
  Text,
  Grid,
  Tooltip,
  Avatar,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

function WinFive({ logo, value, price }) {
  const user = useSelector((state) => state.user.userInfo);
  if (
    !value ||
    !Array.isArray(value.winUsername) ||
    !Array.isArray(value.winNum)
  ) {
    return null;
  }

  return (
    <Flex pb="20px">
      {/* Avatar */}
      <Flex direction="column" h="100%" align="center" mt="-10px" mr="30px">
        <Avatar src={logo} alt="place" bg="transparent"  width="28px" height="28px"/>
      </Flex>

      {/* Winners */}
      <Flex direction="column" justifyContent="flex-start" h="100%">
        <Grid display="ruby" fontSize="sm" color="gray.400">
          {value.winUsername.map((username, index) => (
            <Flex key={index} align="center" mr="12px" mb="6px">
              {/* Win number */}
              <Tooltip label="Winning Number" placement="top">
                <Text fontSize="sm" color="gray.400" mr="6px">
                  {value.winNum[index]}
                </Text>
              </Tooltip>

              {/* Username with tooltip */}
              <Tooltip label={username} placement="top">
                {username ? (
                  value.winUserId[index] == user.userId ? (
                    <Text fontSize="sm" color="#fff" fontWeight="700" borderRadius="25px" padding="6px"  style={{textShadow: "0 0 0px #00D4FF, 0 0 0px #00D4FF, 0 0 20px #00D4FF"}}>
                      {username.length > 7
                        ? `${username.slice(0, 6)}...`
                        : username}
                    </Text>
                  ) : (
                    <Text fontSize="sm" color="#fff" fontWeight="400">
                      {username.length > 7
                        ? `${username.slice(0, 6)}...`
                        : username}
                    </Text>
                  )
                ) : (
                  <Text></Text>
                )}
              </Tooltip>
            </Flex>
          ))}
        </Grid>
      </Flex>
      {price ? <Text color="white" position="fixed"  mt="-30px" right="30px" fontSize="20px">{price}$</Text>: <Text></Text>}
    </Flex>
  );
}

export default WinFive;
