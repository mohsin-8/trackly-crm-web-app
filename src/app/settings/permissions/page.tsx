"use client";
import React from 'react';
import NextLink from "next/link";
import Layout from '@/components/Layout/Layout';
import { Box, Checkbox, Flex, HStack, Link, Text } from '@chakra-ui/react';
import { FaEdit, FaFingerprint, FaPlus, FaUserShield } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toaster } from '@/components/ui/toaster';
import { permissions } from '@/lib/types/permissions';
import { getAllPermissions } from '@/lib/services/permissionApiCalls';

const Permissions = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { data: permission, isLoading } = useQuery<permissions[]>({
    queryKey: ['permissions'],
    queryFn: getAllPermissions,
  });
  console.log(permission);
  // const { mutate: handleModuleDelete } = useMutation({
  //   mutationFn: deleteModule,
  //   onSuccess: () => {
  //     toaster.create({
  //       title: "Role is deleted successfully",
  //       duration: 3000,
  //       type: "success",
  //     });
  //     queryClient.invalidateQueries({ queryKey: ['modules'] });
  //   },
  // });

  const handleEditModule = (id: string) => {
    router.push(`/settings/modules/edit/${id}`);
  };

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
            <Link href='/settings/permissions/create' bgColor={"var(--theme-color)"} textDecor={"none"} color={"#fff"} p="10px" borderRadius={"8px"} as={NextLink}><FaPlus color='#fff' /> Create Permission</Link>
          </Flex>
        </HStack>
      </Box>
      {isLoading ? (
        <Text mt="20px">Loading permissions...</Text>
      ) : (
        permission?.map((data, index) => {
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
                    <FaUserShield size={24} color="var(--theme-color)" />
                    <Text fontSize="14px" fontWeight={500} color="#000">
                      {data.name}
                    </Text>
                  </Box>
                  <Box display="flex" gap="10px" alignItems="center">
                    <FaUserShield size={24} color="var(--theme-color)" />
                    <Text fontSize="14px" fontWeight={500} color="#000">
                      {data.description}
                    </Text>
                  </Box>
                  <Flex gap="10px" alignItems="center">
                    <FaEdit size={22} color="var(--theme-color)" cursor="pointer" />
                    <MdDelete size={22} color="red" cursor="pointer" />
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

export default Permissions;