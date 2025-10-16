"use client";
import {Box, Button, Flex, Input, List, ListItem, Text} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {Link} from "@/components/patterns/Link";
import iTel from "@/assets/images/icons/tel.png";
import iInstagram from "@/assets/images/icons/instagram.png";
import iEmail from "@/assets/images/icons/email.png";
import Image from "next/image";
import GradientText from "@/components/typography/GradientText/indext";
import {useLanguage} from "@/common/provider/language/languageProvider";
import {copywriting} from "@/data/copywriting";
import ReactCountryFlag from "react-country-flag";

interface ContactInfo {
    icon: any;
    description: string | string[];
    subDescription?: string;
}

interface CountryPhone {
    code: string;
    flag: string;
}

const phoneCountryMap: CountryPhone[] = [
    { code: "+966", flag: "SA" }, // Arábia Saudita
    { code: "+971", flag: "AE" }, // Emirados Árabes
    { code: "+352", flag: "LU" },  // Luxemburgo lu
    { code: "+55", flag: "BR" },  // Brasil 🇧🇷
];

const getFlagForNumber = (phone: string): string | undefined => {
    const match = phoneCountryMap.find(({ code }) => phone.startsWith(code));
    return match?.flag;
};

export default function Footer() {
    const {language} = useLanguage();
    const { footer, telephone } = copywriting[language as keyof typeof copywriting] || copywriting["en"];
    const footerNavigation = [
        {
            title: footer.about,
            link: `#about`
        },
        {title: footer.contact, link: `#contact`},
        {title: footer.buy, link: `#buy`},
        {title: footer.instagram, link: `https://www.instagram.com/brasoulbeautycare/`},
    ];

    let phoneDescription: string | string[];

    if (language === "ar") {
        phoneDescription = ["+966 53 042 9288", "+971 56 667 7065"];
    } else if(language === "fr") {
        phoneDescription = "+352 661 210 358";
    } else {
        phoneDescription = "+55 18 99806 3761";
    }
    // else {
    //     phoneDescription = "18 99806 3761";
    // }

    const emailDescription =
        language !== "br"
            ? "VANESSA.HOLMO@BRASOULBEAUTYCARE.COM / MARCO.PETCOV@BRASOULBEAUTYCARE.COM"
            : "MARCO.PETCOV@BRASOULBEAUTYCARE.COM.BR";

    const contactInfos: ContactInfo[] = [
        { icon: iTel, description: phoneDescription },
        { icon: iEmail, description: emailDescription },
        { icon: iInstagram, description: "@BRASOULBEAUTYCARE" },
    ];

    const [footerFormData, setFooterFormData] = useState({
        name: "",
        email: "",
    });
    const [whatsMessage, setWhatsMessage] = useState("");

    const [isValid, setIsValid] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFooterFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleClick: any = () => {
        if (!isValid) return;
        const url = `https://api.whatsapp.com/send?phone=${telephone}&text=${encodeURIComponent(
            whatsMessage
        )}`;
        window.open(url, "_blank");
    };

    useEffect(() => {
        if (footerFormData.name !== "" && footerFormData.email !== "") {
            setIsValid(true);
        } else {
            setIsValid(false);
        }

        setWhatsMessage(
            `Nome: ${footerFormData.name}
E-Mail: ${footerFormData.email}

${footer.footerForms}
`
        );
    }, [footerFormData]);
    return (
        <Flex h="100%" w="100%" flexDirection={"column"}>
            <Flex
                bg="#eceaea"
                w="100%"
                h="fit-content"
                paddingX={{base: "4rem", lg: "2rem"}}
                paddingY="1rem"
                gap="4rem"
                flexDirection={{base: "column", lg: "row"}}
            >
                <Flex flexDir={"column"}>
                    <Text
                        className="fadeText"
                        letterSpacing={4}
                        textTransform="uppercase"
                        fontSize="1.2rem"
                    >
                        {footer.news}
                    </Text>
                    <GradientText as="h3" title="BRASOUL"/>
                    <Text textTransform="uppercase" fontSize={"1.2rem"} color={"light"}>
                        {footer.receive}
                    </Text>
                </Flex>
                <Flex
                    align={`center`}
                    flexDirection={{base: "column", lg: "row"}}
                    gap={{base: "2rem", lg: 0}}
                >
                    <Input
                        placeholder={footer.name}
                        variant="unstyled"
                        border="2px solid"
                        name="name"
                        className="border"
                        w="100%"
                        p="1rem"
                        minWidth={"200px"}
                        bg="white"
                        onChange={handleInputChange}
                    />{" "}
                    <Input
                        placeholder={footer.email}
                        variant="unstyled"
                        border="2px solid"
                        name="email"
                        className="border"
                        w="100%"
                        minWidth={"200px"}
                        bg="white"
                        p="1rem"
                        ml={{base: "0px", lg: "1.5rem"}}
                        onChange={handleInputChange}
                    />
                    <Button
                        disabled={isValid ? false : true}
                        cursor={isValid ? "pointer" : "not-allowed"}
                        bg="#C1C7C9"
                        minW={"100px"}
                        py="2rem"
                        rounded={{base: "20px", lg: "50px"}}
                        px="6rem"
                        fontSize={"1.3rem"}
                        color="white"
                        ml={{base: "0px", lg: "4rem"}}
                        _hover={{bg: isValid ? "regular" : ""}}
                        onClick={handleClick}
                    >
                        {footer.register}
                    </Button>
                </Flex>
            </Flex>
            <Flex
                paddingY={"5rem"}
                paddingX={{base: "5rem", lg: 0}}
                justify={"space-evenly"}
                flexDirection={{base: "column", lg: "row"}}
                gap={{base: "3rem", lg: 0}}
            >
                <Flex flexDir={"column"} gap="1.5rem">
                    <GradientText as="h2" title="BRASOUL"/>
                    <List
                        display={"flex"}
                        flexDirection={"column"}
                        gap="1.5rem"
                        color="gray"
                    >
                        {footerNavigation.map((item, id) => (
                            <ListItem key={id} fontSize={"1.2rem"}>
                                <Link href={item.link} justify="start">
                                    <Text _hover={{color: "textHighlight", fontWeight: "bold"}}>
                                        {item.title}
                                    </Text>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Flex>
                <Flex flexDir={"column"} gap="1.5rem">
                    <GradientText as="h2" title={footer.contact}/>
                    <List
                        display={"flex"}
                        flexDirection={"column"}
                        gap="1.5rem"
                        color="gray"
                    >
                        {contactInfos.map((item, id) => {
                            const isArray = Array.isArray(item.description);
                            const phones: string[] = isArray
                                ? (item.description as string[])
                                : [item.description as string];

                            // se todos os items forem números, renderiza com bandeiras
                            const isPhoneList = phones.every((p) => p.startsWith("+"));

                            return(
                            <ListItem key={id} fontSize={"1.2rem"} position={"relative"}>
                                <Image
                                    style={{position: "absolute", left: `-25px`}}
                                    src={item.icon}
                                    width={15}
                                    alt={`Icone de ${item.description}`}
                                />
                                {isPhoneList ? (
                                    <Flex alignItems="center" wrap="wrap" gap="10px">
                                        {phones.map((phone, i) => {
                                            const flag = getFlagForNumber(phone);
                                            return (
                                                <Flex key={i} alignItems="center" gap="4px">
                                                    {flag && <ReactCountryFlag countryCode={flag} svg />}
                                                    <Text>{phone}</Text>
                                                </Flex>
                                            );
                                        })}
                                    </Flex>
                                ) : (
                                    <Box>
                                        <Text>{isArray ? phones.join(" / ") : phones[0]}</Text>
                                        {item.subDescription && <Text fontSize="sm">{item.subDescription}</Text>}
                                    </Box>
                                )}
                            </ListItem>
                            );
                        })}
                    </List>
                </Flex>
            </Flex>
        </Flex>
    );
}
