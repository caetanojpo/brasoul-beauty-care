import React, {useEffect} from 'react';
import {Box, Flex} from '@chakra-ui/react';
import {useLanguage} from '@/common/provider/language/languageProvider';

const LanguageSwitcher: React.FC = () => {
    const {language, setLanguage} = useLanguage();

    const handleLanguageChange = () => {
        const nextLanguage: Record<string, string> = {
            br: 'en',
            en: 'es',
            es: 'br',
        };

        setLanguage(nextLanguage[language]);
    };

    useEffect(() => {

    }, [language]);

    // Set the left position and background color based on the language
    let indicatorLeft;
    let indicatorBg;
    if (language === 'br') {
        indicatorLeft = '4px';
        indicatorBg = '#71625B';
    } else if (language === 'en') {
        indicatorLeft = '42px';
        indicatorBg = '#71625B';
    } else if (language === 'es') {
        indicatorLeft = '83px';
        indicatorBg = '#71625B';
    }

    return (
        <Box
            as="button"
            onClick={handleLanguageChange}
            position="relative"
            w="120px"
            h="36px"
            overflow="hidden"
            borderRadius="full"
            boxShadow="md"
            bg="#B38E46"
            aria-label="Language switcher"
        >
            {/* Background track with labels */}
            <Flex position="absolute" inset="0">
                <Box flex="1" display="flex" alignItems="center" justifyContent="center" fontSize="md"
                     fontWeight="medium" color="white">
                    BR
                </Box>
                <Box flex="1" display="flex" alignItems="center" justifyContent="center" fontSize="md"
                     fontWeight="medium" color="white">
                    EN
                </Box>
                <Box flex="1" display="flex" alignItems="center" justifyContent="center" fontSize="md"
                     fontWeight="medium" color="white">
                    ES
                </Box>
            </Flex>

            {/* Sliding indicator */}
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
                <Flex position="absolute" inset="0" align="center" justify="center" fontSize="md" fontWeight="bold"
                      color="white">
                    {language.toUpperCase()}
                </Flex>
            </Box>
        </Box>
    );
};

export default LanguageSwitcher;
