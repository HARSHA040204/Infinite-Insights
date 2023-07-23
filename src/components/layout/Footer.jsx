import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Link,
  HStack,
} from "@chakra-ui/react";
import {FaGithub} from "react-icons/fa";
import {LOGIN, REGISTER, ROOT} from "../../lib/routes";
import {Link as routerLink} from "react-router-dom";
import {useAuth} from "../../hooks/auths";


export default function Footer() {
  const {user, authLoading} = useAuth();
  const Links = [
    {id: 1, path: ROOT, name: "Home"},
    {id: 2, path: LOGIN, name: "Sign in"},
    {id: 3, path: REGISTER, name: "Create an account"},
  ];
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW='100%'
        py={4}
        direction={{base: "column", md: "row"}}
        spacing={4}
        justify={{base: "center", md: "space-between"}}
        align={{base: "center", md: "center"}}
      >
        <Box as='b' fontSize='2xl'>
              <Link
                as={routerLink}
                to={ROOT}
                _hover={{
                  textDecoration: "none",
                  
                }}
              >
                <Box>
                <img src="public/logofooter.png" alt="logo" style={{width:"75px", height:"75px"}} />
                </Box>
                
              </Link>
            </Box>
            
            <Text>© Copyright 2023, Infinite Insights.| All rights reserved</Text>
        <HStack spacing={8} alignItems={"center"}>
            <HStack as={"nav"} spacing={4} display={{base: "none", md: "flex"}}>
              {!user ? (
                Links.map(link => (
                  <Link
                    px={2}
                    py={1}
                    as={routerLink}
                    to={link.path}
                    rounded={"md"}
                    _hover={{
                      textDecoration: "none",
                      bg: useColorModeValue("gray.200", "gray.700"),
                    }}
                    key={link.id}
                  >
                    {link.name}
                  </Link>
                ))
              ) : (
                <Link
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  Glad you're here!😍
                </Link>
              )}
            </HStack>
          </HStack>
        
      </Container>
    </Box>
  );
}