"use client";
import ShampooRadiant from "/src/assets/images/products/radiant-shampoo.png";
import SmoothRadiant from "/src/assets/images/products/radiant-smooth.png";
import BBCreamRadiant from "/src/assets/images/products/radiant-bbcream.png";
import {ContainerItems} from "@/components/ContainerItems";
import {copywriting} from "@/data/copywriting";
import {useLanguage} from "@/common/provider/language/languageProvider";

export const RadiantLineProducts = () => {
  
  interface IitemInfo {
    Src: any;
    Title: string;
    Description: string;
    WpLink?: string;
  }
  const {language} = useLanguage()
  const { telephone, radiantBanner } = copywriting[language as keyof typeof copywriting] || copywriting["en"];
  const Products: IitemInfo[] = [
    {
      Title: "SHAMPOO",
      Src: ShampooRadiant,
      Description: "DEEP CLEANSING",
      WpLink:`https://api.whatsapp.com/send?phone=${telephone}&text=${radiantBanner.ctaShampoo}`
    },
    {
      Title: "ABSOLUTE SMOOTH",
      Src: SmoothRadiant,
      Description: "ANTIFRIZZ",
      WpLink:`https://api.whatsapp.com/send?phone=${telephone}&text=${radiantBanner.ctaAbsoulte}`
    },
    {
      Title: "BB CREAM",
      Src: BBCreamRadiant,
      Description: "THERMAL CRYSTALLIZER",
      WpLink:`https://api.whatsapp.com/send?phone=${telephone}&text=${radiantBanner.ctaBB}`
    },
  ];
  return <ContainerItems Products={Products} />;
};
