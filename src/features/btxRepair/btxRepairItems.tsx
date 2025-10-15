"use client";
import {useMediaQuery} from "@chakra-ui/react";
import BTXRepair from "/src/assets/images/products/btxrepair.png";
import {ContainerItems} from "@/components/ContainerItems";
import {useLanguage} from "@/common/provider/language/languageProvider";
import {copywriting} from "@/data/copywriting";

export const BTXRepairItems = () => {
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  const {language} = useLanguage()
  const { telephone, btxRepair } = copywriting[language as keyof typeof copywriting] || copywriting["en"];
  interface IitemInfo {
    Src: any;
    Title: string;
    Description: string;
    WpLink?: string;
    Heigth?: string;
    Bottom?: string;
    Width?: string;
  }
  const Products: IitemInfo[] = [
    {
      Title: "BTX REPAIR",
      Src: BTXRepair,
      Description: "MULTI COMPLEX BLEND",
      Heigth: isMobile ? "100px" : "160px",
      Width: isMobile ? "55px" : "70px",
      WpLink:
        `https://api.whatsapp.com/send?phone=${telephone}&text=${btxRepair.ctaBtxProduct}`,
    },
  ];
  return (
    <ContainerItems
      classButton="newButton newButton-btxdaily"
      className="btx-dailyTxt"
      Products={Products}
    />
  );
};
