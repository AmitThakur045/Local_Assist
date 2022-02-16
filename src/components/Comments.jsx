// localhoast:3000/dashboard
import { Link as ReachLink, useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Heading,
  Flex,
  Text,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useUserAuth } from "../context/UserAuthContext";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Loader from "../components/Loader";

const Comments = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();
  // Post Id
  const { id } = useParams();

  const [posts, setPosts] = useState([]);
  const usersCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const response = await getDocs(usersCollectionRef);
      setPosts(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  let title = null;
  let comments = null;
  posts.map((post) => {
    if (post.id === id) {
      title = post.description;
      comments = post.comments;
    }
  });

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
    return navigate("/login");
  };

  //   console.log(comments);

  return (
    <>
      <Heading>
        <title>Local Assist</title>
      </Heading>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box fontWeight="bold" fontSize="3xl" fontFamily="sans-serif">
            <button>
              <Link
                as={ReachLink}
                to="/dashboard"
                style={{ textDecoration: "none" }}
              >
                Local Assist
              </Link>
            </button>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    {user ? <p>{user.email}</p> : <p>Username</p>}
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>
                    <Button colorScheme="teal" size="xs" onClick={handleLogout}>
                      Log Out
                    </Button>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <Box>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {title}
          </Box>

        {comments?.map((item) => (
          <p>{item}</p>
        ))}
      </Box>
    </>
  );
};

export default Comments;