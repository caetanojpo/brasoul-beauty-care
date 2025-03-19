"use client";
import React from "react";
import { Container } from "./Container";
import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import { Button } from "./Button";
import { Link } from "./patterns/Link";
import { useLanguage } from "@/common/provider/language/languageProvider";

interface IitemInfo {
  Src: any;
  Title: string;
  Description: string;
  WpLink?: string;
  Heigth?: string;
  Bottom?: string;
  Width?: string;
  HorizontalPorduct?: boolean;
}

interface IProduct {
  Products: IitemInfo[];
  className?: string;
  classButton?: string;
}

export const ContainerItems = ({
  Products,
  className,
  classButton,
}: IProduct) => {
  const [isLarge] = useMediaQuery("(min-width: 1900px)");
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  const {language} = useLanguage()
  const unique = Products.length < 2;
  return isMobile ? (
    <Container px="10px" pt="10px" pb="40px">
      <Grid
        ml="auto"
        mr="auto"
        templateColumns={unique ? "repeat(1, 1fr)" : "repeat(2, 1fr)"}
        gap={30}
      >
        {Products.map((product) => {
          return (
            <React.Fragment key={product.Title}>
              <GridItem mt="60px">
                <Flex
                  w="160px"
                  h="90px"
                  borderRadius="20px"
                  boxShadow="0px 0px 10px 0px rgba(0,0,0,0.4)"
                  justifyContent="flex-end"
                  position="relative"
                >
                  <Box
                    w={"100px"}
                    mr="0px"
                    position="absolute"
                    right={"120px"}
                    left="3px"
                    bottom={product.Bottom ? product.Bottom : "10px"}
                  >
                    <Image
                      style={{
                        right: product.HorizontalPorduct ? "15px" : "",
                        position: "relative",
                        width: product.Width ? product.Width : "50px",
                        height: product.Heigth ? product.Heigth : "130px",
                      }}
                      src={product.Src}
                      alt="First Banner"
                      quality={100}
                    />
                  </Box>
                  <Flex flexDir="column" mt="20px" w="130px">
                    <Flex
                      w="80px"
                      flexDir="column"
                      h="33px"
                      position="relative"
                      left="30px"
                      justifyContent="center"
                      alignItems="center"
                      pt="10px"
                      mb="10px"
                    >
                      <Heading
                        textTransform={"uppercase"}
                        as={"h1"}
                        h="100%"
                        fontStyle={"bold"}
                        textAlign="center"
                        className={className ? className : "fadeText"}
                        fontSize={"10px"}
                        mb="18px"
                        letterSpacing={1}
                      >
                        {product.Title}
                      </Heading>

                      <Text
                        textTransform={"uppercase"}
                        textAlign="center"
                        fontSize={"9px"}
                        h="40px"
                        color="#a9abae"
                      >
                        {product.Description}
                      </Text>
                    </Flex>
                    <Link href={product.WpLink || ""} target="_blank">
                      <Button className={classButton} left="7px" top="14px">
                        <Text
                          position="relative"
                          zIndex={99}
                          textTransform={"uppercase"}
                          fontSize={"10px"}
                          w="100%"
                          h="100%"
                          color="#fefefe"
                        >
                          {language === "en" ? "FIND OUT" : language === "br" ? "CONHEÇA" : "CONOZCA"}
                        </Text>
                      </Button>
                    </Link>
                  </Flex>
                </Flex>
              </GridItem>
            </React.Fragment>
          );
        })}
      </Grid>
    </Container>
  ) : (
    <Container
      h={["auto", "auto", "auto", Products[1] ? "500px" : "400px"]}
      alignItems="center"
      flexDirection={["column", "column", "column", "row"]}
      px={isLarge ? "200px" : "50px"}
      py={["220px", "120px", "120px", ""]}
      justifyContent={"space-evenly"}
    >
      {Products.map((product, index) => {
        return (
          <React.Fragment key={product.Title}>
            <Flex
              w={"270px"}
              h="140px"
              borderRadius="20px"
              ml={product.Title === "FIBER MASK" ? "40px" : ""}
              boxShadow="0px 0px 10px 0px rgba(0,0,0,0.4)"
              justifyContent="flex-end"
              position="relative"
            >
              <Box
                w={product.Title === "FIBER MASK" ? "150px" : "90px"}
                mr="50px"
                ml={"20px"}
                position="absolute"
                right={"120px"}
                bottom={product.Bottom ? product.Bottom : "10px"}
              >
                <Image
                  style={{
                    position: "relative",
                    width: product.Width ? product.Width : "120px",
                    height: product.Heigth ? product.Heigth : "250px",
                  }}
                  src={product.Src}
                  alt="First Banner"
                  quality={100}
                />
              </Box>
              <Flex flexDir="column" mt="20px" w="130px">
                <Flex
                  w="180px"
                  flexDir="column"
                  h="73px"
                  position="relative"
                  right="50px"
                  justifyContent="center"
                  alignItems="center"
                  pt="10px"
                  mb="10px"
                >
                  <Heading
                    textTransform={"uppercase"}
                    as={"h1"}
                    h="100%"
                    fontStyle={"bold"}
                    textAlign="center"
                    className={className ? className : "fadeText"}
                    fontSize={"16px"}
                    mb="18px"
                    letterSpacing={2}
                  >
                    {product.Title}
                  </Heading>

                  <Text
                    textTransform={"uppercase"}
                    textAlign="left"
                    fontSize={"11px"}
                    h="40px"
                    color="#a9abae"
                  >
                    {product.Description}
                  </Text>
                </Flex>
                <Link href={product.WpLink || ""} target="_blank">
                  <Button className={classButton} top="15px" right="20px">
                    <Text
                      position="relative"
                      zIndex={99}
                      textTransform={"uppercase"}
                      fontSize={"15px"}
                      w="100%"
                      h="100%"
                      color="#fefefe"
                    >
                      {language === "en" ? "FIND OUT" : language === "br" ? "CONHEÇA" : "CONOZCA"}
                    </Text>
                  </Button>
                </Link>
              </Flex>
            </Flex>
            {index !== Products.length - 1 && (
              <Divider orientation="vertical" mx={4} h="190px" color="black" />
            )}
          </React.Fragment>
        );
      })}
    </Container>
  );
};
