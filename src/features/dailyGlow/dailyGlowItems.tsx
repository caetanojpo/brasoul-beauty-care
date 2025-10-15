"use client";
import ShampooDailyGlow from "/src/assets/images/products/ANTIFRIZZ-SHAMPOO.png";
import ConditionizerDailyGlow from "/src/assets/images/products/ANTIFRIZZ-CONDITIONIZER.png";
import ThermalDailyGlow from "/src/assets/images/products/THERMAL-PROTECTOR.png";
import MaskDailyGlow from "/src/assets/images/products/FIBER-MASK.png";
import {ContainerItems} from "@/components/ContainerItems";
import {useMediaQuery} from "@chakra-ui/react";
import {useLanguage} from "@/common/provider/language/languageProvider";
import {copywriting} from "@/data/copywriting";

export const DailyGlowItems = () => {
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  const {language} = useLanguage()
  const { telephone, dailyGlow } = copywriting[language as keyof typeof copywriting] || copywriting["en"];
  interface IitemInfo {
    Src: any;
    Title: string;
    Description: string;
    WpLink?: string;
    Heigth?: string;
    Bottom?: string;
    Width?: string;
    HorizontalPorduct?: boolean;
  }
  const Products: IitemInfo[] = [
    {
      Title: "ANTI FRIZZ SHAMPOO",
      Src: ShampooDailyGlow,
      Description: "SHINE AND SMOOTH HAIR",
      WpLink: `https://api.whatsapp.com/send?phone=${telephone}&text=${dailyGlow.ctaAntiShampoo}`
    },
    {
      Title: "FIBER MASK",
      Src: MaskDailyGlow,
      Description: "REPAIR AND NUTRITION",
      Heigth: isMobile ? "68px" : "120px",
      Width: isMobile ? "72px" : "250px",
      HorizontalPorduct: true,
      WpLink: `https://api.whatsapp.com/send?phone=${telephone}&text=${dailyGlow.ctaFiber}`
    },
    {
      Title: "ANTI FRIZZ CONDITIONER",
      Src: ConditionizerDailyGlow,
      Description: "SHINE AND SMOOTH HAIR",
      WpLink: `https://api.whatsapp.com/send?phone=${telephone}&text=${dailyGlow.ctaAntiConditioner}`
    },
    {
      Title: "THERMAL PROTECTOR",
      Src: ThermalDailyGlow,
      Description: "LEAVE IN",
      WpLink: `https://api.whatsapp.com/send?phone=${telephone}&text=${dailyGlow.ctaThermal}`
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
