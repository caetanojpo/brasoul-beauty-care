import React from "react";
import {Box, Flex} from "@chakra-ui/react";
import {useLanguage} from "@/common/provider/language/languageProvider";

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    const languages = ["br", "en", "es", "ar", "fr"];
    const currentIndex = languages.indexOf(language);

    const handleLanguageChange = () => {
        const nextIndex = (currentIndex + 1) % languages.length;
        setLanguage(languages[nextIndex]);
    };

    const segmentSize = 40;
    const position = `calc(${currentIndex} * ${segmentSize}px + 4px)`;

    const indicatorBg = "#71625B";

    return (
        <Box
            as="button"
            onClick={handleLanguageChange}
            position="relative"
            w={{ base: `${segmentSize}px`, xl: `${languages.length * segmentSize}px` }}
            h={{ base: `${languages.length * segmentSize}px`, xl: "36px" }}
            overflow="hidden"
            borderRadius="full"
            boxShadow="md"
            bg="#B38E46"
            marginRight="8px"
            aria-label="Language switcher"
        >
            {/* Labels de fundo */}
            <Flex
                direction={{ base: "column", xl: "row" }}
                position="absolute"
                inset="0"
            >
                {languages.map((lang) => (
                    <Box
                        key={lang}
                        flex="1"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontSize="sm"
                        fontWeight="medium"
                        color="white"
                    >
                        {lang.toUpperCase()}
                    </Box>
                ))}
            </Flex>

            {/* Indicador deslizante */}
            <Box
                position="absolute"
                left={{ base: "2px", xl: position }}
                top={{ base: position, xl: "4px" }}
                w={{ base: "auto", xl: "36px" }}
                h={{ base: "36px", xl: "auto" }}
                right={{ base: "2px", xl: "auto" }}
                bottom={{ base: "auto", xl: "4px" }}
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