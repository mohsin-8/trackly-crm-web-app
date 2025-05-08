"use client";
import React, { useState, useEffect } from 'react';
import { Box, Button, Field, Flex, Grid, GridItem, Input, Text } from '@chakra-ui/react';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import { permissions, receivePermissionData } from '@/lib/types/permissions';
import { useRouter } from 'next/navigation';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getPermissionById, updatePermissions } from '@/lib/services/permissionApiCalls';
import { toaster } from '../ui/toaster';
import { getModules } from '@/lib/services/moduleApiCalls';
import { mod_modules } from '@/lib/types/mod_modules';

const EditPermissionComp = ({ id }: { id?: string | null }) => {
    const [permissionData, setPermissionData] = useState<receivePermissionData>({ module_id: "", name: "", description: "" });

    const router = useRouter();
    const queryClient = useQueryClient();

    const { data: modules } = useQuery<mod_modules[]>({
        queryKey: ['modules'],
        queryFn: getModules,
    });
    console.log(modules)
    const { data: permission, isLoading } = useQuery<permissions>({
        queryKey: ['permissions', id],
        enabled: !!id,
        queryFn: () => getPermissionById(id as string),
    });

    useEffect(() => {
        if (permission) {
            setPermissionData({
                module_id: permission.module_id || "",
                name: permission.name || "",
                description: permission.description || ""
            });
        }
    }, [permission]);

    const { mutate: handleEditPermission, isPending: isUpdating } = useMutation({
        mutationFn: ({ id, data }: { id: string; data: receivePermissionData }) => updatePermissions(id, data),
        onSuccess: () => {
            toaster.create({
                title: "Permission is updated successfully",
                duration: 3000,
                type: "success",
            });
            queryClient.invalidateQueries({ queryKey: ['permissions'] });
            router.push("/settings/permissions");
        }
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!permissionData.module_id || !permissionData.name || !permissionData.description) {
            toaster.create({ type: "error", title: "All fields are required!" });
            return;
        }

        if (id) {
            handleEditPermission({ id, data: permissionData });
        } else {
            toaster.create({ type: "error", title: "Create functionality is not implemented yet!" });
        }
    };

    return (
        <Box boxShadow={"var(--box-shadowMain)"} borderRadius={"8px"} overflow={"hidden"} bgColor={"#fff"}>
            <Box p={"10px 15px"} bgColor="var(--theme-color)">
                <Text as={"h3"} fontSize={"20px"} fontWeight={"500"} color={"#fff"}>{id ? "Edit Permission" : "Create Permission"}</Text>
            </Box>

            <Box p={"20px"}>
                <form onSubmit={handleSubmit}>
                    <Grid templateColumns="repeat(3, 1fr)" gap="6">
                        <GridItem>
                            <Field.Root>
                                <Field.Label>Module Id# *</Field.Label>
                                {/* <Select.Root
                                    collection={module_data || []}
                                    w="100%"
                                >
                                    <Select.Control>
                                        <Select.Trigger p="10px">
                                            <Select.ValueText placeholder="Select framework" />
                                        </Select.Trigger>
                                        <Select.IndicatorGroup>
                                            <Select.Indicator />
                                        </Select.IndicatorGroup>
                                    </Select.Control>
                                    <Portal>
                                        <Select.Positioner>
                                            <Select.Content p="10px">
                                                {modules?.map((data, index) => {
                                                    return (
                                                        <Select.Item key={index} p="10px" cursor={"pointer"} item={data}>
                                                            {data.name}
                                                            <Select.ItemIndicator />
                                                        </Select.Item>
                                                    )
                                                })}
                                            </Select.Content>
                                        </Select.Positioner>
                                    </Portal>
                                </Select.Root> */}
                            </Field.Root>
                        </GridItem>
                        <GridItem>
                            <Field.Root>
                                <Field.Label>Permission Name *</Field.Label>
                                <Input
                                    placeholder="Permission Name *"
                                    type="text"
                                    outline="none"
                                    p="10px"
                                    h="40px"
                                    w="100%"
                                    border="1px solid var(--theme-color)"
                                    value={permissionData.name}
                                    onChange={(e) => setPermissionData({ ...permissionData, name: e.target.value })}
                                />
                            </Field.Root>
                        </GridItem>
                        <GridItem>
                            <Field.Root>
                                <Field.Label>Permission Description *</Field.Label>
                                <Input
                                    placeholder="Permission Description *"
                                    type="text"
                                    outline="none"
                                    w="100%"
                                    p="10px"
                                    h="40px"
                                    border="1px solid var(--theme-color)"
                                    value={permissionData.description}
                                    onChange={(e) => setPermissionData({ ...permissionData, description: e.target.value })}
                                />
                            </Field.Root>
                        </GridItem>
                    </Grid>

                    <Flex justifyContent={"flex-end"} mt={4}>
                        <Button loading={isUpdating} type='submit' color={"#fff"} p="10px 15px" bgColor={"var(--theme-color)"}>
                            {id ? "Edit Permission" : "Create Permission"} <MdOutlineDoubleArrow size={20} color='#fff' />
                        </Button>
                    </Flex>
                </form>
            </Box>
        </Box>
    )
}

export default EditPermissionComp;