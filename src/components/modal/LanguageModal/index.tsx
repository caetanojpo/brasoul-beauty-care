"use client";
import GradientText from "@/components/typography/GradientText/indext";
import { Flex, Text, Divider, Box } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import brasil from "@/assets/images/icons/brasil.png";
import usa from "@/assets/images/icons/usa.png";
import { useLanguage } from "@/common/provider/language/languageProvider";

export default function LanguageModal() {
  const { language, setLanguage } = useLanguage();
  const [closeModal, setCloseModal] = useState(false);

  const changeLanguage = (language: string) => {
    if (language === "br") {
      setLanguage(false);
    } else {
      setLanguage(true);
    }
    setCloseModal(true);
  };

  return (
    <Flex
    display={closeModal ? 'none' : 'flex'}
      position={"fixed"}
      h="100vh"
      w="100%"
      zIndex="950"
      bg="rgba(255, 255, 255, 0.6)"
    >
      <Flex
        zIndex="999"
        w="100%"
        h="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          bg="white"
          width={{base:'90%', md:'70%', xl:"40%"}}
          h={{base:'250px', md:'300px', xl:"350px"}}
          boxShadow="dark-lg"
          borderRadius="20px"
          py="4"
          flexDirection="column"
        >
          <Flex
            w="100%"
            justify="center"
            borderBottom="2px solid"
            className="border"
            h="15%"
          >
            <Flex w="100%" justify="center">
              <GradientText title="BRASOUL" size={"2.6rem"}/>
            </Flex>
          </Flex>
          <Flex h="85%" w="100%" flexDirection="column">
            <Flex flexDirection="column" w="100%" alignItems="center" mt="1rem">
              <Text>SELECIONE SEU IDIOMA</Text>
              <Text color="light">SELECT YOUR LANGUAGE</Text>
            </Flex>
            <Flex justifyContent="space-evenly" alignItems="center" h="100%">
              <Flex
                flexDirection="column"
                w="25%"
                textAlign="center"
                cursor="pointer"
                _hover={{ color: "textHighlight", fontWeight: "bold" }}
                onClick={() => changeLanguage("br")}
              >
                <Image src={brasil} alt='Bandeira do Brasil'/>
                <Text fontSize={{base:'1.2rem', md:'1.4rem', lg:'1.6rem'}} mt="1rem">PORTUGUÊS</Text>
              </Flex>
              <Box h="70%" w="2px" bg="lineLight" />
              <Flex
                flexDirection="column"
                w="25%"
                textAlign="center"
                cursor="pointer"
                _hover={{ color: "textHighlight", fontWeight: "bold" }}
                onClick={() => changeLanguage("en")}
              >
                <Image src={usa} alt="USA's flag"/>
                <Text fontSize={{base:'1.2rem', lg:'1.6rem'}} mt="1rem">ENGLISH</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
