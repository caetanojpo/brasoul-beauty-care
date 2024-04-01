"use client";
import { LanguageProvider } from "@/common/provider/language/languageProvider";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  regular: "#464748",
  light: "#A9ABAE",
  lineLight: "#D2D3D5",
  radiant: "#71625B",
  sublime: "#F7ABAB",
  textHighlight: "#B38E46",
};

export const theme = extendTheme({ colors });

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <><LanguageProvider>
      <CacheProvider>
        <ChakraProvider theme={theme} resetCSS={true}>
          {children}
        </ChakraProvider>
      </CacheProvider>
      </LanguageProvider>
    </>
  );
}
