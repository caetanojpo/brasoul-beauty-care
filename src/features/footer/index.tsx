"use client";
import {Button, Flex, Input, List, ListItem, Text} from "@chakra-ui/react";
import React, {useState, useEffect} from "react";
import {Link} from "../../components/patterns/Link";
import iTel from "@/assets/images/icons/tel.png";
import iInstagram from "@/assets/images/icons/instagram.png";
import iEmail from "@/assets/images/icons/email.png";
import Image from "next/image";
import GradientText from "@/components/typography/GradientText/indext";
import {useLanguage} from "@/common/provider/language/languageProvider";

export default function Footer() {
    const {language} = useLanguage();
    const footerNavigation = [
        {
            title: language === "en" ? "ABOUT BRASOUL" : language === "br" ? `SOBRE A BRASOUL` : "SOBRE BRASOUL",
            link: `#about`
        },
        {title: language === "en" ? "CONTACT" : language === "br" ? `CONTATO` : "CONTACTO", link: `#contact`},
        {title: language === "en" ? "HOW TO BUY" : language === "en" ? `COMO COMPRAR` : "CÓMO COMPRAR", link: `#buy`},
        {title: `INSTAGRAM`, link: `https://www.instagram.com/brasoulbeautycare/`},
    ];

    const contactInfos: {
        icon: any;
        description: string;
        subDescription?: string;
    }[] = [
        {
            icon: iTel,
            description: language ? "TEL: +55 18 99806 3761" : "TEL: 18 99806 3761",
        },
        {
            icon: iEmail,
            description: language
                ? "VANESSA.HOLMO@BRASOULBEAUTYCARE.COM / MARCO.PETCOV@BRASOULBEATYCARE.COM.BR"
                : "MARCO.PETCOV@BRASOULBEAUTYCARE.COM.BR",
        },
        {icon: iInstagram, description: "@BRASOULBEAUTYCARE"},
        // {
        //   icon: iTel,
        //   description: "RUA ANTONIO CARLOS OLIVEIRA, 115",
        //   subDescription: "CEP 19806-000 - ASSIS SP",
        // },
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
        const url = `https://api.whatsapp.com/send?phone=5518998063761&text=${encodeURIComponent(
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

Desejo acompanhar as novidades da Brasoul pelo meu e-mail ou telefone!
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
                        {language === "en" ? "News" : language === "br" ? "Novidades" : "Noticias"}
                    </Text>
                    <GradientText as="h3" title="BRASOUL"/>
                    <Text textTransform="uppercase" fontSize={"1.2rem"} color={"light"}>
                        {language === "en"
                            ? "RECEIVE FIRSTHAND NEWS ABOUT OUR LAUNCHES"
                            : language === "br" ? " Receba em primeira mão novidades dos nossos lançamentos" : "Reciba de primera mano las novedades de nuestros lanzamientos."}
                    </Text>
                </Flex>
                <Flex
                    align={`center`}
                    flexDirection={{base: "column", lg: "row"}}
                    gap={{base: "2rem", lg: 0}}
                >
                    <Input
                        placeholder={language === "en" ? "TYPE YOUR NAME" : language === "br" ? "DIGITE SEU NOME" : "ESCRIBA SU NOMBRE"}
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
                        placeholder={language ==="en" ? "YOUR EMAIL" : language === "br" ? "SEU EMAIL" : "SU CORREO ELECTRÓNICO"}
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
                        {language === "en" ? "REGISTER" : language === "br" ? "CADASTRAR" : "REGISTRARSE"}
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
                    <GradientText as="h2" title={language === "en" ? "CONTACT" : language === "br" ? "CONTATO" : "CONTACTO"}/>
                    <List
                        display={"flex"}
                        flexDirection={"column"}
                        gap="1.5rem"
                        color="gray"
                    >
                        {contactInfos.map((item, id) => (
                            <ListItem key={id} fontSize={"1.2rem"} position={"relative"}>
                                <Image
                                    style={{position: "absolute", left: `-25px`}}
                                    src={item.icon}
                                    width={15}
                                    alt={`Icone de ${item.description}`}
                                />
                                <Text>{item.description}</Text>
                                {item.subDescription && <Text>{item.subDescription}</Text>}
                            </ListItem>
                        ))}
                    </List>
                </Flex>
            </Flex>
        </Flex>
    );
}
