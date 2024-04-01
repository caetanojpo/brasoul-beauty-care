import { Flex, BoxProps } from "@chakra-ui/react";

interface Iprops extends BoxProps {
  children: React.ReactNode;
}

export const Container = ({ children, ...rest }: Iprops) => {
  const gradientBorder =
    "linear-gradient(90deg, rgba(24, 19, 18, 1) 0%, rgba(50, 25, 14, 1) 5%, rgba(222, 163, 46, 1) 20%, rgba(165, 110, 21, 1) 27%, rgba(126, 71, 2, 1) 33%, rgba(235, 191, 79, 1) 63%, rgba(245, 245, 112, 1) 70%, rgba(201, 179, 56, 1) 76%, rgba(157, 118, 7, 1) 85%, rgba(25, 18, 15, 1) 100%);";

  return (
    <Flex
      w="100%"
      borderBottom={`3px solid transparent`}
      css={{
        borderImage: gradientBorder,
        borderImageSlice: 1,
      }}
      {...rest}
    >
      {children}
    </Flex>
  );
};
