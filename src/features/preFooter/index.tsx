"use client"
import { Flex, Highlight, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import fingerPrint from "@/assets/images/icons/fingerprint-map-digital.png";
import GradientText from "@/components/typography/GradientText/indext";
import { useLanguage } from "@/common/provider/language/languageProvider";

export default function PreFooter() {
  const { language } = useLanguage();
  return (
    <Flex
      h="100%"
      w='100%'
      maxW="100%"
      flexDirection={"column"}
      align={"center"}
      gap="3rem"
      mb="10rem"
      paddingX={{ base: "1rem", lg: 0 }}
      textAlign={{ base: "center" }}
    >
      <GradientText as="h1" title="BRASOUL" />
      <Text fontSize={"1.8rem"}>
        <Highlight
          query={["BRASIL", "NATUREZA", "BEM-ESTAR", "VOCÊ", "BRAZIL", "NATURE", "WELL-BEING", "YOU"]}
          styles={{ color: "textHighlight" }}
        >
         {language === "en" ? 'FROM BRAZIL AND ITS NATURE FOR YOU AND YOUR WELL-BEING!' : language === "br" ? 'DO BRASIL E SUA NATUREZA PARA O SEU BEM-ESTAR E VOCÊ!' : '¡DESDE BRASIL Y SU NATURALEZA PARA USTED Y SU BIENESTAR!'}
        </Highlight>
      </Text>
      <Flex align="center" justify="center" position="relative" zIndex={-10}>
        <Image
          width={80}
          src={fingerPrint}
          alt="Imagem do mapa do Brasil, na cor dourada. O mapa é marcado por uma digital de dedo"
        />
      </Flex>
    </Flex>
  );
}
