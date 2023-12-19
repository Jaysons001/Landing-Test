import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
  Divider,
  CardFooter,
  Button,
  useMediaQuery,
  CardHeader,
  UnorderedList,
  List,
  ListItem,
} from "@chakra-ui/react";
import React from "react";

const PricingDetails = ({ data, index }) => {
  const [isLargerThan800] = useMediaQuery("(min-width: 767px)");
  const [description, setDescription] = React.useState(data.description.split(", "));
  const gradientStyle = {
    background: "linear-gradient(to right, #0c68fc, #c696e1)",
  };

  console.log(description);

  if (isLargerThan800) {
    return (
      <Card maxW="sm">
        <Image src={data.image} alt={data.title} w={"100px"} alignSelf={"center"} mt={"-60px"} />
        <CardBody>
          <Heading size="lg" mb={3} textAlign={"center"}>
            {data.title}
          </Heading>
          <Heading size="md" mb={2}>
            Features:
          </Heading>

          <UnorderedList>
            {description.map((item) => (
              <ListItem key={item} mb={2}>
                {item}
              </ListItem>
            ))}
          </UnorderedList>
        </CardBody>
        <CardFooter>
          <Button variant="solid" style={gradientStyle} w={"100%"} color={"white"}>
            {data.price}
          </Button>
        </CardFooter>
      </Card>
    );
  }
  return (
    <Card display={"flex"} justifyContent={"space-between"} direction={"row"} variant="outline" w={"245px"} pr={2}>
      <Image
        ml={"-35px"}
        w={"75px"}
        h={"75px"}
        src={data.image}
        alt={data.title}
        alignItems={"center"}
        alignContent={"center"}
        my={"auto"}
      />

      <Stack w={"230px"} ml={5}>
        <CardBody p={-8}>
          <Heading size="md" textAlign={"center"} my={3}>
            {data.title}
          </Heading>

          <UnorderedList>
            {description.map((item) => (
              <ListItem key={item} mb={1} fontSize={"12px"}>
                {item}
              </ListItem>
            ))}
          </UnorderedList>
        </CardBody>

        <Button variant="solid" style={gradientStyle} w={"90%"} size={"xs"} fontSize={"10px"} color={"white"} mb={4}>
          {data.price}
        </Button>
      </Stack>
    </Card>
  );
};

export default PricingDetails;
