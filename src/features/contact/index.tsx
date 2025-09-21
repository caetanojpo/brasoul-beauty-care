"use client";
import { useLanguage } from "@/common/provider/language/languageProvider";
import GradientText from "@/components/typography/GradientText/indext";
import { Button, Divider, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {copywriting} from "@/data/copywriting";

export default function Contact() {
  const { language } = useLanguage();
  const { contact } = copywriting[language as keyof typeof copywriting] || copywriting["en"];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    textarea: "",
  });
  const [whatsMessage, setWhatsMessage] = useState("");

  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClick: any = () => {
    if (!isValid) return;
    const url = `https://api.whatsapp.com/send?phone=5518998063761&text=${encodeURIComponent(
      whatsMessage
    )}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    if (
      formData.name !== "" &&
      formData.email !== "" &&
      formData.phone !== ""
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }

    setWhatsMessage(
      `Nome: ${formData.name}
E-Mail: ${formData.email}
Telefone: ${formData.phone}

${formData.textarea}
`
    );
  }, [formData]);

  return (
    <Flex
    id='contact'
      paddingX={{ base: "2rem", lg: "10rem" }}
      paddingY="4rem"
      flexDirection={"column"}
    >
      <Divider borderColor="light" />
      <Flex
        pb="5rem"
        mt="3rem"
        w="100%"
        align={{ base: "center", lg: "start" }}
        justify={{ base: "center", lg: "start" }}
      >
        <GradientText title={contact.contact} size="3rem" />
      </Flex>
      <Flex
        flexDir={"column"}
        gap="2rem"
        color="gray"
        w="100%"
        align={{ base: "center", lg: "start" }}
        justify={{ base: "center", lg: "start" }}
      >
        <Flex
          flexDirection="column"
          w="100%"
          align={{ base: "center", lg: "start" }}
          justify={{ base: "center", lg: "start" }}
        >
          <Text>{contact.identify}</Text>
          <Text>{contact.purpose}</Text>
        </Flex>
        <Text>{contact.know}</Text>
      </Flex>
      <Flex flexDirection="column">
        <Flex marginY="2rem">
          <GradientText title={contact.us} />
        </Flex>
        <Flex gap="4rem" flexDirection={{ base: "column", lg: "row" }}>
          <Flex
            w="100%"
            align={{ base: "center", lg: "start" }}
            justify={{ base: "center", lg: "start" }}
          >
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                width: "100%",
              }}
            >
              <Flex gap="1.5rem" flexDirection={{ base: "column", lg: "row" }}>
                <Input
                  type="text"
                  variant="unstyled"
                  border="2px solid"
                  name="name"
                  className="border"
                  placeholder={contact.name}
                  w="100%"
                  minWidth={"200px"}
                  bg="white"
                  p="1rem"
                  onChange={handleInputChange}
                />
                <Input
                  type="text"
                  variant="unstyled"
                  border="2px solid"
                  name="phone"
                  className="border"
                  placeholder={contact.phone}
                  w="100%"
                  minWidth={"200px"}
                  bg="white"
                  p="1rem"
                  onChange={handleInputChange}
                />
              </Flex>
              <Input
                type="email"
                variant="unstyled"
                border="2px solid"
                name="email"
                className="border"
                placeholder={contact.email}
                w="100%"
                minWidth={"200px"}
                bg="white"
                p="1rem"
                onChange={handleInputChange}
              />
              <Textarea
                variant="unstyled"
                border="2px solid"
                className="border"
                placeholder={contact.message}
                w="100%"
                minH="150px"
                bg="white"
                p="1.5rem"
                onChange={handleTextareaChange}
              />
              <Flex>
                <Button
                  disabled={isValid ? false : true}
                  bg="#C1C7C9"
                  minW={"100px"}
                  py="2rem"
                  rounded={{ base: "20px", lg: "50px" }}
                  px="6rem"
                  fontSize={"1.3rem"}
                  color="white"
                  cursor={isValid ? "pointer" : "not-allowed"}
                  _hover={{ bg: isValid ? "regular" : "" }}
                  onClick={handleClick}
                >{contact.send}
                </Button>{" "}
              </Flex>
            </form>
          </Flex>
          <Flex
            flexDirection="column"
            gap="2rem"
            color="gray"
            fontSize="1.2rem"
          >
            <Text>
             {contact.leaveHere}
            </Text>
            <Text>
             {contact.forUs}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
