import { Button, useMediaQuery } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";

const Homebutton = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 767px)");

  if (!isLargerThan800) {
    return (
      <Button
        position={"fixed"}
        zIndex={99999}
        bottom={7}
        right={7}
        p={2}
        borderRadius={"full"}
        bg={"#be94e2"}
        color={"white"}
        onClick={() => window.scrollTo(0, 0)}>
        <AiOutlineHome />
      </Button>
    );
  }
  return null;
};

export default Homebutton;
