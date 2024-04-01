"use client";
import React from "react";
import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import thirdBanner from "/src/assets/images/banners/third.png";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { useLanguage } from "@/common/provider/language/languageProvider";
import { Link } from "@/components/patterns/Link";

export const RadiantLineBanner = () => {
  const { language } = useLanguage();
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  return (
    <Container id="products">
      {isMobile ? (
        <Box w="100%" display="flex" alignItems="center" flexDir="column">
          <Image
            style={{ display: "flex" }}
            src={thirdBanner}
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
            <Heading
              as={"h1"}
              className="fadeText"
              fontFamily="Montserrat"
              fontSize={["20px", "4em"]}
              letterSpacing={[3, 13]}
            >
              RADIANT
            </Heading>
            <Text
              textTransform={"uppercase"}
              fontSize={["16px", "2.3em"]}
              color="#70605a"
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
              {language
                ? "A SENSORY EXPERIENCE OF BEAUTY AND WELL BEING"
                : "UMA EXPERIÊNCIA SENSORIAL DE BELEZA E BEM ESTAR"}
            </Text>
            <Text
              textTransform={"uppercase"}
              fontSize={["10px", "1.3rem"]}
              color="#a9abae"
            >
              {language
                ? `RADIANT LINE WAS DEVELOPED WITH AN EXCLUSIVE THERMAL ALIGNMENT FORMULA WITH NATURAL INGREDIENTS AND HIGH-PERFORMANCE RESULTS.
ACTS AS A HAIR REGENERATOR, SMOOTHING VOLUME, SEALING THE CUTICLES AND ACTIVATING SHINE DUE TO VITAMINS, OILS AND AMAZON FRUITS BUTTER
`
                : `A LINHA RADIANT FOI DESENVOLVIDA COM FÓRMULAS EXCLUSIVAS DE
            ALINHAMENTO TÉRMICO, COM INGREDIENTES NATURAIS E RESULTADOS DE ALTA
            PERFORMANCE. ATUA COMO REGENERADOR CAPILAR, SUAVIZANDO O VOLUME,
            SELANDO AS CUTICULAS E ATIVANDO O BRILHO DEVIDO ÀS VITAMINAS, ÓLEOS
            E MANTEIGAS DE FRUTOS AMAZÔNICOS`}
            </Text>
          </Flex>
          <Link
            href="https://api.whatsapp.com/send?phone=5518998063761&text=Olá! Estou interessado em saber mais sobre a linha RADIANT."
            target="_blank"
            justify="start"
          >
            <Button w="200px" position="relative" top="-15px" left="160px">
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
                {language ? "Learn More" : "Saiba Mais"}
              </Text>
            </Button>
          </Link>
        </Box>
      ) : (
        <Box w="100%" display="flex" alignItems="center">
          <Image
            style={{ display: "flex" }}
            src={thirdBanner}
            alt="First Banner"
            quality={100}
          />
          <Box
            position="absolute"
            w={{ base: "650px", md: "480px", xl: "650px" }}
            zIndex="9"
            display="flex"
            flexDir="column"
            right={10}
          >
            <Flex flexDir="column" alignItems="flex-end" mr="auto">
              <Heading
                as={"h1"}
                className="fadeText"
                fontFamily="Montserrat"
                fontSize={{ base: "15px", md: "3em", xl: "4em" }}
                letterSpacing={{ base: 3, md: 8, xl: 13 }}
              >
                RADIANT
              </Heading>
              <Text
                mt="-20px"
                mr="15px"
                textTransform={"uppercase"}
                fontSize={{ base: "10px", md: "1.6em", xl: "2.3em" }}
                color="#70605a"
                mb="20px"
              >
                Line
              </Text>
            </Flex>

            <Text
              textTransform={"uppercase"}
              fontSize={{ base: "10px", md: "1.1rem", xl: "1.3rem" }}
              mb={{ base: "30px", md: "10px", lg: "30px" }}
              maxW={{ base: "140px", md: "100%", xl: "100%" }}
              color="#a9abae"
            >
              {language
                ? "A SENSORY EXPERIENCE OF BEAUTY AND WELL BEING"
                : "UMA EXPERIÊNCIA SENSORIAL DE BELEZA E BEM ESTAR"}
            </Text>
            <Text
              textTransform={"uppercase"}
              fontSize={{ base: "10px", md: "1.1rem", xl: "1.3rem" }}
              maxW={{ base: "140px", md: "480px", xl: "520px" }}
              color="#a9abae"
            >
              {language
                ? `RADIANT LINE WAS DEVELOPED WITH AN EXCLUSIVE THERMAL ALIGNMENT FORMULA WITH NATURAL INGREDIENTS AND HIGH-PERFORMANCE RESULTS.
ACTS AS A HAIR REGENERATOR, SMOOTHING VOLUME, SEALING THE CUTICLES AND ACTIVATING SHINE DUE TO VITAMINS, OILS AND AMAZON FRUITS BUTTER
`
                : `A LINHA RADIANT FOI DESENVOLVIDA COM FÓRMULAS EXCLUSIVAS DE
            ALINHAMENTO TÉRMICO, COM INGREDIENTES NATURAIS E RESULTADOS DE ALTA
            PERFORMANCE. ATUA COMO REGENERADOR CAPILAR, SUAVIZANDO O VOLUME,
            SELANDO AS CUTICULAS E ATIVANDO O BRILHO DEVIDO ÀS VITAMINAS, ÓLEOS
            E MANTEIGAS DE FRUTOS AMAZÔNICOS`}
            </Text>
            <Link
              href="https://api.whatsapp.com/send?phone=5518998063761&text=Olá! Estou interessado em saber mais sobre a linha RADIANT."
              target="_blank"
              justify="flex-start"
            >
              <Button w="200px">
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
                  {language ? "Learn More" : "Saiba Mais"}
                </Text>
              </Button>
            </Link>
          </Box>
        </Box>
      )}
    </Container>
  );
};
