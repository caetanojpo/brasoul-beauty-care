import { NavLinks } from '@/common/types/navLinks.types';
import { List, ListItem, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from '../../../../components/patterns/Link';
import { useLanguage } from '@/common/provider/language/languageProvider';

type Navprops = {
    isOpen: boolean;
    links: NavLinks[]
}

export default function NavLinks({ isOpen, links }: Navprops) {
    const {language, setLanguage} = useLanguage()
    return (
        <>
            <List
                display={{ base: isOpen ? "flex" : "none", lg: "flex" }}
                w={{ base: isOpen ? "100%" : "", lg: "90%" }}
                h='60%'
                justifyContent={"space-around"}
                alignItems={"center"}
                flexDirection={`column`}
            >
                {links.map((link, id) => (
                    <Link key={id} href={link.link} >
                        <ListItem
                            w="100%"
                            lineHeight={"1"}
                            transition={"ease-in-out 0.1s"}
                            _hover={{ color: "textHighlight", fontWeight: "bold" }}
                        >
                            <Text textTransform={"uppercase"}>{link.title}</Text>
                        </ListItem>
                    </Link>
                ))}
                    <ListItem >
              <div
                className="button r"
                id="button-3"
                onClick={() => setLanguage((prev) => !prev)}
              >
                <input type="checkbox" className="checkbox" />
                <div className="knobs"></div>
                <div className="layer"></div>
              </div>
            </ListItem>
            </List>
        </>
    )
}
