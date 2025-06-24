"use client";
import React from 'react';
import NextLink from "next/link";
import { Box, Checkbox, Flex, HStack, Link, Spinner, Table, Text } from '@chakra-ui/react';
import { FaFingerprint, FaPlus } from 'react-icons/fa';
import Layout from '@/components/Layout/Layout';
import { MdDelete } from 'react-icons/md';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Permission } from '@/lib/types/permissions';
import { getPermissions } from '@/lib/services/permissionsApiCalls';

const Permissions = () => {
  const queryClient = useQueryClient();

  const { data: permission, isLoading } = useQuery<Permission[]>({
    queryKey: ['permissions'],
    queryFn: getPermissions,
  });

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
      <Table.Root mt="15px" boxShadow="var(--box-shadowMain)" size="lg" borderRadius={"10px"} overflow={"hidden"}>
        <Table.Header>
          <Table.Row bgColor={"var(--theme-color)"}>
            <Table.ColumnHeader p={"15px"} color={"#fff"}>No#</Table.ColumnHeader>
            <Table.ColumnHeader p={"15px"} color={"#fff"}>Permissions</Table.ColumnHeader>
            <Table.ColumnHeader p={"15px"} color={"#fff"}>Modules</Table.ColumnHeader>
            <Table.ColumnHeader p={"15px"} color={"#fff"}>Actions</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        {/* Correct the structure here */}
        <Table.Body>
          {isLoading ? (
            <Table.Row>
              <Table.Cell colSpan={4}>
                <Flex justifyContent="center" alignItems="center" p={4}>
                  <Spinner size='lg' color="var(--theme-color)" />
                </Flex>
              </Table.Cell>
            </Table.Row>
          ) : (
            permission?.map((data, index) => (
              <Table.Row key={index}>
                <Table.Cell p={"15px"}>{index + 1}</Table.Cell>
                <Table.Cell p={"15px"}>{data?.description}</Table.Cell>
                <Table.Cell p={"15px"}>{typeof data.module_id === "object" ? data.module_id.name : "-"}</Table.Cell>
                <Table.Cell p={"15px"}>
                  <MdDelete size={22} color="red" cursor="pointer" />
                </Table.Cell>
              </Table.Row>
            ))
          )}
        </Table.Body>
      </Table.Root>
    </Layout>
  )
}

export default Permissions;