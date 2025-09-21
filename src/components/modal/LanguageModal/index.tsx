"use client";
import GradientText from "@/components/typography/GradientText/indext";
import { Flex, Text, Box, Button, Grid } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import brasil from "@/assets/images/icons/brasil.png";
import usa from "@/assets/images/icons/usa.png";
import spain from "@/assets/images/icons/spain.png";
import saudi from "@/assets/images/icons/saudi.png";
import aut_en from "@/assets/images/banners/banner_autismo_en.png";
import aut_esp from "@/assets/images/banners/banner_autismo_esp.png";
import aut_br from "@/assets/images/banners/banner_autismo_br.png";
import cat_en from "@/assets/images/banners/banner_catadores_en.png";
import cat_esp from "@/assets/images/banners/banner_catadores_esp.png";
import cat_br from "@/assets/images/banners/banner_catadores_br.png";
import { useLanguage } from "@/common/provider/language/languageProvider";
import { Icon } from "@iconify/react";

export default function LanguageModal() {
    const { language, setLanguage } = useLanguage();
    const [showWelcomeModal, setShowWelcomeModal] = useState(false);
    const [closeModals, setCloseModals] = useState<boolean>(false);
    const [currentBanner, setCurrentBanner] = useState(0);

    const changeLanguage = (language: string) => {
        setLanguage(language);
        setShowWelcomeModal(true);
        setCurrentBanner(0); // start with the first banner
    };

    const handleNext = () => {
        if (currentBanner === 0) {
            setCurrentBanner(1);
        } else {
            closeAll();
        }
    };

    const closeAll = () => {
        setShowWelcomeModal(false);
        setCloseModals(true);
    };

    return (
        <>
            {/* LANGUAGE SELECTION MODAL */}
            <Flex
                display={showWelcomeModal ? "none" : closeModals ? "none" : "flex"}
                position="fixed"
                h="100vh"
                w="100%"
                zIndex="950"
                bg="rgba(255, 255, 255, 0.6)"
            >
                <Flex
                    w="100%"
                    h="100%"
                    alignItems="center"
                    justify="center"
                    zIndex="999"
                >
                    <Flex
                        bg="white"
                        width={{ base: "90%", md: "70%", xl: "40%" }}
                        h={{ base: "500px", md: "400px", xl: "400px" }}
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
                                <GradientText title="BRASOUL" size={"2.6rem"} />
                            </Flex>
                        </Flex>
                        <Flex h="85%" w="100%" flexDirection="column">
                            <Flex
                                flexDirection="column"
                                w="100%"
                                alignItems="center"
                                mt="1rem"
                            >
                                <Text>SELECIONE SEU IDIOMA</Text>
                                <Text color="light">SELECT YOUR LANGUAGE</Text>
                                <Text color="light">SELECCIONE SU IDIOMA</Text>
                                <Text color="light">حدد لغتك</Text>
                            </Flex>
                            <Grid
                                templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
                                gap={4}
                                alignItems="center"
                                justifyItems="center"
                                h="100%"
                                w="100%"
                                px="4"
                            >
                                <Flex
                                    flexDirection="column"
                                    textAlign="center"
                                    cursor="pointer"
                                    _hover={{ color: "textHighlight", fontWeight: "bold" }}
                                    onClick={() => changeLanguage("br")}
                                >
                                    <Image src={brasil} alt="Bandeira do Brasil" />
                                    <Text
                                        fontSize={{ base: "1.2rem", md: "1.4rem", lg: "1.6rem" }}
                                        mt="1rem"
                                    >
                                        PORTUGUÊS
                                    </Text>
                                </Flex>
                                <Flex
                                    flexDirection="column"
                                    textAlign="center"
                                    cursor="pointer"
                                    _hover={{ color: "textHighlight", fontWeight: "bold" }}
                                    onClick={() => changeLanguage("en")}
                                >
                                    <Image src={usa} alt="USA's flag" />
                                    <Text
                                        fontSize={{ base: "1.2rem", md: "1.4rem", lg: "1.6rem" }}
                                        mt="1rem"
                                    >
                                        ENGLISH
                                    </Text>
                                </Flex>
                                <Flex
                                    flexDirection="column"
                                    textAlign="center"
                                    cursor="pointer"
                                    _hover={{ color: "textHighlight", fontWeight: "bold" }}
                                    onClick={() => changeLanguage("es")}
                                >
                                    <Image src={spain} alt="Spain's flag" />
                                    <Text
                                        fontSize={{ base: "1.2rem", md: "1.4rem", lg: "1.6rem" }}
                                        mt="1rem"
                                    >
                                        SPANISH
                                    </Text>
                                </Flex>
                                <Flex
                                    flexDirection="column"
                                    textAlign="center"
                                    cursor="pointer"
                                    _hover={{ color: "textHighlight", fontWeight: "bold" }}
                                    onClick={() => changeLanguage("ar")}
                                >
                                    <Image src={saudi} alt="Saudi Arabia's flag" />
                                    <Text
                                        fontSize={{ base: "1.2rem", md: "1.4rem", lg: "1.6rem" }}
                                        mt="1rem"
                                    >
                                        عربي
                                    </Text>
                                </Flex>
                            </Grid>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            {/* WELCOME MODAL WITH BANNERS */}
            <Flex
                display={showWelcomeModal ? "flex" : closeModals ? "none" : "none"}
                position="fixed"
                h="100vh"
                w="100%"
                zIndex="950"
                bg="rgba(255, 255, 255, 0.6)"
            >
                <Flex
                    w="100%"
                    h="100%"
                    alignItems="center"
                    justify="center"
                    zIndex="999"
                >
                    <Flex
                        bg="white"
                        width={{ base: "95%", md: "90%", xl: "80%" }}
                        h={{ base: "300px", md: "600px", xl: "680px" }}
                        boxShadow="dark-lg"
                        borderRadius="20px"
                        py="4"
                        flexDirection="column"
                    >
                        {/* Header with X button */}
                        <Flex
                            w="100%"
                            justify="center"
                            h="10%"
                            position="relative"
                            mb={{ base: "10px", md: "0px" }}
                        >
                            <GradientText title="BRASOUL" size={"2.6rem"} />
                            <Text
                                position="absolute"
                                right="16px"
                                top="40%"
                                transform="translateY(-50%)"
                                cursor="pointer"
                                fontWeight="bold"
                                onClick={() => closeAll()}
                            >
                                <Icon icon="zondicons:close-outline" fontSize={'3rem'} color='#B38E46'/>
                            </Text>
                        </Flex>
                        {/* Main content */}
                        <Flex
                            h="100%"
                            w="100%"
                            flexDirection="column"
                            justify="space-between"
                        >
                            <Flex
                                flex="1"
                                justifyContent="center"
                                alignItems="center"
                                w="100%"
                                pos={'relative'}
                            >
                                {currentBanner === 0 ? (
                                    <Flex direction="column" align="center">
                                        <Image
                                            onClick={handleNext}
                                            fill
                                            src={
                                                language === "br"
                                                    ? aut_br
                                                    : language === "es"
                                                        ? aut_esp
                                                        : aut_en // Use English for "en" and "ar"
                                            }
                                            alt="Banner Autism"
                                            priority={true}
                                            quality={85}
                                            loading={"eager"}
                                            placeholder="blur"
                                        />
                                    </Flex>
                                ) : (
                                    <Flex direction="column" align="center">
                                        <Image
                                            onClick={handleNext}
                                            fill
                                            src={
                                                language === "br"
                                                    ? cat_br
                                                    : language === "es"
                                                        ? cat_esp
                                                        : cat_en // Use English for "en" and "ar"
                                            }
                                            alt="Banner Catadores"
                                            priority={true}
                                            quality={85}
                                            loading={"eager"}
                                            placeholder="blur"
                                        />
                                    </Flex>
                                )}
                            </Flex>
                            {/* Footer with Next/Close button */}
                            <Flex justify="center" align="center" pb="2" mt='4'>
                                <Button
                                    onClick={handleNext}
                                    bg='#B38E46'
                                    color='white'
                                    py={{ base: "8", lg: '12' }}
                                    px='100px'
                                    fontSize={{ base: "1.2rem", lg: '2rem' }}
                                    _hover={{ bg: '#71625B' }}
                                >
                                    {language === "en"
                                        ? (currentBanner === 0 ? "NEXT" : "CLOSE")
                                        : language === "br"
                                            ? (currentBanner === 0 ? "PRÓXIMO" : "FECHAR")
                                            : language === "es"
                                                ? (currentBanner === 0 ? "SIGUIENTE" : "CERRAR")
                                                : (currentBanner === 0 ? "التالي" : "إغلاق")}
                                </Button>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
}