import { As, Heading } from "@chakra-ui/react";
import React from "react";

type TGradientText = {
  title: string;
  size?: string;
  as?: As | undefined;
  letterSpacing?: number
};

export default function GradientText({
  title,
  size,
  as = "h2",
  letterSpacing = 4
}: TGradientText) {
  return (
    <Heading
      as={as}
      fontStyle={"bold"}
      className="fadeText"
      letterSpacing={letterSpacing}
      fontSize={size}
    >
      {title}
    </Heading>
  );
}
