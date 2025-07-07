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

export const SublimeLineBanner = () => {
  const { language } = useLanguage();
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
              {language === "en"
                ? `SUBLIME LINE WAS CAREFULLY DEVELOPED WITH A POWERFUL BLEND OF AMINOACIDS, ACTING TO REPLACE THE LIPID LAYER OF THE HAIR WITHOUT HARMFUL THE THREADS, AS ITS FORMULA IS ENRICHED WITH ARGININE, CREATINE, SERINE, CYSTEINE, COLLAGEN, HYALURONIC ACID, PANTHENOL, SHEA BUTTER, ALSO ALLIED TO A POWERFUL BLEND OF VEGETABLE PROTEINS`
                : language === "br"
                ? `A LINHA SUBLIME FOI CUIDADOSAMENTE DESENVOLVIDA COM UM PODEROSO
            BLEND DE AMINOÁCIDOS, AGINDO NA REPOSIÇÃO DA CAMADA LIPÍDICA DO
            CABELO SEM AGREDIR OS FIOS, POIS SUA FÓRMULA É ENRIQUECIDA COM
            ARGININA, CREATINA, SERINA, CISTEÍNA, COLÁGENO, ÁCIDO HIALURONICO,
            PANTENOL, MANTEIGA DE KARITÉ, ALIADA, AINDA, A UM PODEROSO BLEND DE
            PROTEÍNAS VEGETAIS.`
                : "LA LÍNEA SUBLIME FUE CUIDADOSAMENTE DESARROLLADA CON UNA PODEROSA MEZCLA DE AMINOÁCIDOS, ACTUANDO EN LA REPOSICIÓN DE LA CAPA LIPÍDICA DEL CABELLO SIN DAÑAR LAS HEBRAS, YA QUE SU FÓRMULA ESTÁ ENRIQUECIDA CON ARGININA, CREATINA, SERINA, CISTEÍNA, COLÁGENO, ÁCIDO HIALURÓNICO, PANTENOL Y MANTECA DE KARITÉ, ADEMÁS DE UNA PODEROSA MEZCLA DE PROTEÍNAS VEGETALES."}
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
                {language === "en"
                  ? "Learn More"
                  : language === "br"
                  ? "Saiba Mais"
                  : "Sepa Más"}
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
              {language === "en"
                ? `SUBLIME LINE WAS CAREFULLY DEVELOPED WITH A POWERFUL BLEND OF AMINOACIDS, ACTING TO REPLACE THE LIPID LAYER OF THE HAIR WITHOUT HARMFUL THE THREADS, AS ITS FORMULA IS ENRICHED WITH ARGININE, CREATINE, SERINE, CYSTEINE, COLLAGEN, HYALURONIC ACID, PANTHENOL, SHEA BUTTER, ALSO ALLIED TO A POWERFUL BLEND OF VEGETABLE PROTEINS`
                : language === "br"
                ? `A LINHA SUBLIME FOI CUIDADOSAMENTE DESENVOLVIDA COM UM PODEROSO
            BLEND DE AMINOÁCIDOS, AGINDO NA REPOSIÇÃO DA CAMADA LIPÍDICA DO
            CABELO SEM AGREDIR OS FIOS, POIS SUA FÓRMULA É ENRIQUECIDA COM
            ARGININA, CREATINA, SERINA, CISTEÍNA, COLÁGENO, ÁCIDO HIALURONICO,
            PANTENOL, MANTEIGA DE KARITÉ, ALIADA, AINDA, A UM PODEROSO BLEND DE
            PROTEÍNAS VEGETAIS.`
                : "LA LÍNEA SUBLIME FUE CUIDADOSAMENTE DESARROLLADA CON UNA PODEROSA MEZCLA DE AMINOÁCIDOS, ACTUANDO EN LA REPOSICIÓN DE LA CAPA LIPÍDICA DEL CABELLO SIN DAÑAR LAS HEBRAS, YA QUE SU FÓRMULA ESTÁ ENRIQUECIDA CON ARGININA, CREATINA, SERINA, CISTEÍNA, COLÁGENO, ÁCIDO HIALURÓNICO, PANTENOL Y MANTECA DE KARITÉ, ADEMÁS DE UNA PODEROSA MEZCLA DE PROTEÍNAS VEGETALES."}
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
                  {language === "en"
                    ? "Learn More"
                    : language === "br"
                    ? "Saiba Mais"
                    : "Sepa Más"}
                </Text>
              </Button>
            </Link>
          </Box>
        </Box>
      )}
    </Container>
  );
};
