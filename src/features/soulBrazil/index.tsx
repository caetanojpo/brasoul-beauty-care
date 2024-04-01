"use client";
import React from "react";
import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import FingerPrint from "/src/assets/images/icons/fingerprint-map-negative.png";
import CrushHerbs from "/src/assets/images/icons/crush-herbs.png";
import CheckIcon from "/src/assets/images/icons/check.png";
import RecicleIcon from "/src/assets/images/icons/recicle.png";
import SecondBanner from "/src/assets/images/banners/second.png";
import Image from "next/image";
import { Container } from "@/components/Container";
import { useLanguage } from "@/common/provider/language/languageProvider";
interface IIcons {
  Text: string;
  Src: any;
  Title: string;
}
export const SoulBrazilSection = () => {
  const { language } = useLanguage();
  const iconBox: IIcons[] = [
    {
      Title: "CrushHerbs",
      Src: CrushHerbs,
      Text: language
        ? "NATURE IN THE PALM OF YOUR HAND"
        : "A NATUREZA NA PALMA DA SUA MÃO",
    },
    {
      Title: "CheckIcon",
      Src: CheckIcon,
      Text: language ? "EFFICIENCY AND RESULTS" : "EFICIÊNCIA E RESULTADO",
    },
    {
      Title: "RecicleIcon",
      Src: RecicleIcon,
      Text: language
        ? "COMMITMENT WITH THE ENVIRONMENT"
        : "COMPROMISSO COM O MEIO AMBIENTE",
    },
  ];
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  return (
    <Container id="inicio" flexDir="column">
        <Box w="100%" display="flex" alignItems="center" flexDirection={{base:'column', xl:'row'}}>
          <Flex w={{base:'100%', lg:'40%'}} h='100%' display={{base:'none', xl:'flex'}}>
          <Image
            style={{ display: "flex", height: "100%", width: "100%" }}
            src={SecondBanner}
            alt="Second Banner"
            quality={100}
          />
          </Flex>
          <Box
            w={{base:'80%', xl:"65%"}}
            zIndex="9"
            display="flex"
            flexDir="column"
            ml={{base:'0vw',xl:"5vw"}}
            mb={{base:'0vh',xl:"10vh"}}
          >
            <Flex flexDir="column" pr={{base:'0vw',xl:"15vw"}}>
              <Flex justifyContent="space-between" mt={{base:'0px', xl:'1vh'}}>
                <Flex flexDir="column" mt={"35px"}>
                  <Heading
                    textTransform={"uppercase"}
                    as={"h1"}
                    fontStyle={"bold"}
                    className="fadeText"
                    fontSize={["15px", "2em"]}
                    mb={{base:'20px',xl:"50px"}}
                    letterSpacing={[3, 10]}
                  >
                    {language ? "The soul of Brazil" : "A alma do Brasil"}
                  </Heading>
                  <Text
                    textTransform={"uppercase"}
                    fontSize={["10px", "1.7em"]}
                    color="#a9abae"
                    mb="20px"
                  >
                    {language
                      ? "Natural brazilian ingredients"
                      : "Ativos do Brasil"}
                  </Text>
                </Flex>
                <Image
                  style={{ display: "flex", height: "100%", width: "8vw" }}
                  src={FingerPrint}
                  alt="Finger Print Negative"
                  quality={100}
                />
              </Flex>
              <Text
                textTransform={"uppercase"}
                fontSize={["10px", "1em"]}
                color="#a9abae"
                mb={{base:'5px',xl:"20px"}}
              >
                {language
                  ? `BRASOUL HAS SELECTED THE BIODIVERSITY OF THE AMAZON AND ITS NATURAL INGREDIENTS TO PROVIDE CLEAN BEAUTY TO ITS FORMULAS`
                  : `A BRASOUL ESCOLHEU A BIODIVERSIDADE DA AMAZÔNIA E SEUS
              INGREDIENTES NATURAIS PARA PROPORCIONAR BELEZA LIMPA ÀS SUAS
              FÓRMULAS`}
              </Text>
              <Text
                textTransform={"uppercase"}
                fontSize={["10px", "1.2em"]}
                color="#a9abae"
                mb={{base:'10px',xl:"20px"}}
              ></Text>
              <Text
                textTransform={"uppercase"}
                fontSize={["10px", "1em"]}
                color="#a9abae"
                mb={{base:'0px',xl:"20px"}}
              >
                {language
                  ? "WE THINK, CREATE AND DEVELOP HEALTHIER, NATURAL AND HIGH PERFORMANCE COSMETICS"
                  : `PENSAMOS, CRIAMOS E DESENVOLVEMOS COSMETICOS MAIS SAUDAVEIS,
              NATURAIS E COM ALTA PERFORMANCE`}
              </Text>
              <Flex
                flexDirection={{ base: "row", xl: "row" }}
                mt={{base:'3vh',xl:"4.5vh"}}
                w="100%"
                justifyContent={{xl:"space-between"}}
              >
                {iconBox.map((item) => (
                  <Flex flexDir="column" alignItems={{base:"center"}} justifyContent={{base:'space-between', xl:'space-between'}}  key={item.Text} mr={{base:'0px', md:'2rem', xl:'0rem'}}>
                    <Image
                      style={{
                        display: "flex",
                        width: "40px",
                        marginBottom: "20px",
                      }}
                      src={item.Src}
                      alt="First Banner"
                      quality={100}
                    />
                    <Text
                      textTransform={"uppercase"}
                      fontSize={{base:"7.5px", xl:"1.2rem"}}
                      maxW="200px"
                      textAlign="center"
                      color="#a9abae"
                      mb="20px"
                    >
                      {item.Text}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            </Flex>
          </Box>
        </Box>

      <Flex
        borderTop="2px solid #d1d2d4"
        pt="40px"
        w="90%"
        mr="auto"
        ml="auto"
        justifyContent="center"
        mt="40px"
      >
        <Heading
          textTransform={"uppercase"}
          as={"h1"}
          fontStyle={"bold"}
          className="fadeText"
          fontSize={["15px", "2em"]}
          mb="50px"
          letterSpacing={[3, 10]}
        >
          {language ? "FIND OUT ABOUT OUR PROducts" : "CONHEÇA NOSSOS PRODUTOS"}
        </Heading>
      </Flex>
    </Container>
  );
};
