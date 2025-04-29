import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';

const Layout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <>
            <Header />
            <Flex>
                <Sidebar />
                <Box p="4" minH="100vh" w="calc(100% - 250px)">
                    {children}
                </Box>
            </Flex>
        </>
    );
};

export default Layout;