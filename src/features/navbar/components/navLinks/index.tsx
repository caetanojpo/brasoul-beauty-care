import {NavLinks} from '@/common/types/navLinks.types';
import {List, ListItem, Text} from '@chakra-ui/react'
import React from 'react'
import {Link} from '@/components/patterns/Link';
import LanguageSwitcher from "@/components/LanguageSwitcher";

type Navprops = {
    isOpen: boolean;
    links: NavLinks[]
}

export default function NavLinks({isOpen, links}: Navprops) {
    return (
        <>
            <List
                display={{base: isOpen ? "flex" : "none", lg: "flex"}}
                w={{base: isOpen ? "100%" : "", lg: "90%"}}
                h='60%'
                justifyContent={"space-around"}
                alignItems={"center"}
                flexDirection={`column`}
            >
                {links.map((link, id) => (
                    <Link key={id} href={link.link}>
                        <ListItem
                            w="100%"
                            lineHeight={"1"}
                            transition={"ease-in-out 0.1s"}
                            _hover={{color: "textHighlight", fontWeight: "bold"}}
                        >
                            <Text textTransform={"uppercase"}>{link.title}</Text>
                        </ListItem>
                    </Link>
                ))}
                <ListItem >
                    <LanguageSwitcher/>
                </ListItem>
            </List>
        </>
    )
}
