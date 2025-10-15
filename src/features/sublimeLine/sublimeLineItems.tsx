"use client";
import SublimeMiraclemist from "/src/assets/images/products/sublime-miraclemist.png";
import SublimeAminoplastia from "/src/assets/images/products/sublime-aminoplastia.png";
import SublimeBtxOrganic from "/src/assets/images/products/sublime-btxorganic.png";
import {ContainerItems} from "@/components/ContainerItems";
import {useMediaQuery} from "@chakra-ui/react";
import {useLanguage} from "@/common/provider/language/languageProvider";
import {copywriting} from "@/data/copywriting";

export const SublimeLineProducts = () => {
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  const {language} = useLanguage()
  const { telephone, sublimeBanner } = copywriting[language as keyof typeof copywriting] || copywriting["en"];
  interface IitemInfo {
    Src: any;
    Title: string;
    Description: string;
    Heigth?: string;
    Width?: string;
    WpLink?: string;
  }
  const Products: IitemInfo[] = [
    {
      Title: "MIRACLE MIST",
      Src: SublimeMiraclemist,
      Description: "AMINOTECH SEALING",
      Heigth: isMobile ? "130px" : "220px",
      WpLink:
        `https://api.whatsapp.com/send?phone=${telephone}&text=${sublimeBanner.ctaMiracle}`,
    },
    {
      Title: "AMINOPLASTIA",
      Src: SublimeAminoplastia,
      Description: "Bio Complex Alignment ",
      WpLink:
        `https://api.whatsapp.com/send?phone=${telephone}&text=${sublimeBanner.ctaAminoplastia}`,
    },
    {
      Title: "Btx Organic",
      Src: SublimeBtxOrganic,
      Description: "Intense Bond Repair",
      Heigth: isMobile ? "100px" : "160px",
      Width: isMobile ? "55px" : "70px",
      WpLink:
          `https://api.whatsapp.com/send?phone=${telephone}&text=${sublimeBanner.ctaBtxOrganic}`,
    },
  ];
  return (
    <ContainerItems
      classButton="newButton newButton-sublime"
      className="sublimeTxt"
      Products={Products}
    />
  );
};
