"use client";
import React from 'react';
import NextLink from "next/link";
import { Box, Checkbox, Flex, HStack, Link, Spinner, Text } from '@chakra-ui/react';
import { FaEdit, FaFingerprint, FaPlus } from 'react-icons/fa';
import Layout from '@/components/Layout/Layout';
import { GoFileSubmodule } from 'react-icons/go';
import { MdDelete } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Permission } from '@/lib/types/permissions';
import { getPermissions } from '@/lib/services/permissionsApiCalls';

const Permissions = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { data: permission, isLoading } = useQuery<Permission[]>({
    queryKey: ['permissions'],
    queryFn: getPermissions,
  });

  const handleEditPermission = (id: string) => {
    router.push(`/settings/permissions/edit/${id}`);
  };
  console.log(permission);
  return (
    <Layout>
      <Box boxShadow={"var(--box-shadowMain)"} bgColor={"#fff"} borderRadius={"10px"}>
        <HStack p={"15px"} justifyContent="space-between" alignItems={"center"}>
          <Flex alignItems={"center"} gap={"10px"}>
            <FaFingerprint color='var(--theme-color)' size={26} />
            <Text fontSize={"24px"} color='var(--theme-color)' fontWeight={600}>Permissions</Text>
          </Flex>
          <Flex alignItems={"center"} gap={"20px"}>
            <Checkbox.Root colorPalette={"purple"}>
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>Select All</Checkbox.Label>
            </Checkbox.Root>
            <Link href='/settings/modules/create' bgColor={"var(--theme-color)"} textDecor={"none"} color={"#fff"} p="10px" borderRadius={"8px"} as={NextLink}><FaPlus color='#fff' /> Create Permission</Link>
          </Flex>
        </HStack>
      </Box>
      {permission?.map((data, index) => {
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
                <Flex alignItems={"center"}  gap={"50px"}>
                  <Box display="flex" gap="10px" alignItems="center">
                    <GoFileSubmodule size={24} color="var(--theme-color)" />
                    <Text fontSize="14px" fontWeight={500} color="#000">
                      {data?.description}
                    </Text>
                  </Box>
                  <Box display="flex" gap="10px" alignItems="center">
                    <GoFileSubmodule size={24} color="var(--theme-color)" />
                    <Text fontSize="14px" fontWeight={500} color="#000">
                      {typeof data.module_id === "object" ? data.module_id.name : "-"}
                    </Text>
                  </Box>
                </Flex>
                <Flex gap="10px" alignItems="center">
                  <FaEdit size={22} color="var(--theme-color)" cursor="pointer" />
                  <MdDelete size={22} color="red" cursor="pointer" />
                </Flex>
              </Flex>
            </HStack>
          </Box>
        )
      })}
    </Layout>
  )
}

export default Permissions;