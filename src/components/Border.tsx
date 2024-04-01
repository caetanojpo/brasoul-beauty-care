import { Box, ResponsiveValue } from "@chakra-ui/react";

interface IProps {
  position?: ResponsiveValue<any>;
}
export const Border = ({ position }: IProps) => {
  return (
    <Box
      w="100%"
      h="3px"
      left={0}
      top={73}
      borderBottom="2px solid transparent"
      position={position}
      className="fadeBorder"
    />
  );
};
