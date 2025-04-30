"use client";

import React, { useState } from 'react';
import { Box, Grid, GridItem, HStack, Image, Text, Input, Button, Alert, Field } from '@chakra-ui/react';
import ForgotPasswordPageImage from "../../assets/images/forgot-password.jpg";
import { useSearchParams } from "next/navigation";
import axios from '@/lib/axios';

const ResetPassword = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (!token) {
            setError("Invalid or missing token.");
            return;
        }

        try {
            setLoading(true);
            const res = await axios.post("/api/auth/reset-password", {
                token,
                password,
            });

            setSuccess(res.data.message || "Password reset successful.");
        } catch (err: any) {
            setError(err.response?.data?.message || "Failed to reset password.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <HStack justifyContent="center" flexDir="column" h="100vh">
            <Box maxW="1230px" mx="auto">
                <Grid templateColumns="repeat(2, 1fr)" gap={10} alignItems="center">
                    <GridItem>
                        <Image src={ForgotPasswordPageImage.src} alt="Forgot Password" borderRadius="0.5rem" />
                    </GridItem>
                    <GridItem>
                        <Box>
                            <Text fontSize="28px" mb="5px" fontWeight="700" color="#343a40">
                                Welcome to Trackly!
                            </Text>
                            <Text fontSize="16px" mb="20px" fontWeight="500" color="#64748b">
                                Please reset your password.
                            </Text>

                            <form onSubmit={handleSubmit}>
                                <Field.Root mb="20px">
                                    <Field.Label color="#343a40" fontSize="14px">New Password</Field.Label>
                                    <Input
                                        bgColor="#fff"
                                        border="1px solid #d5d9e2"
                                        color="#000"
                                        h="60px"
                                        p="10px"
                                        placeholder="Type New Password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </Field.Root>

                                <Field.Root mb="20px">
                                    <Field.Label color="#343a40" fontSize="14px">Confirm New Password</Field.Label>
                                    <Input
                                        bgColor="#fff"
                                        border="1px solid #d5d9e2"
                                        color="#000"
                                        h="60px"
                                        p="10px"
                                        placeholder="Type Confirm New Password"
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                </Field.Root>

                                {error && (
                                    <Alert.Root status="error" mb={4}>
                                        {error}
                                    </Alert.Root>
                                )}

                                {success && (
                                    <Alert.Root status="success" mb={4}>
                                        {success}
                                    </Alert.Root>
                                )}

                                <Button
                                    type="submit"
                                    gap="10px"
                                    bgColor="#605dff"
                                    color="#ffffff"
                                    borderRadius="0.5rem"
                                    h="50px"
                                    fontSize="16px"
                                    fontWeight="600"
                                    w="100%"
                                    _hover={{ bgColor: "#524fd9" }}
                                    loading={loading}
                                    loadingText="Resetting..."
                                >
                                    Reset Password
                                </Button>
                            </form>
                        </Box>
                    </GridItem>
                </Grid>
            </Box>
        </HStack>
    );
};

export default ResetPassword;