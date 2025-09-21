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
import {copywriting} from "@/data/copywriting";

export const DailyGlowBanner = () => {
  const { language } = useLanguage();
  const { dailyGlow } = copywriting[language as keyof typeof copywriting] || copywriting["en"];
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
              {dailyGlow.daily}
            </Text>
            <Text
              textTransform={"uppercase"}
              fontSize={["10px", "1rem"]}
              color="#a9abae"
            >
              <Highlight
                query={dailyGlow.highlight}
                styles={{ color: "#daa520" }}
              >
                {dailyGlow.activeIngredients}
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
                {dailyGlow.learn}
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
                HOME CARE
              </Text>
            </Flex>
            <Text
              textTransform={"uppercase"}
              fontSize={{ base: "10px", md: "1.1rem", xl: "1.3rem" }}
              maxW={{ base: "140px", md: "380px", xl: "520px" }}
              color="#a9abae"
              mb={{ base: "20px", md: "8px", xl: "20px" }}
            >
              {dailyGlow.daily}
            </Text>
            <Text
              textTransform={"uppercase"}
              fontSize={{ base: "10px", md: "1.1rem", xl: "1.3rem" }}
              maxW={{ base: "140px", md: "380px", xl: "520px" }}
              color="#a9abae"
            >
              <Highlight
                query={dailyGlow.highlight}
                styles={{ color: "#daa520" }}
              >
                {dailyGlow.activeIngredients}
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
                  {dailyGlow.learn}
                </Text>
              </Button>
            </Link>
          </Box>
        </Box>
      )}
    </Container>
  );
};
