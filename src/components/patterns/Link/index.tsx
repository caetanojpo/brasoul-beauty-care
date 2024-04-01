"use client";
import React, { HTMLAttributeAnchorTarget, ReactNode } from "react";
import { Link as ChakraNextLink } from "@chakra-ui/next-js";

type LinkProps = {
  href: string;
  target?: HTMLAttributeAnchorTarget;
  children: ReactNode;
  class?: string;
  align?: string;
  justify?: string;
};

export const Link = ({
  href,
  target = "_self",
  children,
  align = "center",
  justify = "center",
}: LinkProps) => {
  return (
    <ChakraNextLink
      w={"100%"}
      h={"100%"}
      textAlign={"center"}
      display={`flex`}
      justifyContent={justify}
      alignItems={align}
      href={href}
      target={target}
    >
      {children}
    </ChakraNextLink>
  );
};
