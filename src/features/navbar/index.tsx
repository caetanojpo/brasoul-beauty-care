"use client";
import React, {useState} from "react";
import {
    Box,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    List,
    ListItem,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import fingerPrint from "@/assets/images/icons/fingerprint-map-digital.png";
import Image from "next/image";
import {Link} from "../../components/patterns/Link";
import {Icon} from "@iconify/react";
import NavLinks from "./components/navLinks/index";
import GradientText from "@/components/typography/GradientText/indext";
import {Container} from "@/components/Container";
import {useLanguage} from "@/common/provider/language/languageProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";

type TNavLinks = {
    title: string;
    link: string;
    divider: boolean;
};

export const Navbar = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const {language, setLanguage} = useLanguage();


    const navLinks: TNavLinks[] = [
        {title: language === "en" ? "Home" : language === "br" ? "Início" : "Inicio", link: "#inicio", divider: true},
        {title: language === "en" ? "About us" : "Sobre", link: "#about", divider: true},
        {
            title: language === "en" ? "Products" : language === "br" ? "Linhas" : "Productos",
            link: "#products",
            divider: true,
        },
        {
            title: language === "en" ? "Contact" : language === "br" ? "Contato" : "Conctato",
            link: "#contact",
            divider: false,
        },
    ];

    return (
        <Container position={"fixed"} zIndex="900">
            <Flex
                as="header"
                w="100%"
                h="10vh"
                align="center"
                justify="space-between"
                padding="2rem"
                bg="white"
            >
                <Flex h="100%" w="20%" justify="space-evenly" align="center" ml={{base: '0rem', lg: '0px'}}>
                    <Flex display={{base: 'flex', lg: 'flex'}} h="80%" align="center" justify="center"
                          position="relative">
                        <Image
                            width={40}
                            src={fingerPrint}
                            alt="Imagem do mapa do Brasil, na cor dourada. O mapa é marcado por uma digital de dedo"
                        />
                    </Flex>
                    <Flex display={{base: 'none', lg: 'flex'}}>
                        <GradientText as={"h1"} title="BRASOUL"/>

                    </Flex>
                </Flex>
                <Flex
                    display={{base: `none`, lg: `flex`}}
                    as={"nav"}
                    w={{lg: "55%", '2xl': '50%'}}
                    paddingTop={`2rem`}
                >
                    <List
                        display={{base: isOpen ? "flex" : "none", lg: "flex"}}
                        w={{base: isOpen ? "90%" : "", lg: "90%"}}
                        justifyContent={"space-around"}
                        alignItems={"flex-end"}
                    >
                        {navLinks.map((link, id) => (
                            <Link key={id} href={link.link}>
                                <ListItem
                                    w="100%"
                                    borderRight={link.divider ? "1px solid" : ""}
                                    borderColor={"lineLight"}
                                    lineHeight={"1"}
                                    transition={"ease-in-out 0.1s"}
                                    _hover={{color: "textHighlight", fontWeight: "bold"}}
                                >
                                    <Text textTransform={"uppercase"} fontSize={"1.4rem"}>
                                        {link.title}
                                    </Text>
                                </ListItem>
                            </Link>
                        ))}
                        <ListItem w={{lg:"10%", '2xl':"5%"}}>
                            <LanguageSwitcher />
                        </ListItem>
                    </List>
                </Flex>
                <Flex
                    display={{base: "flex", lg: "none"}}
                    w={{base: "20%", lg: "100%"}}
                    zIndex={50}
                    fontSize={"2em"}
                    justifyContent={"flex-end"}
                    _hover={{textColor: "textHighlight"}}
                >
                    <Icon
                        cursor={"pointer"}
                        icon={isOpen ? "tabler:x" : "ion:menu"}
                        onClick={onOpen}
                    />
                </Flex>
            </Flex>
            <Drawer placement={`left`} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerHeader borderBottomWidth="1px">
                        {" "}
                        <Flex display={{base: "flex"}} w="100%" justify={"center"}>
                            <GradientText as={"h1"} title="BRASOUL"/>
                        </Flex>
                    </DrawerHeader>
                    <DrawerBody>
                        <NavLinks isOpen={isOpen} links={navLinks}/>

                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Container>
    );
};
