"use client";
import { useLanguage } from "@/common/provider/language/languageProvider";
import GradientText from "@/components/typography/GradientText/indext";
import { Button, Divider, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Contact() {
  const { language } = useLanguage();
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
        <GradientText title={language ? "CONTACT" : "CONTATO"} size="3rem" />
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
          <Text>{ language ? 'DID YOU IDENTIFY YOURSELF WITH OUR BRAND?' : 'SE IDENTIFICOU COM NOSSA MARCA?'}</Text>
          <Text>{language ? 'DO YOU WANT TO BE PART OF THIS PURPOSE?' : 'QUER FAZER PARTE DESSE PROPÓSITO'}?</Text>
        </Flex>
        <Text>{language ? "LET’S GET TO KNOW EACH OTHER!" : 'VAMOS NOS CONHECER'}</Text>
      </Flex>
      <Flex flexDirection="column">
        <Flex marginY="2rem">
          <GradientText title={language ? "CONTACT US" : "FALE CONOSCO"} />
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
                  placeholder={language ? "NAME" :"NOME"}
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
                  placeholder={language ? "PHONE" : "FONE"}
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
                placeholder="EMAIL"
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
                placeholder={language ? "MESSAGE" : "MENSAGEM"}
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
                >{language ? 'SEND' :'ENVIAR'}
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
             { language ? `LEAVE HERE YOUR CONTACT AND MESSAGE, AND ONE OF OUR
              REPRESENTATIVES WILL CONTACT YOU TO SCHEDULE A MEETING OR VISIT`  : `DEIXE AQUI SEU CONTATO E SUA MENSAGEM, E UM DE NOSSOS
              REPRESENTANTES ENTRARÁ EM CONTATO PARA AGENDAR RENIÃO OU VISITA.`}
            </Text>
            <Text>
             {language ? `FOR US IT IS ALWAYS A PLEASURE TO MAKE NEW FRIENDS AND SPREAD THE BIODIVERSITY OF OUR COUNTRY, PROVIDING SUSTAINABILITY, RESULTS AND SELF-ESTEEM.` : `PARA NÓS É SEMPRE UM PRAZER FAZER NOVAS AMIZADES E ESPALHAR A
              BIODIVERSIDADE DO NOSSO PAÍS LEVANDO SUSTENTABILIDADE, RESULTADO E
              AUTO ESTIMA.`}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
