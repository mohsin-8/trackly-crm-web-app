"use client"

import React, { useState } from 'react';
import {
    Box,
    Grid,
    GridItem,
    HStack,
    Image,
    Text,
    Link as ChakraLink,
    Input,
    Button,
    Alert,
} from '@chakra-ui/react';
import ForgotPasswordPageImage from "@/assets/images/forgot-password.jpg";
import NextLink from "next/link";
import axios from '@/lib/axios';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");
        setError("");
        setLoading(true);

        try {
            const res = await axios.post('/api/auth/forgot-password', { email });
            setMessage(res.data.message);
        } catch (err: any) {
            setError(err.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <HStack justifyContent={"center"} flexDir="column" h={"100vh"}>
            <Box maxW={"1230px"} mx={"auto"}>
                <Grid templateColumns='repeat(2, 1fr)' gap={10} alignItems={"center"}>
                    <GridItem>
                        <Image src={ForgotPasswordPageImage.src} alt="Forgot Password" borderRadius={"0.5rem"} />
                    </GridItem>
                    <GridItem>
                        <Box>
                            <Text fontSize={"28px"} mb={"5px"} fontWeight={"700"} color={"#343a40"}>
                                Welcome to Trackly!
                            </Text>
                            <Text fontSize={"16px"} mb={"20px"} fontWeight={"500"} color={"#64748b"}>
                                Enter the email address you used when you joined and we’ll send you instructions to reset your password.
                            </Text>

                            <form onSubmit={handleSubmit}>
                                <Box mb={"20px"}>
                                    <Text mb={"5px"} fontSize={"14px"} color={"#343a40"}>
                                        Email Address
                                    </Text>
                                    <Input
                                        bgColor={"#fff"}
                                        border={"1px solid #d5d9e2"}
                                        color={"#000"}
                                        h={"60px"}
                                        p={"10px"}
                                        placeholder="example@trackly.com"
                                        name="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </Box>

                                {error && (
                                    <Alert.Root status="error" mb="4" borderRadius="md">
                                        {error}
                                    </Alert.Root>
                                )}

                                {message && (
                                    <Alert.Root status="success" mb="4" borderRadius="md">
                                        {message}
                                    </Alert.Root>
                                )}

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
                                    loading={loading}
                                    loadingText="Sending..."
                                >
                                    Request Reset Password
                                </Button>
                            </form>

                            <Text mt={"20px"}>
                                <ChakraLink
                                    as={NextLink}
                                    href="/login"
                                    textDecor={"none !important"}
                                    color={"#605dff"}
                                    fontSize={"16px"}
                                    fontWeight={"500"}
                                >
                                    Return to Log In?
                                </ChakraLink>
                            </Text>
                        </Box>
                    </GridItem>
                </Grid>
            </Box>
        </HStack>
    )
}

export default ForgotPassword;