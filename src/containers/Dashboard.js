// localhoast:3000/dashboard
import {Link as ReachLink, Navigate} from "react-router-dom";
import {
  Box,
  Heading,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Footer from "../components/Footer";
import { useUserAuth } from "../context/UserAuthContext";

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { user, logOut } = useUserAuth();

  const handleLogout = async () => {
    try {
      await logOut();
      return <Navigate to="/login" />;
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <Heading>
        <title>Local Assist</title>
      </Heading>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box fontWeight="bold" fontSize="3xl" fontFamily="sans-serif">
            <button>
              <Link as={ReachLink} to="/dashboard" style={{ textDecoration: "none" }}>
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
                    <p>{user.email}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>
                    <Link onClick={handleLogout}>Logout</Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <Footer></Footer>
    </>
  );
}
