"use client";
import React from "react";
import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import FourthBanner from "/src/assets/images/banners/fourth.png";
import FourthBannerMobile from "/src/assets/images/banners/fourth-mobile.png";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { useLanguage } from "@/common/provider/language/languageProvider";
import { Link } from "@/components/patterns/Link";
import {copywriting} from "@/data/copywriting";

export const SublimeLineBanner = () => {
  const { language } = useLanguage();
  const { sublimeBanner } = copywriting[language as keyof typeof copywriting] || copywriting["en"];
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  return (
    <Container id="inicio">
      {isMobile ? (
        <Box w="100%" display="flex" alignItems="center" flexDir="column">
          <Image
            style={{ display: "flex" }}
            src={FourthBannerMobile}
            alt="First Banner"
            quality={100}
          />
          <Flex
            mt="10px"
            flexDir="row"
            alignItems="flex-end"
            justifyContent="center"
            mb="20px"
          >
            <Text
              className="sublimeLineText"
              fontFamily="Photograph"
              fontSize={["25px", "4em"]}
              letterSpacing={[3, 5]}
            >
              Sublime
            </Text>
            <Text
              textTransform={"uppercase"}
              fontSize={["16px", "2.3em"]}
              color="#f7abaa"
            >
              Line
            </Text>
          </Flex>
          <Flex flexDir="column" px="30px" mb="30px">
            <Text
              textTransform={"uppercase"}
              fontSize={["10px", "1.3rem"]}
              textAlign="left"
              color="#a9abae"
            >
              {sublimeBanner.sublime}
            </Text>
          </Flex>
          <Link
            href="https://api.whatsapp.com/send?phone=5518998063761&text=Olá! Estou interessado em saber mais sobre a linha SUBLIME."
            target="_blank"
            justify="start"
          >
            <Button
              w="200px"
              className="newButton newButton-sublime"
              position="relative"
              top="-15px"
              left="160px"
            >
              {" "}
              <Text
                position="relative"
                zIndex={99}
                textTransform={"uppercase"}
                fontSize={"10px"}
                w="100%"
                h="100%"
                color="#fefefe"
              >
                {sublimeBanner.learn}
              </Text>
            </Button>
          </Link>
        </Box>
      ) : (
        <Box w="100%" display="flex" alignItems="center">
          <Image
            style={{ display: "flex" }}
            src={FourthBanner}
            alt="First Banner"
            quality={100}
          />
          <Box
            position="absolute"
            zIndex="9"
            display="flex"
            flexDir="column"
            right={3}
          >
            <Flex flexDir="column" alignItems="flex-end" mr="auto">
              <Text
                className="sublimeLineText "
                fontFamily="Photograph"
                fontSize={{ base: "20px", md: "3.5em", xl: "5em" }}
                letterSpacing={[3, 5]}
              >
                Sublime
              </Text>
              <Text
                mt="-30px"
                mr="15px"
                textTransform={"uppercase"}
                fontSize={{ base: "10px", md: "1.6em", xl: "2.3em" }}
                color="#f7abaa"
                mb="20px"
              >
                Line
              </Text>
            </Flex>
            <Text
              textTransform={"uppercase"}
              fontSize={{ base: "10px", md: "1rem", xl: "1.3rem" }}
              textAlign="left"
              maxW={{ base: "", md: "320px", xl: "490px" }}
              color="#a9abae"
            >
              {sublimeBanner.sublime}
            </Text>
            <Link
              href="https://api.whatsapp.com/send?phone=5518998063761&text=Olá! Estou interessado em saber mais sobre a linha SUBLIME."
              target="_blank"
              justify="start"
            >
              <Button w="200px" className="newButton newButton-sublime">
                {" "}
                <Text
                  position="relative"
                  zIndex={99}
                  textTransform={"uppercase"}
                  fontSize={"15px"}
                  w="100%"
                  h="100%"
                  color="#fefefe"
                >
                  {sublimeBanner.learn}
                </Text>
              </Button>
            </Link>
          </Box>
        </Box>
      )}
    </Container>
  );
};
