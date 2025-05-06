"use client";
import React from 'react';
import { Box, Button, Field, Flex, Input, Text } from '@chakra-ui/react';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Role } from '@/lib/types/roles';
import { getRolesById, updateRole } from '@/lib/services/rolesApiCalls';
import { toaster } from '../ui/toaster';

const CreateRoleComp = ({ id }: { id?: string | null }) => {
    const queryClient = useQueryClient();
    const { data: roles, isLoading } = useQuery<Role>({
        queryKey: ['roles', id],
        queryFn: () => getRolesById(id ?? null),
        enabled: !!id,
    });
    
    return (
        <Box boxShadow={"var(--box-shadowMain)"} borderRadius={"8px"} overflow={"hidden"} bgColor={"#fff"}>
            <Box p={"10px 15px"} bgColor="var(--theme-color)">
                <Text as={"h3"} fontSize={"20px"} fontWeight={"500"} color={"#fff"}>Create Role</Text>
            </Box>
            <Box p={"20px"}>
                <form>
                    <Field.Root>
                        <Field.Label>Role Name *</Field.Label>
                        <Input placeholder="Enter your Role Name *" value={roles?.name} outline={"none"} w={"50%"} p="10px" h="40px" border={"1px solid var(--theme-color)"} />
                        {/* <Field.ErrorText>This field is required</Field.ErrorText> */}
                    </Field.Root>

                    <Flex justifyContent={"flex-end"}>
                        <Button type='submit' color={"#fff"} outline={"none"} p="10px 15px" bgColor={"var(--theme-color)"}>Permission <MdOutlineDoubleArrow size={20} color='#fff' /></Button>
                    </Flex>
                </form>
            </Box>
        </Box>
    )
}

export default CreateRoleComp;