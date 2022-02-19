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
  
  export default function SingleComment(props) {
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
            {props.comment}
          </Text>
  
          
        </Box>
      </>
    );
  }
  