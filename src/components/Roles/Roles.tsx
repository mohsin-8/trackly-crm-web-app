"use client";
import React, { useEffect, useState } from 'react';
import { Box, Checkbox, Flex, HStack, Link, Text } from '@chakra-ui/react';
import Layout from '@/components/Layout/Layout';
import NextLink from "next/link";
import { FaEdit, FaFingerprint, FaPlus, FaUserTag } from 'react-icons/fa';
import { Role } from '@/lib/types/roles';

const Roles = ({ roles }: { roles: Role[] }) => {
    const [data, setData] = useState<Role[]>([]);

    useEffect(() => {
        setData(roles);
    }, [roles]);

    console.log(data, "roles data");
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
            {data?.map((role, index) => {
                return (
                    <Box key={role?._id} p={"15px"} mt="15px" boxShadow={"var(--box-shadowMain)"} bgColor={"#fff"} borderRadius={"10px"}>
                        <HStack alignItems={"center"}>
                            <Flex gap={"50px"} w={"15%"}>
                                <Checkbox.Root colorPalette={"purple"}>
                                    <Checkbox.HiddenInput />
                                    <Checkbox.Control />
                                </Checkbox.Root>
                                <Text fontSize={"14px"} fontWeight={400} color={"#000"}>{index + 1}</Text>
                            </Flex>
                            <Flex justifyContent={"space-between"} w={"100%"}>
                                <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                                    <FaUserTag size={24} color='var(--theme-color)' />
                                    <Text fontSize={"14px"} fontWeight={500} color={"#000"}> {role?.name}</Text>
                                </Box>
                                <FaEdit size={22} color='var(--theme-color)' cursor={"pointer"} />
                            </Flex>
                        </HStack>
                    </Box>
                )
            })}
        </Layout>
    )
}

export default Roles;