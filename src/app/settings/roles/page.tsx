"use client";
import React, { useState } from 'react';
import { Box, Checkbox, Flex, HStack, Link, Text } from '@chakra-ui/react';
import { toaster } from "@/components/ui/toaster";
import Layout from '@/components/Layout/Layout';
import NextLink from "next/link";
import { FaEdit, FaFingerprint, FaPlus, FaUserTag } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";
import { useQuery, useMutation, useQueryClient, QueryClient } from '@tanstack/react-query';
import { getRoles, deleteRole } from '@/lib/services/rolesApiCalls';
import { Role } from '@/lib/types/roles';

const Roles = () => {
    const queryClient = useQueryClient();

    const { data: roles, isLoading, error } = useQuery<Role[]>({
        queryKey: ['roles'],
        queryFn: getRoles,
    });

    const { mutate: handleRoleDelete, isPending } = useMutation({
        mutationFn: deleteRole,
        onSuccess: () => {
            toaster.success({
                title: "Role deleted",
                description: "The role has been successfully deleted.",
                duration: 3000,
                closable: true
            });
            queryClient.invalidateQueries({ queryKey: ['roles'] });
        },
    });

    return (
        <Layout>
            <Box boxShadow={"var(--box-shadowMain)"} bgColor={"#fff"} borderRadius={"10px"}>
                <HStack p={"15px"} justifyContent="space-between" alignItems={"center"}>
                    <Flex alignItems={"center"} gap={"10px"}>
                        <FaFingerprint color='var(--theme-color)' size={26} />
                        <Text fontSize={"24px"} color='var(--theme-color)' fontWeight={600}>User Roles</Text>
                    </Flex>
                    <Flex alignItems={"center"} gap={"20px"}>
                        <Checkbox.Root colorPalette={"purple"}>
                            <Checkbox.HiddenInput />
                            <Checkbox.Control />
                            <Checkbox.Label>Select All</Checkbox.Label>
                        </Checkbox.Root>
                        <Link href='#' bgColor={"var(--theme-color)"} textDecor={"none"} color={"#fff"} p="10px" borderRadius={"8px"} as={NextLink}><FaPlus color='#fff' /> Create Role</Link>
                    </Flex>
                </HStack>
            </Box>
            {isLoading ? (
                <Text mt="20px">Loading roles...</Text>
            ) : (
                roles?.map((role, index) => (
                    <Box
                        key={role?._id}
                        p="15px"
                        mt="15px"
                        boxShadow="var(--box-shadowMain)"
                        bgColor="#fff"
                        borderRadius="10px"
                    >
                        <HStack alignItems="center">
                            <Flex gap="50px" w="15%">
                                <Checkbox.Root colorPalette="purple">
                                    <Checkbox.HiddenInput />
                                    <Checkbox.Control />
                                </Checkbox.Root>
                                <Text fontSize="14px" fontWeight={400} color="#000">
                                    {index + 1}
                                </Text>
                            </Flex>
                            <Flex justifyContent="space-between" w="100%">
                                <Box display="flex" gap="10px" alignItems="center">
                                    <FaUserTag size={24} color="var(--theme-color)" />
                                    <Text fontSize="14px" fontWeight={500} color="#000">
                                        {" "}
                                        {role?.name}
                                    </Text>
                                </Box>
                                <Flex gap="10px" alignItems="center">
                                    <MdDelete
                                        size={22}
                                        color="red"
                                        cursor="pointer"
                                        onClick={() => handleRoleDelete(role._id)}
                                    />
                                    <FaEdit size={22} color="var(--theme-color)" cursor="pointer" />
                                </Flex>
                            </Flex>
                        </HStack>
                    </Box>
                ))
            )}
        </Layout>
    )
}

export default Roles;