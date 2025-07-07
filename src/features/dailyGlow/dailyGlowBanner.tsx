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
              className="fadeText"
              fontFamily="Photograph"
              fontSize={["25px", "4em"]}
              letterSpacing={[3, 5]}
              fontWeight={600}
              paddingX={"30px"}
            >
              Daily Glow
            </Text>
            <Text
              fontFamily="Montserrat"
              textTransform={"uppercase"}
              fontSize={["10px", "2.3em"]}
            >
              LINHA HOME CARE
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
              {language === "en"
                ? `DAILY GLOW HOME CARE LINE WAS EXCLUSIVELY DEVELOPED BASED ON THE CONCEPT OF RESTORATION AND DAILY GLOW.`
                : language === "br"
                ? `A LINHA HOME CARE DAILY GLOW FOI EXCLUSIVAMENTE DESENVOLVIDA COM
            BASE NO CONCEITO DE RESTAURAÇÃO E BRILHO DIÁRIO.`
                : "LA LÍNEA HOME CARE DAILY GLOW FUE EXCLUSIVAMENTE DESARROLLADA BASADA EN EL CONCEPTO DE RESTAURACIÓN Y BRILLO DIARIO."}
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
                {language === "en"
                  ? ` ITS ACTIVE INGREDIENTS ACT DIRECTLY ON THE HAIR FIBERS REGENERATING HAIR HEALTH FROM THE FIRST USE. ENRICHED WITH ORIGINAL FRUITS FROM THE AMAZON AS BRAZILIAN NUT OIL, MURUMURU BUTTER, HYDROLYZED COLLAGEN PROMOTES DEEP NOURISHMENT AND HYDRATION, LEAVING THREADS SOFT, SHINY AND RENEWED`
                  : language === "br"
                  ? `SEUS INGREDIENTES ATIVOS AGEM DIRETAMENTE NAS FIBRAS CAPILARES REGENERANDO A SAÚDE CAPILAR DESDE O PRIMEIRO USO. ENRIQUECIDO COM FRUTOS ORIGINAIS DA AMAZÔNIA, CONTENDO ÓLEO DE CASTANHA DO PARÁ, MANTEIGA DE MURUMURU E COLÁGENO
            HIDROLISADO PROMOVEM UMA NUTRICÃO E HIDRTAÇÃO PROFUNDAS, DEIXANDO OS FIOS MACIOS, BRILHANTES E RENOVADOS.`
                  : "SUS INGREDIENTES ACTIVOS ACTÚAN DIRECTAMENTE EN LAS FIBRAS CAPILARES REGENERANDO LA SALUD CAPILAR DESDE EL PRIMER USO. ENRIQUECIDO CON FRUTOS ORIGINALES DE LA AMAZONÍA, CONTENIENDO ACEITE DE CASTAÑA DE PARÁ, MANTECA DE MURUMURU Y COLÁGENO HIDROLIZADO, PROMUEVEN UNA NUTRICIÓN E HIDRATACIÓN PROFUNDAS, DEJANDO LAS HEBRAS SUAVES, BRILLANTES Y RENOVADAS."}
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
                className="fadeText"
                display={{ base: "flex", md: "none", xl: "flex" }}
                color={"black"}
                fontFamily="Photograph"
                fontSize={{ base: "15px", md: "3.5em", xl: "5em" }}
                letterSpacing={{ base: 3, xl: 5 }}
                transform={"rotate(-5deg)"}
                paddingX={"30px"}
              >
                Daily Glow
              </Text>
              <Text
                ml="5px"
                fontFamily="Montserrat"
                textTransform={"uppercase"}
                fontSize={{ base: "10px", md: "1.6em", xl: "1.8em" }}
                mb={{ base: "20px", md: "8px", xl: "20px" }}
              >
                LINHA HOME CARE
              </Text>
            </Flex>
            <Text
              textTransform={"uppercase"}
              fontSize={{ base: "10px", md: "1.1rem", xl: "1.3rem" }}
              maxW={{ base: "140px", md: "380px", xl: "520px" }}
              color="#a9abae"
              mb={{ base: "20px", md: "8px", xl: "20px" }}
            >
              {language === "en"
                ? `DAILY GLOW HOME CARE LINE WAS EXCLUSIVELY DEVELOPED BASED ON THE CONCEPT OF RESTORATION AND DAILY GLOW.`
                : language === "br"
                ? `A LINHA HOME CARE DAILY GLOW FOI EXCLUSIVAMENTE DESENVOLVIDA COM
            BASE NO CONCEITO DE RESTAURAÇÃO E BRILHO DIÁRIO.`
                : "LA LÍNEA HOME CARE DAILY GLOW FUE EXCLUSIVAMENTE DESARROLLADA BASADA EN EL CONCEPTO DE RESTAURACIÓN Y BRILLO DIARIO."}
            </Text>
            <Text
              textTransform={"uppercase"}
              fontSize={{ base: "10px", md: "1.1rem", xl: "1.3rem" }}
              maxW={{ base: "140px", md: "380px", xl: "520px" }}
              color="#a9abae"
            >
              <Highlight
                query={[
                  "FRUTOS ORIGINAIS DA AMAZÔNIA",
                  "ORIGINAL FRUITS FROM THE AMAZON",
                ]}
                styles={{ color: "#daa520" }}
              >
                {language === "en"
                  ? ` ITS ACTIVE INGREDIENTS ACT DIRECTLY ON THE HAIR FIBERS REGENERATING HAIR HEALTH FROM THE FIRST USE. ENRICHED WITH ORIGINAL FRUITS FROM THE AMAZON AS BRAZILIAN NUT OIL, MURUMURU BUTTER, HYDROLYZED COLLAGEN PROMOTES DEEP NOURISHMENT AND HYDRATION, LEAVING THREADS SOFT, SHINY AND RENEWED`
                  : language === "br"
                  ? `SEUS INGREDIENTES ATIVOS AGEM DIRETAMENTE NAS FIBRAS CAPILARES REGENERANDO A SAÚDE CAPILAR DESDE O PRIMEIRO USO. ENRIQUECIDO COM FRUTOS ORIGINAIS DA AMAZÔNIA, CONTENDO ÓLEO DE CASTANHA DO PARÁ, MANTEIGA DE MURUMURU E COLÁGENO
            HIDROLISADO PROMOVEM UMA NUTRICÃO E HIDRTAÇÃO PROFUNDAS, DEIXANDO OS FIOS MACIOS, BRILHANTES E RENOVADOS.`
                  : "SUS INGREDIENTES ACTIVOS ACTÚAN DIRECTAMENTE EN LAS FIBRAS CAPILARES REGENERANDO LA SALUD CAPILAR DESDE EL PRIMER USO. ENRIQUECIDO CON FRUTOS ORIGINALES DE LA AMAZONÍA, CONTENIENDO ACEITE DE CASTAÑA DE PARÁ, MANTECA DE MURUMURU Y COLÁGENO HIDROLIZADO, PROMUEVEN UNA NUTRICIÓN E HIDRATACIÓN PROFUNDAS, DEJANDO LAS HEBRAS SUAVES, BRILLANTES Y RENOVADAS."}
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
