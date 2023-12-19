import React from "react";
import { Box, Image, Text, useMediaQuery, Link as ChakraLink } from "@chakra-ui/react";
import blob from "../assets/blob.png";
import Navbar from "./Navbar";
import tes1 from "../assets/tes1.svg";
import asetbawah from "../assets/asetbawah.png";

const LandingPage = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 767px)");

  if (isLargerThan800) {
    return (
      <Box>
        <Image
          src={blob}
          position={"absolute"}
          top={0}
          zIndex={-1}
          display={{ base: "none", md: "block" }}
          height={{ xl: "220px", lg: "150px", md: "120px" }}
        />
        <Box display={"grid"} justifyContent={"right"}>
          <Box width={"40%"} mx={"auto"} mt={"50px"}>
            <Text textAlign={"center"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum illo animi, harum inventore eveniet labore
              quaerat consectetur fuga nihil molestiae enim veritatis voluptates odio, a, provident assumenda culpa ex
              fugiat?
            </Text>
          </Box>
        </Box>
        <Box display={"flex"} mt={"100px"}>
          <Box w={"40%"} mx={"auto"}>
            <Text mb={"40px"}>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</Text>
            <Image src={tes1} w={"50%"} />
          </Box>
          <Box w={"45%"}>
            <Image src={asetbawah} w={"100%"} />
          </Box>
        </Box>
      </Box>
    );
  }

  //mobile
  return (
    <Box mt={"40px"} display={"flex"} flexDirection={"column"} alignItems={"center"} textAlign={"center"}>
      <Image src={tes1} w={"80%"} mb={"20px"} />
      <Box w={"80%"}>
        <Text mb={"40px"}>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</Text>

        <Text textAlign={"center"} mx={"auto"} mb={"40px"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum illo animi, harum inventore eveniet labore
          quaerat consectetur fuga nihil molestiae enim veritatis voluptates odio, a, provident assumenda culpa ex
          fugiat?
        </Text>
      </Box>
      <Image src={asetbawah} w={"100%"} />
    </Box>
  );
};

export default LandingPage;
