"use client";
import { createModule, getModuleById, updateModule } from '@/lib/services/moduleApiCalls';
import { mod_modules } from '@/lib/types/mod_modules';
import { Box, Button, Field, Flex, Input, Text } from '@chakra-ui/react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import { toaster } from '../ui/toaster';
import { useRouter } from 'next/navigation';

const CreateModuleComp = ({ id }: { id?: string | null }) => {
    const [moduleName, setModuleName] = useState<string>("");
    const queryClient = useQueryClient();
    const router = useRouter();

    const { data: module } = useQuery<mod_modules>({
        queryKey: ['modules', id],
        enabled: !!id,
        queryFn: () => getModuleById(id as string),
    });

    useEffect(() => {
        setModuleName(module?.name || "");
    }, [module]);

    const { mutate: handleModuleSubmit, isPending: isUpdating } = useMutation({
        mutationFn: ({ id, name }: { id: string; name: string }) => updateModule(id, name),
        onSuccess: () => {
            toaster.create({
                title: "Module is updated successfully",
                duration: 3000,
                type: "success",
            });
            queryClient.invalidateQueries({ queryKey: ['modules'] });
            router.push("/settings/modules");
        },
    });

    const { mutate: createModuleMutate, isPending: isCreating } = useMutation({
        mutationFn: (name: string) => createModule(name),
        onSuccess: () => {
            toaster.create({
                title: "Module is created successfully",
                duration: 3000,
                type: "success",
            });
            queryClient.invalidateQueries({ queryKey: ['modules'] });
            router.push('/settings/modules');
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!moduleName.trim()) {
            toaster.create({ type: "error", title: "Module name is required!" });
            return;
        }

        if (id) {
            handleModuleSubmit({ id, name: moduleName });
        } else {
            createModuleMutate(moduleName);
        }
    };

    return (
        <Box boxShadow={"var(--box-shadowMain)"} borderRadius={"8px"} overflow={"hidden"} bgColor={"#fff"}>
            <Box p={"10px 15px"} bgColor="var(--theme-color)">
                <Text as={"h3"} fontSize={"20px"} fontWeight={"500"} color={"#fff"}>{id ? "Edit Module" : "Create Module"}</Text>
            </Box>
            <Box p={"20px"}>
                <form onSubmit={handleSubmit}>
                    <Field.Root>
                        <Field.Label>Module Name *</Field.Label>
                        <Input
                            placeholder="Enter your Module Name *"
                            type='text'
                            outline={"none"}
                            w={"50%"}
                            p="10px"
                            h="40px"
                            border={"1px solid var(--theme-color)"}
                            value={moduleName}
                            onChange={(e) => setModuleName(e.target.value)}
                        />
                    </Field.Root>

                    <Flex justifyContent={"flex-end"} mt={4}>
                        <Button loading={isUpdating || isCreating} type='submit' color={"#fff"} p="10px 15px" bgColor={"var(--theme-color)"}>
                            {id ? "Edit Module" : "Create Module"} <MdOutlineDoubleArrow size={20} color='#fff' />
                        </Button>
                    </Flex>
                </form>
            </Box>
        </Box>
    )
}

export default CreateModuleComp;