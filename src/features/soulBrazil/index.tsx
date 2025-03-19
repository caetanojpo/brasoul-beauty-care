"use client";
import React from "react";
import {Box, Flex, Heading, Text, useMediaQuery} from "@chakra-ui/react";
import FingerPrint from "/src/assets/images/icons/fingerprint-map-negative.png";
import CrushHerbs from "/src/assets/images/icons/crush-herbs.png";
import CheckIcon from "/src/assets/images/icons/check.png";
import RecicleIcon from "/src/assets/images/icons/recicle.png";
import SecondBanner from "/src/assets/images/banners/second.png";
import Image from "next/image";
import {Container} from "@/components/Container";
import {useLanguage} from "@/common/provider/language/languageProvider";

interface IIcons {
    Text: string;
    Src: any;
    Title: string;
}

export const SoulBrazilSection = () => {
    const {language} = useLanguage();
    const iconBox: IIcons[] = [
        {
            Title: "CrushHerbs",
            Src: CrushHerbs,
            Text: language === "en"
                ? "NATURE IN THE PALM OF YOUR HAND"
                : language === "br" ? "A NATUREZA NA PALMA DA SUA MÃO"
                    : "LA NATURALEZA EN LA PALMA DE SU MANO",
        },
        {
            Title: "CheckIcon",
            Src: CheckIcon,
            Text: language === 'en' ? "EFFICIENCY AND RESULTS" : language === "br" ? "EFICIÊNCIA E RESULTADO" : "EFICIENCIA Y RESULTADOS",
        },
        {
            Title: "RecicleIcon",
            Src: RecicleIcon,
            Text: language === "en"
                ? "COMMITMENT WITH THE ENVIRONMENT"
                : language === "br" ? "COMPROMISSO COM O MEIO AMBIENTE"
                    : "COMPROMISO CON EL MEDIO AMBIENTE",
        },
    ];
    const [isMobile] = useMediaQuery("(max-width: 800px)");
    return (
        <Container id="inicio" flexDir="column">
            <Box w="100%" display="flex" alignItems="center" flexDirection={{base: 'column', xl: 'row'}}>
                <Flex w={{base: '100%', lg: '40%'}} h='100%' display={{base: 'none', xl: 'flex'}}>
                    <Image
                        style={{display: "flex", height: "100%", width: "100%"}}
                        src={SecondBanner}
                        alt="Second Banner"
                        quality={100}
                    />
                </Flex>
                <Box
                    w={{base: '80%', xl: "65%"}}
                    zIndex="9"
                    display="flex"
                    flexDir="column"
                    ml={{base: '0vw', xl: "5vw"}}
                    mb={{base: '0vh', xl: "10vh"}}
                >
                    <Flex flexDir="column" pr={{base: '0vw', xl: "15vw"}}>
                        <Flex justifyContent="space-between" mt={{base: '0px', xl: '1vh'}}>
                            <Flex flexDir="column" mt={"35px"}>
                                <Heading
                                    textTransform={"uppercase"}
                                    as={"h1"}
                                    fontStyle={"bold"}
                                    className="fadeText"
                                    fontSize={["15px", "2em"]}
                                    mb={{base: '20px', xl: "50px"}}
                                    letterSpacing={[3, 10]}
                                >
                                    {language === "en" ? "The soul of Brazil" : language === "br" ? "A alma do Brasil" : "El alma de Brasil"}
                                </Heading>
                                <Text
                                    textTransform={"uppercase"}
                                    fontSize={["10px", "1.7em"]}
                                    color="#a9abae"
                                    mb="20px"
                                >
                                    {language === "en"
                                        ? "Natural brazilian ingredients"
                                        : language === "br" ? "Ativos do Brasil"
                                            : "Ingredientes naturales brasileños"}
                                </Text>
                            </Flex>
                            <Image
                                style={{display: "flex", height: "100%", width: "8vw"}}
                                src={FingerPrint}
                                alt="Finger Print Negative"
                                quality={100}
                            />
                        </Flex>
                        <Text
                            textTransform={"uppercase"}
                            fontSize={["10px", "1em"]}
                            color="#a9abae"
                            mb={{base: '5px', xl: "20px"}}
                        >
                            {language === "en"
                                ? `BRASOUL HAS SELECTED THE BIODIVERSITY OF THE AMAZON AND ITS NATURAL INGREDIENTS TO PROVIDE CLEAN BEAUTY TO ITS FORMULAS`
                                : language === "br" ? `A BRASOUL ESCOLHEU A BIODIVERSIDADE DA AMAZÔNIA E SEUS
              INGREDIENTES NATURAIS PARA PROPORCIONAR BELEZA LIMPA ÀS SUAS
              FÓRMULAS`
                                    : "BRASOUL HA SELECCIONADO LA BIODIVERSIDAD DEL AMAZONAS Y SUS INGREDIENTES NATURALES PARA PROPORCIONAR BELLEZA LIMPIA A SUS FÓRMULAS."}
                        </Text>
                        <Text
                            textTransform={"uppercase"}
                            fontSize={["10px", "1.2em"]}
                            color="#a9abae"
                            mb={{base: '10px', xl: "20px"}}
                        ></Text>
                        <Text
                            textTransform={"uppercase"}
                            fontSize={["10px", "1em"]}
                            color="#a9abae"
                            mb={{base: '0px', xl: "20px"}}
                        >
                            {language === "en"
                                ? "WE THINK, CREATE AND DEVELOP HEALTHIER, NATURAL AND HIGH PERFORMANCE COSMETICS"
                                : language === "br" ? `PENSAMOS, CRIAMOS E DESENVOLVEMOS COSMETICOS MAIS SAUDAVEIS,
              NATURAIS E COM ALTA PERFORMANCE`
                            : "PENSAMOS, CREAMOS Y DESARROLLAMOS COSMÉTICOS MÁS SALUDABLES, NATURALES Y DE ALTO RENDIMIENTO."}
                        </Text>
                        <Flex
                            flexDirection={{base: "row", xl: "row"}}
                            mt={{base: '3vh', xl: "4.5vh"}}
                            w="100%"
                            justifyContent={{xl: "space-between"}}
                        >
                            {iconBox.map((item) => (
                                <Flex flexDir="column" alignItems={{base: "center"}}
                                      justifyContent={{base: 'space-between', xl: 'space-between'}} key={item.Text}
                                      mr={{base: '0px', md: '2rem', xl: '0rem'}}>
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
                                        fontSize={{base: "7.5px", xl: "1.2rem"}}
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
                    {language === "en" ? "FIND OUT ABOUT OUR PRODUCTS" : language === "br" ? "CONHEÇA NOSSOS PRODUTOS" : "DESCUBRA NUESTROS PRODUCTOS"}
                </Heading>
            </Flex>
        </Container>
    );
};
