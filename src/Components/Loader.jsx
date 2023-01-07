import React from "react";
import { Box, Skeleton, Stack } from "@chakra-ui/react";

const Loader = () => {
  let array = new Array(10).fill(0);
  return (
    <Box
      display="grid"
      gridTemplateColumns={["repeat(1,1fr)", "repeat(2,1fr)", "repeat(4,1fr)"]}
      gap="20px 10px"
    >
      {array.map((_, i) => {
        return (
          <Stack key={i}>
            <Skeleton height="200px" />
            <Skeleton height="100px" />
            <Skeleton height="20px" />
          </Stack>
        );
      })}
    </Box>
  );
};

export default Loader;