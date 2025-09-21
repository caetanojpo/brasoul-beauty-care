"use client";
import React from "react";
import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import FirstBanner from "/src/assets/images/banners/first.png";
import FingerPrint from "/src/assets/images/icons/fingerprint-map-digital.png";
import Image from "next/image";
import { Container } from "@/components/Container";
import { useLanguage } from "@/common/provider/language/languageProvider";
import {copywriting} from "@/data/copywriting";

export const Header = () => {
  const { language } = useLanguage();
  const { header } = copywriting[language as keyof typeof copywriting] || copywriting["en"];
  return (
    <Container pt={{ base: "10vh", lg: "8vh" }} id="inicio">
      <Box w="100%" display="flex" alignItems="center">
        <Image
          style={{ display: "flex" }}
          src={FirstBanner}
          alt="First Banner"
          quality={100}
        />
        <Box
          position="absolute"
          w={{ base: "300px", lg: "390px" }}
          zIndex="9"
          display="flex"
          flexDir="column"
          ml="17vw"
        >
          <Heading
            as={"h1"}
            fontStyle={"bold"}
            className="fadeText"
            fontSize={{ base: "15px", md: "2em", lg: "4em" }}
            mb="20px"
            letterSpacing={{ base: 3, lg: 13 }}
          >
            BRASOUL
          </Heading>
          <Text
            textTransform={"uppercase"}
            fontSize={{ base: "10px", md: "1em", lg: "1.3em" }}
            color="black"
            mb="20px"
          >
            {header.natural}
          </Text>
          <Text
            textTransform={"uppercase"}
            fontSize={{ base: "10px", md: "1em", lg: "1.3em" }}
            maxW={{ base: "140px", md: "100%", lg: "100%" }}
            color="#a9abae"
          >
            {header.power}
          </Text>
        </Box>
      </Box>
    </Container>
  );
};
