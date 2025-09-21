import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { useLanguage } from "@/common/provider/language/languageProvider";

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    const handleLanguageChange = () => {
        const nextLanguage: Record<string, string> = {
            br: "en",
            en: "es",
            es: "ar",
            ar: "br",
        };

        setLanguage(nextLanguage[language]);
    };

    // Configuração do indicador por linguagem
    let indicatorLeft;
    const indicatorBg = "#71625B";

    if (language === "br") {
        indicatorLeft = "4px";
    } else if (language === "en") {
        indicatorLeft = "43px";
    } else if (language === "es") {
        indicatorLeft = "82px";
    } else if (language === "ar") {
        indicatorLeft = "121px";
    }

    return (
        <Box
            as="button"
            onClick={handleLanguageChange}
            position="relative"
            w="160px" // largura aumentada para caber 4 opções
            h="36px"
            overflow="hidden"
            borderRadius="full"
            boxShadow="md"
            bg="#B38E46"
            marginRight="8px"
            aria-label="Language switcher"
        >
            {/* Labels de fundo */}
            <Flex position="absolute" inset="0">
                <Box
                    flex="1"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="sm"
                    fontWeight="medium"
                    color="white"
                >
                    BR
                </Box>
                <Box
                    flex="1"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="sm"
                    fontWeight="medium"
                    color="white"
                >
                    EN
                </Box>
                <Box
                    flex="1"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="sm"
                    fontWeight="medium"
                    color="white"
                >
                    ES
                </Box>
                <Box
                    flex="1"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="sm"
                    fontWeight="medium"
                    color="white"
                >
                    AR
                </Box>
            </Flex>

            {/* Indicador deslizante */}
            <Box
                position="absolute"
                top="4px"
                bottom="4px"
                left={indicatorLeft}
                w="36px"
                borderRadius="full"
                transition="all 0.3s ease-in-out"
                bg={indicatorBg}
            >
                <Flex
                    position="absolute"
                    inset="0"
                    align="center"
                    justify="center"
                    fontSize="sm"
                    fontWeight="bold"
                    color="white"
                >
                    {language.toUpperCase()}
                </Flex>
            </Box>
        </Box>
    );
};

export default LanguageSwitcher;
