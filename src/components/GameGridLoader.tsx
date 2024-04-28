import React from "react";
import { Box, Spinner } from "@chakra-ui/react";

const GameGridLoader = () => {
  return (
    <Box
      padding={"10px"}
      marginY={8}
      width={"100%"}
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"center"}>
      <Spinner size={"lg"} />
    </Box>
  );
};

export default GameGridLoader;
