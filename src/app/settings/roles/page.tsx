"use client";
import React from 'react';
import { Box, Checkbox, Flex, HStack, Link, Spinner, Text } from '@chakra-ui/react';
import { Toaster, toaster } from "@/components/ui/toaster"
import Layout from '@/components/Layout/Layout';
import NextLink from "next/link";
import { FaEdit, FaFingerprint, FaPlus, FaUserTag } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getRoles, deleteRole } from '@/lib/services/rolesApiCalls';
import { Role } from '@/lib/types/roles';
import { useRouter } from 'next/navigation';

const Roles = () => {
    const queryClient = useQueryClient();
    const router = useRouter();

    const { data: roles, isLoading } = useQuery<Role[]>({
        queryKey: ['roles'],
        queryFn: getRoles,
    });

    const { mutate: handleRoleDelete } = useMutation({
        mutationFn: deleteRole,
        onSuccess: () => {
            toaster.create({
                title: "Role is deleted successfully",
                duration: 3000,
                type: "success",
            });
            queryClient.invalidateQueries({ queryKey: ['roles'] });
        },
    });

    const handleEditRole = (id: string) => {
        router.push(`/settings/roles/edit/${id}`);
    };

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
                        <Link href='/settings/roles/create' bgColor={"var(--theme-color)"} textDecor={"none"} color={"#fff"} p="10px" borderRadius={"8px"} as={NextLink}><FaPlus color='#fff' /> Create Role</Link>
                    </Flex>
                </HStack>
            </Box>
            {isLoading ? (
                <Flex justifyContent={"center"} mt="20px"><Spinner size='lg' color="var(--theme-color)" /></Flex>
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
                                    <Text fontSize="14px" fontWeight={500} color="#000">{role?.name}</Text>
                                </Box>
                                <Flex gap="10px" alignItems="center">
                                    <FaEdit size={22} color="var(--theme-color)" cursor="pointer" onClick={() => handleEditRole(role._id)} />
                                    <MdDelete size={22} color="red" cursor="pointer" onClick={() => handleRoleDelete(role._id)} />
                                </Flex>
                            </Flex>
                        </HStack>
                    </Box>
                ))
            )}
            <Toaster />
        </Layout>
    )
}

export default Roles;