"use client";
import { useMediaQuery } from "@chakra-ui/react";
import BTXRepair from "/src/assets/images/products/btxrepair.png";
import { ContainerItems } from "@/components/ContainerItems";

export const BTXRepairItems = () => {
  const [isMobile] = useMediaQuery("(max-width: 800px)");
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
        "https://api.whatsapp.com/send?phone=5518998063761&text=Olá! Estou interessado no produto BTX REPAIR, da linha BTX REPAIR.",
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
