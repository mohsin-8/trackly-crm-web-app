'use client';
import React, { useState } from 'react';
import { Box, Grid, GridItem, HStack, Image, Link as ChakraLink, Text, Field, Input, Button } from '@chakra-ui/react';
import GoToLoginPageImage from "@/assets/images/login.jpg";
import { MdLogin } from "react-icons/md";
import NextLink from "next/link";
import axios from "@/lib/axios";
import { useRouter } from "next/navigation";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");

    const router = useRouter();

    const loginHandleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors("");

        try {
            const res = await axios.post("/api/auth/login", { email, password });
            router.push("/dashboard");
        } catch (error: any) {
            setErrors(error.response?.data?.error || "Login failed");
        }
    };

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
                                <Text fontSize={"28px"} mb={"5px"} fontWeight={"700"} color={"#343a40"}>Welcome to Trackly!</Text>
                                <Text fontSize={"16px"} mb={"20px"} fontWeight={"500"} color={"#64748b"}>Sign In credentials</Text>
                                {errors && <Text fontSize={"16px"} mb={"20px"} fontWeight={"500"} color={"red.600"}>{errors}</Text>}

                                <form onSubmit={loginHandleSubmit}>
                                    <Field.Root mb={"20px"}>
                                        <Field.Label color={"#343a40"} fontSize={"14px"}>Email Address</Field.Label>
                                        <Input
                                            bgColor={"#fff"}
                                            border={"1px solid #d5d9e2"}
                                            color={"#000"}
                                            h={"60px"}
                                            p={"10px"}
                                            placeholder="example@trackly.com"
                                            name="email"
                                            type="email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            value={email}
                                        />
                                    </Field.Root>
                                    <Field.Root mb={"20px"}>
                                        <Field.Label color={"#343a40"} fontSize={"14px"}>Password</Field.Label>
                                        <Input
                                            bgColor={"#fff"}
                                            border={"1px solid #d5d9e2"}
                                            color={"#000"}
                                            h={"60px"}
                                            p={"10px"}
                                            placeholder="Type Password"
                                            name="password"
                                            type="password"
                                            onChange={(e) => setPassword(e.target.value)}
                                            value={password}
                                        />
                                    </Field.Root>
                                    <Box mb={"20px"}>
                                        <ChakraLink
                                            as={NextLink}
                                            href="/forgot-password"
                                            textDecor={"none !important"}
                                            color={"#605dff"}
                                            fontSize={"16px"}
                                            fontWeight={"500"}
                                        >
                                            Forgot Password?
                                        </ChakraLink>
                                    </Box>
                                    <Button
                                        type="submit"
                                        gap={"10px"}
                                        bgColor={"#605dff"}
                                        color={"#ffffff"}
                                        borderRadius={"0.5rem"}
                                        h={"50px"}
                                        fontSize={"16px"}
                                        fontWeight={"600"}
                                        w={"100%"}
                                        _hover={{ bgColor: "#524fd9" }}
                                    >
                                        <MdLogin size={18} /> Log In
                                    </Button>
                                </form>
                            </Box>
                        </GridItem>
                    </Grid>
                </Box>
            </HStack>
        </>
    );
};

export default Login;