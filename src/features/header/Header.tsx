"use client";
import React from "react";
import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import FirstBanner from "/src/assets/images/banners/first.jpg";
import FingerPrint from "/src/assets/images/icons/fingerprint-map-digital.png";
import Image from "next/image";
import { Container } from "@/components/Container";
import { useLanguage } from "@/common/provider/language/languageProvider";

export const Header = () => {
  const { language } = useLanguage();
  return (
    <Container pt={{base:"10vh", lg:"8vh"}} id="inicio">
     
        <Box w="100%" display="flex" alignItems="center">
          <Image
            style={{ display: "flex" }}
            src={FirstBanner}
            alt="First Banner"
            quality={100}
          />
          <Box
            position="absolute"
            w={{base:'300px', lg:"390px"}}
            zIndex="9"
            display="flex"
            flexDir="column"
            ml="17vw"
          >
            <Heading
              as={"h1"}
              fontStyle={"bold"}
              className="fadeText"
              fontSize={{base:"15px", md:'2em', lg:"4em"}}
              mb="20px"
              letterSpacing={{base:3, lg:13}}
            >
              BRASOUL
            </Heading>
            <Text
              textTransform={"uppercase"}
              fontSize={{base:"10px",md:'1em', lg:"1.3em"}}
              color="black"
              mb="20px"
            >
              {language === "en" ? "Natural Cosmetics" : language === "br" ? "Cosméticos Naturais" : "Cosméticos Naturales"}
            </Text>
            <Text
              textTransform={"uppercase"}
              fontSize={{base:"10px", md:'1em', lg:"1.3em"}}
              maxW={{base:"140px", md:'100%', lg:"100%"}}
              color="#a9abae"
            >
              {language === "en"
                ? "The Power of nature in the palm of your hand"
                : language === "br" ? "O poder da natureza, na palma da sua mão!" : "El poder de la naturaleza en la palma de su mano"}
            </Text>
          </Box>
        </Box>
    
    </Container>
  );
};
