import ShampooRadiant from "/src/assets/images/products/radiant-shampoo.png";
import SmoothRadiant from "/src/assets/images/products/radiant-smooth.png";
import BBCreamRadiant from "/src/assets/images/products/radiant-bbcream.png";
import { ContainerItems } from "@/components/ContainerItems";

export const RadiantLineProducts = () => {
  
  interface IitemInfo {
    Src: any;
    Title: string;
    Description: string;
    WpLink?: string;
  }
  const Products: IitemInfo[] = [
    {
      Title: "SHAMPOO",
      Src: ShampooRadiant,
      Description: "DEEP CLEANSING",
      WpLink:'https://api.whatsapp.com/send?phone=5518998063761&text=Olá! Estou interessado no produto SHAMPOO, da linha Radiant.'
    },
    {
      Title: "ABSOLUTE SMOOTH",
      Src: SmoothRadiant,
      Description: "ANTIFRIZZ",
      WpLink:'https://api.whatsapp.com/send?phone=5518998063761&text=Olá! Estou interessado no produto ABSOLUTE SMOOTH, da linha Radiant.'
    },
    {
      Title: "BB CREAM",
      Src: BBCreamRadiant,
      Description: "THERMAL CRYSTALLIZER",
      WpLink:'https://api.whatsapp.com/send?phone=5518998063761&text=Olá! Estou interessado no produto BB CREAM, da linha Radiant.'
    },
    
  ];
  return <ContainerItems Products={Products} />;
};
