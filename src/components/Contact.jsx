import React, { useEffect } from "react";
import {
  Box,
  Button,
  Heading,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import c1 from "../assets/c1.png";
import asetbawah from "../assets/asetbawah.png";
import { CiUser } from "react-icons/ci";
import { TbMessageCircle2 } from "react-icons/tb";

const Contact = () => {
  const gradientStyle = {
    background: "linear-gradient(to right, #51ccf0, #c696e1)",
  };

  useEffect(() => {
    window.addEventListener("error", (e) => {
      if (e.message === "ResizeObserver loop limit exceeded") {
        const resizeObserverErrDiv = document.getElementById("webpack-dev-server-client-overlay-div");
        const resizeObserverErr = document.getElementById("webpack-dev-server-client-overlay");
        if (resizeObserverErr) {
          resizeObserverErr.setAttribute("style", "display: none");
        }
        if (resizeObserverErrDiv) {
          resizeObserverErrDiv.setAttribute("style", "display: none");
        }
      }
    });
  }, []);

  return (
    <Box display={"flex"} flexDirection={{ base: "column", md: "row" }} my={"100px"}>
      <Box
        w={{ base: "100%", md: "50%" }}
        display={"flex"}
        direction={"row"}
        alignItems={"flex-start"}
        justifyContent={"flex-end"}
        mr={"40px"}>
        <Image src={c1} />
      </Box>
      <VStack w={{ base: "100%", md: "40%" }} alignItems={"flex-start"} mt={{ base: "30px", md: "0" }}>
        <Heading textAlign={{ base: "center", md: "left" }}>Contact Us for More Details:</Heading>
        <Text mx={"auto"} my={"15px"}>
          "Start your Digital Transformation Today"
        </Text>
        <Box display={"flex"} flexDirection={"column"} gap={"10px"} w={{ base: "90%", md: "80%" }} mx={"auto"}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <CiUser color="gray.300" />
            </InputLeftElement>
            <Input placeholder="Name"></Input>
          </InputGroup>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <TbMessageCircle2 color="gray.300" />
            </InputLeftElement>
            <Input placeholder="Email"></Input>
          </InputGroup>
          <Input type={"text"} height={"100px"} borderRadius={"20px"} placeholder="Message..."></Input>
          <Button borderRadius={"20px"} style={gradientStyle} color={"white"}>
            Send Message
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default Contact;
