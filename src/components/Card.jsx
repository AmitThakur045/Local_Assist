import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  Flex,
  Grid,
} from "@chakra-ui/react";
import { Link as ReachLink, Route, useNavigate } from "react-router-dom";
import Comments from "./Comments";

export default function Card({ description, id, comments }) {
  const navigate = useNavigate();

  return (
    <>
      <Box
        maxW="20rem"
        w={"93%"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        margin={"12px"}
        p={8}
        textAlign={"center"}
      >
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          {description}
        </Text>

        <Stack mt={8} direction={"row"} spacing={4}>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            _focus={{
              bg: "gray.200",
            }}
            onClick={() => {  
              navigate(`/comments/${id}`);
            }}
          >
            Comment
          </Button>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"blue.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
          >
            Follow
          </Button>
        </Stack>
      </Box>
    </>
  );
}
