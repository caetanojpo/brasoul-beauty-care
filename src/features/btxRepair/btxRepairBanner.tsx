"use client";
import React from "react";
import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import FifthBanner from "/src/assets/images/banners/fifth.png";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { useLanguage } from "@/common/provider/language/languageProvider";
import { Link } from "@/components/patterns/Link";

export const BtxRepairBanner = () => {
  const { language } = useLanguage();
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  return (
    <Container id="inicio">
      {isMobile ? (
        <Box w="100%" display="flex" alignItems="center" flexDir="column">
          <Image
            style={{ display: "flex" }}
            src={FifthBanner}
            alt="First Banner"
            quality={100}
          />
          <Flex flexDir="column" alignItems="flex-start" mt="10px" mb="20px">
            <Text
              color={"black"}
              fontFamily="Montserrat"
              fontSize={["15px", "4em"]}
              letterSpacing={[3, 7]}
              fontWeight={600}
            >
              BTX REPAIR
            </Text>
            <Text
              className="fadeText"
              fontFamily="Montserrat"
              textTransform={"uppercase"}
              fontSize={["10px", "2.3em"]}
              color="#f7abaa"
            >
              MULTI COMPLEX BLEND
            </Text>
          </Flex>
          <Flex flexDir="column" px="30px" mb="30px">
            {" "}
            <Text
              textTransform={"uppercase"}
              fontSize={["10px", "1.3rem"]}
              textAlign="left"
              maxW={["", "520px"]}
              color="#a9abae"
            >
              {language
                ? `THE IDEAL SOLUTION FOR HIGHLY DAMAGED AND WAVY HAIR THAT NEEDS IMMEDIATE REPAIR DUE TO THE POWERFUL NUTRITIVE BLEND OF BIO COMPLEX AMINO ACIDS AND VITAMINS, GUARANTEING SOFTNESS AND HAIR REPAIR`
                : `A SOLUCAO IDEAL PARA CABELOS ALTAMENTE DANIFICADOS E ONDULADOS QUE
            NECESSITAM DE REPARAÇÃO IMEDIATA DEVIDO AO PODEROSO BLEND NUTRITIVO
            DE AMINOACIDOS BIO COMPLEX E VITAMINAS, GARANTINDO SUAVIDADE E
            REPARAÇÃO CAPILAR`}
            </Text>
          </Flex>
          <Link href='https://api.whatsapp.com/send?phone=5518998063761&text=Olá! Estou interessado em saber mais sobre a linha BTX REPAIR.' target='_blank' justify='start'>
          <Button
            w="200px"
            className="newButton newButton-btxdaily"
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
              {language ? "Learn More" : "Saiba Mais"}
            </Text>
          </Button>
          </Link>
        </Box>
      ) : (
        <Box w="100%" display="flex" alignItems="center">
          <Image
            style={{ display: "flex" }}
            src={FifthBanner}
            alt="First Banner"
            quality={100}
          />
          <Box
            position="absolute"
            zIndex="9"
            display="flex"
            flexDir="column"
            right={10}
          >
            <Flex flexDir="column" alignItems="flex-start">
              <Text
                color={"black"}
                fontFamily="Montserrat"
                fontSize={{base:"15px",md:'3em', xl:"4em"}}
                letterSpacing={[3, 7]}
                fontWeight={600}
              >
                BTX REPAIR
              </Text>
              <Text
                mt="-20px"
                ml="5px"
                className="fadeText"
                fontFamily="Montserrat"
                textTransform={"uppercase"}
                fontSize={{base:"10px",md:'1.6em' ,xl:"2.3em"}}
                color="#f7abaa"
                mb="20px"
              >
                MULTI COMPLEX BLEND
              </Text>
            </Flex>
            <Text
              textTransform={"uppercase"}
              fontSize={{base:"10px",md:'1.1rem', xl: "1.3rem"}}
              maxW={{base:"140px",md:'380px', xl:"520px"}}
              color="#a9abae"
            >
              {language
                ? `THE IDEAL SOLUTION FOR HIGHLY DAMAGED AND WAVY HAIR THAT NEEDS IMMEDIATE REPAIR DUE TO THE POWERFUL NUTRITIVE BLEND OF BIO COMPLEX AMINO ACIDS AND VITAMINS, GUARANTEING SOFTNESS AND HAIR REPAIR`
                : `A SOLUCAO IDEAL PARA CABELOS ALTAMENTE DANIFICADOS E ONDULADOS QUE
            NECESSITAM DE REPARAÇÃO IMEDIATA DEVIDO AO PODEROSO BLEND NUTRITIVO
            DE AMINOACIDOS BIO COMPLEX E VITAMINAS, GARANTINDO SUAVIDADE E
            REPARAÇÃO CAPILAR`}
            </Text>
            <Link href='https://api.whatsapp.com/send?phone=5518998063761&text=Olá! Estou interessado em saber mais sobre a linha BTX REPAIR.' target='_blank' justify='start'>
            <Button w="200px" className="newButton newButton-btxdaily">
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
