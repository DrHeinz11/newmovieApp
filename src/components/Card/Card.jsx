import { Stack, Box, Image, Text } from "@chakra-ui/react";
import "./Card.css";

const Card = ({ movie: { Poster, Title, Year } }) => {
  return (
    <Stack
      gap={"xs"}
      p="10px"
      borderRadius={"md"}
      border={"1px"}
      borderColor={"blue.700"}
      _hover={{ borderColor: "blue.500", boxShadow: "2xl" }}
      w={"2xs"}
      boxShadow={"lg"}
      marginTop={"10px"}fast
      alignItems={"center"}
      bg={"blackAlpha.300"}
    >
      <Box
        w={"12"}
        h={"6"}
        paddingInlineStart={"5px"}
        className="clip"
        alignSelf={"flex-start"}
      >
        <Text bg={"blue.400"} color={"gray.900"}>
          {Year}
        </Text>
      </Box>
      <Image
        src={Poster}
        boxSize={"3xs"}
        borderRadius={"sm"}
        objectFit={"cover"}
      />

      <Box alignSelf={"flex-start"} paddingInlineStart={"5px"}>
        <Text fontSize={"sm"}>Movie</Text>
        <Text
          fontSize={"xl"}
          borderBottom={"2px"}
          borderColor={"transparent"}
          width={"fit-content"}
          _hover={{ borderColor: "blue.500" }}
        >
          {Title}
        </Text>
      </Box>
    </Stack>
  );
};

export default Card;
