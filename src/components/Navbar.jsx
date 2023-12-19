import React, { useState } from "react";
import {
  Box,
  Button,
  Text,
  Image,
  Link as ChakraLink,
  useBreakpointValue,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.png";
import { Link as RouterLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CiMenuBurger, CiMenuKebab } from "react-icons/ci";
import ModalsLogin from "./ModalsLogin";

const links = [
  { name: "About", link: "#about" },
  { name: "Pricing", link: "#pricing" },
  { name: "Contact", link: "#contact" },
];
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const fontSize = useBreakpointValue({ base: "25px", xl: "40px" });
  const [open, setOpen] = useState(false);

  return (
    <Box
      width={"100%"}
      height={"20vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      px={10}
      bg={{ base: "#51ccf0", md: "none" }}>
      <RouterLink to={"/"}>
        <Box display={"flex"} gap={5}>
          <Image src={logo} w={{ base: "50px", xl: "70px", md: "40px" }} color={"white"} />
          <Text fontSize={fontSize} fontWeight={"800"} color={"white"} display={{ base: "none", lg: "block" }}>
            HOME
          </Text>
        </Box>
      </RouterLink>
      <Box display={{ base: "none", md: "flex" }} gap={{ base: "10px", md: "30px" }}>
        <AnimatePresence>
          {links.map((link) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}>
              <ChakraLink fontSize={fontSize} fontWeight={"800"} href={link.link} style={{ textDecoration: "none" }}>
                {link.name}
              </ChakraLink>
            </motion.div>
          ))}
        </AnimatePresence>

        <Button
          fontSize={{ base: "12px", md: "16px" }}
          fontWeight={"bold"}
          variant={"ghost"}
          outlineColor={"#51ccf0"}
          color={"#51ccf0"}
          size={"xl"}
          px={100}
          onClick={onOpen}>
          LOGIN
        </Button>
      </Box>
      <Box display={{ base: "block", md: "none" }} onClick={() => setOpen(!open)}>
        {open && (
          <Box
            position={"absolute"}
            zIndex={10}
            background={"white"}
            top={0}
            left={0}
            w={"100vw"}
            h={"100vh"}
            opacity={0.9}>
            <AnimatePresence>
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={5}
                justifyContent={"center"}
                alignContent={"center"}
                textAlign={"center"}
                p={10}>
                <Heading my={"50px"}>MENU</Heading>
                {links.map((link) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}>
                    <ChakraLink
                      fontSize={"20px"}
                      fontWeight={"800"}
                      href={link.link}
                      style={{ textDecoration: "none" }}
                      onClick={() => setOpen(!open)}>
                      {link.name}
                    </ChakraLink>
                  </motion.div>
                ))}
                <Button fontSize={"16px"} fontWeight={"800"} variant={"ghost"} color={"black"} onClick={onOpen}>
                  LOGIN
                </Button>
              </Box>
            </AnimatePresence>
          </Box>
        )}
        {open ? <CiMenuKebab size={40} color={"Black"} zIndex={11} /> : <CiMenuBurger size={40} color={"Black"} />}
      </Box>
      <ModalsLogin isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Navbar;
