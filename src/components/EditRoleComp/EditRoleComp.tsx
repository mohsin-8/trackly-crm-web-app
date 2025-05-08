"use client";
import React, { useState, useEffect } from 'react';
import { Box, Button, Flex, Input, Text, Field } from '@chakra-ui/react';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Role } from '@/lib/types/roles';
import { createRole, getRolesById, updateRole } from '@/lib/services/rolesApiCalls';
import { toaster } from '../ui/toaster';
import { useRouter } from 'next/navigation';

const EditRoleComp = ({ id }: { id?: string | null }) => {
    const [roleName, setRoleName] = useState<string>("");
    const queryClient = useQueryClient();
    const router = useRouter();

    const { data: roles } = useQuery<Role>({
        queryKey: ['roles', id],
        enabled: !!id,
        queryFn: () => getRolesById(id as string),
    });

    useEffect(() => {
        setRoleName(roles?.name || "");
    }, [roles]);

    const { mutate: handleRoleSubmit, isPending: isUpdating } = useMutation({
        mutationFn: ({ id, name }: { id: string; name: string }) => updateRole(id, name),
        onSuccess: () => {
            toaster.create({
                title: "Role is updated successfully",
                duration: 3000,
                type: "success",
            });
            queryClient.invalidateQueries({ queryKey: ['roles'] });
            router.push("/settings/roles");
        },
    });

    const { mutate: createRoleMutate, isPending: isCreating } = useMutation({
        mutationFn: (name: string) => createRole(name),
        onSuccess: () => {
            toaster.create({
                title: "Role is created successfully",
                duration: 3000,
                type: "success",
            });
            queryClient.invalidateQueries({ queryKey: ['roles'] });
            router.push('/settings/roles');
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!roleName.trim()) {
            toaster.create({ type: "error", title: "Role name is required!" });
            return;
        }

        if (id) {
            handleRoleSubmit({ id, name: roleName });
        } else {
            createRoleMutate(roleName);
        }
    };

    return (
        <Box boxShadow={"var(--box-shadowMain)"} borderRadius={"8px"} overflow={"hidden"} bgColor={"#fff"}>
            <Box p={"10px 15px"} bgColor="var(--theme-color)">
                <Text as={"h3"} fontSize={"20px"} fontWeight={"500"} color={"#fff"}>{id ? "Edit Role" : "Create Role"}</Text>
            </Box>
            <Box p={"20px"}>
                <form onSubmit={handleSubmit}>
                    <Field.Root>
                        <Field.Label>Role Name *</Field.Label>
                        <Input
                            placeholder="Enter your Role Name *"
                            type='text'
                            outline={"none"}
                            w={"50%"}
                            p="10px"
                            h="40px"
                            border={"1px solid var(--theme-color)"}
                            value={roleName}
                            onChange={(e) => setRoleName(e.target.value)}
                        />
                    </Field.Root>

                    <Flex justifyContent={"flex-end"} mt={4}>
                        <Button type='submit' color={"#fff"} p="10px 15px" bgColor={"var(--theme-color)"}>
                            {id ? "Edit Role" : "Create Role"} <MdOutlineDoubleArrow size={20} color='#fff' />
                        </Button>
                    </Flex>
                </form>
            </Box>
        </Box>
    );
};

export default EditRoleComp;