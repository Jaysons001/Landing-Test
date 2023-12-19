import React from "react";
import aboutme from "../assets/about.png";
import { Box, Heading, Image, ListItem, Spacer, Text, UnorderedList } from "@chakra-ui/react";

const About = () => {
  return (
    <Box
      display={{ base: "block", md: "flex" }}
      justifyContent={{ base: "center", md: "space-evenly" }}
      alignItems={{ base: "center", md: "none" }}
      my={"100px"}>
      <Image src={aboutme} w={"384px"} mx={{ base: "auto", md: "0" }} />
      <Box
        w={{ base: "80%", md: "40%" }}
        display={"flex"}
        flexDirection={"column"}
        gap={"20px"}
        mx={{ base: "auto", md: "0" }}
        mt={{ base: "50px", md: "0" }}>
        <Heading>ABOUT "US"</Heading>
        <Text>
          We are an IT Company based in Jakarta, with 4 branch offices in Indonesia, Singapore, Hong Kong and United
          States.
        </Text>
        <Text>
          We have a strong determination, commitment and persistence to bring a top-notch IT solutions to help your
          business operations.
        </Text>
        <Text>Why not reach its optimum state and to bring the best out of your business.</Text>
        <UnorderedList mb={4}>
          <ListItem>Providing Financial Information as a basis of Decision Making process</ListItem>
          <ListItem>24/7 business and technical support</ListItem>
          <ListItem>Reasonable Pricing and Selected Payment Option</ListItem>
          <ListItem>Effective and Efficient Deliverables</ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default About;
