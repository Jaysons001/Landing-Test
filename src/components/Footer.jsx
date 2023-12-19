import { Box } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  const gradientStyle = {
    background: "linear-gradient(to right, #51ccf0, #c696e1)",
  };

  return (
    <Box w="100%" py={4} color="black" textAlign="center" bottom="0">
      2023 AlfaTech Omega Test. All rights reserved.
    </Box>
  );
};

export default Footer;
