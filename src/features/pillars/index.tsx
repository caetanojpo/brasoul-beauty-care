"use client";
import GradientText from "@/components/typography/GradientText/indext";
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import leafHeart from "@/assets/images/icons/leaf-heart.png";
import hand from "@/assets/images/icons/giving-hand.png";
import recicle from "@/assets/images/icons/sustainable-devolpment.png";
import girlPower from "@/assets/images/icons/girl-power.png";
import brazil from "@/assets/images/icons/brazil-map.png";
import { useLanguage } from "@/common/provider/language/languageProvider";

export default function Pillars() {
  const { language } = useLanguage();
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  const pillarData = [
    {
      icon: hand,
      description: language === "en" ? "VALUING HUMAN BEINGS AND NATURE" : language === "br" ? "VALORIZAÇÃO DO SER HUMANO E DA NATUREZA" : "VALORANDO A LOS SERES HUMANOS Y LA NATURALEZA",
      divider: true,
      width: 60,
    },
    {
      icon: girlPower,
      description: language === "en" ? "FEMALE EMPOWERMENT" : language === "br" ? "EMPODERAMENTO FEMININO" : "EMPODERAMIENTO FEMENINO",
      divider: true,
      width: 35,
    },
    {
      icon: brazil,
      description: language === "en" ? "BRASILLNESS, BALANCE AND PURITY" : language === "br" ? "BRASILIDADE EQUILÍBRIO E PUREZA" : "BRASILIDAD, EQUILIBRIO Y PUREZA",
      divider: false,
      width: 50,
    },
  ];

  return (
    <Flex paddingX={{ base: "2rem", lg: "10rem" }} align="center">
      <Flex
        borderBottom={"1px solid"}
        paddingY="6rem"
        borderColor="lineLight"
        w="100%"
        flexDirection={{ base: "column", lg: "row" }}
        align="center"
        justify="center"
      >
        <Flex w={{ base: "100%", lg: "30%" }} h="100%">
          <Flex position="relative" justify="center" align="center" w="100%">
            <Image
              width={isMobile ? 150 : 250}
              src={leafHeart}
              alt="Coração feito de folhas verdes."
            />
          </Flex>
        </Flex>
        <Flex
          flexDirection={"column"}
          w={{ base: "100%", lg: "80%" }}
          gap="2rem"
          justify="center"
        >
          <Flex w="100%" justify="center">
            <GradientText title={language === "en" ? "BRAND VALUES" : language === "br" ? "PILARES DA MARCA" : "VALORES DE LA MARCA"} size="2rem" />
          </Flex>
          <Flex
            w="100%"
            justify={{ base: "center", lg: "space-around" }}
            align="center"
            flexDirection={{ base: "column", lg: "row" }}
          >
            {pillarData.map((pillar, id) => (
              <Flex key={id} padding={"2rem"} gap="4rem" h="100%" w={{base:'100%',lg:"33%"}} justify='center' >
                <Flex
           
                  align="center"
                  flexDirection={"column"}
                  h="100%"
                  minH="80px"
                  w='100%'
                  justify={"space-between"}
                >
                  <Flex h="100%" minH="40px" align="center">
                    <Image
                      width={pillar.width}
                      src={pillar.icon}
                      alt={pillar.description}
                    />
                  </Flex>
                  <Text
                    textAlign={"center"}
                    fontSize={{ base: "1.2rem", lg: "1.3rem" }}
                    color="light"
                  mt='1.2rem'
                  >
                    {pillar.description}
                  </Text>
                </Flex>
                <Flex
                  display={{
                    base: "none",
                    lg: pillar.divider ? "flex" : "none",
                  }}
                  align={"center"}
                >
                  <Box
                    h="65%"
                    borderRight={"1px solid"}
                    borderColor="lineLight"
                  />
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
