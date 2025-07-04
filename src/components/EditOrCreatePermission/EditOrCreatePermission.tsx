import React from 'react';
import { Box, Button, Field, Flex, Input, Spinner, Text } from '@chakra-ui/react';
import { MdOutlineDoubleArrow } from 'react-icons/md';

const EditOrCreatePermission = () => {
    return (
        <Box boxShadow={"var(--box-shadowMain)"} borderRadius={"8px"} overflow={"hidden"} bgColor={"#fff"}>
            <Box p={"10px 15px"} bgColor="var(--theme-color)">
                <Text as={"h3"} fontSize={"20px"} fontWeight={"500"} color={"#fff"}>Create Module</Text>
            </Box>

            <Box p={"20px"}>
                <form>
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
                        />
                    </Field.Root>

                    <Flex justifyContent={"flex-end"} mt={4}>
                        <Button type='submit' color={"#fff"} p="10px 15px" bgColor={"var(--theme-color)"}>
                            Create Module <MdOutlineDoubleArrow size={20} color='#fff' />
                        </Button>
                    </Flex>
                </form>
            </Box>
        </Box>
    )
}

export default EditOrCreatePermission;