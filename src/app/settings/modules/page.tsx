"use client";
import React from 'react';
import NextLink from "next/link";
import Layout from '@/components/Layout/Layout';
import { Box, Checkbox, Flex, HStack, Link, Spinner, Text } from '@chakra-ui/react';
import { FaEdit, FaFingerprint, FaPlus } from 'react-icons/fa';
import { GoFileSubmodule } from "react-icons/go";
import { MdDelete } from 'react-icons/md';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { deleteModule, getModules } from '@/lib/services/moduleApiCalls';
import { mod_modules } from '@/lib/types/mod_modules';
import { toaster } from '@/components/ui/toaster';

const Modules = () => {
    const queryClient = useQueryClient();
    const router = useRouter();

    const { data: modules, isLoading } = useQuery<mod_modules[]>({
        queryKey: ['modules'],
        queryFn: getModules,
    });

    const { mutate: handleModuleDelete } = useMutation({
        mutationFn: deleteModule,
        onSuccess: () => {
            toaster.create({
                title: "Role is deleted successfully",
                duration: 3000,
                type: "success",
            });
            queryClient.invalidateQueries({ queryKey: ['modules'] });
        },
    });

    const handleEditModule = (id: string) => {
        router.push(`/settings/modules/edit/${id}`);
    };

    return (
        <Layout>
            <Box boxShadow={"var(--box-shadowMain)"} bgColor={"#fff"} borderRadius={"10px"}>
                <HStack p={"15px"} justifyContent="space-between" alignItems={"center"}>
                    <Flex alignItems={"center"} gap={"10px"}>
                        <FaFingerprint color='var(--theme-color)' size={26} />
                        <Text fontSize={"24px"} color='var(--theme-color)' fontWeight={600}>Modules</Text>
                    </Flex>
                    <Flex alignItems={"center"} gap={"20px"}>
                        <Checkbox.Root colorPalette={"purple"}>
                            <Checkbox.HiddenInput />
                            <Checkbox.Control />
                            <Checkbox.Label>Select All</Checkbox.Label>
                        </Checkbox.Root>
                        <Link href='/settings/modules/create' bgColor={"var(--theme-color)"} textDecor={"none"} color={"#fff"} p="10px" borderRadius={"8px"} as={NextLink}><FaPlus color='#fff' /> Create Module</Link>
                    </Flex>
                </HStack>
            </Box>
            {isLoading ? (
                <Flex justifyContent={"center"} mt="20px"><Spinner size='lg' color="var(--theme-color)" /></Flex>
            ) : (
                modules?.map((module, index) => {
                    return (
                        <Box key={index} p="15px" mt="15px" boxShadow="var(--box-shadowMain)" bgColor="#fff" borderRadius="10px">
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
                                        <GoFileSubmodule size={24} color="var(--theme-color)" />
                                        <Text fontSize="14px" fontWeight={500} color="#000">
                                            {module?.name}
                                        </Text>
                                    </Box>
                                    <Flex gap="10px" alignItems="center">
                                        <FaEdit size={22} color="var(--theme-color)" cursor="pointer" onClick={() => handleEditModule(module._id)} />
                                        <MdDelete size={22} color="red" cursor="pointer" onClick={() => handleModuleDelete(module._id)} />
                                    </Flex>
                                </Flex>
                            </HStack>
                        </Box>
                    )
                })
            )}
        </Layout>
    )
}

export default Modules;