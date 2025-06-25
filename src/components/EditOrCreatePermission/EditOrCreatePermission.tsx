"use client";
import React, { useEffect, useState } from 'react';
import { Box, Button, Field, Flex, Input, Spinner, Text } from '@chakra-ui/react';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { getPermissionById } from '@/lib/services/permissionsApiCalls';

const EditOrCreatePermission = ({ id }: { id?: string | null }) => {
    const [moduleName, setModuleName] = useState<string>("");
    const queryClient = useQueryClient();
    const router = useRouter();

    const { data: permission, isLoading } = useQuery({
        queryKey: ['permissions', id],
        enabled: !!id,
        queryFn: () => getPermissionById(id as string),
    });

    return (
        <Box boxShadow={"var(--box-shadowMain)"} borderRadius={"8px"} overflow={"hidden"} bgColor={"#fff"}>
            <Box p={"10px 15px"} bgColor="var(--theme-color)">
                <Text as={"h3"} fontSize={"20px"} fontWeight={"500"} color={"#fff"}>{id ? "Edit Permission" : "Create Permission"}</Text>
            </Box>

            <Box p={"20px"}>
                <form>
                    <Field.Root>
                        <Field.Label>Permission Name *</Field.Label>
                        <Input
                            placeholder="Enter your Permission Name *"
                            type='text'
                            outline={"none"}
                            w={"50%"}
                            p="10px"
                            h="40px"
                            border={"1px solid var(--theme-color)"}
                        />
                    </Field.Root>

                    <Flex justifyContent={"flex-end"} mt={4}>
                        <Button type='submit' color={"#fff"} p="10px 15px" bgColor={"var(--theme-color)"}>
                            Create Permission <MdOutlineDoubleArrow size={20} color='#fff' />
                        </Button>
                    </Flex>
                </form>
            </Box>
        </Box>
    )
};

export default EditOrCreatePermission;