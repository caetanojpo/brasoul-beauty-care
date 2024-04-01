import { Box, BoxProps, Flex } from "@chakra-ui/react";
import React from "react";
interface Iprops extends BoxProps {
  children: React.ReactNode;
  className?: string;
}
export const Button = ({ children, className, ...rest }: Iprops) => {
  return (
    <Flex position="relative" top="30px" {...rest}>
      <Box className={className ? className : "newButton"}>
        {children}
      </Box>
    </Flex>
  );
};
