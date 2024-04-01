"use client";
import React from "react";
import {
  Box,
  Flex,
  Heading,
  Highlight,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import SixthhBanner from "/src/assets/images/banners/sixth.png";
import SixthhBannerMobile from "/src/assets/images/banners/sixth-mobile.png";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { useLanguage } from "@/common/provider/language/languageProvider";
import { Link } from "@/components/patterns/Link";

export const DailyGlowBanner = () => {
  const { language } = useLanguage();
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  return (
    <Container id="inicio">
      {isMobile ? (
        <Box w="100%" display="flex" alignItems="center" flexDir="column">
          <Image
            style={{ display: "flex" }}
            src={SixthhBannerMobile}
            alt="First Banner"
            quality={100}
          />
          <Flex flexDir="column" alignItems="center" mt="10px" mb="20px">
            <Text
              color={"black"}
              fontFamily="Montserrat"
              fontSize={["15px", "4em"]}
              letterSpacing={[3, 7]}
              fontWeight={600}
            >
              DAILY GLOW
            </Text>
            <Text
              className="fadeText"
              fontFamily="Montserrat"
              textTransform={"uppercase"}
              fontSize={["10px", "2.3em"]}
              color="#f7abaa"
            >
              HOME CARE
            </Text>
          </Flex>
          <Flex flexDir="column" px="30px" mb="30px">
            <Text
              mb="10px"
              textTransform={"uppercase"}
              fontSize={["10px", "1.3rem"]}
              textAlign="left"
              color="#a9abae"
            >
              {language
                ? `DAILY GLOW HOME CARE LINE WAS EXCLUSIVELY DEVELOPED BASED ON THE CONCEPT OF RESTORATION AND DAILY GLOW.`
                : `A LINHA HOME CARE DAILY GLOW FOI EXCLUSIVAMENTE DESENVOLVIDA COM
            BASE NO CONCEITO DE RESTAURAÇÃO E BRILHO DIÁRIO.`}
            </Text>
            <Text
              textTransform={"uppercase"}
              fontSize={["10px", "1rem"]}
              color="#a9abae"
            >
              <Highlight
                query={[
                  "FRUTOS ORIGINAIS DA AMAZÔNIA",
                  "ORIGINAL FRUITS FROM THE AMAZON",
                ]}
                styles={{ color: "#daa520" }}
              >
                {language
                  ? ` ITS ACTIVE INGREDIENTS ACT DIRECTLY ON THE HAIR FIBERS REGENERATING HAIR HEALTH FROM THE FIRST USE. ENRICHED WITH ORIGINAL FRUITS FROM THE AMAZON AS BRAZILIAN NUT OIL, MURUMURU BUTTER, HYDROLYZED COLLAGEN PROMOTES DEEP NOURISHMENT AND HYDRATION, LEAVING THREADS SOFT, SHINY AND RENEWED`
                  : `SEUS INGREDIENTES ATIVOS AGEM DIRETAMENTE NAS FIBRAS CAPILARES REGENERANDO A SAÚDE CAPILAR DESDE O PRIMEIRO USO. ENRIQUECIDO COM FRUTOS ORIGINAIS DA AMAZÔNIA, CONTENDO ÓLEO DE CASTANHA DO PARÁ, MANTEIGA DE MURUMURU E COLÁGENO
            HIDROLISADO PROMOVEM UMA NUTRICÃO E HIDRTAÇÃO PROFUNDAS, DEIXANDO OS FIOS MACIOS, BRILHANTES E RENOVADOS.`}
              </Highlight>
            </Text>
          </Flex>
          <Link
            href="https://api.whatsapp.com/send?phone=5518998063761&text=Olá! Estou interessado em saber mais sobre a linha DAILY GLOW."
            justify="start"
          >
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
            src={SixthhBanner}
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
                 display={{base:'flex', md:'none', xl:'flex'}}
                color={"black"}
                fontFamily="Montserrat"
                fontSize={{base:"15px",md:'2.5em', xl:"3em"}}
                
                letterSpacing={[3, 7]}
                fontWeight={600}
              >
                DAILY
              </Text>
              <Text
              display={{base:'flex', md:'none', xl:'flex'}}
                mt="-30px"
                color={"black"}
                fontFamily="Montserrat"
                fontSize={{base:"15px",md:'2.5em', xl:"3em"}}
                letterSpacing={[3, 7]}
                fontWeight={600}
              >
                GLOW
              </Text>
              <Text
              display={{base:'none', md:'flex', xl:'none'}}
                mt="-30px"
                color={"black"}
                fontFamily="Montserrat"
                fontSize={{base:"15px",md:'2.5em', xl:"3em"}}
                letterSpacing={[3, 7]}
                fontWeight={600}
              >
                DAILY GLOW
              </Text>
              <Text
                mt="-20px"
                ml="5px"
                className="fadeText"
                fontFamily="Montserrat"
                textTransform={"uppercase"}
                fontSize={{base:"10px",md:'1.6em' ,xl:"2.3em"}}
                color="#f7abaa"
                mb={{base:"20px",md:'8px', xl:'20px'}}
              >
                HOME CARE
              </Text>
            </Flex>
            <Text
              textTransform={"uppercase"}
              fontSize={{base:"10px",md:'1.1rem', xl: "1.3rem"}}
              maxW={{base:"140px",md:'380px', xl:"520px"}}
              color="#a9abae"
              mb={{base:"20px",md:'8px', xl:'20px'}}
            >
              {language
                ? `DAILY GLOW HOME CARE LINE wAS EXCLUSIVELY DEVELOPED BASED ON THE CONCEPT OF RESTORATION AND DAILY GLOW.`
                : `A LINHA HOME CARE DAILY GLOW FOI EXCLUSIVAMENTE DESENVOLVIDA COM
            BASE NO CONCEITO DE RESTAURAÇÃO E BRILHO DIÁRIO.`}
            </Text>
            <Text
              textTransform={"uppercase"}
              fontSize={{base:"10px",md:'1.1rem', xl: "1.3rem"}}
              maxW={{base:"140px",md:'380px', xl:"520px"}}
              color="#a9abae"
            >
              <Highlight
                query={[
                  "FRUTOS ORIGINAIS DA AMAZÔNIA",
                  "ORIGINAL FRUITS FROM THE AMAZON",
                ]}
                styles={{ color: "#daa520" }}
              >
                {language
                  ? ` ITS ACTIVE INGREDIENTS ACT DIRECTLY ON THE HAIR FIBERS REGENERATING HAIR HEALTH FROM THE FIRST USE. ENRICHED WITH ORIGINAL FRUITS FROM THE AMAZON AS BRAZILIAN NUT OIL, MURUMURU BUTTER, HYDROLYZED COLLAGEN PROMOTES DEEP NOURISHMENT AND HYDRATION, LEAVING THREADS SOFT, SHINY AND RENEWED`
                  : `SEUS INGREDIENTES ATIVOS AGEM DIRETAMENTE NAS FIBRAS CAPILARES REGENERANDO A SAÚDE CAPILAR DESDE O PRIMEIRO USO. ENRIQUECIDO COM FRUTOS ORIGINAIS DA AMAZÔNIA, CONTENDO ÓLEO DE CASTANHA DO PARÁ, MANTEIGA DE MURUMURU E COLÁGENO
            HIDROLISADO PROMOVEM UMA NUTRICÃO E HIDRTAÇÃO PROFUNDAS, DEIXANDO OS FIOS MACIOS, BRILHANTES E RENOVADOS.`}
              </Highlight>
            </Text>
            <Link
              href="https://api.whatsapp.com/send?phone=5518998063761&text=Olá! Estou interessado em saber mais sobre a linha DAILY GLOW."
              target="_blank"
              justify="start"
            >
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
