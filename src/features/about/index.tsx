"use client";
import GradientText from "@/components/typography/GradientText/indext";
import {Flex, Grid, GridItem, Text} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import heart from "@/assets/images/icons/self-love.png";
import hand from "@/assets/images/icons/natural-ingredients.png";
import rabbit from "@/assets/images/icons/animal-friendly.png";
import development from "@/assets/images/icons/sustainable-devolpment.png";
import {useLanguage} from "@/common/provider/language/languageProvider";

export default function About() {
    const {language} = useLanguage();
    const aboutData = [
        {
            icon: heart,
            description: language === "en"
                ? "SELF-LOVE AND WELL-BEING"
                : language === "br" ? "AMOR PRÓPRIO E BEM ESTAR" : "AMOR PROPIO Y BIENESTAR",
            width: "60%",
        },
        {
            icon: hand,
            description: language === "en"
                ? "NATURAL, SUSTAINABLE AND HIGH-PERFORMANCE INGREDIENTS"
                : language === "br" ? "INGREDIENTES NATURAIS E DE ALTO DESEMPENHO" : "INGREDIENTES NATURALES Y DE ALTO RENDIMIENTO",
            width: "80%",
        },
        {
            icon: development,
            description: language === "en"
                ? "SUSTAINABLE DEVELOPMENT"
                : language === "br" ? "DESENVOLVIMENTO SUSTENTÁVEL" : "DESARROLLO SOSTENIBLE",
            width: "80%",
        },
        {
            icon: rabbit,
            description: language === "en" ? "CRUELTY FREE" : language === "br" ? "NÃO TESTADO EM ANIMAIS" : "NO PROBADO EN ANIMALES",
            width: "60%",
        },
    ];
    return (
        <Flex
            id="about"
            minH={{base: "50vh", md: '20vh', xl: '50vh'}}
            w="100%"
            paddingX={{base: "2rem", lg: "10rem"}}
            paddingY="4rem"
            flexDirection={{base: "column", lg: "row"}}
            justify={{base: "center", lg: "space-around"}}
            align="center"
        >
            <Flex w={{base: "100%", lg: "30%"}}/>
            <Flex
                flexDirection="column"
                w={{base: "100%", lg: "50%"}}
                gap="4rem"
                align={{base: "center", lg: "flex-start"}}
            >
                <GradientText
                    title={language === "en" ? "ABOUT BRASOUL" : language === "br" ? "SOBRE A BRASOUL" : "SOBRE BRASOUL"}
                    size="2.8rem"
                    letterSpacing={8}
                />

                <Grid
                    templateColumns={{base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)"}}
                    gap={6}
                >
                    {aboutData.map((data, id) => (
                        <GridItem key={id}>
                            <Flex gap="2rem" align={"end"}>
                                <Flex position={"relative"}>
                                    <Image width={40} src={data.icon} alt={""}/>
                                </Flex>
                                <Text
                                    fontSize="1.2rem"
                                    color="gray"
                                    w={{base: "100%", lg: data.width}}
                                >
                                    {data.description}
                                </Text>
                            </Flex>
                        </GridItem>
                    ))}
                </Grid>
            </Flex>
        </Flex>
    );
}
