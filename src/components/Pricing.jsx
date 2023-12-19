import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import PricingDetails from "./PricingDetails";
const images = {
  i1: require("../assets/i1.png"),
  i2: require("../assets/i2.png"),
  i3: require("../assets/i3.png"),
};

const tier = [
  {
    title: "Tier 1",
    price: "20$",
    description: "Mencatat barang masuk, Mencatat barang keluar, Mencatat hasil keuntungan",
    image: images.i1,
  },
  {
    title: "Tier 2",
    price: "40$",
    description: "Mencatat barang masuk, Mencatat barang keluar, Mencatat keuntungan, Support 7x24 Jam",
    image: images.i2,
  },
  {
    title: "Tier 3",
    price: "60$",
    description:
      "Mencatat barang masuk, Mencatat barang keluar, Mencatat keuntungan, Support 7x24 Jam, Export data ke Excel,  AI Prediksi penghasilan",
    image: images.i3,
  },
];

const Pricing = () => {
  return (
    <Box>
      <Box my={"50px"} display={"grid"} justifyContent={"center"}>
        <Heading textAlign={"center"}>Pricing</Heading>
        <Box display={{ base: "grid", md: "flex" }} gap={"20px"} mt={{ base: "20px", md: "100px" }}>
          {tier && tier.map((data, index) => <PricingDetails key={index} data={data} />)}
        </Box>
      </Box>
    </Box>
  );
};

export default Pricing;
