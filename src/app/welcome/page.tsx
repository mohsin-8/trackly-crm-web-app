import React from 'react';
import { Link as ChakraLink, Box, Grid, GridItem, HStack, Image, Text } from '@chakra-ui/react';
import GoToLoginPageImage from "@/assets/images/login.jpg";
import { MdLogin } from "react-icons/md";
import NextLink from 'next/link';

const Welcome = () => {
    return (
        <>
            <HStack justifyContent={"center"} flexDir="column" h={"100vh"}>
                <Box maxW={"1230px"} mx={"auto"}>
                    <Grid templateColumns='repeat(2, 1fr)' gap={10} alignItems={"center"}>
                        <GridItem>
                            <Image src={GoToLoginPageImage.src} alt="GoToLoginPageImage" borderRadius={"0.5rem"} />
                        </GridItem>
                        <GridItem>
                            <Box>
                                <Text fontSize={"28px"} mb={"20px"} fontWeight={"700"} color={"#343a40"}>Welcome to Trackly!</Text>
                                <ChakraLink
                                    as={NextLink}
                                    href="/login"
                                    display="flex"
                                    alignItems={"center"}
                                    justifyContent={"center"}
                                    textDecor={"none !important"}
                                    gap={"10px"}
                                    bgColor={"#605dff"}
                                    color={"#ffffff"}
                                    borderRadius={"0.5rem"}
                                    py={"14px"}
                                    fontSize={"16px"}
                                    fontWeight={"600"}
                                ><MdLogin size={18} /> Go to Sign In</ChakraLink>
                            </Box>
                        </GridItem>
                    </Grid>
                </Box>
            </HStack>
        </>
    )
}

export default Welcome;